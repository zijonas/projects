package com.zijonas.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.zijonas.backend.model.Task;

public interface TaskRepository extends JpaRepository<Task, Long> {

	public List<Task> getTasksByHolderName(String holderName);
		
}
