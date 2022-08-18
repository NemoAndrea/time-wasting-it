EESchema Schematic File Version 4
EELAYER 30 0
EELAYER END
$Descr A4 11693 8268
encoding utf-8
Sheet 1 1
Title ""
Date ""
Rev ""
Comp ""
Comment1 ""
Comment2 ""
Comment3 ""
Comment4 ""
$EndDescr
$Comp
L Device:R R1
U 1 1 60CDF99D
P 1450 2200
F 0 "R1" H 1520 2246 50  0000 L CNN
F 1 "500ohm" H 1520 2155 50  0000 L CNN
F 2 "Resistor_THT:R_Axial_DIN0207_L6.3mm_D2.5mm_P10.16mm_Horizontal" V 1380 2200 50  0001 C CNN
F 3 "~" H 1450 2200 50  0001 C CNN
	1    1450 2200
	1    0    0    -1  
$EndComp
$Comp
L Device:R R3
U 1 1 60CE0571
P 2950 2200
F 0 "R3" H 3020 2246 50  0000 L CNN
F 1 "500ohm" H 3020 2155 50  0000 L CNN
F 2 "Resistor_THT:R_Axial_DIN0207_L6.3mm_D2.5mm_P10.16mm_Horizontal" V 2880 2200 50  0001 C CNN
F 3 "~" H 2950 2200 50  0001 C CNN
	1    2950 2200
	1    0    0    -1  
$EndComp
$Comp
L Transistor_FET:IRLZ44N Q2
U 1 1 60CE1BFD
P 2400 2550
F 0 "Q2" H 2604 2596 50  0000 L CNN
F 1 "IRLZ44N" H 2604 2505 50  0000 L CNN
F 2 "Package_TO_SOT_THT:TO-220-3_Horizontal_TabDown" H 2650 2475 50  0001 L CIN
F 3 "http://www.irf.com/product-info/datasheets/data/irlz44n.pdf" H 2400 2550 50  0001 L CNN
	1    2400 2550
	1    0    0    1   
$EndComp
$Comp
L Transistor_FET:IRLZ44N Q4
U 1 1 60CE393A
P 3900 2550
F 0 "Q4" H 4104 2596 50  0000 L CNN
F 1 "IRLZ44N" H 4104 2505 50  0000 L CNN
F 2 "Package_TO_SOT_THT:TO-220-3_Horizontal_TabDown" H 4150 2475 50  0001 L CIN
F 3 "http://www.irf.com/product-info/datasheets/data/irlz44n.pdf" H 3900 2550 50  0001 L CNN
	1    3900 2550
	1    0    0    1   
$EndComp
$Comp
L Transistor_FET:IRLZ44N Q1
U 1 1 60CE0B0A
P 1650 2550
F 0 "Q1" H 1854 2596 50  0000 L CNN
F 1 "IRLZ44N" H 1854 2505 50  0000 L CNN
F 2 "Package_TO_SOT_THT:TO-220-3_Horizontal_TabDown" H 1900 2475 50  0001 L CIN
F 3 "http://www.irf.com/product-info/datasheets/data/irlz44n.pdf" H 1650 2550 50  0001 L CNN
	1    1650 2550
	1    0    0    1   
$EndComp
$Comp
L Transistor_FET:IRLZ44N Q3
U 1 1 60CE2915
P 3150 2550
F 0 "Q3" H 3354 2596 50  0000 L CNN
F 1 "IRLZ44N" H 3354 2505 50  0000 L CNN
F 2 "Package_TO_SOT_THT:TO-220-3_Horizontal_TabDown" H 3400 2475 50  0001 L CIN
F 3 "http://www.irf.com/product-info/datasheets/data/irlz44n.pdf" H 3150 2550 50  0001 L CNN
	1    3150 2550
	1    0    0    1   
$EndComp
$Comp
L Device:R R2
U 1 1 60CDFECF
P 2200 2200
F 0 "R2" H 2270 2246 50  0000 L CNN
F 1 "500ohm" H 2270 2155 50  0000 L CNN
F 2 "Resistor_THT:R_Axial_DIN0207_L6.3mm_D2.5mm_P10.16mm_Horizontal" V 2130 2200 50  0001 C CNN
F 3 "~" H 2200 2200 50  0001 C CNN
	1    2200 2200
	1    0    0    -1  
$EndComp
Wire Wire Line
	1450 2350 1450 2550
Wire Wire Line
	2200 2350 2200 2550
Wire Wire Line
	2950 2350 2950 2550
$Comp
L Device:R R4
U 1 1 60D1A963
P 3700 2200
F 0 "R4" H 3770 2246 50  0000 L CNN
F 1 "500ohm" H 3770 2155 50  0000 L CNN
F 2 "Resistor_THT:R_Axial_DIN0207_L6.3mm_D2.5mm_P10.16mm_Horizontal" V 3630 2200 50  0001 C CNN
F 3 "~" H 3700 2200 50  0001 C CNN
	1    3700 2200
	1    0    0    -1  
$EndComp
Wire Wire Line
	3700 2550 3700 2350
Wire Wire Line
	1750 1750 1750 2350
Connection ~ 1750 1750
Wire Wire Line
	2500 1750 2500 2350
Connection ~ 2500 1750
Wire Wire Line
	3250 1750 3250 2350
Connection ~ 3250 1750
Wire Wire Line
	4000 1750 4000 2350
