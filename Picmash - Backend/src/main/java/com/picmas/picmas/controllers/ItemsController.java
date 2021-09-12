package com.picmas.picmas.controllers;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/items")
public class ItemsController {
    @CrossOrigin(origins = "*")
    @GetMapping("/all")
    public String allAccess() {
        System.out.println("-->Public Content");
        return "Public Content.";
    }

    @CrossOrigin(origins = "*")
    @GetMapping("/user")
    @PreAuthorize("hasRole('USER') or  hasRole('ADMIN')")
    public String userAccess() {
        System.out.println("-->User Content");
        return "User Content.";
    }

    @CrossOrigin(origins = "*")
    @GetMapping("/admin")
    @PreAuthorize("hasRole('ADMIN')")
    public String adminAccess() {
        System.out.println("-->Admin Board.");
        return "Admin Board.";
    }
}
