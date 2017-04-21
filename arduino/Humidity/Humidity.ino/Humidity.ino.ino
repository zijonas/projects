#include <dht.h>
dht DHT;
#define DHT11_PIN 7
#define LIGHT 5

void setup() {
  Serial.begin(9600);
  pinMode(DHT11_PIN, INPUT_PULLUP);
  pinMode(LIGHT, INPUT_PULLUP);
}

void loop() {
  int res = DHT.read11(DHT11_PIN);
  Serial.print(" TEMP = ");
  Serial.print(DHT.temperature);
  Serial.print(" -> HUMI = ");
  Serial.print(DHT.humidity);
  Serial.print(" -> LUMI = ");
  Serial.print(analogRead(LIGHT));
  Serial.print("\n");
  
  delay(1000);
}
