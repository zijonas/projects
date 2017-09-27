#include <SPI.h>
#include <Ethernet.h>
#include <PubSubClient.h>


#define SIREN_IN 4
#define ONOFF_SIGNAL 2000
#define ALIVE 600000

#define DEBUG 0

#define ALARM_OFF 0
#define ALARM_ARMED 1
#define ALARM_FIRED 2
#define REARM_AFTER_FIRED 10

int state = ALARM_OFF;

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
}

void loop()
{
  getData();
  
  if (DEBUG == 1) {
    Serial.print("NewState = ");
    Serial.println(newState);
  }
  
  if (state == 1) {
    sendData(buildJson());
  }

  if(newState != 1) {
    unsigned long currMilis = millis();
    if(currMilis > prevMilis) {
      if(currMilis - prevMilis > ALIVE) {
        newState = 5;
        prevMilis = currMilis;
      }
    } else {
      newState = 5;
      prevMilis = currMilis;
    }
  }


  delay(300);
}

String buildJson() {
  String data = "{";
  data += "\n";
  data += "\"alarm\": {";
  data += "\n";
  data += "\"state\": \"";
  data += state;
  data += "\",";
  data += "\n";
  data += "}";
  data += "\n";
  data += "}";
  return data;
}

void getState() {
 
  switch (digitalRead(SIREN_IN)) {
    case HIGH:
      delay(ONOFF_SIGNAL);
      if (digitalRead(SIREN_IN) == HIGH)
        state = ALARM_FIRED;
      break;
    case LOW:
      if(state == 2)
        state = REARM_AFTER_FIRED;
      else
	state = ALARM_OFF;
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
    boolean pubresult = client.publish(topicStr, jsonStr);
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