$Comp
L Device:R R5
U 1 1 60DC9D31
P 4450 2200
F 0 "R5" H 4520 2246 50  0000 L CNN
F 1 "500ohm" H 4520 2155 50  0000 L CNN
F 2 "Resistor_THT:R_Axial_DIN0207_L6.3mm_D2.5mm_P10.16mm_Horizontal" V 4380 2200 50  0001 C CNN
F 3 "~" H 4450 2200 50  0001 C CNN
	1    4450 2200
	1    0    0    -1  
$EndComp
$Comp
L Device:R R7
U 1 1 60DC9D3B
P 5950 2200
F 0 "R7" H 6020 2246 50  0000 L CNN
F 1 "500ohm" H 6020 2155 50  0000 L CNN
F 2 "Resistor_THT:R_Axial_DIN0207_L6.3mm_D2.5mm_P10.16mm_Horizontal" V 5880 2200 50  0001 C CNN
F 3 "~" H 5950 2200 50  0001 C CNN
	1    5950 2200
	1    0    0    -1  
$EndComp
$Comp
L Transistor_FET:IRLZ44N Q6
U 1 1 60DC9D45
P 5400 2550
F 0 "Q6" H 5604 2596 50  0000 L CNN
F 1 "IRLZ44N" H 5604 2505 50  0000 L CNN
F 2 "Package_TO_SOT_THT:TO-220-3_Horizontal_TabDown" H 5650 2475 50  0001 L CIN
F 3 "http://www.irf.com/product-info/datasheets/data/irlz44n.pdf" H 5400 2550 50  0001 L CNN
	1    5400 2550
	1    0    0    1   
$EndComp
$Comp
L Transistor_FET:IRLZ44N Q8
U 1 1 60DC9D4F
P 6900 2550
F 0 "Q8" H 7104 2596 50  0000 L CNN
F 1 "IRLZ44N" H 7104 2505 50  0000 L CNN
F 2 "Package_TO_SOT_THT:TO-220-3_Horizontal_TabDown" H 7150 2475 50  0001 L CIN
F 3 "http://www.irf.com/product-info/datasheets/data/irlz44n.pdf" H 6900 2550 50  0001 L CNN
	1    6900 2550
	1    0    0    1   
$EndComp
$Comp
L Transistor_FET:IRLZ44N Q5
U 1 1 60DC9D59
P 4650 2550
F 0 "Q5" H 4854 2596 50  0000 L CNN
F 1 "IRLZ44N" H 4854 2505 50  0000 L CNN
F 2 "Package_TO_SOT_THT:TO-220-3_Horizontal_TabDown" H 4900 2475 50  0001 L CIN
F 3 "http://www.irf.com/product-info/datasheets/data/irlz44n.pdf" H 4650 2550 50  0001 L CNN
	1    4650 2550
	1    0    0    1   
$EndComp
$Comp
L Transistor_FET:IRLZ44N Q7
U 1 1 60DC9D63
P 6150 2550
F 0 "Q7" H 6354 2596 50  0000 L CNN
F 1 "IRLZ44N" H 6354 2505 50  0000 L CNN
F 2 "Package_TO_SOT_THT:TO-220-3_Horizontal_TabDown" H 6400 2475 50  0001 L CIN
F 3 "http://www.irf.com/product-info/datasheets/data/irlz44n.pdf" H 6150 2550 50  0001 L CNN
	1    6150 2550
	1    0    0    1   
$EndComp
$Comp
L Device:R R6
U 1 1 60DC9D6D
P 5200 2200
F 0 "R6" H 5270 2246 50  0000 L CNN
F 1 "500ohm" H 5270 2155 50  0000 L CNN
F 2 "Resistor_THT:R_Axial_DIN0207_L6.3mm_D2.5mm_P10.16mm_Horizontal" V 5130 2200 50  0001 C CNN
F 3 "~" H 5200 2200 50  0001 C CNN
	1    5200 2200
	1    0    0    -1  
$EndComp
Wire Wire Line
	4450 2350 4450 2550
Wire Wire Line
	5200 2350 5200 2550
Wire Wire Line
	5950 2350 5950 2550
Wire Wire Line
	6700 2550 6700 2350
Wire Wire Line
	4750 1750 4750 2350
Connection ~ 4750 1750
Wire Wire Line
	5500 1750 5500 2350
Connection ~ 5500 1750
Wire Wire Line
	6250 1750 6250 2350
Connection ~ 6250 1750
Wire Wire Line
	7000 1750 7000 2350
Connection ~ 4000 1750
$Comp
L Device:R R9
U 1 1 60DD865D
P 7450 2200
F 0 "R9" H 7520 2246 50  0000 L CNN
F 1 "500ohm" H 7520 2155 50  0000 L CNN
F 2 "Resistor_THT:R_Axial_DIN0207_L6.3mm_D2.5mm_P10.16mm_Horizontal" V 7380 2200 50  0001 C CNN
F 3 "~" H 7450 2200 50  0001 C CNN
	1    7450 2200
	1    0    0    -1  
$EndComp
$Comp
L Device:R R11
U 1 1 60DD8667
P 8950 2200
F 0 "R11" H 9020 2246 50  0000 L CNN
F 1 "500ohm" H 9020 2155 50  0000 L CNN
F 2 "Resistor_THT:R_Axial_DIN0207_L6.3mm_D2.5mm_P10.16mm_Horizontal" V 8880 2200 50  0001 C CNN
F 3 "~" H 8950 2200 50  0001 C CNN
	1    8950 2200
	1    0    0    -1  
