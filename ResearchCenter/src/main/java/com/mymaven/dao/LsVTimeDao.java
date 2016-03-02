/**
 * @author 冯华杰
 * 
 * Email:fhj@sonluk.com.cn
 * 
 */
package com.mymaven.dao;

import java.util.List;

import com.mymaven.modle.LsVtime;

public interface LsVTimeDao {
	String getCount();

	LsVtime findByCdidLast(String hql, List<String> list);
}
