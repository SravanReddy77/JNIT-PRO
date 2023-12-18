package com.example.demo_springboot.controller;

import com.example.demo_springboot.model.Registration;
import com.example.demo_springboot.repository.RegisterRepository;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class RegisterController {

    @Autowired
    private RegisterRepository registerRepository;

    @CrossOrigin("http://localhost:3000")
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

    @GetMapping("/{id}")
    public Optional<Registration> getRegisterById(@PathVariable("id") Integer id) {

        return registerRepository.findById(id);
    }

    @GetMapping("/inputByUuid")
    public Registration getRegistrationByUuid(@RequestParam String input) {

        return getRegistrationDetails("uuid",input);

    }

    @GetMapping("/inputByName")
    public Registration getRegistrationByName(@RequestParam String input) {

        return getRegistrationDetails("name",input);

    }

    public Registration getRegistrationDetails(String inputParam, String inputValue) {
        List<Registration> registrationList = registerRepository.findAll();
        if (!registrationList.isEmpty()) {
            for (Registration reg : registrationList) {
                if(inputParam.equalsIgnoreCase("uuid") && reg.getUuid().equalsIgnoreCase(inputValue)) {
                    return reg;
                } else if (inputParam.equalsIgnoreCase("name") && reg.getName().equalsIgnoreCase(inputValue)) {
                    return reg;
                }
            }
        }

        return new Registration();
    }

    
}
