package com.example.demo_springboot.controller;


import com.example.demo_springboot.model.Consultants;
import com.example.demo_springboot.repository.ConsultantsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ConsultantsController {

    @Autowired
    private ConsultantsRepository consultantsRepository;


    @PostMapping("/saveConsultants")
    public Consultants saveRegister(@RequestBody Consultants consultants) {

        return consultantsRepository.save(consultants);
    }

    @GetMapping("/getConsultants")
    public List<Consultants> getRegister() {
        return consultantsRepository.findAll();
    }

    
    @DeleteMapping("/deleteConsultants")
    public void deleteRegisterByID(@RequestBody Consultants consultants) {

        consultantsRepository.delete(consultants);
    }

    
}
