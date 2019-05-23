package com.zijonas.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.zijonas.backend.model.User;
import com.zijonas.backend.repository.UserRepository;

@RestController
public class ApiController {

	@Autowired
	UserRepository repo;
	
	@RequestMapping(value="/api/insertUser", produces="application/json")
	public User insertUser() {
		User user = new User();
		user.setName("zijonas");
		
		repo.save(user);
		return user;
	}
}
