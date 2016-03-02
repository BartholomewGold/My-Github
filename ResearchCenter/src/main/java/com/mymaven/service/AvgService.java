/**
 * @author 冯华杰
 * 
 * Email:fhj@sonluk.com.cn
 * 
 */
package com.mymaven.service;

import java.util.List;
import java.util.Map;

import com.mymaven.modle.AvgScore;
import com.mymaven.modle.form.ExcelForm;
import com.mymaven.modle.form.LineForm;
import com.mymaven.modle.form.MonthLineForm;
import com.mymaven.modle.form.SameLineForm;

public interface AvgService {

	List<String> findByHql(String string);

	AvgScore findByInfo(String cdid, String volt);

	List<Map<String, Object>> findList(String avgSql, List<String> list,
			Integer st, Integer ed);

	Boolean execProc();

	Map<String, Double> getOtherScores(Map<String, Object> map, ExcelForm ef,
			Double popCal)throws Exception;

	Map<String, Map<String,List<Map<String,Object>>>> findData(SameLineForm mainForm);

	Map<String, Map<String, Double>> findMonth(
			LineForm mainForm);
	Map<String, Map<String, Double>> findYear(MonthLineForm mainForm);
	
}
