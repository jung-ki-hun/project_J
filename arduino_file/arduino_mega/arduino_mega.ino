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
// Update  : KR 2021/03/17 01:13      //                                   //
// E-Mail  : 112303dh@naver.com       //                                   //
// Develope Tool :                    //                                   //
// Visual Stduio Code                 //                                   //
/////////////////////////////////////////////////////////////////////////////

// 0_Car
//status
//1)Go
//2)Stop
//3)

char Car_status = 0;

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

// 4_DEBUG_SERIAL

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

char _4_readSerial(void)
{
    String str = "";
    char ch;
    while (Serial.available() > 0)
    {
        ch = Serial.read();
        str.concat(ch);
        Serial.print("Serial : ");
        Serial.println(str);
        delay(10);
    }

    return str.toInt();
}
void setup()
{
    // 0_Car

    // 1_Motor
    pinMode(A_motor_L, OUTPUT);
    pinMode(A_motor_R, OUTPUT);
    pinMode(B_motor_L, OUTPUT);
    pinMode(B_motor_R, OUTPUT);
    pinMode(LED_BUILTIN, OUTPUT);

    // 2_RoadSensor

    // 3_BlockSensor

    // 4_DEBUG_SERIAL
    Serial.begin(9600);
}

void loop()
{
    //차 상태 받아와
    Car_status = _4_readSerial();

    //차 상태에 따른 동작
    switch (Car_status)
    {
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
    default:
        break;
    }
}