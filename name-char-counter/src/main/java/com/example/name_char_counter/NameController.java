package com.example.name_char_counter;


import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200") // Allow requests from this origin
public class NameController {

    @PostMapping("/greet")
    public String greetUser(@RequestParam String name) {
        int length = name.length();
        return "Hello, " + name + "! You have " + length + " characters in your name.";
    }

}
