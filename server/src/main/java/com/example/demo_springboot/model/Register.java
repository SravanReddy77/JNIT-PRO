package com.example.demo_springboot.model;

import javax.persistence.*;

@Entity
@Table(name = "register")
public class Register {

    @Column(name = "username")
    private String username;

    @Column(name = "password")
    private String password;

    public Register(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}