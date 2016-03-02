/**
 * @author 冯华杰
 * 
 * Email:fhj@sonluk.com.cn
 * 
 */
package com.mymaven.service.impl;

import com.mymaven.dao.AvgDao;
import com.mymaven.modle.AvgScore;
import com.mymaven.modle.form.ExcelForm;
import com.mymaven.modle.form.LineForm;
import com.mymaven.modle.form.MonthLineForm;
import com.mymaven.modle.form.SameLineForm;
import com.mymaven.service.AvgService;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
public class AvgServiceImpl implements AvgService {

	@Autowired
	private AvgDao avgDao;

	public List<String> findByHql(String string) {
		return this.avgDao.findByHql(string);
	}

	public AvgScore findByInfo(String cdid, String volt) {
		String hql = "from AvgScore where 1=1 and cdid like ? and dy like ?";
		List params = new ArrayList();
		params.add(cdid);
		params.add(volt);
		return this.avgDao.findByHql(hql, params);
	}

	public List<Map<String, Object>> findList(String avgSql, List<String> list,
			Integer st, Integer ed) {
		return this.avgDao.findByInfo(avgSql, list, st, ed);
	}

	public Boolean execProc() {
		return this.avgDao.execProc();
	}

	public Map<String, Double> getOtherScores(Map<String, Object> map,
			ExcelForm ef, Double popCal) throws Exception {
		Map ret = new HashMap();
		ret.put(String.valueOf(map.get("sbmc")),
				Double.valueOf(Double.valueOf(String.valueOf(map.get("avg")))
						.doubleValue() * popCal.doubleValue()));
		String hql = String.valueOf(ef.getOtherScore()[0]);
		List list = (List) ef.getOtherScore()[1];
		list.add(String.valueOf(map.get("qyrq")));
		List<Map<String, Object>> jbs = this.avgDao.findSQL(hql, list);
		for (Map<String, Object> lsJbCs2 : jbs) {
			ret.put(String.valueOf(lsJbCs2.get("sbmc")),
					Double.valueOf(Double.valueOf(
							String.valueOf(lsJbCs2.get("avg"))).doubleValue()
							* popCal.doubleValue()));
		}
		return ret;
	}

	public Map<String, Map<String, List<Map<String, Object>>>> findData(
			SameLineForm mainForm) {
		Map map = new HashMap();
		Object[] objs = mainForm.getSQL();
		String hql = String.valueOf(objs[0]);
		List param = (List) objs[1];
		for (String pro : mainForm.getProducters()) {
			Map jbs = new HashMap();
			String hqlf = hql + " and scdw like ? ";
			List clonea = new ArrayList(param);
			clonea.add(pro);
			for (String storeStatus : mainForm.getStoreStatusVal()) {
				String hqlff = hqlf + " and sbmc like ? ";
				List clone = new ArrayList(clonea);
				clone.add(storeStatus);
				List retlist = this.avgDao.findSQL(hqlff, clone);
				jbs.put(storeStatus, retlist);
			}
			map.put(pro, jbs);
		}
		return map;
	}

	public Map<String, Map<String, Double>> findMonth(LineForm mainForm) {
		Map map = new HashMap();
		Object[] objs = mainForm.getSQL();
		String hql = String.valueOf(objs[0]);
		List param = (List) objs[1];
		for (String pro : mainForm.getProducters()) {
			Map dscore = new HashMap();
			List clone = new ArrayList(param);
			clone.add(pro);
			List<Map<String, Object>> retlist = this.avgDao.findSQL(hql, clone);
			for (Map<String, Object> map2 : retlist) {
				dscore.put(String.valueOf(map2.get("qyrq")),
						Double.valueOf(String.valueOf(map2.get("avgs"))));
			}
			map.put(pro, dscore);
		}
		return map;
	}

	public Map<String, Map<String, Double>> findYear(MonthLineForm mainForm) {
		Map map = new HashMap();
		Object[] objs = mainForm.getSQL();
		String hql = String.valueOf(objs[0]);
		List param = (List) objs[1];
		for (String pro : mainForm.getProducters()) {
			Map dscore = new HashMap();
			List clone = new ArrayList(param);
			clone.add(pro);
			List<Map<String, Object>> retlist = this.avgDao.findSQL(hql, clone);
			for (Map<String, Object> map2 : retlist) {
				dscore.put(String.valueOf(map2.get("qyrq")),
						Double.valueOf(String.valueOf(map2.get("avgs"))));
			}
			map.put(pro, dscore);
		}
		return map;
	}
}