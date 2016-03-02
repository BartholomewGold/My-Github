/**
 * @author 冯华杰
 * 
 * Email:fhj@sonluk.com.cn
 * 
 */
package com.sonluk.util;

import java.util.HashMap;
import java.util.Map;

public class LoginUserUtil {
	private static Map<String,String> users=new HashMap<String, String>();
	
	public static boolean login(String username,String password){
		if(password.trim().equals(users.get(username).trim())){
			return true;
		}
		return false;
	}
	
	public static void addOrUpdateUser(String username,String password){
		users.put(username, password);
	}
	
	
}
