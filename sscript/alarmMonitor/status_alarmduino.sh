#!/bin/bash
status=`mosquitto_sub -C 1 -h iot.eclipse.org -p 1883 -t home/zij/alarm | xargs -d$'\n' -L1 sh -c 'date "+%D %T.%3N $0"' | grep state | awk '{print $NF}' | cut -d '"' -f2`

export LASTISALIVE=20

case $status in
	5)   echo "<img>/opt/alarmduino/emergency.png</img>";;
	10)  echo "<img>/opt/alarmduino/orange_shield.png</img>";;
	30)  echo "<img>/opt/alarmduino/green_shield.png</img>";;
	100) echo "<img>/opt/alarmduino/blue_shield.png</img>";;
	*)   echo "<img>/opt/alarmduino/red_shield.png</img>";;
esac
