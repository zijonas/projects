#!/bin/bash
TEMP_FILE="/tmp/.tmp123duino"
SERVER_TIME="/tmp/.tmp123servertime"
LOCAL_TIME="/tmp/.tmp123localtime"

mosquitto_sub -C 1 -h iot.eclipse.org -p 1883 -t home/zij/alarm > "$TEMP_FILE"
#status=`mosquitto_sub -C 1 -h iot.eclipse.org -p 1883 -t home/zij/alarm  | grep state | awk '{print $NF}' | cut -d '"' -f2`
a_stat=`cat "$TEMP_FILE" | grep state | awk '{print $NF}' | cut -d '"' -f2`
a_time=`cat "$TEMP_FILE" | grep timestamp | awk '{print $NF}' | cut -d '"' -f2`


if [ -f "SERVER_TIME" ]
then
	p_stime=`cat "$SERVER_TIME"`
	if [ 	$p_time -eq $a_stime ]
	then
		p_ltime=`cat "$LOCAL_TIME"`
		time_diff=$((date +%s - $p_ltime - 5))
		if [ $time_diff -gt $a_stat ]
		then
			a_stat=666
		fi
	else
		echo $a_time > "$SERVER_TIME"
		echo date +%s > "$LOCAL_TIME"
	fi
else
		echo $a_time > "$SERVER_TIME"
		echo date +%s > "$LOCAL_TIME"
fi

case $a_stat in
	5)   echo "<img>/opt/alarmMonitor/emergency.png</img>";
	     echo "<tool>EMERGENCY!!!!!!</tool>";;
	10)  echo "<img>/opt/alarmMonitor/orange_shield.png</img>";
	     echo "<tool>Fired and armed again!</tool>";;
	30)  echo "<img>/opt/alarmMonitor/green_shield.png</img>";
	     echo "<tool>Armed and ready!</tool>";;
	100) echo "<img>/opt/alarmMonitor/blue_shield.png</img>";
	     echo "<tool>Alarm is disabled</tool>";;
	*)   echo "<img>/opt/alarmMonitor/red_shield.png</img>";
	     echo "<tool>Invalid Status or no connection to Host! (Last Status: $stat)</tool>";;
esac