$EndComp
$Comp
L Transistor_FET:IRLZ44N Q10
U 1 1 60DD8671
P 8400 2550
F 0 "Q10" H 8604 2596 50  0000 L CNN
F 1 "IRLZ44N" H 8604 2505 50  0000 L CNN
F 2 "Package_TO_SOT_THT:TO-220-3_Horizontal_TabDown" H 8650 2475 50  0001 L CIN
F 3 "http://www.irf.com/product-info/datasheets/data/irlz44n.pdf" H 8400 2550 50  0001 L CNN
	1    8400 2550
	1    0    0    1   
$EndComp
$Comp
L Transistor_FET:IRLZ44N Q12
U 1 1 60DD867B
P 9900 2550
F 0 "Q12" H 10104 2596 50  0000 L CNN
F 1 "IRLZ44N" H 10104 2505 50  0000 L CNN
F 2 "Package_TO_SOT_THT:TO-220-3_Horizontal_TabDown" H 10150 2475 50  0001 L CIN
F 3 "http://www.irf.com/product-info/datasheets/data/irlz44n.pdf" H 9900 2550 50  0001 L CNN
	1    9900 2550
	1    0    0    1   
$EndComp
$Comp
L Transistor_FET:IRLZ44N Q9
U 1 1 60DD8685
P 7650 2550
F 0 "Q9" H 7854 2596 50  0000 L CNN
F 1 "IRLZ44N" H 7854 2505 50  0000 L CNN
F 2 "Package_TO_SOT_THT:TO-220-3_Horizontal_TabDown" H 7900 2475 50  0001 L CIN
F 3 "http://www.irf.com/product-info/datasheets/data/irlz44n.pdf" H 7650 2550 50  0001 L CNN
	1    7650 2550
	1    0    0    1   
$EndComp
$Comp
L Transistor_FET:IRLZ44N Q11
U 1 1 60DD868F
P 9150 2550
F 0 "Q11" H 9354 2596 50  0000 L CNN
F 1 "IRLZ44N" H 9354 2505 50  0000 L CNN
F 2 "Package_TO_SOT_THT:TO-220-3_Horizontal_TabDown" H 9400 2475 50  0001 L CIN
F 3 "http://www.irf.com/product-info/datasheets/data/irlz44n.pdf" H 9150 2550 50  0001 L CNN
	1    9150 2550
	1    0    0    1   
$EndComp
$Comp
L Device:R R10
U 1 1 60DD8699
P 8200 2200
F 0 "R10" H 8270 2246 50  0000 L CNN
F 1 "500ohm" H 8270 2155 50  0000 L CNN
F 2 "Resistor_THT:R_Axial_DIN0207_L6.3mm_D2.5mm_P10.16mm_Horizontal" V 8130 2200 50  0001 C CNN
F 3 "~" H 8200 2200 50  0001 C CNN
	1    8200 2200
	1    0    0    -1  
$EndComp
Wire Wire Line
	7450 2350 7450 2550
Wire Wire Line
	8200 2350 8200 2550
Wire Wire Line
	8950 2350 8950 2550
$Comp
L Device:R R12
U 1 1 60DD86A6
P 9700 2200
F 0 "R12" H 9770 2246 50  0000 L CNN
F 1 "500ohm" H 9770 2155 50  0000 L CNN
F 2 "Resistor_THT:R_Axial_DIN0207_L6.3mm_D2.5mm_P10.16mm_Horizontal" V 9630 2200 50  0001 C CNN
F 3 "~" H 9700 2200 50  0001 C CNN
	1    9700 2200
	1    0    0    -1  
$EndComp
Wire Wire Line
	9700 2550 9700 2350
Wire Wire Line
	7750 1750 7750 2350
Connection ~ 7750 1750
Wire Wire Line
	8500 1750 8500 2350
Connection ~ 8500 1750
Wire Wire Line
	9250 1750 9250 2350
Connection ~ 9250 1750
Wire Wire Line
	10000 1750 10000 2350
Connection ~ 7000 1750
Wire Wire Line
	5650 3600 1750 3600
Wire Wire Line
	1750 3600 1750 2750
Wire Wire Line
	5750 3450 2500 3450
Wire Wire Line
	2500 3450 2500 2750
Wire Wire Line
	5850 3300 3250 3300
Wire Wire Line
	3250 3300 3250 2750
Wire Wire Line
	5950 3200 4000 3200
Wire Wire Line
	4000 3200 4000 2750
Wire Wire Line
	6050 3100 4750 3100
Wire Wire Line
	4750 3100 4750 2750
Wire Wire Line
	6150 2950 5500 2950
Wire Wire Line
	5500 2950 5500 2750
$Comp
L power:GND #PWR0101
U 1 1 60E004D6
P 10450 2800
F 0 "#PWR0101" H 10450 2550 50  0001 C CNN
F 1 "GND" H 10455 2627 50  0000 C CNN
F 2 "" H 10450 2800 50  0001 C CNN
F 3 "" H 10450 2800 50  0001 C CNN
	1    10450 2800
	0    1    1    0   
