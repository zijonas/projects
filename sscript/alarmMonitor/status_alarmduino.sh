#!/bin/bash
TEMP_FILE="/tmp/.tmp123duino"
SERVER_TIME="/tmp/.tmp123servertime"
LOCAL_TIME="/tmp/.tmp123localtime"

mosquitto_sub -C 1 -h iot.eclipse.org -p 1883 -t home/zij/alarm > "$TEMP_FILE"
#status=`mosquitto_sub -C 1 -h iot.eclipse.org -p 1883 -t home/zij/alarm  | grep state | awk '{print $NF}' | cut -d '"' -f2`
a_stat=`cat "$TEMP_FILE" | grep state | awk '{print $NF}' | cut -d '"' -f2`
a_time=`cat "$TEMP_FILE" | grep timestamp | awk '{print $NF}' | cut -d '"' -f2`
stat=$a_stat

if [ -f "$SERVER_TIME" ]
then
	p_stime=`cat "$SERVER_TIME"`
	if [ $p_stime -eq $a_time ]
	then
		p_ltime=`cat "$LOCAL_TIME"`
		ttime=`date +%s`
		time_diff=$(($ttime - $p_ltime - 5))
#		echo $p_ltime
#		echo $ttime
#		echo $time_diff
		if [ $time_diff -gt $a_stat ]
		then
			stat=666
		fi
	else
		echo $a_time > "$SERVER_TIME"
		echo `date +%s` > "$LOCAL_TIME"
	fi
else
		echo $a_time > "$SERVER_TIME"
		echo `date +%s` > "$LOCAL_TIME"
fi

case $stat in
	5)   echo "<img>/opt/alarmMonitor/emergency.png</img>";
	     echo "<tool>EMERGENCY!!!!!!</tool>";;
	10)  echo "<img>/opt/alarmMonitor/orange_shield.png</img>";
	     echo "<tool>Fired and armed again!</tool>";;
	30)  echo "<img>/opt/alarmMonitor/green_shield.png</img>";
	     echo "<tool>Armed and ready!</tool>";;
	100) echo "<img>/opt/alarmMonitor/blue_shield.png</img>";
	     echo "<tool>Alarm is disabled</tool>";;
	*)   echo "<img>/opt/alarmMonitor/red_shield.png</img>";
	     echo "<tool>Invalid Status or no connection to Host! (Last Status: $a_stat)</tool>";;
esac
