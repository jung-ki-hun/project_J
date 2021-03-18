//Change the file extension from *.txt to *.ino//
/////////////////////////////////////////////////////////////////////////////
//                                           //                            //
// ⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢠⣴⣾⣿⣶⣶⣆⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀  //                            //
// ⢀⢀⢀⣀⢀⣤⢀⢀⡀⢀⣿⣿⣿⣿⣷⣿⣿⡇⢀⢀⢀⢀⣤⣀⢀⢀⢀⢀⢀  //                            //
// ⢀⢀ ⣶⢻⣧⣿⣿⠇ ⢸⣿⣿⣿⣷⣿⣿⣿⣷⢀⢀⢀⣾⡟⣿⡷⢀⢀⢀⢀ //                            //
// ⢀⢀⠈⠳⣿⣾⣿⣿⢀⠈⢿⣿⣿⣷⣿⣿⣿⣿⢀⢀⢀⣿⣿⣿⠇⢀⢀⢀⢀  //                            //
// ⢀⢀⢀⢀⢿⣿⣿⣿⣤⡶⠺⣿⣿⣿⣷⣿⣿⣿⢄⣤⣼⣿⣿⡏⢀⢀⢀⢀⢀  //                            //
// ⢀⢀⢀⢀⣼⣿⣿⣿⠟⢀⢀⠹⣿⣿⣿⣷⣿⣿⣎⠙⢿⣿⣿⣷⣤⣀⡀⢀⢀  //                            //
// ⢀⢀⢀ ⢸⣿⣿⣿⡿⢀⢀⣤⣿⣿⣿⣷⣿⣿⣿⣄⠈⢿⣿⣿⣷⣿⣿⣷⡀⢀ //                            //
// ⢀⢀⢀⣿⣿⣿⣿⣷⣀⣀⣠⣿⣿⣿⣿⣷⣿⣷⣿⣿⣷⣾⣿⣿⣿⣷⣿⣿⣿⣆ //                            //
// ⣿⣿⠛⠋⠉⠉⢻⣿⣿⣿⣿⡇⡀⠘⣿⣿⣿⣷⣿⣿⣿⠛⠻⢿⣿⣿⣿⣿⣷⣦ //                            //
// ⣿⣿⣧⡀⠿⠇⣰⣿⡟⠉⠉⢻⡆⠈⠟⠛⣿⣿⣿⣯⡉⢁⣀⣈⣉⣽⣿⣿⣿⣷ //                            //
// ⡿⠛⠛⠒⠚⠛⠉⢻⡇⠘⠃⢸⡇⢀⣤⣾⠋⢉⠻⠏⢹⠁⢤⡀⢉⡟⠉⡙⠏⣹ //                            //
// ⣿⣦⣶⣶⢀⣿⣿⣿⣷⣿⣿⣿⡇⢀⣀⣹⣶⣿⣷⠾⠿⠶⡀⠰⠾⢷⣾⣷⣶⣿ //                            //
// ⣿⣿⣿⣿⣇⣿⣿⣿⣷⣿⣿⣿⣇⣰⣿⣿⣷⣿⣿⣷⣤⣴⣶⣶⣦⣼⣿⣿⣿⣷ //                            //
//                                           //                            //
/////////////////////////////////////////////////////////////////////////////
// Make    : Kim Dong Hun             //                            ⠀      //
// Update  : KR 2021/03/19 06:13      //                                   //
// E-Mail  : 112303dh@naver.com       //                                   //
// Develope Tool :                    //                                   //
// Visual Stduio Code                 //                                   //
/////////////////////////////////////////////////////////////////////////////

// 0_Car

String Car_status = "0";
int Car_speed = 255;

// Bluetooth
String bt_status = "0";
int enable_bluetooth = 0;
int alert_bluetooth = 0;
int Tx = 12;
int Rx = 11;

// 1_Motor
int A_motor_S = 3;  //A_motor_S을 3번핀으로 설정합니다. (속도 제어)
int A_motor_L = 30; //A_motor_L을 30번핀으로 설정합니다.
int A_motor_R = 31; //A_motor_R을 31번핀으로 설정합니다.
int B_motor_L = 32; //B_motor_L을 32번핀으로 설정합니다.
int B_motor_R = 33; //B_motor_R을 33번핀으로 설정합니다.
int B_motor_S = 2;  //B_motor_S을 2번핀으로 설정합니다. (속도 제어)

// 2_LineSensor
int Line_Sensor = 0;

// 3_BlockSensor
//int Block_Sensor = 0;
int enable_distance = 0;
int distance = 0;
int triggerPin = 50;
int echoPin = 51;
int beeper = 11;

long delay1 = 2000;
long lTime = 0;


