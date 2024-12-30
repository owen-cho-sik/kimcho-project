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

    // ����� ��� �޼���
    public void registerUser(User user) {
        // ��й�ȣ ��ȣȭ
        String encodedPassword = passwordEncoder.encode(user.getUserPassword());
        System.out.println("encodedPassword");
        user.setUserPassword(encodedPassword);
        userMapper.insertUser(user);
    }

    // ����� �̸����� ����� ��ȸ �޼���
    public Optional<User> findByUserEmail(String email) {
    	System.out.println("==============>>>> findByUserEmail");
    	System.out.println(email);
    	System.out.println(userMapper.findByUserEmail(email));
        return Optional.ofNullable(userMapper.findByUserEmail(email));
    }

    // �α��� �޼���
    public boolean login(String email, String password) {
        Optional<User> user = findByUserEmail(email);
        if (user.isPresent()) {
            // �Էµ� ��й�ȣ�� ����� ��ȣȭ�� ��й�ȣ ��
            return passwordEncoder.matches(password, user.get().getUserPassword());
        }
        return false; // ����� �������� ���� �Ǵ� ��й�ȣ ����ġ
    }
}
