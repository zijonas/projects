#!/bin/bash
status=`mosquitto_sub -C 1 -h iot.eclipse.org -p 1883 -t home/zij/alarm  | grep state | awk '{print $NF}' | cut -d '"' -f2`

time=`mosquitto_sub -C 1 -h iot.eclipse.org -p 1883 -t home/zij/alarm | grep timestamp | awk '{print $NF}' | cut -d '"' -f2`

delta=1000

last_time=`cat /tmp/lasttimealarmduino`
echo $time /tmp/lasttimealarmduino

if $time-$lasttime>$status*1000+$delta
do
status=666
done
fi

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