$EndComp
$Comp
L Connector:Raspberry_Pi_2_3 J1
U 1 1 60E0BFD8
P 3250 5450
F 0 "J1" H 3250 6931 50  0000 C CNN
F 1 "Raspberry_Pi_2_3" H 3250 6840 50  0000 C CNN
F 2 "project_libs:Raspberry_Pi_Zero_for_clock" H 3250 5450 50  0001 C CNN
F 3 "https://www.raspberrypi.org/documentation/hardware/raspberrypi/schematics/rpi_SCH_3bplus_1p0_reduced.pdf" H 3250 5450 50  0001 C CNN
	1    3250 5450
	1    0    0    -1  
$EndComp
Wire Wire Line
	1000 1750 1000 5850
Wire Wire Line
	1450 2550 1450 4850
Wire Wire Line
	1450 4850 2450 4850
Connection ~ 1450 2550
Wire Wire Line
	2450 4950 2200 4950
Wire Wire Line
	2200 4950 2200 2550
Connection ~ 2200 2550
Wire Wire Line
	2450 3700 2950 3700
Wire Wire Line
	2950 3700 2950 2550
Connection ~ 2950 2550
Wire Wire Line
	4050 4850 4150 4850
Wire Wire Line
	4150 4850 4150 4150
Wire Wire Line
	4150 4150 3700 4150
Wire Wire Line
	3700 4150 3700 2550
Connection ~ 3700 2550
Wire Wire Line
	4050 4950 4250 4950
Wire Wire Line
	4250 4950 4250 2950
Wire Wire Line
	4250 2950 4450 2950
Wire Wire Line
	4450 2950 4450 2550
Connection ~ 4450 2550
Wire Wire Line
	4050 5150 5200 5150
Wire Wire Line
	5200 5150 5200 2550
Connection ~ 5200 2550
Wire Wire Line
	4050 5250 5350 5250
Wire Wire Line
	5350 5250 5350 2850
Wire Wire Line
	5350 2850 5950 2850
Wire Wire Line
	5950 2850 5950 2550
Connection ~ 5950 2550
Wire Wire Line
	4050 5350 7200 5350
Wire Wire Line
	7200 3000 6700 3000
Wire Wire Line
	6700 3000 6700 2550
Connection ~ 6700 2550
Wire Wire Line
	2450 5650 2100 5650
Wire Wire Line
	2100 5650 2100 6900
Wire Wire Line
	2100 6900 5000 6900
Wire Wire Line
	5000 6900 5000 5650
Wire Wire Line
	5000 5650 7450 5650
Wire Wire Line
	7450 5650 7450 2550
Connection ~ 7450 2550
Wire Wire Line
	2450 5750 2250 5750
Wire Wire Line
	2250 5750 2250 7150
Wire Wire Line
	2250 7150 5850 7150
Wire Wire Line
	5850 7150 5850 5800
Wire Wire Line
	5850 5800 7750 5800
Wire Wire Line
	7750 5800 7750 3900
Wire Wire Line
	7750 3900 8200 3900
Wire Wire Line
	8200 3900 8200 2550
Connection ~ 8200 2550
Wire Wire Line
	2450 5850 2350 5850
Wire Wire Line
	2350 5850 2350 7250
Wire Wire Line
	2350 7250 6050 7250
Wire Wire Line
	6050 7250 6050 5950
Wire Wire Line
	6050 5950 8950 5950
Wire Wire Line
	9050 5950 9050 2550
Wire Wire Line
	2450 6150 2450 7500
Wire Wire Line
	2450 7500 6350 7500
Wire Wire Line
	6350 7500 6350 6200
Wire Wire Line
	6350 6200 10050 6200
Wire Wire Line
	10050 6200 10050 4100
Wire Wire Line
	9700 4100 9700 2550
Connection ~ 9700 2550
Wire Wire Line
	5650 3600 5650 3850
Wire Wire Line
	5650 3850 5550 3850
Wire Wire Line
	5550 3850 5550 4100
Wire Wire Line
	5750 3450 5750 4100
Wire Wire Line
	5850 4000 6050 4000
Wire Wire Line
	6050 4000 6050 4100
Wire Wire Line
	5850 3300 5850 4000
Wire Wire Line
	5950 3950 6300 3950
Wire Wire Line
	6300 3950 6300 4100
Wire Wire Line
	5950 3200 5950 3950
Wire Wire Line
	6050 3900 6550 3900
Wire Wire Line
	6550 3900 6550 4100
Wire Wire Line
	6050 3100 6050 3900
Wire Wire Line
	6150 3850 6800 3850
Wire Wire Line
	6800 3850 6800 4100
Wire Wire Line
	6150 2950 6150 3850
Wire Wire Line
	6250 3800 7050 3800
Wire Wire Line
	7050 3800 7050 4100
Wire Wire Line
	6250 2750 6250 3800
Wire Wire Line
	7200 3000 7200 5350
$Comp
L Connector:Screw_Terminal_01x02 Lamp_term1
U 1 1 60F1E7D3
P 5650 4300
F 0 "Lamp_term1" H 5730 4292 50  0000 L CNN
F 1 "12V" H 5730 4201 50  0000 L CNN
F 2 "TerminalBlock_Phoenix:TerminalBlock_Phoenix_MKDS-1,5-2-5.08_1x02_P5.08mm_Horizontal" H 5650 4300 50  0001 C CNN
F 3 "~" H 5650 4300 50  0001 C CNN
	1    5650 4300
	0    1    1    0   
