#!/bin/bash

installDir = "/opt/alarmMonitor"


sudo apt-get install xfce4-genmon-plugin

mkdir = $installDir

cp *.png $installDir
cp status_alarmduino.sh $installDir
