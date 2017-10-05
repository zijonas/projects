#include <SPI.h>

#define PIN 4

void setup () {
	pinMode(PIN, INPUT_PULLUP);
  Serial.begin(9600);
}

void loop() {
		if(digitalRead(PIN) == HIGH) {
      Serial.println(millis());
		}
    if(digitalRead(PIN) == LOW) {
      Serial.println("LOW");
		}
}
