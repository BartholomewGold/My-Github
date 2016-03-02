package com.mymaven.common;
/**
 * @author 冯华杰
 * 
 * Email:fhj@sonluk.com.cn
 * 
 */

public class Encoder {
	/**
	 * fhj 中文-->unicode编码
	 * 
	 */
	public static String encoding(final String gbString) {
		if (gbString == null) {
			return " ";
		}
		char[] utfBytes = gbString.toCharArray();
		StringBuffer buffer = new StringBuffer();
		for (int byteIndex = 0; byteIndex < utfBytes.length; byteIndex++) {
			String hexB = Integer.toHexString(utfBytes[byteIndex]);
			if (hexB.length() <= 2) {
				hexB = "00" + hexB;
			}
			buffer.append("\\u" + hexB);
		}
		return buffer.substring(0);
	}
}