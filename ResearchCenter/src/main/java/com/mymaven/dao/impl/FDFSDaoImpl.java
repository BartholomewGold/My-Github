/**
 * @author 冯华杰
 * 
 * Email:fhj@sonluk.com.cn
 * 
 */
package com.mymaven.dao.impl;

import java.util.List;

import org.hibernate.SQLQuery;
import org.springframework.stereotype.Repository;

import com.mymaven.common.dao.BaseDaoImpl;
import com.mymaven.dao.DischargeDao;
import com.mymaven.dao.FDFSDao;
import com.mymaven.dao.LsVTimeDao;
import com.mymaven.modle.DmDischarge;
import com.mymaven.modle.LsVtime;

@Repository
public class FDFSDaoImpl extends BaseDaoImpl<String> implements FDFSDao {
	@Override
	/**
	 * 获取所有放电方式
	 */
	public List<String> findAll() {
		return super.getSession()
				.createSQLQuery("select fdfs from ls_jb_cs group by fdfs")
				.list();
	}

	/**
	 * 获取所有生产单位zx
	 */
	public List<String> findAllProduct() {
		return super.getSession()
				.createSQLQuery("select scdw from ls_jb_cs group by scdw having scdw not like ''")
				.list();
	}
	/**
	 * 获取所有电池型号
	 * @return
	 */
	public List<String> findTypeOfBattery() {
		return super.getSession()
				.createSQLQuery("select dcxh from ls_jb_cs group by dcxh having dcxh not like ''")
				.list();
	}
	/**
	 * 获取所有放电电阻，功率，电流
	 */
	public List<String> findFzdz() {
		return super.getSession()
				.createSQLQuery("select fzdz from ls_jb_cs group by fzdz having fzdz not like ''")
				.list();
	}

	@Override
	public List<String> findJsdy() {
		return super.getSession()
				.createSQLQuery("select jstj from ls_jb_cs group by jstj having jstj not like ''")
				.list();
	}
	
	
}
