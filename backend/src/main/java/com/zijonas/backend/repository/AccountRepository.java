package com.zijonas.backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.zijonas.backend.model.AccountEntity;

public interface AccountRepository extends JpaRepository<AccountEntity, Long> {

	Optional<AccountEntity> findByUsername(String username);
}
