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
import com.mymaven.dao.DischargeDao;
import com.mymaven.dao.LsVTimeDao;
import com.mymaven.dao.QyzqDao;
import com.mymaven.modle.DmDischarge;
import com.mymaven.modle.DmQyzq;
import com.mymaven.modle.LsVtime;
@Repository
public class QyzqDaoImpl extends BaseDaoImpl<DmQyzq> implements QyzqDao{

	@Override
	public List<DmQyzq> findAll() {
		// TODO Auto-generated method stub
		return super.find("from DmQyzq");
	}

	
	

}
