/**
 * @author 冯华杰
 * 
 * Email:fhj@sonluk.com.cn
 * 
 */
package com.mymaven.dao;

import java.util.List;

import com.mymaven.common.Page;
import com.mymaven.modle.LsJbCs;

public interface LsCsJobDao {
	Page<LsJbCs> find(String form,List<String> values,int pageSize,int pageCount);

	LsJbCs findByCdid(String hql, String cdid);

	List<LsJbCs> search(String hql, List<String> param);

}
