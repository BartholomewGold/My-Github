/**
 * @author 冯华杰
 * 
 * Email:fhj@sonluk.com.cn
 * 
 */
package com.sonluk.util;

import java.util.HashMap;
import java.util.Map;

public class CacheUtils {
	public static boolean isRun = true;
	public static final Map<Long, Object> CACHEMAP = new HashMap<Long, Object>();
	static {
		System.out.println("自定义缓存启动");
		Thread t = new Thread(new Runnable() {
			public void run() {
				while (isRun) {
					long stime=System.currentTimeMillis();
					for (Map.Entry<Long, Object> entry : CACHEMAP.entrySet()) {
						Long key=entry.getKey();
						if((stime-key)>(60*1000*10)){
							removeCache(key);
						}
					}
					try {
						Thread.sleep(60*1000);
					} catch (InterruptedException e) {
						e.printStackTrace();
					}
				}
			}
		});
		t.start();
	}

	public static synchronized Long addCache(Object obj) {
		Long code = System.currentTimeMillis();
		CACHEMAP.put(code, obj);
		return code;
	}

	private static synchronized void removeCache(Long key) {
		CACHEMAP.remove(key);
	}

}