// 4_DEBUG_SERIAL
void _0_Auto(void)
{
    if (Serial.available())
    {
        Car_status = _4_readSerial();
    }

    //차 상태에 따른 동작
    switch (Car_status.toInt())
    {
    case 0:

        break;

    case 1:
        //자동조작:전진
        _1_Go(Car_Speed);
        break;
    case 2:
        //자동조작:정지
        _1_Stop();
        enable_distance = 1;
        break;
    case 3:
        //자동조작:후진
        _1_Back(Car_Speed);
        break;
    default:
        break;
    }
}
void _0_Controll(void)
{
    _3_Block_Sensor();
    if (Serial1.available())
    {
        bt_status = _4_readSerial1();
    }
    switch (bt_status.toInt())
    {
    case -2:
        enable_distance = !(enable_distance);
        bt_status = "0";
        break;
    case -1:
        enable_bluetooth = !enable_bluetooth;
        if (enable_bluetooth)
        {
            tone(beeper, 300, 100);
        }
        else if (!enable_bluetooth)
        {
            tone(beeper, 400, 100);
        }
        bt_status = "0";
        break;
    case 0:
        break;
    case 1:
        _1_Go(255);

        break;
    case 2:
        _1_Stop();
        break;
    case 3:
        _1_Back(255);
        break;
    case 4:
        _1_Left(255);
        break;
    case 5:
        _1_Right(255);
        break;
    default:

        break;
    }
    if (!enable_bluetooth)
    {
        _0_Auto();
    }
}
void _1_Stop(void)
{
    digitalWrite(A_motor_L, HIGH);
    digitalWrite(A_motor_R, LOW);
    analogWrite(A_motor_S, 0);
    digitalWrite(B_motor_L, HIGH);
    digitalWrite(B_motor_R, LOW);
    analogWrite(B_motor_S, 0);
}
void _1_Go(int speed)
{
    digitalWrite(A_motor_L, HIGH);
    digitalWrite(A_motor_R, LOW);
    analogWrite(A_motor_S, speed);
    digitalWrite(B_motor_L, HIGH);
    digitalWrite(B_motor_R, LOW);
    analogWrite(B_motor_S, speed);
}
void _1_Back(int speed)
{
    digitalWrite(A_motor_L, LOW);
    digitalWrite(A_motor_R, HIGH);
    analogWrite(A_motor_S, speed);
    digitalWrite(B_motor_L, LOW);
    digitalWrite(B_motor_R, HIGH);
    analogWrite(B_motor_S, speed);
}
void _1_Left(int speed)
{
    digitalWrite(A_motor_L, HIGH);
    digitalWrite(A_motor_R, LOW);
    analogWrite(A_motor_S, speed);
    digitalWrite(B_motor_L, LOW);
    digitalWrite(B_motor_R, HIGH);
    analogWrite(B_motor_S, speed);
}
void _1_Right(int speed)
{
    digitalWrite(A_motor_L, LOW);
    digitalWrite(A_motor_R, HIGH);
    analogWrite(A_motor_S, speed);
    digitalWrite(B_motor_L, HIGH);
    digitalWrite(B_motor_R, LOW);
    analogWrite(B_motor_S, speed);
}
void _2_Line(void)
{
}
void _3_Block_Sensor(void)
{
    // trigger 핀으로 10㎲의 펄스를 발생
    digitalWrite(triggerPin, HIGH);
    delayMicroseconds(10);
    digitalWrite(triggerPin, LOW);
    // echo 핀 입력으로부터 거리를 cm 단위로 계산
    distance = pulseIn(echoPin, HIGH) / 58;
    Serial.print("Distance(cm) = ");
    Serial.print(distance);
    Serial.print(",");
    Serial.println(delay1);
    Serial.print(",");
    Serial.println(Car_status);

    if (distance < 50)
    {
        delay1 = 50;
    }
    else if (distance < 100)
    {
        delay1 = 100;
    }
    else if (distance < 150)
    {
        delay1 = 300;
    }
    else
    {
        delay1 = 1000;
    }

    if (enable_distance == 1)
    {
        if (millis() - lTime > delay1)
        {
            lTime = millis();
            tone(beeper, 550, 100);
        }
    }
}
String _4_readSerial(void)
{
    String str = "";
    char ch;
    while (Serial.available() > 0)
    {
        ch = Serial.read();
        if (ch != '\n')
        {
            str.concat(ch);
            Serial.print("Serial : ");
            Serial.println(str);
        }
        delay(10);
    }
    return str;
    //return ch.toInt();
}
String _4_readSerial1(void)
{
    String bstr = "";
    char bch;
    while (Serial1.available() > 0)
    {
        bch = Serial1.read();
        if (bch != '\n')
        {
            bstr.concat(bch);
            Serial.print("Serial1 : ");
            Serial.println(bstr);
        }
        delay(10);
    }
    return bstr;
}
void setup()
{
    // 0_Car
    Serial1.begin(9600);
    // 1_Motor
    pinMode(A_motor_L, OUTPUT);
    pinMode(A_motor_R, OUTPUT);
    pinMode(B_motor_L, OUTPUT);
    pinMode(B_motor_R, OUTPUT);

    // 2_RoadSensor

    // 3_BlockSensor
    pinMode(triggerPin, OUTPUT); // trigger 핀 출력으로 설정

    pinMode(echoPin, INPUT); // echo 핀 입력으로 설정
    // 4_DEBUG_SERIAL
    Serial.begin(9600);
}
void loop()
{
    _0_Controll();
}
