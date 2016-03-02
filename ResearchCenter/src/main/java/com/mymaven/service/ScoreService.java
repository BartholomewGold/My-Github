/**
 * @author 冯华杰
 * 
 * Email:fhj@sonluk.com.cn
 * 
 */
package com.mymaven.service;

import java.util.List;
import java.util.Map;

import com.mymaven.modle.LsJbCs;
import com.mymaven.modle.form.chartform.FallPercentForm;
import com.sonluk.echarts.Option;

public interface ScoreService {

	FallPercentForm getFallPercentForm(
			Map<String, Map<String, List<LsJbCs>>> map, String volt,
			Option option);

	Double getAvg(List<LsJbCs> jbs, String volt);

	Map<String, List<Double>> getDesc(List<LsJbCs> lsjbs, String otherStatus, String volt);

	Double getAvgs(List<Map<String, Object>> jbs);
}
