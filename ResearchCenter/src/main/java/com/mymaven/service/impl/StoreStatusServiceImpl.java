/**
 * @author 冯华杰
 * 
 * Email:fhj@sonluk.com.cn
 * 
 */
package com.mymaven.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mymaven.dao.impl.StoreStatusDaoImpl;
import com.mymaven.modle.StoreStatus;
import com.mymaven.service.StoreStatusService;

@Service
@Transactional(readOnly = true)
public class StoreStatusServiceImpl implements StoreStatusService {
	@Autowired
	private StoreStatusDaoImpl storeStatusDao;

	@Override
	public List<StoreStatus> findIdDesc() {
		return storeStatusDao.getList();
	}

	
}
