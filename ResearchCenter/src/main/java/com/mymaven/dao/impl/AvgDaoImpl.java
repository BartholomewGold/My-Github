/**
 * @author 冯华杰
 * 
 * Email:fhj@sonluk.com.cn
 * 
 */
package com.mymaven.dao.impl;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.SQLException;
import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.jdbc.Work;
import org.hibernate.transform.Transformers;
import org.springframework.stereotype.Repository;

import com.mymaven.common.dao.BaseDaoImpl;
import com.mymaven.dao.AvgDao;
import com.mymaven.modle.AvgScore;

@Repository
public class AvgDaoImpl extends BaseDaoImpl<AvgScore> implements AvgDao {

	@Override
	public List<String> findByHql(String hql) {
		Query query = super.getSession().createSQLQuery(hql);
		List<Map<String, Object>> list = (List<Map<String, Object>>) query
				.setResultTransformer(Transformers.ALIAS_TO_ENTITY_MAP).list();
		DecimalFormat df = new DecimalFormat("###0.000");
		int i = 1;
		Transaction tran = super.getSession().getTransaction();
		if (!tran.isActive()) {
			tran.begin();
		}
		for (Map<String, Object> map : list) {
			String cdid = map.get("cdid").toString();
			String zzdy = map.get("zzdy").toString();
			// System.out.println(i+++","+cdid + ","
			// +df.format(Double.parseDouble(zzdy)));
			msTest2(cdid, df.format(Double.parseDouble(zzdy)));
			if (i % 2000 == 0) {
				System.out.println("commit" + i % 2000);
				tran.commit();
				if (!tran.isActive()) {
					tran.begin();
					System.out.println("aa");
				}
			}
		}
		System.out.println("end");
		tran.commit();
		return new ArrayList<String>();
	}

	public void msTest2(String cdid, String zzdy) {
		Query query = super.getSession().createSQLQuery(
				"{CALL P_CalScore(?,?)}");
		query.setString(0, cdid);
		query.setString(1, zzdy);
		query.executeUpdate();
	}

	@Override
	public AvgScore findByHql(String hql, List<String> params) {
		Query qa = super.getSession().createQuery(hql);
		for (int i = 0; i < params.size(); i++) {
			qa.setString(i, params.get(i));
		}
		List<AvgScore> list = (List<AvgScore>) qa.list();
		if (list != null || list.size() > 0) {
			return list.get(0);
		} else {
			return null;
		}
	}

	public List<Map<String, Object>> findByInfo(String andwhere,
			List<String> params, Integer st, Integer ed) {
		Query query = super.getSession().createSQLQuery(andwhere);
		for (int i = 0; i < params.size(); i++) {
			query.setString(i, params.get(i));
		}
		List<Map<String, Object>> list = (List<Map<String, Object>>) query
				.setResultTransformer(Transformers.ALIAS_TO_ENTITY_MAP).list()
				.subList(st-1, ed);
		return list;
	}

	
	public List<Map<String, Object>> findSQL(String andwhere,
			List<String> params) {
		Query query = super.getSession().createSQLQuery(andwhere);
		for (int i = 0; i < params.size(); i++) {
			query.setString(i, params.get(i));
		}
		List<Map<String, Object>> list = (List<Map<String, Object>>) query
				.setResultTransformer(Transformers.ALIAS_TO_ENTITY_MAP).list();
		return list;
	}
	@Override
	public Boolean execProc() {
		try {
			super.getSession().doWork(new Work() {
				@Override
				public void execute(Connection con) throws SQLException {
					CallableStatement proc = con
							.prepareCall("{call P_NEWSCORE()}");
					proc.execute();
				}
			});
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}

	}
}
