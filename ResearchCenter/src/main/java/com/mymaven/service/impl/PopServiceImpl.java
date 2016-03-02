/**
 * @author 冯华杰
 * 
 * Email:fhj@sonluk.com.cn
 * 
 */
package com.mymaven.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mymaven.dao.PopDao;
import com.mymaven.modle.ScorePop;
import com.mymaven.service.PopService;
import com.mymaven.util.StringUtils;
import com.sonluk.util.CalculateUtils;
@Service
public class PopServiceImpl implements PopService{
	@Autowired
	private PopDao popDao;
	@Transactional(readOnly = true)
	public List<ScorePop> findByName(String name) {
		String hql = "from ScorePop t where 1=1 ";
		List<String> param=new ArrayList<String>();
		if (!StringUtils.isEmpty(name)) {
			hql += "and fdfs like ? ";
			param.add(name);
		}
		return popDao.find(hql,param);
	}
	@Transactional(readOnly = true)
	public ScorePop findById(Long id) {
		return popDao.findById(id);
	}
	@Transactional
	public ScorePop edit(ScorePop data) {
		return popDao.edit(data);
	}
	@Transactional
	public ScorePop del(Long id) {
		return popDao.del(id);
	}
	@Transactional
	public ScorePop add(ScorePop data) {
		List<ScorePop> list = popDao.searchRepeat(data.getFdfs());
		if(list!=null&&list.size()!=0){
			return null;
		}
		return popDao.edit(data);
	}
	@Override
	public Double getCal(String fdfs,String hfsj) {
		System.out.println(fdfs+","+hfsj);
		ScorePop pop = findByName(fdfs).get(0);
		Double cal=null;
		if(hfsj.equals("次数")){
			cal=CalculateUtils.getCal(pop.getCirTime());
		}else if(hfsj.equals("时数")){
			cal=CalculateUtils.getCal(pop.getHoursTime());
		}else if(hfsj.equals("天数")){
			cal=CalculateUtils.getCal(pop.getDaysTime());
		}else if(hfsj.equals("小时")){
			cal=CalculateUtils.getCal(pop.getHourTime());
		}else if(hfsj.equals("分钟")){
			cal=CalculateUtils.getCal(pop.getMinTime());
		}else{
			return null;
		}
		System.out.println(cal);
		return cal;
	}
}
