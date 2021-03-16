
// 0_Car

//status
//0)stop
//1)road
//2)location
//3)pause
//4)return

int Car_status = 1;

// 1_Motor
int A_motor_S = 3; //A_motor_S을 30번핀으로 설정합니다. (속도 제어)
int A_motor_L = 31; //A_motor_L을 31번핀으로 설정합니다.
int A_motor_R = 32; //A_motor_R을 32번핀으로 설정합니다.
int B_motor_L = 33; //B_motor_L을 33번핀으로 설정합니다.
int B_motor_R = 34; //B_motor_R을 34번핀으로 설정합니다.
int B_motor_S = 2; //B_motor_S을 35번핀으로 설정합니다. (속도 제어)

// 2_RoadSensor

// 3_BlockSensor

void setup()
{
    // 0_Car

    // 1_Motor
    pinMode(A_motor_L, OUTPUT); // Motor A 방향설정1
    pinMode(A_motor_R, OUTPUT); // Motor A 방향설정2
    pinMode(B_motor_L, OUTPUT); // Motor B 방향설정1
    pinMode(B_motor_R, OUTPUT); // Motor B 방향설정2
    pinMode(LED_BUILTIN, OUTPUT);

    // 2_RoadSensor

    // 3_BlockSensor
}
void loop()
{
    //차 상태 받아와

    //차 상태에 따른 동작
    switch (Car_status)
    {
    case 0:
        digitalWrite(A_motor_L, HIGH); // Motor A 방향설정1
        digitalWrite(A_motor_R, LOW);  // Motor A 방향설정2
        analogWrite(A_motor_S, 0);     // Motor A 속도조절 (0~2B_motor_RB_motor_R)
        digitalWrite(B_motor_L, HIGH); // Motor B 방향설정1
        digitalWrite(B_motor_R, LOW);  // Motor B 방향설정2
        analogWrite(B_motor_S, 0);     // Motor B 속도조절 (0~2B_motor_RB_motor_R)
        digitalWrite(LED_BUILTIN, HIGH);
        break;
    case 1:
        /*모터A설정*/
        digitalWrite(A_motor_L, HIGH); // Motor A 방향설정1
        digitalWrite(A_motor_R, LOW);  // Motor A 방향설정2
        digitalWrite(B_motor_L, HIGH); // Motor B 방향설정1
        digitalWrite(B_motor_R, LOW);  // Motor B 방향설정2
        int i=0;
        for(i=0;i<150;i++)
        {
        analogWrite(A_motor_S, i);  // Motor A 속도조절 (0~2B_motor_RB_motor_R)    
        analogWrite(B_motor_S, i);
        delay(20);
        }
        analogWrite(A_motor_S, 0);  // Motor A 속도조절 (0~2B_motor_RB_motor_R)    
        analogWrite(B_motor_S, 0);
        delay(300);
        for(i=50;i<150;i++)
        {
        analogWrite(A_motor_S, i);  // Motor A 속도조절 (0~2B_motor_RB_motor_R)    
        analogWrite(B_motor_S, i);
        delay(20);
        }
        for(i=90;i<190;i++)
        {
        analogWrite(A_motor_S, i);  // Motor A 속도조절 (0~2B_motor_RB_motor_R)    
        analogWrite(B_motor_S, i);
        delay(20);
        }
        /*디버깅설정*/
        digitalWrite(LED_BUILTIN, HIGH);
        delay(1000);
        digitalWrite(A_motor_L, HIGH); // Motor A 방향설정1
        digitalWrite(A_motor_R, LOW);  // Motor A 방향설정2
        analogWrite(A_motor_S, 0);     // Motor A 속도조절 (0~2B_motor_RB_motor_R)
        /*모터B설정*/
        digitalWrite(B_motor_L, HIGH); // Motor B 방향설정1
        digitalWrite(B_motor_R, LOW);  // Motor B 방향설정2
        analogWrite(B_motor_S, 0);     // Motor B 속도조절 (0~2B_motor_RB_motor_R)
        /*디버깅설정*/
        digitalWrite(LED_BUILTIN, LOW);
        delay(1000);

        break;
    case 2:
        /*모터A설정*/
        digitalWrite(A_motor_L, HIGH); // Motor A 방향설정1
        digitalWrite(A_motor_R, LOW);  // Motor A 방향설정2
        analogWrite(A_motor_S, 255);  // Motor A 속도조절 (0~2B_motor_RB_motor_R)
        /*모터B설정*/
        digitalWrite(B_motor_L, HIGH); // Motor B 방향설정1
        digitalWrite(B_motor_R, LOW);  // Motor B 방향설정2
        analogWrite(B_motor_S, 255);  // Motor B 속도조절 (0~2B_motor_RB_motor_R)
        digitalWrite(LED_BUILTIN, HIGH);

    default:
        break;
    }
}