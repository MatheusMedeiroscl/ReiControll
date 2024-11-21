package com.matheusmedeiros.reicontroll.repositories;

import com.matheusmedeiros.reicontroll.entitites.Products;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Products,Long> {
}
