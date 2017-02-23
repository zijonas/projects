//Other definitions
#define MAX_LONG 0xFFFFF000 //4096 to secure that the time will not reset on the stop or start

//Status definitions
#define SIREN_OFF 0x20
#define SIREN_ON 0x21
#define SENSOR_ACTIVATED 0x11
#define SENSOR_DEACTIVATED 0x10
#define ALARM_FIRED 0XFF
#define ALARM_ON 0x1
#define ALARM_OFF 0x0

//Pin definitions
#define S_KITCHEN 11
#define S_LIVING_ROOM 12
#define S_SLEEPING_ROOM 13
#define S_SHOP 14
#define SIREN 15

//System
#define AMOUNT_SENSORS 5
#define AMOUNT_SIRENES 1
#define RING_TIME 180000
#define READ_ACTION 0x30
#define WRITE_ACTION 0x31
#define QUEUE_SIZE 10
#define TRUE 1
#define FALSE 0

//Structures
typedef struct {
  boolean isNew;
  unsigned long time;
  int value;
  int action;
  int pin;
  int systemStatus;
} job;

//Input Devices definition
int sensors[AMOUNT_SENSORS] = {S_KITCHEN, S_LIVING_ROOM, S_SLEEPING_ROOM, S_SHOP};
int sensorsMode[AMOUNT_SENSORS] = {INPUT_PULLUP, INPUT_PULLUP, INPUT_PULLUP, INPUT_PULLUP};
//Output Devices definition
int sirenes[AMOUNT_SIRENES] = {SIREN};
int sirenesMode[AMOUNT_SIRENES] = {OUTPUT};

//Job queue definition
job queue[QUEUE_SIZE] = {{0}};
int queueInsPos = 0;

int systemStatus = ALARM_OFF;

void setup() {
  //Set initialize devices
  int i;
  for (i = 0; i < AMOUNT_SENSORS; i++) {
    pinMode(sensors[i], sensorsMode[i]);
  }

  for (i = 0; i < AMOUNT_SIRENES; i++) {
    pinMode(sirenes[i], sirenesMode[i]);
    digitalWrite(sirenes[i], LOW);
  }
}



void loop() {
  int i;
  for (i = 0; i < AMOUNT_SENSORS; i++) {
    if (digitalRead(sensors[i]) == LOW && systemStatus == ALARM_ON) {
      int sir;
      for (sir = 0; sir < AMOUNT_SIRENES; sir++) {
        //Turn Sirene on event
        int pos = getQueueInsertPosition();
        queue[pos].isNew = TRUE;
        queue[pos].time = millis();
        queue[pos].value = HIGH;
        queue[pos].action = WRITE_ACTION;
        queue[pos].pin = sirenes[sir];
        queue[pos].systemStatus = ALARM_FIRED;

        //Turn Sirene off event
        pos = getQueueInsertPosition();
        queue[pos].isNew = TRUE;
        queue[pos].time = MAX_LONG - millis() > RING_TIME ? millis() + RING_TIME : RING_TIME - (MAX_LONG - millis());
        queue[pos].value = LOW;
        queue[pos].action = WRITE_ACTION;
        queue[pos].pin = sirenes[sir];
        queue[pos].systemStatus = ALARM_ON;
      }
    }
  }

  for (i = 0; i < QUEUE_SIZE; i++) {
    if (queue[i].isNew == TRUE && queue[i].time <= millis()) {

    }
  }
}

int getQueueInsertPosition() {
  int i = 0;
  int nextPosition = -1;
  while (i < QUEUE_SIZE && nextPosition < 0) {
    if (queue[i].isNew == FALSE) {
      nextPosition = i;
    }
    i++;
  }
  return nextPosition;
}

int execute(job toExecute) {
  toExecute.isNew = FALSE;
  systemStatus = toExecute.systemStatus;
  switch (toExecute.action) {
    case WRITE_ACTION:
      digitalWrite(toExecute.pin, toExecute.value);
      break;

    case READ_ACTION:
      //Nothing to do until now
      break;
  }
}
