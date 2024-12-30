package com.site.tartboard.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.site.tartboard.entity.User;
import com.site.tartboard.service.UserService;

@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserService userService;
    
    @PostMapping(value = "/registerUser")
    public String addUser(@RequestBody User user) {
    	try {
			/*
			 * User userTest = new User(); userTest.setAddr("seoul");
			 * userTest.setEmail("owen_cho@naver.com"); userTest.setName("owen");
			 * userTest.setPassword("12344"); userTest.setPhone("01029293838");
			 * 
			 * System.out.println(userTest.getAddr());
			 * System.out.println(userTest.getName());
			 */
    		userService.registerUser(user);
            return "회원가입 성공";
    	}catch(Exception e) {
            return "회원가입 실패: " + e.getMessage();
    	}

    }
}
