package br.zijonas.alarmserver.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="station")
public class Station {
	@Id
	private int id;
	private String name;
	@Column(name="ip_address")
	private String ipAddress;

	public int getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public String getIpAddress() {
		return ipAddress;
	}

	public void setId(int id) {
		this.id = id;
	}

	public void setName(String name) {
		this.name = name;
	}

	public void setIpAddress(String ipAddress) {
		this.ipAddress = ipAddress;
	}
}
