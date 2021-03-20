/* 01) Beep

int beeper = 11;
int cTime = 0;

void setup()
{
}

void loop()
{
    if (millis() - cTime > 1000)
    {
        cTime = millis();
        tone(beeper, 550, 100);
        delay(19);
    }
    else
    {
        noTome(beeper);
    }
}
//*/

//* 02) Motor + BlueTooth + beeper

int A_speed_pin = 2;
int A_go1_pin = 22;
int A_go2_pin = 23;
int B_speed_pin = 3;
int B_go1_pin = 25;
int B_go2_pin = 24;
int speeder = 255;
int beeper = 11;
String bt_go = "";
String readSerial1(void)
{
    String bstr = "";
    char bch;
    while (Serial1.available() > 0)
    {
        bch = Serial1.read();
        if (bch != '\n')
        {
            bstr.concat(bch);
        }
        delay(10);
    }
    return bstr;
}
void go(int spd)
{

    digitalWrite(A_go1_pin, HIGH);
    digitalWrite(A_go2_pin, LOW);
    analogWrite(A_speed_pin, spd);

    digitalWrite(B_go1_pin, HIGH);
    digitalWrite(B_go2_pin, LOW);
    analogWrite(B_speed_pin, spd);
}
void back(int spd)
{
    digitalWrite(A_go2_pin, HIGH);
    digitalWrite(A_go1_pin, LOW);
    analogWrite(A_speed_pin, 255);

    digitalWrite(B_go2_pin, HIGH);
    digitalWrite(B_go1_pin, LOW);
    analogWrite(B_speed_pin, 255);

    Serial1.begin(9600);
}
void stop()
{
    int spd = 0;
    digitalWrite(A_go2_pin, HIGH);
    digitalWrite(A_go1_pin, LOW);
    analogWrite(A_speed_pin, spd);

    digitalWrite(B_go2_pin, HIGH);
    digitalWrite(B_go1_pin, LOW);
    analogWrite(B_speed_pin, spd);

    
}
void setup()
{
    Serial1.begin(9600);
    pinMode(A_go1_pin, OUTPUT);
    pinMode(A_go2_pin, OUTPUT);
    pinMode(B_go1_pin, OUTPUT);
    pinMode(B_go2_pin, OUTPUT);
    tone(beeper, 150, 1000);

}

void loop()
{
    bt_go = "";
    if (Serial1.available() > 0)
    {
        bt_go = readSerial1();

        if (bt_go == "1")
        {
            tone(beeper, 300, 100);
            go(speeder);
        }
        else if (bt_go == "2")
        {
            tone(beeper, 450, 100);
            stop();
        }
        else if (bt_go == "3")
        {
            tone(beeper, 600, 100);
            back(speeder);
        }
        else if(bt)
    }
}

//*/
