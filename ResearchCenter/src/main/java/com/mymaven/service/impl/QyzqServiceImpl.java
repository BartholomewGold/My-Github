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

import com.mymaven.dao.QyzqDao;
import com.mymaven.modle.DmQyzq;
import com.mymaven.service.QyzqService;

@Service
@Transactional(readOnly = true)
public class QyzqServiceImpl implements QyzqService {
	@Autowired
	private QyzqDao qzqDao;

	@Override
	public List<DmQyzq> findAll() {
		// TODO Auto-generated method stub
		return qzqDao.findAll();
	}

	
}
