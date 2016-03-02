/**
 * @author 冯华杰
 * 
 * Email:fhj@sonluk.com.cn
 * 
 */
package com.mymaven.dao;

import java.util.List;
import java.util.Map;

import com.mymaven.modle.AvgScore;

public interface AvgDao {

	List<String> findByHql(String hql);

	AvgScore findByHql(String hql, List<String> params);

	List<Map<String, Object>> findByInfo(String avgSql, List<String> list,
			Integer st, Integer ed);

	Boolean execProc();

	List<Map<String, Object>> findSQL(String hql, List<String> list);

	

}
