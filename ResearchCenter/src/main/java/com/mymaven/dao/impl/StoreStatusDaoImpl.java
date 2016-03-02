/**
 * @author 冯华杰
 * 
 * Email:fhj@sonluk.com.cn
 * 
 */
package com.mymaven.dao.impl;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.mymaven.common.dao.BaseDaoImpl;
import com.mymaven.dao.StoreStatusDao;
import com.mymaven.modle.StoreStatus;
@Repository
public class StoreStatusDaoImpl extends BaseDaoImpl<StoreStatus> implements StoreStatusDao{

	public List<StoreStatus> getList() {
		List<StoreStatus> list = super.find("from StoreStatus order by px ");
		return list;
		
	}

}
