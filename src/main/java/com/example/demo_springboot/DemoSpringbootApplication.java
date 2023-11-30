package com.example.demo_springboot;

import com.example.demo_springboot.repository.RegisterRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
public class DemoSpringbootApplication {

    public static void main(String[] args) {

        SpringApplication.run(DemoSpringbootApplication.class, args);
    }


}
