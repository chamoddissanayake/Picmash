package com.picmas.picmas.controllers;

import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport;
import com.google.api.client.http.InputStreamContent;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.services.drive.Drive;
import com.google.api.services.drive.model.File;
import com.google.api.services.drive.model.FileList;
import com.picmas.picmas.authentication.GoogleOAuth;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.FileInputStream;
import java.io.IOException;
import java.security.GeneralSecurityException;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/save")
public class SaveController {

    @CrossOrigin(origins = "*")
    @PostMapping("/image")
    public String saveImage() throws IOException, GeneralSecurityException {
        System.out.println("inside saveImage()");
//        GoogleOAuth.uploadToUserDrive("C:\\Users\\User\\Desktop\\2382371.jpg");
        GoogleOAuth.uploadToUserDrive("https://oauthssdproject.s3.ap-south-1.amazonaws.com/images/1.jpg");
        System.out.println("Save Image Successfully");
        return "Save Image Successfully";
    }

    @CrossOrigin(origins = "*")
    @PostMapping("/video")
    public String saveVideo() {
        System.out.println("Save Video");
        return "Save Video";
    }


}
