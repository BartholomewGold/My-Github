/**
 * @author 冯华杰
 * 
 * Email:fhj@sonluk.com.cn
 * 
 */
package com.mymaven.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mymaven.common.Page;
import com.mymaven.dao.LsCsJobDao;
import com.mymaven.modle.LsJbCs;
import com.mymaven.modle.form.MainForm;
import com.mymaven.modle.form.SameLineForm;
import com.mymaven.service.LsCsJobService;
import com.mymaven.util.StringUtils;

@Service
@Transactional(readOnly = true)
public class LsCsJobServiceImpl implements LsCsJobService {
	@Autowired
	private LsCsJobDao lsCsJobDao;

	public Page<LsJbCs> find(MainForm form, int pageSize, int pageCount) {
		String hql = "from LsJbCs t where 1=1 ";
		List<String> values = new ArrayList<String>();
		if (!StringUtils.isEmpty((form.getSaveId()))) {
			hql += " and cdid like ? ";
			values.add(form.getSaveId());
		}
		if (!StringUtils.isEmpty((form.getSaveName()))) {
			hql += " and cdmc like ? ";
			values.add(form.getSaveName());
		}
		if (!StringUtils.isEmpty((form.getProductt()))) {
			hql += " and scdw like ? ";
			values.add(form.getProductt());
		}
		if (!StringUtils.isEmpty((form.getModel()))) {
			hql += " and dcxh like ? ";
			values.add(form.getModel());
		}
		if (!StringUtils.isEmpty((form.getCycle()))) {
			hql += " and qyzq like ? ";
			values.add(form.getCycle());
		}
		if (!StringUtils.isEmpty((form.getStroeStatusVal()))) {
			hql += " and sbmc like ? ";
			values.add(form.getStroeStatusVal());
		}
		if (!StringUtils.isEmpty((form.getDischarge()))) {
			hql += " and fdfs like ? ";
			values.add(form.getDischarge());
		}
		if (!StringUtils.isEmpty((form.getType()))) {
			hql += " and dclb like ? ";
			values.add(form.getType());
		}
		if (!StringUtils.isEmpty((form.getKeyValue()))) {
			hql += " and fzdz like ? ";
			values.add(form.getKeyValue());
		}
		if (!StringUtils.isEmpty((form.getFdType()))) {
			hql += " and fdlx like ? ";
			values.add(form.getFdType());
		}
		if (!StringUtils.isEmpty((form.getVoltEd()))) {
			hql += " and jstj like ? ";
			values.add(form.getVoltEd());
		}
		if (!StringUtils.isEmpty((form.getBeginDateStart()))) {
			hql += " and (fdrq+' '+fdkssj)>=convert(varchar(19),? ,120)  ";
			values.add(form.getBeginDateStart());
		}
		if (!StringUtils.isEmpty((form.getBeginDateEnd()))) {
			hql += " and (fdrq+' '+fdkssj)<=convert(varchar(19),? ,120)  ";
			values.add(form.getBeginDateEnd());
		}
		if (!StringUtils.isEmpty((form.getEndDateStart()))) {
			hql += " and (jsrq+' '+fdjssj)>=convert(varchar(19),? ,120)  ";
			values.add(form.getEndDateStart());
		}
		if (!StringUtils.isEmpty((form.getEndDateEnd()))) {
			hql += " and (jsrq+' '+fdjssj)<=convert(varchar(19),? ,120)  ";
			values.add(form.getEndDateEnd());
		}
		if (!StringUtils.isEmpty((form.getCyst()))) {
			hql += " and scrq>=convert(varchar(10),? ,120) ";
			values.add(form.getCyst());
		}
		if (!StringUtils.isEmpty((form.getCyed()))) {
			hql += " and scrq<=convert(varchar(10),? ,120) ";
			values.add(form.getCyed());
		}
		hql += " order by cdid ";
		return lsCsJobDao.find(hql, values, pageSize, pageCount);
	}

	@Override
	public LsJbCs findByCdid(String cdid) {
		String hql = "from LsJbCs t where 1=1 and cdid like ?";
		return lsCsJobDao.findByCdid(hql, cdid);
	}

	@Override
	public Map<String, Map<String, List<LsJbCs>>> findData(SameLineForm mainForm) {
		Map<String, Map<String, List<LsJbCs>>> map = new HashMap<String, Map<String, List<LsJbCs>>>();
		String hql = mainForm.getHqlWithoutPro();
		List<String> param = mainForm.getListWithoutPro();
		for (String pro : mainForm.getProducters()) {//生产单位
			Map<String,List<LsJbCs>> jbs=new HashMap<String, List<LsJbCs>>();
			String hqlf=hql + " and scdw like ? ";
			param.add(pro);
			for (String storeStatus : mainForm.getStoreStatusVal()) {//贮存状态
				String hqlff=hqlf+" and sbmc like ? ";
				List<String> clone =new ArrayList<String>(param);
				clone.add(storeStatus);
				List<LsJbCs> retlist = lsCsJobDao.search(hqlff, clone);
				jbs.put(storeStatus, retlist);
			}
			map.put(pro, jbs);
		}
		return map;
	}

	@Override
	public List<LsJbCs> findByInfo(String hqlWithoutPro, List<String> list) {
//		List<LsJbCs> lsjbs = lsCsJobDao.search(hqlWithoutPro,list);
//		JSONObject json=new JSONObject();
//		json.put("size", lsjbs.size());
//		json.put("list",lsjbs);
		return lsCsJobDao.search(hqlWithoutPro,list);
	}
	
}
