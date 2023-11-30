package com.example.demo_springboot.repository;

import com.example.demo_springboot.model.Register;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RegisterRepository extends JpaRepository<Register, Integer> {
}
