/**
 * @author 冯华杰
 * 
 * Email:fhj@sonluk.com.cn
 * 
 */
package com.mymaven.timer;

import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.quartz.QuartzJobBean;
import com.mymaven.service.AvgService;
import com.mymaven.spring.SpringContextHolder;

public class TimerTest extends QuartzJobBean {
	@Autowired
	private AvgService avgService;

	protected void executeInternal(JobExecutionContext arg0)
			throws JobExecutionException {
		long st = System.currentTimeMillis();
		avgService = (AvgService) SpringContextHolder.getBean("avgService");
		Boolean b = avgService.execProc();
		if (b) {
			System.out.println("存储过程得分计算执行成功");
		} else {
			System.out.println("调用存储过程失败");
		}
		System.out
				.println("报表统计执行:" + (System.currentTimeMillis() - st) + "毫秒");
	}
}
