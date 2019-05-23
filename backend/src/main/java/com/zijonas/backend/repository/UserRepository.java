package com.zijonas.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.zijonas.backend.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

}
