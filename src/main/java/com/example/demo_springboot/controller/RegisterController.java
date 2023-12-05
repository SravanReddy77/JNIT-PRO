package com.example.demo_springboot.controller;

import com.example.demo_springboot.model.Registration;
import com.example.demo_springboot.repository.RegisterRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
public class RegisterController {

    @Autowired
    private RegisterRepository registerRepository;

    @PostMapping("/saveRegister")
    public Registration saveRegister(@RequestBody Registration register) {

        return registerRepository.save(register);
    }

    @GetMapping("/getRegister")
    public List<Registration> getRegister() {
        return registerRepository.findAll();
    }

    
    @DeleteMapping("/deleteRegister")
    public void deleteRegisterByID(@RequestBody Registration register) {

         registerRepository.delete(register);
    }

    
}
