/**
 * @author 冯华杰
 * 
 * Email:fhj@sonluk.com.cn
 * 
 */
package com.mymaven.util;

import java.util.List;

public class ListUtils {
	public static String listToWhere(List<String> list){
		String ret="";
		for (String string : list) {
			ret+="'"+string+"',";
		}
		if(!ret.equals("")){
			return "("+ret.substring(0,ret.length()-1)+")";
		}
		return "";
	}
}
