package com.zijonas.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.zijonas.backend.model.TaskEntity;

public interface TaskRepository extends JpaRepository<TaskEntity, Long> {

	public List<TaskEntity> getTasksByHolderName(String holderName);
		
}
