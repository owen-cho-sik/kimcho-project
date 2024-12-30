package com.site.tartboard.common.utils;

import java.util.HashMap;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class BaseMap extends HashMap<String, Object>{
	private static final long serialVersionUID = -3931273744526699991L;
	private final static Pattern COLUMN_PATTERN =  Pattern.compile("_[a-zA-Z0-9]");
	
	public Object put(String key, Object value) {
		Matcher keyMatcher = COLUMN_PATTERN.matcher(key);
		String camelKey = "";
		int start = 0;
		while(keyMatcher.find()) {
			String part = key.substring(start, keyMatcher.end());
			String replaceMent = part.replaceAll("-", "");
			replaceMent = replaceMent.toLowerCase();
			
			replaceMent = replaceMent.substring(0, replaceMent.length() - 1) + replaceMent.substring(replaceMent.length() -1, start).toUpperCase();
			
			start = keyMatcher.end();
			camelKey += replaceMent;
		}
		
		if(start > 0 && start < key.length()) {
			camelKey += key.substring(start).toLowerCase();
		}else if(start < key.length()){
			camelKey = key;
		}
		
		return super.put(camelKey, value);
	}
}
