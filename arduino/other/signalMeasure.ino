#define PIN 4

int time1 = -1;
int time2 = -1;
int time3 = -1;
int time4 = -1;

void setup () {
		pinMode(PIN, INPUT_PULLUP);

}

void loop() {
		if(digitalRead(PIN) == HIGH) {
				if(time1 < 0)
						time1 = millis();
				else if (time2 > 0) {
						time3 = millis();
				}
		} else {
				if(time1 > 0 && time2 < 0) {
						time2 = millis();
				} else if (time3 > 0 && time4 < 0) {
						time4 = millis();
				}
		}
}
