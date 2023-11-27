package com.example.demo_springboot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class })
public class DemoSpringbootApplication {

    public static void main(String[] args) {

        SpringApplication.run(DemoSpringbootApplication.class, args);
    }

}
