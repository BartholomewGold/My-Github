/**
 * @author 冯华杰
 * 
 * Email:fhj@sonluk.com.cn
 * 
 */
package com.mymaven.dao.impl;

import java.util.List;

import org.hibernate.Query;
import org.springframework.stereotype.Repository;

import com.mymaven.common.dao.BaseDaoImpl;
import com.mymaven.dao.LsVTimeDao;
import com.mymaven.modle.LsVtime;
@Repository
public class LsVTimeDaoImpl extends BaseDaoImpl<LsVtime> implements LsVTimeDao{

	@Override
	public String getCount() {
		List<LsVtime> list = super.find("from LsVtime where cdid like '2301103081104010300'");
		for (LsVtime lsVtime : list) {
			System.out.println(lsVtime.getId().toString());
		}
		return list.size()+"";
	}

	@Override
	public LsVtime findByCdidLast(String hql, List<String> list) {
		Query query=super.getSession().createQuery(hql);
		for (int i = 0; i < list.size(); i++) {
			query.setString(i,list.get(i));
		}
		List<LsVtime> lista = query.list();
		if(lista==null||lista.size()==0){
			return null;
		}else{
			return (LsVtime) query.list().get(0);
		}
	}
	

}
