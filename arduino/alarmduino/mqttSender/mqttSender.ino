#include <SPI.h>
#include <Ethernet.h>
#include <PubSubClient.h>


#define SIREN_IN 4
#define ONOFF_SIGNAL 700

#define DEBUG 0

#define ALARM_OFF 100
#define ALARM_ARMED 30
#define ALARM_FIRED 5
#define REARM_AFTER_FIRED 10

#define INTERVAL 1000

unsigned long state = ALARM_OFF;

unsigned long prevMilis = 0;

byte mac[]    = {0xDE, 0xFE, 0xAB, 0xEE, 0xFE, 0xDE };
char macstr[] = "defeabeefede";
byte ip[]     = {192, 168, 62, 177 };

char servername[] = "iot.eclipse.org";
String clientName = String("d:quickstart:arduino:") + macstr;
String topicName = String("home/zij/alarm");

EthernetClient ethClient;

PubSubClient client(servername, 1883, 0, ethClient);

void setup()
{
  pinMode(SIREN_IN, INPUT_PULLUP);

  Ethernet.begin(mac, ip);
  if (DEBUG == 1) {
    Serial.begin(9600);
  }

  attachInterrupt(0, sirenInterupt, FALLING);
}

void loop()
{
  if (DEBUG == 1) {
    Serial.print("Actual State = ");
    Serial.println(state);
  }

  getState();
  unsigned long currMilis = millis();
  if(currMilis >= prevMilis) {
    if(currMilis - prevMilis > INTERVAL * state) {
      sendData(buildJson());
      prevMilis = millis();
    }
  } else {
    prevMilis = currMilis;
    sendData(buildJson());
  }
}

String buildJson() {
  String data = "{";
  data += "\n";
  data += "\"alarm\": {";
  data += "\n";
  data += "\"state\": \"";
  data += state;
  data += "\",";
  data += "\n\"timestamp\": \"";
  data += millis();
  data += "\",";
  data += "\n";
  data += "\n";
  data += "}";
  data += "\n";
  data += "}";
  return data;
}

void getState() {
 
  switch (digitalRead(SIREN_IN)) {
    case HIGH:
      if(state == ALARM_OFF) {
        delay(ONOFF_SIGNAL);
        if (digitalRead(SIREN_IN) == LOW) {
          state = ALARM_ARMED;
        } else {
          state = ALARM_FIRED;
        }
      } else if(state == ALARM_ARMED || state == REARM_AFTER_FIRED) {
        delay(ONOFF_SIGNAL);
        if (digitalRead(SIREN_IN) == LOW) {
          state = ALARM_OFF;
        } else {
          state = ALARM_FIRED;
        }
      }
      break;
    case LOW:
      if(state == ALARM_FIRED) {
        state = REARM_AFTER_FIRED;
      }
      break;
  }
}

void sendData(String json) {
  char clientStr[34];
  clientName.toCharArray(clientStr, 34);
  char topicStr[26];
  topicName.toCharArray(topicStr, 26);
  
  if (!client.connected()) {
    if (DEBUG == 1) {
      Serial.print("Trying to connect to: ");
      Serial.println(clientStr);
    }
    client.connect(clientStr);
  }
  
  if (client.connected() && json != "") {
    char jsonStr[200];
    json.toCharArray(jsonStr, 200);
    boolean pubresult = client.publish(topicStr, jsonStr, true);
    if (DEBUG == 1) {
      Serial.print("attempt to send ");
      Serial.println(jsonStr);
      Serial.print("to ");
      Serial.println(topicStr);
      if (pubresult)
        Serial.println("successfully sent");
      else
        Serial.println("unsuccessfully sent");
    }
  }
}