$EndComp
$Comp
L Connector:Screw_Terminal_01x02 Lamp_term2
U 1 1 60FA5B98
P 5900 4300
F 0 "Lamp_term2" H 5980 4292 50  0000 L CNN
F 1 "12V" H 5980 4201 50  0000 L CNN
F 2 "TerminalBlock_Phoenix:TerminalBlock_Phoenix_MKDS-1,5-2-5.08_1x02_P5.08mm_Horizontal" H 5900 4300 50  0001 C CNN
F 3 "~" H 5900 4300 50  0001 C CNN
	1    5900 4300
	0    1    1    0   
$EndComp
$Comp
L Connector:Screw_Terminal_01x02 Lamp_term3
U 1 1 60FA63F5
P 6150 4300
F 0 "Lamp_term3" H 6230 4292 50  0000 L CNN
F 1 "12V" H 6230 4201 50  0000 L CNN
F 2 "TerminalBlock_Phoenix:TerminalBlock_Phoenix_MKDS-1,5-2-5.08_1x02_P5.08mm_Horizontal" H 6150 4300 50  0001 C CNN
F 3 "~" H 6150 4300 50  0001 C CNN
	1    6150 4300
	0    1    1    0   
$EndComp
$Comp
L Connector:Screw_Terminal_01x02 Lamp_term4
U 1 1 60FA6940
P 6400 4300
F 0 "Lamp_term4" H 6480 4292 50  0000 L CNN
F 1 "12V" H 6480 4201 50  0000 L CNN
F 2 "TerminalBlock_Phoenix:TerminalBlock_Phoenix_MKDS-1,5-2-5.08_1x02_P5.08mm_Horizontal" H 6400 4300 50  0001 C CNN
F 3 "~" H 6400 4300 50  0001 C CNN
	1    6400 4300
	0    1    1    0   
$EndComp
$Comp
L Connector:Screw_Terminal_01x02 Lamp_term5
U 1 1 60FA6C22
P 6650 4300
F 0 "Lamp_term5" H 6730 4292 50  0000 L CNN
F 1 "12V" H 6730 4201 50  0000 L CNN
F 2 "TerminalBlock_Phoenix:TerminalBlock_Phoenix_MKDS-1,5-2-5.08_1x02_P5.08mm_Horizontal" H 6650 4300 50  0001 C CNN
F 3 "~" H 6650 4300 50  0001 C CNN
	1    6650 4300
	0    1    1    0   
$EndComp
$Comp
L Connector:Screw_Terminal_01x02 Lamp_term6
U 1 1 60FA6FC1
P 6900 4300
F 0 "Lamp_term6" H 6980 4292 50  0000 L CNN
F 1 "12V" H 6980 4201 50  0000 L CNN
F 2 "TerminalBlock_Phoenix:TerminalBlock_Phoenix_MKDS-1,5-2-5.08_1x02_P5.08mm_Horizontal" H 6900 4300 50  0001 C CNN
F 3 "~" H 6900 4300 50  0001 C CNN
	1    6900 4300
	0    1    1    0   
$EndComp
$Comp
L Connector:Screw_Terminal_01x02 Lamp_term7
U 1 1 60FA7181
P 7150 4300
F 0 "Lamp_term7" H 7230 4292 50  0000 L CNN
F 1 "12V" H 7230 4201 50  0000 L CNN
F 2 "TerminalBlock_Phoenix:TerminalBlock_Phoenix_MKDS-1,5-2-5.08_1x02_P5.08mm_Horizontal" H 7150 4300 50  0001 C CNN
F 3 "~" H 7150 4300 50  0001 C CNN
	1    7150 4300
	0    1    1    0   
$EndComp
$Comp
L Connector:Screw_Terminal_01x02 Lamp_term8
U 1 1 60FA77DE
P 7950 4300
F 0 "Lamp_term8" H 8030 4292 50  0000 L CNN
F 1 "12V" H 8030 4201 50  0000 L CNN
F 2 "TerminalBlock_Phoenix:TerminalBlock_Phoenix_MKDS-1,5-2-5.08_1x02_P5.08mm_Horizontal" H 7950 4300 50  0001 C CNN
F 3 "~" H 7950 4300 50  0001 C CNN
	1    7950 4300
	0    1    1    0   
$EndComp
$Comp
L Connector:Screw_Terminal_01x02 Lamp_term9
U 1 1 60FA7DB4
P 8200 4300
F 0 "Lamp_term9" H 8280 4292 50  0000 L CNN
F 1 "12V" H 8280 4201 50  0000 L CNN
F 2 "TerminalBlock_Phoenix:TerminalBlock_Phoenix_MKDS-1,5-2-5.08_1x02_P5.08mm_Horizontal" H 8200 4300 50  0001 C CNN
F 3 "~" H 8200 4300 50  0001 C CNN
	1    8200 4300
	0    1    1    0   
$EndComp
$Comp
L Connector:Screw_Terminal_01x02 Lamp_term10
U 1 1 60FA7FCF
P 8450 4300
F 0 "Lamp_term10" H 8530 4292 50  0000 L CNN
F 1 "12V" H 8530 4201 50  0000 L CNN
F 2 "TerminalBlock_Phoenix:TerminalBlock_Phoenix_MKDS-1,5-2-5.08_1x02_P5.08mm_Horizontal" H 8450 4300 50  0001 C CNN
F 3 "~" H 8450 4300 50  0001 C CNN
	1    8450 4300
	0    1    1    0   
