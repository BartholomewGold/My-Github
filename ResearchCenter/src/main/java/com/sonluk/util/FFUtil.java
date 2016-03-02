/**
 * @author 冯华杰
 * 
 * Email:fhj@sonluk.com.cn
 * 
 */
package com.sonluk.util;

import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.List;

import com.mymaven.modle.LsJbCs;
import com.mymaven.modle.LsVtime;
import com.mymaven.util.StringUtils;

/**
 * 放分计算类
 * 
 * @author fhj
 * 
 */
public class FFUtil {
	/**
	 * 获得电位
	 * @param job
	 * @return
	 */
	public static List<Integer> getScoreList(LsJbCs job){
		String dch=job.getDch();
		List<Integer> nums=new ArrayList<Integer>();
		for (int i = 0; i < dch.length(); i++) {
			switch (dch.charAt(i)) {
			case '1':
				nums.add(i);
				break;
			default:
				break;
			}
		}
		return nums;
	}
	/**
	 * 获得放分列表
	 * @param job
	 * @param vtime
	 * @return
	 */
	public static List<String> getTrueScores(LsJbCs job, LsVtime vtime){
		List<String> list=new ArrayList<String>();
		List<Integer> nums=getScoreList(job);
		for (Integer num : nums) {
			switch (num) {
			case 0:
				list.add(vtime.getId().getTime1());
				break;
			case 1:
				list.add(vtime.getId().getTime2());
				break;
			case 2:
				list.add(vtime.getId().getTime3());
				break;
			case 3:
				list.add(vtime.getId().getTime4());
				break;
			case 4:
				list.add(vtime.getId().getTime5());
				break;
			case 5:
				list.add(vtime.getId().getTime6());
				break;
			case 6:
				list.add(vtime.getId().getTime7());
				break;
			case 7:
				list.add(vtime.getId().getTime8());
				break;
			default:
				list.add(vtime.getId().getTime9());
				break;
			}
		}
		return list;
	}
	
	/**
	 * 计算平均分(未转化)
	 * @param job
	 * @param vtime
	 * @return
	 */
	public static Double getScore(LsJbCs job, LsVtime vtime) {
		if(vtime==null){
			return null;
		}
		// System.out.println(vtime.getId().toString());
		if (StringUtils.isEmpty(job.getHfsj())) {
			return null;
		}
		int totalNo = 0;
		double totalScore = 0;
		List<String> time=getTrueScores(job, vtime);
		if (time==null||time.size() == 0) {
			return null;
		}
		for (String str : time) {
				totalScore += Double.valueOf(str.trim());
				totalNo++;
		}
		double score = totalScore / totalNo;// 数据库放分值（需转化为对应的小时值）
//		DecimalFormat df = new DecimalFormat("######0.0");
//		double finalScore = calculateDouble(score, 0, job.getHfsj().trim());
		return score;
	}

	/**
	 * valueString 的值 数字,时间单位
	 * 
	 */
	public static double calculateDouble(double score, int value, String scType) {
		// timeValue 的值 次数 分钟 小时 时数 天数 秒数
		double finalScore = 0;// 全部转化为分钟单位所得倍数
		// int value = Integer.valueOf(valueString.split(",")[0]);
		if (scType.equals("小时")) {
			finalScore = score / 60;
		} else if (scType.equals("分钟")) {
			finalScore = score;
		} else if (scType.equals("次数")) {
			finalScore = 0;
		} else if (scType.equals("天数")) {
			finalScore = score * 60 / 24;
		} else if (scType.equals("时数")) {
			finalScore = value * 60;
		}
		DecimalFormat df = new DecimalFormat("######0.0");
		return Double.valueOf(df.format(finalScore));
	}
public static void main(String[] args) {
	double a=(1.0*30.0)/(2*60*24);
	System.out.println(a);
}
}
