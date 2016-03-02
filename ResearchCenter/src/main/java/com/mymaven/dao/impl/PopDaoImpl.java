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
import com.mymaven.dao.PopDao;
import com.mymaven.modle.ScorePop;
import com.mymaven.util.StringUtils;

@Repository
public class PopDaoImpl extends BaseDaoImpl<ScorePop> implements PopDao {

	public List<ScorePop> find(String hql,List<String> param) {
		Query q = super.getSession().createQuery(hql);
		for (int i = 0; i < param.size(); i++) {
			q.setString(i,param.get(i));
		}
		return q.list();
	}

	public ScorePop findById(Long id) {
		return super.get(id);
	}

	
	public ScorePop edit(ScorePop data) {
		super.getSession().saveOrUpdate(data);
		return data;
	}

	@Override
	public ScorePop del(Long id) {
		ScorePop del=findById(id);
		if(del!=null){
			super.remove(del);
		}
		return del;
	}

	@Override
	public List<ScorePop> searchRepeat(String fdfs) {
		String hql="from ScorePop where fdfs like ?";
		Query q=super.getSession().createQuery(hql);
		q.setString(0, fdfs);
		return q.list();
	}


}
