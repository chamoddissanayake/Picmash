package com.picmas.picmas.controllers;

import com.picmas.picmas.payload.request.ImageSellRequest;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/sell")
public class SellController {
    @CrossOrigin(origins = "*")
    @PostMapping("/image")
    public String sellPhoto(@RequestBody ImageSellRequest sellReq) {
        System.out.println(sellReq);
        System.out.println("Sell Image");
        return "Sell Image";
    }

    @CrossOrigin(origins = "*")
    @PostMapping("/video")
    public String sellVideo() {
        System.out.println("Sell Video");
        return "Sell Video";
    }


}
