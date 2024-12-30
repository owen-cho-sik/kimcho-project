package com.site.tartboard;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.site.tartboard.mapper")
public class TartboardApplication {

	public static void main(String[] args) {
		SpringApplication.run(TartboardApplication.class, args);
	}
}
