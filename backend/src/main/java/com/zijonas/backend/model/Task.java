package com.zijonas.backend.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tasks")
public class Task {
	@Id
	@GeneratedValue
	@Column(name = "id")
	private Long id;

	@Column(name = "description")
	private String description;

	@Column(name = "dueDate")
	private String dueDate;

	@Column(name = "title")
	private String title;

	@Column(name = "holderName")
	private String holderName;

	public String getDueDate() {
		return dueDate;
	}

	public void setDueDate(String dueDate) {
		this.dueDate = dueDate;
	}

	public Long getId() {
		return id;
	}

	public Task() {
	}

	public Task(String task, String holderName) {
		super();
		this.title = task;
		this.holderName = holderName;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String task) {
		this.title = task;
	}

	public String getHolderName() {
		return holderName;
	}

	public void setHolderName(String holderName) {
		this.holderName = holderName;
	}

	@Override
	public String toString() {
		return "title=" + title + ", description=" + description + ", holderName=" + holderName + ", dueDate="
				+ dueDate;
	}

}
