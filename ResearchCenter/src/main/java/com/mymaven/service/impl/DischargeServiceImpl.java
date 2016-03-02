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

import com.mymaven.dao.DischargeDao;
import com.mymaven.dao.FDFSDao;
import com.mymaven.modle.DmDischarge;
import com.mymaven.service.DischargeService;

@Service
@Transactional(readOnly = true)
public class DischargeServiceImpl implements DischargeService {
	@Autowired
	private DischargeDao dischargeDao;
	@Autowired
	private FDFSDao fDFSDao;

	@Override
	public List<DmDischarge> findAll() {
		return dischargeDao.findAll();
	}

	public List<String> find() {
		return fDFSDao.findAll();
	}
	public List<String> findAllProduct() {
		return fDFSDao.findAllProduct();
	}

	@Override
	public List<String> findTypeOfBattery() {
		return fDFSDao.findTypeOfBattery();
	}

	@Override
	public List<String> findFzdz() {
		return fDFSDao.findFzdz();
	}

	@Override
	public List<String> findJsdy() {
		return fDFSDao.findJsdy();
	}
	
}
