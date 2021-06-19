## Resistive lamps

Lamps operate on 12V power.

Power draw:

| PWM value | current draw | power (V*I) |
| --------- | ------------ | ----------- |
| 30        | 0.14A        | 1.68        |
| 60        | 0.24A        | 2.9W        |
| 100       | 0.36A        | 4.3W        |
| 200       | 0.6A         | 7.2W        |
| 255       | 0.72         | 8.6W        |

So running 12 lights at max PWM would consume **103 W!** 

Practical values may be at most PWM 60 -> so a total power draw of **34W**, which is more reasonable, and generally not all lights will be on at the same time, so that is fine.

