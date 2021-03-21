Private Declare Function Beep Lib "kernel32" (ByVal lFrequency As Long, ByVal lDuration As Long) As Long
Private Declare Sub Sleep Lib "kernel32" (ByVal lMillisecond As Long)
Dim strFrequencyList As String
Dim lFrequency       As Long
Dim strDurationList  As String
Dim lDuration        As Long
Dim I               As Long

Const E4 = 329.6276
strFrequencyList = "iiihfihfffhidadddfhihfffhihiiihfihffihfdadddfhihffhiki"
strDurationList = "aabbbfjaabbbbnaabbbfjaabcapaabbbfjaabbbbnaabbbfjaabcap"
For I = 1 To Len(strFrequencyList)
    lFrequency = E4 * 2 ^ ((Asc(Mid(strFrequencyList, I, 1)) - 96) / 12)
    lDuration = (Asc(Mid(strDurationList, I, 1)) - 96) * 200 - 10
    Beep lFrequency, lDuration
    Sleep 10
    DoEvents
Next I

'출처: https://icodebroker.tistory.com/2775 [ICODEBROKER]