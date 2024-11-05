package com.site.tartboard;

import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ApiController {

	@GetMapping("api/test")
	public List<String> Test(){
		return Arrays.asList("±è¼ºÀº ¹Ùº¸.");
	}
}