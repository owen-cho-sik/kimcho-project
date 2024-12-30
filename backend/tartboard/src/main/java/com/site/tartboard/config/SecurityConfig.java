package com.site.tartboard.config;

import java.util.Arrays;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@Configuration
public class SecurityConfig {

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    // HTTP ���� ����
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.csrf(csrfConfigurer -> csrfConfigurer.disable()) // CSRF ��Ȱ��ȭ
            .authorizeHttpRequests(authorize -> 
                authorize
                    .requestMatchers("/auth/**", "/users/registerUser").permitAll() // ���� ���� API�� ȸ������ API�� ���
                    .anyRequest().authenticated() // ������ ��û�� ������ �ʿ�
            )
            .formLogin(form -> form
                .loginPage("/login") // Ŀ���� �α��� �������� ����� ��� ����
                .defaultSuccessUrl("/home", true) // �α��� ���� �� �̵��� ������ ����
                .permitAll() // �α��� ������ ������ ��� ���
            )
            .logout(logout -> logout
                .permitAll() // �α׾ƿ��� ��� ���
                .logoutSuccessUrl("/login?logout") // �α׾ƿ� �� �����̷�Ʈ�� ������
            )
            .cors(cors -> cors.configurationSource(corsConfigurationSource())); // CORS ���� �߰�

        return http.build();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList("http://localhost:3001")); // ����� origin (React ���� URL)
        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS")); // ����� HTTP �޼���
        configuration.setAllowedHeaders(Arrays.asList("Authorization", "Content-Type", "Accept")); // ����� ���
        configuration.setAllowCredentials(true); // �ڰ� ���� ��� (��: ��Ű)

        // ��� ��ο� ���� �� CORS ������ ����
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);

        return source;
    }
}
