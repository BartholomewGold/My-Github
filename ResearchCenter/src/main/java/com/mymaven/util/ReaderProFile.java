/**
 * @author 冯华杰
 * 
 * Email:fhj@sonluk.com.cn
 * 
 */
package com.mymaven.util;

import java.io.BufferedInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.Iterator;
import java.util.Properties;
import java.util.Set;

import com.sonluk.util.LoginUserUtil;

public class ReaderProFile {
	private static Properties props;
	private static String path = ReaderProFile.class.getClass()
			.getResource("/").getPath()
			 + "user.properties";
	static {
		InputStream in;
		try {
			in = new BufferedInputStream(new FileInputStream(path));
			props = new Properties();
			props.load(in);
			Set keys = props.keySet();
			for (Iterator it = keys.iterator(); it.hasNext();) {
				String k = (String) it.next();
				LoginUserUtil.addOrUpdateUser(k.trim(), props.getProperty(k).trim());
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public static void addOrUpdate(String username, String password) {
		try {
			props.load(new FileInputStream(path));
			OutputStream fos = new FileOutputStream(path);
			props.setProperty(username, password);
			props.store(fos,null);
			LoginUserUtil.addOrUpdateUser(username.trim(), password.trim());
		} catch (IOException e) {
			System.err.println("属性文件更新错误");
		}
	}

}
