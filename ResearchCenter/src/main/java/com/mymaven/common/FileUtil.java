/**
 * @author 冯华杰
 * 
 * Email:fhj@sonluk.com.cn
 * 
 */
package com.mymaven.common;

import java.io.FileOutputStream;
import java.io.InputStream;

public class FileUtil {

	public static boolean SaveFileFromInputStream(InputStream stream,
			String path, String filename) {
		FileOutputStream fs = null;
		try {
			fs = new FileOutputStream(path + "/" + filename);
			byte[] buffer = new byte[1024 * 1024];
			int bytesum = 0;
			int byteread = 0;
			while ((byteread = stream.read(buffer)) != -1) {
				bytesum += byteread;
				fs.write(buffer, 0, byteread);
				fs.flush();
			}
			fs.close();
			stream.close();
		} catch (Exception e) {
			return false;
		}
		return true;
	}
}
