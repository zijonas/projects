package com.zijonas.backend.controller;

import java.security.Principal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.zijonas.backend.model.Task;
import com.zijonas.backend.repository.TaskRepository;

@RestController
public class ApiController {
	
	@Autowired
	TaskRepository taskRepo;
	
	@RequestMapping(method=RequestMethod.POST, value="/insertTask", produces="application/json")
	public Object addTask(Principal principal, @RequestParam("task") String task) {
		taskRepo.save(new Task(task, principal.getName()));
		
		return "{\"Message\":\"Success\"}";
	}
	
	@RequestMapping(value="/getTasks", produces="application/json")
	public List<Task> getTasks(Principal principal) {
		return taskRepo.getTasksByHolderName(principal.getName());
	}
}
