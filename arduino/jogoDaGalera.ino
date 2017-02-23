/*
  Fade

  This example shows how to fade an LED on pin 9
  using the analogWrite() function.

  The analogWrite() function uses PWM, so if
  you want to change the pin you're using, be
  sure to use another PWM capable pin. On most
  Arduino, the PWM pins are identified with
  a "~" sign, like ~3, ~5, ~6, ~9, ~10 and ~11.

  This example code is in the public domain.
*/
int butao = 11;
int jonas = 10;
int led = 9;           // the PWM pin the LED is attached to
int brightness = 127;    // how bright the LED is
int fadeAmount = 10;    // how many points to fade the LED by
int estatusButao = 0;
int estatusButaoJonas = 0;


// the setup routine runs once when you press reset:
void setup() {
  // declare pin 9 to be an output:
  pinMode(led, OUTPUT);
  pinMode(butao, INPUT_PULLUP);
  pinMode(jonas, INPUT_PULLUP);
}

// the loop routine runs over and over again forever:
void loop() {

  analogWrite(led, brightness);
  delay(10);

  if (digitalRead(butao) == LOW && estatusButao == 0) {

    estatusButao = 1;

    brightness = brightness + fadeAmount;

    if (brightness >= 255) {
      analogWrite(led, 0);
      delay(3000);
      brightness = 127;
    }
  }

  if (digitalRead(butao) == HIGH) {
    estatusButao = 0;
  }

  if (digitalRead(jonas) == LOW && estatusButaoJonas == 0) {

    estatusButaoJonas = 1;

    brightness = brightness - fadeAmount;

    if (brightness <= 0) {
      analogWrite(led, 255);
      delay(3000);
      brightness = 127;
    }
  }

  if (digitalRead(jonas) == HIGH) {
    estatusButaoJonas = 0;
  }
}
