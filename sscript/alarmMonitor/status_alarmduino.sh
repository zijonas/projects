#!/bin/bash
status=`mosquitto_sub -C 1 -h iot.eclipse.org -p 1883 -t home/zij/alarm | xargs -d$'\n' -L1 sh -c 'date "+%D %T.%3N $0"' | grep state | awk '{print $NF}' | cut -d '"' -f2`

export LASTISALIVE=20

case $status in
	5)   echo "<img>/opt/alarmMonitor/emergency.png</img>";
	     echo "<tool>EMERGENCY!!!!!!</tool>";;
	10)  echo "<img>/opt/alarmMonitor/orange_shield.png</img>";
	     echo "<tool>Fired and armed again!</tool>";;
	30)  echo "<img>/opt/alarmMonitor/green_shield.png</img>";
	     echo "<tool>Armed and ready!</tool>";;
	100) echo "<img>/opt/alarmMonitor/blue_shield.png</img>";
	     echo "<tool>Alarm is disabled</tool>";;
	*)   echo "<img>/opt/alarmMonitor/red_shield.png</img>";
	     echo "<tool>Invalid Status or no connection to Host!</tool>";;
esac
