package com.example.partymasterapi.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/PartmasterApi")
@CrossOrigin
public class PartymaterApiController {

	@GetMapping(path = "")
	public String Get() {
		return "Result from Java spring boot Rest Api : Partymaster 1.0";
	}
}
