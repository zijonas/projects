#include <ESP8266WiFi.h>
#include <PubSubClient.h>

char macstr[] = "defeabeefede";
char servername[] = "iot.eclipse.org";
String clientName = String("d:quickstart:arduino:") + macstr;
String topicName = String("home/zij/alarm");

#define USE_SERIAL Serial
#define DEBUG 1

WiFiClient cliente;

PubSubClient client(servername, 1883, 0, cliente);

void setup() {

    USE_SERIAL.begin(115200);
   // USE_SERIAL.setDebugOutput(true);

    USE_SERIAL.println();
    USE_SERIAL.println();
    USE_SERIAL.println();

    for(uint8_t t = 4; t > 0; t--) {
        USE_SERIAL.printf("[SETUP] WAIT %d...\n", t);
        USE_SERIAL.flush();
        delay(1000);
    }

    WiFi.begin("bei_jonas", "passwort");

    while (WiFi.status() != WL_CONNECTED) {
      delay(500);
      Serial.print(".");
    }

    Serial.println("");
    Serial.println("WiFi connected");  
    Serial.println("IP address: ");
    Serial.println(WiFi.localIP());

}

void loop() {
    // wait for WiFi connection
    String json = "JONSA";
    char clientStr[34];
    clientName.toCharArray(clientStr, 34);
    char topicStr[26];
    topicName.toCharArray(topicStr, 26);
    
    if (!client.connected()) {
      if (DEBUG == 1) {
        USE_SERIAL.print("Trying to connect to: ");
        USE_SERIAL.println(clientStr);
      }
      client.connect(clientStr);
    }
    
    if (client.connected() && json != "") {
      char jsonStr[200];
      json.toCharArray(jsonStr, 200);
      boolean pubresult = client.publish(topicStr, jsonStr, true);
      if (DEBUG == 1) {
        USE_SERIAL.print("attempt to send ");
        USE_SERIAL.println(jsonStr);
        USE_SERIAL.print("to ");
        USE_SERIAL.println(topicStr);
        if (pubresult)
          USE_SERIAL.println("successfully sent");
        else
          USE_SERIAL.println("unsuccessfully sent");
      }
    }

    delay(10000);
}

