package com.example.backend;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class HelloWorldController {

    @CrossOrigin(origins = "*")
    @GetMapping("/hello")
    public ResponseEntity<String>getHello(){
        return new ResponseEntity<String>("Nice", HttpStatus.OK);
    }
}
