//Other definitions
#define MAX_LONG 0xFFFFF000 //4096 to secure that the time will not reset on the stop or start

//Status definitions
#define SIREN_OFF 0x20
#define SIREN_ON 0x21
#define SENSOR_ACTIVATED 0x11
#define SENSOR_DEACTIVATED 0x10
#define ALARM_FIRED 5
#define ALARM_ON 30
#define ALARM_OFF 100

#define SENSOR 2

//System
#define AMOUNT_SIRENES 1
#define RING_TIME 180000
#define TRUE 1
#define FALSE 0
#define DEBUG 1

int sirenes[AMOUNT_SIRENES] = {SIREN};
int sirenesMode[AMOUNT_SIRENES] = {OUTPUT};

int systemStatus = ALARM_OFF;

void setup() {
  int i;

  for (i = 0; i < AMOUNT_SIRENES; i++) {
    pinMode(sirenes[i], sirenesMode[i]);
    turnSirenes(LOW);
  }
}



void loop() {
	int i;
}

void turnSirenes(int mode) {
	int i;
	if(DEBUG == TRUE) {
		Serial.write("Set status " + mode + " for sirenes = " + AMOUNT_SIRENES + ' ' + millis());
	}

	for (i = 0; i < AMOUNT_SIRENES) {
		digitalWrite(sirenes[i], mode);
	}

}
