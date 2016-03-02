/**
 * @author 冯华杰
 * 
 * Email:fhj@sonluk.com.cn
 * 
 */
package com.mymaven.util;

import java.text.DecimalFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.beans.factory.FactoryBean;

public class SquenceFactory implements FactoryBean<String>{
	    private static long counter = 0;
	     
	    public synchronized String getObject() {
	        String date = new SimpleDateFormat("yyyyMMddHHmmss").format(new Date()) ;
	        String sequ = new DecimalFormat("0000").format(counter ++);
	        if(counter>=10000){
	        	counter = 0;
	        }
	        return date + sequ;
	    }

		public Class<?> getObjectType() {
			return String.class;
		}

		public boolean isSingleton() {
			return false;
		}
}
