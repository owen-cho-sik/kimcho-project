package com.site.tartboard.mapper;

import org.apache.ibatis.annotations.Mapper;
import com.site.tartboard.entity.User;

@Mapper
public interface UserMapper {
	
	/**
	 * 사용자 회원가입
	 * @param user
	 * @return
	 * @throws SQLException
	 * @throws BadSqlGrammarException
	 */
	void insertUser(User user);
	
	User findByUserEmail(String email);
}
