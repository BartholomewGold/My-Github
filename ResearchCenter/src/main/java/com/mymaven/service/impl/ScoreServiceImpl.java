/**
 * @author 冯华杰
 * 
 * Email:fhj@sonluk.com.cn
 * 
 */
package com.mymaven.service.impl;

import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mymaven.dao.LsVTimeDao;
import com.mymaven.dao.ScoreDao;
import com.mymaven.modle.LsJbCs;
import com.mymaven.modle.LsVtime;
import com.mymaven.modle.form.chartform.FallPercentForm;
import com.mymaven.modle.form.chartform.Series;
import com.mymaven.service.ScoreService;
import com.sonluk.echarts.Option;

@Service
@Transactional(readOnly = true)
public class ScoreServiceImpl implements ScoreService {
	@Autowired
	private ScoreDao scoreDao;
	@Autowired
	private LsVTimeDao vtimeDao;

	public Double getAvg(List<LsJbCs> jbs, String volt) {
		if(jbs==null||jbs.size()==0){
			return null;
		}
		double total = 0;
		for (int i = 0; i < jbs.size(); i++) {
			LsJbCs lsJbCs=jbs.get(i);
			// System.out.println(lsJbCs.toString());
			String hql = "from LsVtime where cdid like ? and dy like ?";
			List<String> param = new ArrayList<String>();
			param.add(lsJbCs.getId().getCdid());
			DecimalFormat df = new DecimalFormat("0.000");
			param.add(df.format(Double.parseDouble(volt)));
			LsVtime vtime = vtimeDao.findByCdidLast(hql, param);
			// System.out.println(vtime.toString());
			total += lsJbCs.scoreGet(vtime);
			// System.out.println(avg);
		}
		return total/jbs.size();
	}

	@Override
	public FallPercentForm getFallPercentForm(
			Map<String, Map<String, List<LsJbCs>>> map, String volt,
			Option option) {
		FallPercentForm fpf = new FallPercentForm();
		// int i = 0;
		String legend = "";
		String xAxisData = "";
		List<Series> serieses = new ArrayList<Series>();
		for (Entry<String, Map<String, List<LsJbCs>>> entry : map.entrySet()) {// 生产单位
			legend += "'" + entry.getKey() + "',";
			System.out.println("-------------------------");
			Map<String, List<LsJbCs>> jbsmap = entry.getValue();
			// Series series = new Series(entry.getKey());
			Double avg = null;
			for (Entry<String, List<LsJbCs>> jbs : jbsmap.entrySet()) {// 贮存类型
				xAxisData += "'" + jbs.getKey() + "',";
				List<LsJbCs> list = jbs.getValue();
				System.out.println(jbs.getKey());
				if (list != null && list.size() != 0) {
					double total = 0;
					for (LsJbCs lsJbCs : list) {// 某生产单位，某贮存类型内的所有数据值
						// System.out.println(lsJbCs.toString());
						String hql = "from LsVtime where cdid like ? and dy like ?";
						List<String> param = new ArrayList<String>();
						param.add(lsJbCs.getId().getCdid());
						DecimalFormat df = new DecimalFormat("0.000");
						param.add(df.format(Double.parseDouble(volt)));
						LsVtime vtime = vtimeDao.findByCdidLast(hql, param);
						// System.out.println(vtime.toString());
						total += lsJbCs.scoreGet(vtime);
						// System.out.println(avg);
					}
					avg = total / list.size();
					System.out.println(avg);
				}
			}
		}
		fpf.setLegend(legend.substring(0, legend.length() - 1));
		fpf.setxAxisData(xAxisData.substring(0, legend.length() - 1));
		System.out.println(fpf.toString());
		return null;
	}

	@Override
	public Map<String, List<Double>> getDesc(List<LsJbCs> lsjbs,String otherStatus,String volt) {
		Map<String,List<Double>> map=new HashMap<String, List<Double>>();
		for (LsJbCs lsJbCs : lsjbs) {
			String hql = "from LsVtime where cdid like ? and dy like ?";
			List<String> param = new ArrayList<String>();
			param.add(lsJbCs.getId().getCdid());
			DecimalFormat df = new DecimalFormat("0.000");
			param.add(df.format(Double.parseDouble(volt)));
			LsVtime vtime = vtimeDao.findByCdidLast(hql, param);
			String[] status=otherStatus.split(",");
			for (String string : status) {
				
			}
			map.put(lsJbCs.getQyrq(), new ArrayList<Double>());
//			qyrq
		}
		return map;
	}

	@Override
	public Double getAvgs(List<Map<String, Object>> jbs) {
		if(jbs==null||jbs.size()==0){
			return null;
		}
		double total = 0;
		for (int i = 0; i < jbs.size(); i++) {
//			LsJbCs lsJbCs=jbs.get(i);
			// System.out.println(lsJbCs.toString());
//			String hql = "from LsVtime where cdid like ? and dy like ?";
//			List<String> param = new ArrayList<String>();
//			param.add(lsJbCs.getId().getCdid());
//			DecimalFormat df = new DecimalFormat("0.000");
//			param.add(df.format(Double.parseDouble(volt)));
//			LsVtime vtime = vtimeDao.findByCdidLast(hql, param);
			// System.out.println(vtime.toString());
			total +=Double.valueOf(String.valueOf(jbs.get(0).get("avg")));//lsJbCs.scoreGet(vtime);
			// System.out.println(avg);
		}
		return total/jbs.size();
	}
}
