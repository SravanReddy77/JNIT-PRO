package com.example.demo_springboot.service;

import org.springframework.stereotype.Service;

import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.util.Properties;

@Service
public class EmailService {

    public boolean sendEmail(String message, String subject, String to) {

        boolean flag = false;

        String from = "jnit19208@gmail.com";
        String host="smtp.gmail.com";
        Properties properties = System.getProperties();
        System.out.println("PROPERTIES "+properties);
        properties.put("mail.smtp.host", host);
        properties.put("mail.smtp.port","465");
        properties.put("mail.smtp.ssl.enable","true");
        properties.put("mail.smtp.auth","true");
        Session session=Session.getInstance(properties, new Authenticator() {
            @Override
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication("jnit19208@gmail.com", "jahx ruao ifci kcgn");
            }
        });

        session.setDebug(true);
        MimeMessage m = new MimeMessage(session);
        try {
            m.setFrom(from);
            m.addRecipient(Message.RecipientType.TO, new InternetAddress(to));
            m.setSubject(subject);
            m.setText(message);
            Transport.send(m);
            System.out.println("Sent success...................");
            flag = true;
        }catch (Exception e) {
            e.printStackTrace();
        }
        return flag;
    }

}



