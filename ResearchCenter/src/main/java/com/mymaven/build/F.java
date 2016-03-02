/**
 * @author 冯华杰
 * 
 * Email:fhj@sonluk.com.cn
 * 
 */
package com.mymaven.build;

import java.util.Collection;
import java.util.Properties;

public class F {
public static void main(String[] args) {
	Properties a = System.getProperties();
	Collection<Object> s = a.values();
	for (Object object : s) {
		System.out.println(object.toString());
	}
}
}
