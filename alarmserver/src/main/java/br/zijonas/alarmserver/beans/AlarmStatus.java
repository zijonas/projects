package br.zijonas.alarmserver.beans;

import java.security.Timestamp;

public class AlarmStatus {
	private String status;
	private Timestamp time;
	private AlarmStation station;

	public String getStatus() {
		return status;
	}

	public Timestamp getTime() {
		return time;
	}

	public AlarmStation getStation() {
		return station;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public void setTime(Timestamp time) {
		this.time = time;
	}

	public void setStation(AlarmStation station) {
		this.station = station;
	}
}
