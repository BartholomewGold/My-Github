/**
 * @author 冯华杰
 * 
 * Email:fhj@sonluk.com.cn
 * 
 */
package com.mymaven.service;

import java.util.List;

import com.mymaven.modle.DmDischarge;

public interface DischargeService {

	List<DmDischarge> findAll();
	
	List<String> find();
	
	List<String> findAllProduct();
	
	List<String> findTypeOfBattery();
	 List<String> findFzdz() ;
	 
	 List<String> findJsdy() ;
}