$EndComp
$Comp
L Connector:Screw_Terminal_01x02 Lamp_term11
U 1 1 60FA82F9
P 8700 4300
F 0 "Lamp_term11" H 8780 4292 50  0000 L CNN
F 1 "12V" H 8780 4201 50  0000 L CNN
F 2 "TerminalBlock_Phoenix:TerminalBlock_Phoenix_MKDS-1,5-2-5.08_1x02_P5.08mm_Horizontal" H 8700 4300 50  0001 C CNN
F 3 "~" H 8700 4300 50  0001 C CNN
	1    8700 4300
	0    1    1    0   
$EndComp
Wire Wire Line
	7000 2750 7000 3550
Wire Wire Line
	7000 3550 7850 3550
Wire Wire Line
	7850 3550 7850 4100
Wire Wire Line
	7750 3350 8100 3350
Wire Wire Line
	8100 3350 8100 4100
Wire Wire Line
	7750 2750 7750 3350
Wire Wire Line
	8500 3400 8350 3400
Wire Wire Line
	8350 3400 8350 4100
Wire Wire Line
	8500 2750 8500 3400
Wire Wire Line
	9250 3400 8600 3400
Wire Wire Line
	8600 3400 8600 4100
Wire Wire Line
	9250 2750 9250 3400
$Comp
L Connector:Screw_Terminal_01x02 Lamp_term12
U 1 1 60FF52C4
P 8950 4300
F 0 "Lamp_term12" H 9030 4292 50  0000 L CNN
F 1 "12V" H 9030 4201 50  0000 L CNN
F 2 "TerminalBlock_Phoenix:TerminalBlock_Phoenix_MKDS-1,5-2-5.08_1x02_P5.08mm_Horizontal" H 8950 4300 50  0001 C CNN
F 3 "~" H 8950 4300 50  0001 C CNN
	1    8950 4300
	0    1    1    0   
$EndComp
Wire Wire Line
	8850 3650 8850 4100
Wire Wire Line
	10000 2750 10000 3650
$Comp
L power:+12V #PWR0102
U 1 1 60FFCE90
P 10450 3050
F 0 "#PWR0102" H 10450 2900 50  0001 C CNN
F 1 "+12V" H 10465 3223 50  0000 C CNN
F 2 "" H 10450 3050 50  0001 C CNN
F 3 "" H 10450 3050 50  0001 C CNN
	1    10450 3050
	0    -1   -1   0   
$EndComp
Wire Wire Line
	5750 4100 5800 4100
Wire Wire Line
	10050 4100 9700 4100
Wire Wire Line
	8950 4050 8950 4100
Wire Wire Line
	8950 4050 8700 4050
Wire Wire Line
	8700 4050 8700 4100
Connection ~ 8950 4050
Wire Wire Line
	8700 4050 8450 4050
Wire Wire Line
	7950 4050 7950 4100
Connection ~ 8700 4050
Wire Wire Line
	8200 4100 8200 4050
Connection ~ 8200 4050
Wire Wire Line
	8200 4050 7950 4050
Wire Wire Line
	8450 4100 8450 4050
Connection ~ 8450 4050
Wire Wire Line
	8450 4050 8200 4050
Wire Wire Line
	7950 4050 7150 4050
Wire Wire Line
	7150 4050 7150 4100
Connection ~ 7950 4050
Wire Wire Line
	7150 4050 6900 4050
Wire Wire Line
	6900 4050 6900 4100
Connection ~ 7150 4050
Wire Wire Line
	6900 4050 6650 4050
Wire Wire Line
	6650 4050 6650 4100
Connection ~ 6900 4050
Wire Wire Line
	6650 4050 6400 4050
Wire Wire Line
	6400 4050 6400 4100
Connection ~ 6650 4050
Wire Wire Line
	6400 4050 6150 4050
Wire Wire Line
	6150 4050 6150 4100
Connection ~ 6400 4050
Wire Wire Line
	6150 4050 5900 4050
Wire Wire Line
	5900 4050 5900 4100
Connection ~ 6150 4050
Wire Wire Line
	5900 4050 5650 4050
Wire Wire Line
	5650 4050 5650 4100
Connection ~ 5900 4050
Wire Wire Line
	1000 1750 1450 1750
$Comp
L Device:LED L1
U 1 1 6108506D
P 1450 1900
F 0 "L1" V 1397 1980 50  0000 L CNN
F 1 "LED" V 1488 1980 50  0000 L CNN
F 2 "LED_THT:LED_D3.0mm" H 1450 1900 50  0001 C CNN
F 3 "~" H 1450 1900 50  0001 C CNN
	1    1450 1900
	0    1    1    0   
$EndComp
Connection ~ 1450 1750
Wire Wire Line
	1450 1750 1750 1750
$Comp
L Device:LED L2
U 1 1 6109A87E
P 2200 1900
F 0 "L2" V 2147 1980 50  0000 L CNN
F 1 "LED" V 2238 1980 50  0000 L CNN
F 2 "LED_THT:LED_D3.0mm" H 2200 1900 50  0001 C CNN
F 3 "~" H 2200 1900 50  0001 C CNN
	1    2200 1900
	0    1    1    0   
