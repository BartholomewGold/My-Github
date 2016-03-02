/**
 * @author 冯华杰
 * 
 * Email:fhj@sonluk.com.cn
 * 
 */
package com.mymaven.timer;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

//@Component("taskJob")
public class SpringTest {
//	@Scheduled(cron = "0 5 17 * * ?")
	private int a=1;
	public void job1() {
		System.out.println("任务进行中。。。");
		System.out.println(a++);
	}
}
