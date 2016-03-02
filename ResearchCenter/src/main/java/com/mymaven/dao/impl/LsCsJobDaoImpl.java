/**
 * @author 冯华杰
 * 
 * Email:fhj@sonluk.com.cn
 * 
 */
package com.mymaven.dao.impl;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Query;
import org.springframework.stereotype.Repository;

import com.mymaven.common.Page;
import com.mymaven.common.dao.BaseDaoImpl;
import com.mymaven.dao.LsCsJobDao;
import com.mymaven.modle.LsJbCs;
@Repository
public class LsCsJobDaoImpl extends BaseDaoImpl<LsJbCs> implements LsCsJobDao{
	public Page<LsJbCs> find(String hql,List<String> values,int pageSize,int pageCount){
		String getcount=("select count(*) "+hql).split("order by")[0];
		Query qa=super.getSession().createQuery(getcount);
		for (int i = 0; i < values.size(); i++) {
			qa.setString(i, values.get(i)+"%");
		}
		long count=(Long)qa.uniqueResult();
		qa=super.getSession().createQuery(hql);
		for (int i = 0; i < values.size(); i++) {
			qa.setString(i, values.get(i)+"%");
		}
		List<LsJbCs> list=(List<LsJbCs>)qa.
				setMaxResults(pageSize*pageCount).list();
		if(list.size()<=pageSize){
		}else if(list.size()==count){
			int i=(int) (count%pageSize);
			list=list.subList((int)count-i, (int)count);
		}else{
			list=list.subList(list.size()-pageSize, list.size());
		}
		Page<LsJbCs> page=new Page<LsJbCs>(list, pageCount, pageSize, count);
		return page;
	}

	@Override
	public LsJbCs findByCdid(String hql, String cdid) {
		Query query=super.getSession().createQuery(hql);
		query.setString(0, cdid);
		return (LsJbCs) query.uniqueResult();
	}

	@Override
	public List<LsJbCs> search(String hql, List<String> param) {
		Query qa=super.getSession().createQuery(hql);
		for (int i = 0; i < param.size(); i++) {
			qa.setString(i, param.get(i));
		}
		return qa.list();
	}
}