$EndComp
$Comp
L Device:LED L3
U 1 1 610A3B0C
P 2950 1900
F 0 "L3" V 2897 1980 50  0000 L CNN
F 1 "LED" V 2988 1980 50  0000 L CNN
F 2 "LED_THT:LED_D3.0mm" H 2950 1900 50  0001 C CNN
F 3 "~" H 2950 1900 50  0001 C CNN
	1    2950 1900
	0    1    1    0   
$EndComp
$Comp
L Device:LED L4
U 1 1 610ACBAE
P 3700 1900
F 0 "L4" V 3647 1980 50  0000 L CNN
F 1 "LED" V 3738 1980 50  0000 L CNN
F 2 "LED_THT:LED_D3.0mm" H 3700 1900 50  0001 C CNN
F 3 "~" H 3700 1900 50  0001 C CNN
	1    3700 1900
	0    1    1    0   
$EndComp
$Comp
L Device:LED L5
U 1 1 610B5E0F
P 4450 1900
F 0 "L5" V 4397 1980 50  0000 L CNN
F 1 "LED" V 4488 1980 50  0000 L CNN
F 2 "LED_THT:LED_D3.0mm" H 4450 1900 50  0001 C CNN
F 3 "~" H 4450 1900 50  0001 C CNN
	1    4450 1900
	0    1    1    0   
$EndComp
$Comp
L Device:LED L6
U 1 1 610BEDC9
P 5200 1900
F 0 "L6" V 5147 1980 50  0000 L CNN
F 1 "LED" V 5238 1980 50  0000 L CNN
F 2 "LED_THT:LED_D3.0mm" H 5200 1900 50  0001 C CNN
F 3 "~" H 5200 1900 50  0001 C CNN
	1    5200 1900
	0    1    1    0   
$EndComp
$Comp
L Device:LED L7
U 1 1 610C7DDB
P 5950 1900
F 0 "L7" V 5897 1980 50  0000 L CNN
F 1 "LED" V 5988 1980 50  0000 L CNN
F 2 "LED_THT:LED_D3.0mm" H 5950 1900 50  0001 C CNN
F 3 "~" H 5950 1900 50  0001 C CNN
	1    5950 1900
	0    1    1    0   
$EndComp
$Comp
L Device:LED L8
U 1 1 610D0EA4
P 6700 1900
F 0 "L8" V 6647 1980 50  0000 L CNN
F 1 "LED" V 6738 1980 50  0000 L CNN
F 2 "LED_THT:LED_D3.0mm" H 6700 1900 50  0001 C CNN
F 3 "~" H 6700 1900 50  0001 C CNN
	1    6700 1900
	0    1    1    0   
$EndComp
$Comp
L Device:LED L9
U 1 1 610D9DC7
P 7450 1900
F 0 "L9" V 7397 1980 50  0000 L CNN
F 1 "LED" V 7488 1980 50  0000 L CNN
F 2 "LED_THT:LED_D3.0mm" H 7450 1900 50  0001 C CNN
F 3 "~" H 7450 1900 50  0001 C CNN
	1    7450 1900
	0    1    1    0   
$EndComp
$Comp
L Device:LED L10
U 1 1 610E3196
P 8200 1900
F 0 "L10" V 8147 1980 50  0000 L CNN
F 1 "LED" V 8238 1980 50  0000 L CNN
F 2 "LED_THT:LED_D3.0mm" H 8200 1900 50  0001 C CNN
F 3 "~" H 8200 1900 50  0001 C CNN
	1    8200 1900
	0    1    1    0   
$EndComp
$Comp
L Device:LED L11
U 1 1 610EC0F3
P 8950 1900
F 0 "L11" V 8897 1980 50  0000 L CNN
F 1 "LED" V 8988 1980 50  0000 L CNN
F 2 "LED_THT:LED_D3.0mm" H 8950 1900 50  0001 C CNN
F 3 "~" H 8950 1900 50  0001 C CNN
	1    8950 1900
	0    1    1    0   
$EndComp
$Comp
L Device:LED L12
U 1 1 610F50CA
P 9700 1900
F 0 "L12" V 9647 1980 50  0000 L CNN
F 1 "LED" V 9738 1980 50  0000 L CNN
F 2 "LED_THT:LED_D3.0mm" H 9700 1900 50  0001 C CNN
F 3 "~" H 9700 1900 50  0001 C CNN
	1    9700 1900
	0    1    1    0   
$EndComp
Wire Wire Line
	1750 1750 2200 1750
Connection ~ 2200 1750
Wire Wire Line
	2200 1750 2500 1750
Wire Wire Line
	2500 1750 2950 1750
Wire Wire Line
	3250 1750 3700 1750
Wire Wire Line
	4000 1750 4450 1750
Wire Wire Line
	4750 1750 5200 1750
Wire Wire Line
	5500 1750 5950 1750
$Comp
L Device:R R8
U 1 1 60DC9D7A
P 6700 2200
F 0 "R8" H 6770 2246 50  0000 L CNN
F 1 "500ohm" H 6770 2155 50  0000 L CNN
F 2 "Resistor_THT:R_Axial_DIN0207_L6.3mm_D2.5mm_P10.16mm_Horizontal" V 6630 2200 50  0001 C CNN
F 3 "~" H 6700 2200 50  0001 C CNN
	1    6700 2200
	1    0    0    -1  
