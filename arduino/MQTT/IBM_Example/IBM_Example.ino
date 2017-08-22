/*
  MQTT IOT Example
  - continuously obtains values from the Virtuabotix DHT11 temperature/humidity sensor
  - formats the results as a JSON string for the IBM IOT example
  - connects to an MQTT server (either local or at the IBM IOT Cloud)
  - and publishes the JSON String to the topic named quickstart:MY_MAC_ADDRESS
*/

#include <SPI.h>
#include <Ethernet.h>
#include <PubSubClient.h>


int schalter = 4;

int message = 0;


// Update this to either the MAC address found on the sticker on your ethernet shield (newer shields)
// or a different random hexadecimal value (change at least the last four bytes)
byte mac[]    = {0xDE, 0xAD, 0xBE, 0xEF, 0xFE, 0xED };
char macstr[] = "deedbafefeed";
// Note this next value is only used if you intend to test against a local MQTT server
// byte localserver[] = {192, 168, 1, 98 };
// Update this value to an appropriate open IP on your local network
byte ip[]     = {192, 168, 62, 177 };

char servername[] = "iot.eclipse.org";
String clientName = String("d:quickstart:arduino:") + macstr;
//String topicName = String("z1j/home/alarmduino/json");
String topicName = String("home/zij/alarm");

EthernetClient ethClient;

// Uncomment this next line and comment out the line after it to test against a local MQTT server
//PubSubClient client(localserver, 1883, 0, ethClient);
PubSubClient client(servername, 1883, 0, ethClient);

void setup()
{
  pinMode(schalter, INPUT_PULLUP);

  // Start the ethernet client, open up serial port for debugging, and attach the DHT11 sensor
  Ethernet.begin(mac, ip);
  Serial.begin(9600);

}

void loop()
{
  char clientStr[34];
  clientName.toCharArray(clientStr, 34);
  char topicStr[26];
  topicName.toCharArray(topicStr, 26);
  getData();
  if (!client.connected()) {
    Serial.print("Trying to connect to: ");
    Serial.println(clientStr);
    client.connect(clientStr);
  }
  if (client.connected() ) {
    String json = buildJson();
    char jsonStr[200];
    json.toCharArray(jsonStr, 200);
    boolean pubresult = client.publish(topicStr, jsonStr);
    Serial.print("attempt to send ");
    Serial.println(jsonStr);
    Serial.print("to ");
    Serial.println(topicStr);
    if (pubresult)
      Serial.println("successfully sent");
    else
      Serial.println("unsuccessfully sent");
  }
  delay(3000);
}

String buildJson() {
  String data = "{";
  data += "\n";
  data += "\"alarm\": {";
  data += "\n";
  data += "\"state\": \"";
  data += message;
  data += "\",";
  data += "\n";
  data += "}";
  data += "\n";
  data += "}";
  return data;
}

void getData() {
  switch (digitalRead(schalter))
  {
    case LOW:
      Serial.println("Read OK = 1");
      message = 1;
      break;
    case HIGH:
      Serial.println("Read OK = 0");
      message = 0;
      break;
  }
}






