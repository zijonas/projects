package com.zijonas.backend.controller;

import java.security.Principal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.zijonas.backend.model.User;
import com.zijonas.backend.repository.UserRepository;

@RestController
public class ApiController {

	@Autowired
	UserRepository repo;
	
	@RequestMapping(value="/api/getUsername", produces="application/json")
	public User getUser(Principal principal) {
		User user = new User();
		user.setName(principal.getName());
		repo.save(user);
		return user;
	}
}
