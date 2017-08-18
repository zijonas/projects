#include <SPI.h>
#include <Ethernet.h>
 
// Arduino network information
byte mac[] = {  0x00, 0xAA, 0xBB, 0xCC, 0xDE, 0x02 };
EthernetClient client;
char smtpServer[] = "smtpcorp.com";
void setup()
{
  Serial.begin(9600);  // for debug mode
  setupComm();
}

char messg[10] = "hallo";

void loop()
{
  email(messg);
  delay(1000);
}
//  ethernet shield connection init
void setupComm()
{
  Serial.println("Trying to connect");
  if (!Ethernet.begin(mac)){
    Serial.println("Failed to DHCP");
    // verifyng connection
    while(true);
  }
  delay(10000);
  // IP address is:
  Serial.print("IP address: ");
  for (byte thisByte = 0; thisByte < 4; thisByte++) {
    Serial.print(Ethernet.localIP()[thisByte], DEC);
    Serial.print(".");
  }
  Serial.println();
}
// now I send email
bool email(char* text)
{
  bool success = false;
  Serial.println("Sending email...");
  if (client.connect(smtpServer, 2525)){            //2525 is SMTP Server port
    Serial.println("connected");
    delay(100);
    client.println("EHLO arduino");
    for(int i=0; i<999; ++i){
      if(client.read() > 0)
        break;
    }
    Serial.println("responded");
    client.println("AUTH LOGIN");                     //see "http://base64-encoder-online.waraxe.us/"
    client.println("xxxxxxxxxx");                    //Type your username  and encode it
    client.println("yyyyyyyyyy");                   //Type your password  and encode it</p>
    // Put your "from" email address here
    client.println("MAIL FROM:<zalarmduino@gmail.com>"); //Seems you can write what you want here...
    for(int i=0; i<999; ++i){
      if(client.read() > 0)
        break;
    }
    client.println("RCPT TO:<mail@mail.com>");
    for(int i=0; i<999; ++i){
      if(client.read() > 0)
        break;
    }
    client.println("DATA");
    for(int i=0; i<999; ++i){
      if(client.read() > 0)
        break;
    }
    //Sender
    client.println("from: mail@mail.com"); //Sender address
    client.println("to: mail@mail.com");  //Receiver address
    client.println("SUBJECT: From your arduino");
    client.println("");
    client.println(text);
    client.println(".");
    client.println("QUIT");
    for (int i = 0; i<999; ++i){
      if(i > 998){
        Serial.println("error: No response");
      }
      if(client.read() > 0)
        break;
    }
    success = true;
    client.println();
    Serial.println("end");
  }
  else {
    Serial.println("Failed");
    client.println("QUIT"); //Disconnection
  }
  client.stop();
  return success;
}
