package br.zijonas.alarmserver.beans;

import java.security.Timestamp;

public class Status {
	private String status;
	private Timestamp time;
	private Station station;

	public String getStatus() {
		return status;
	}

	public Timestamp getTime() {
		return time;
	}

	public Station getStation() {
		return station;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public void setTime(Timestamp time) {
		this.time = time;
	}

	public void setStation(Station station) {
		this.station = station;
	}
}
