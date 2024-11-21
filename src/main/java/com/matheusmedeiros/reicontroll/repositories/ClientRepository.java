package com.matheusmedeiros.reicontroll.repositories;

import com.matheusmedeiros.reicontroll.entitites.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientRepository extends JpaRepository<Client,Long> {
}
