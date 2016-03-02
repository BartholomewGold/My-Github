/**
 * @author 冯华杰
 * 
 * Email:fhj@sonluk.com.cn
 * 
 */
package com.mymaven.doit;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component("taskJob")
public class AutoTimer {
	private int a=1;
	@Scheduled(cron = "0/3 * * * * ?")
	public void job1() {
		System.out.println("任务进行中。。。");
		System.out.println(a++);
	}
}
