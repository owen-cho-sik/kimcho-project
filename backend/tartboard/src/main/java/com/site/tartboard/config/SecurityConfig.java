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

    // HTTP 보안 설정
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.csrf(csrfConfigurer -> csrfConfigurer.disable()) // CSRF 비활성화
            .authorizeHttpRequests(authorize -> 
                authorize
                    .requestMatchers("/auth/**", "/users/registerUser").permitAll() // 인증 관련 API와 회원가입 API를 허용
                    .anyRequest().authenticated() // 나머지 요청은 인증이 필요
            )
            .formLogin(form -> form
                .loginPage("/login") // 커스텀 로그인 페이지를 사용할 경우 설정
                .defaultSuccessUrl("/home", true) // 로그인 성공 후 이동할 페이지 지정
                .permitAll() // 로그인 페이지 접근은 모두 허용
            )
            .logout(logout -> logout
                .permitAll() // 로그아웃은 모두 허용
                .logoutSuccessUrl("/login?logout") // 로그아웃 후 리다이렉트될 페이지
            )
            .cors(cors -> cors.configurationSource(corsConfigurationSource())); // CORS 설정 추가

        return http.build();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList("http://localhost:3001")); // 허용할 origin (React 앱의 URL)
        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS")); // 허용할 HTTP 메서드
        configuration.setAllowedHeaders(Arrays.asList("Authorization", "Content-Type", "Accept")); // 허용할 헤더
        configuration.setAllowCredentials(true); // 자격 증명 허용 (예: 쿠키)

        // 모든 경로에 대해 위 CORS 설정을 적용
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);

        return source;
    }
}