$EndComp
Wire Wire Line
	6250 1750 6700 1750
Wire Wire Line
	7000 1750 7450 1750
Wire Wire Line
	7750 1750 8200 1750
Wire Wire Line
	8500 1750 8950 1750
Wire Wire Line
	9250 1750 9700 1750
Connection ~ 9700 1750
Wire Wire Line
	9700 1750 10000 1750
Connection ~ 8950 1750
Wire Wire Line
	8950 1750 9250 1750
Connection ~ 8200 1750
Wire Wire Line
	8200 1750 8500 1750
Connection ~ 7450 1750
Wire Wire Line
	7450 1750 7750 1750
Connection ~ 6700 1750
Wire Wire Line
	6700 1750 7000 1750
Connection ~ 5950 1750
Wire Wire Line
	5950 1750 6250 1750
Connection ~ 5200 1750
Wire Wire Line
	5200 1750 5500 1750
Connection ~ 4450 1750
Wire Wire Line
	4450 1750 4750 1750
Connection ~ 3700 1750
Wire Wire Line
	3700 1750 4000 1750
Connection ~ 2950 1750
Wire Wire Line
	2950 1750 3250 1750
Wire Wire Line
	10000 3650 8850 3650
Wire Wire Line
	2450 4550 2450 3700
$Comp
L Device:R R13
U 1 1 611C97F9
P 1650 5850
F 0 "R13" H 1720 5896 50  0000 L CNN
F 1 "1k" H 1720 5805 50  0000 L CNN
F 2 "Resistor_THT:R_Axial_DIN0207_L6.3mm_D2.5mm_P10.16mm_Horizontal" V 1580 5850 50  0001 C CNN
F 3 "~" H 1650 5850 50  0001 C CNN
	1    1650 5850
	0    -1   -1   0   
$EndComp
$Comp
L Device:R R14
U 1 1 611CA6A7
P 1650 6150
F 0 "R14" H 1720 6196 50  0000 L CNN
F 1 "1k" H 1720 6105 50  0000 L CNN
F 2 "Resistor_THT:R_Axial_DIN0207_L6.3mm_D2.5mm_P10.16mm_Horizontal" V 1580 6150 50  0001 C CNN
F 3 "~" H 1650 6150 50  0001 C CNN
	1    1650 6150
	0    -1   -1   0   
$EndComp
Wire Wire Line
	2450 5950 1800 5950
Wire Wire Line
	1800 5950 1800 5850
Wire Wire Line
	2450 6050 1800 6050
Wire Wire Line
	1800 6050 1800 6150
$Comp
L Switch:SW_Push SW1
U 1 1 611FB40E
P 1300 5850
F 0 "SW1" H 1300 6135 50  0000 C CNN
F 1 "SW_Push" H 1300 6044 50  0000 C CNN
F 2 "Button_Switch_THT:SW_PUSH_6mm" H 1300 6050 50  0001 C CNN
F 3 "~" H 1300 6050 50  0001 C CNN
	1    1300 5850
	1    0    0    -1  
$EndComp
$Comp
L Switch:SW_Push SW2
U 1 1 611FC554
P 1300 6150
F 0 "SW2" H 1300 6435 50  0000 C CNN
F 1 "SW_Push" H 1300 6344 50  0000 C CNN
F 2 "Button_Switch_THT:SW_PUSH_6mm" H 1300 6350 50  0001 C CNN
F 3 "~" H 1300 6350 50  0001 C CNN
	1    1300 6150
	1    0    0    -1  
$EndComp
Wire Wire Line
	1100 5850 1000 5850
Connection ~ 1000 5850
Wire Wire Line
	1000 5850 1000 6150
Wire Wire Line
	1100 6150 1000 6150
Connection ~ 1000 6150
Text Notes 7350 7600 0    50   ~ 0
Time, wasting it - Rebuit\n\n
Text Label 10550 7650 0    50   ~ 0
1
Text Notes 8100 7650 0    50   ~ 10
2021-06-19\n
$Comp
L Connector:Screw_Terminal_01x02 POWERSUPPLY1
U 1 1 6125F706
P 10800 2850
F 0 "POWERSUPPLY1" H 10880 2842 50  0000 L CNN
F 1 "12V" H 10880 2751 50  0000 L CNN
F 2 "TerminalBlock_Phoenix:TerminalBlock_Phoenix_MKDS-1,5-2-5.08_1x02_P5.08mm_Horizontal" H 10800 2850 50  0001 C CNN
F 3 "~" H 10800 2850 50  0001 C CNN
	1    10800 2850
	1    0    0    -1  
$EndComp
Wire Wire Line
	10450 3050 10600 3050
Wire Wire Line
	10600 3050 10600 2950
Wire Wire Line
	10450 2800 10600 2800
Wire Wire Line
	10600 2800 10600 2850
Connection ~ 10600 2800
Wire Wire Line
	10600 3050 10600 4050
Connection ~ 10600 3050
Wire Wire Line
	10600 4050 8950 4050
Wire Wire Line
	10600 1750 10000 1750
Wire Wire Line
	10600 1750 10600 2800
Connection ~ 10000 1750
Wire Wire Line
	3250 6750 3250 7050
Wire Wire Line
	3250 7050 1000 7050
Wire Wire Line
	1000 6150 1000 7050
$EndSCHEMATC
