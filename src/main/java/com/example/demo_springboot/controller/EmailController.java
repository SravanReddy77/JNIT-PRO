package com.example.demo_springboot.controller;

import com.example.demo_springboot.model.EmailRequest;
import com.example.demo_springboot.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class EmailController {

    @Autowired
    private EmailService emailService;

    @RequestMapping(value = "/sendemail", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> sendEmail(@RequestBody EmailRequest request) {
        boolean result = this.emailService.sendEmail(request.getMessage(), request.getSubject(), request.getTo());
        if (result) {
            return ResponseEntity.ok("Email Sent Successfully");
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Email Not Sent");
        }
    }

    
}
