/**
 * @author 冯华杰
 * 
 * Email:fhj@sonluk.com.cn
 * 
 */
package com.mymaven.dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.mymaven.common.dao.BaseDaoImpl;
import com.mymaven.dao.DischargeDao;
import com.mymaven.dao.LsVTimeDao;
import com.mymaven.modle.DmDischarge;
import com.mymaven.modle.LsVtime;

@Repository
public interface FDFSDao {

	List<String> findAll();

	List<String> findAllProduct();

	List<String> findTypeOfBattery();
	 List<String> findFzdz() ;

	List<String> findJsdy();

}
