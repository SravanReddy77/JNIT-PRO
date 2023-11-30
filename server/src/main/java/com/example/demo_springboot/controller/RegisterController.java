package com.example.demo_springboot.controller;

import com.example.demo_springboot.model.Register;
import com.example.demo_springboot.repository.RegisterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RegisterController {

    @Autowired
    RegisterRepository registerRepository;
    @PostMapping("/saveRegister")
    public Register saveRegister(@RequestBody Register register) {

        return registerRepository.save(register);
    }
}
