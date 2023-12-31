package com.example.demo_springboot.repository;

import com.example.demo_springboot.model.Consultants;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ConsultantsRepository extends JpaRepository<Consultants, Integer> {
}
