package com.site.tartboard.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.site.tartboard.entity.User;
import com.site.tartboard.mapper.UserMapper;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserMapper userMapper;

    @Autowired
    private PasswordEncoder passwordEncoder;

    // 사용자 등록 메서드
    public void registerUser(User user) {
        // 비밀번호 암호화
        String encodedPassword = passwordEncoder.encode(user.getUserPassword());
        System.out.println("encodedPassword");
        user.setUserPassword(encodedPassword);
        userMapper.insertUser(user);
    }

    // 사용자 이름으로 사용자 조회 메서드
    public Optional<User> findByUserEmail(String email) {
    	System.out.println("==============>>>> findByUserEmail");
    	System.out.println(email);
    	System.out.println(userMapper.findByUserEmail(email));
        return Optional.ofNullable(userMapper.findByUserEmail(email));
    }

    // 로그인 메서드
    public boolean login(String email, String password) {
        Optional<User> user = findByUserEmail(email);
        if (user.isPresent()) {
            // 입력된 비밀번호와 저장된 암호화된 비밀번호 비교
            return passwordEncoder.matches(password, user.get().getUserPassword());
        }
        return false; // 사용자 존재하지 않음 또는 비밀번호 불일치
    }
}
