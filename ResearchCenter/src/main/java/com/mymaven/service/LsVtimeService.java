/**
 * @author 冯华杰
 * 
 * Email:fhj@sonluk.com.cn
 * 
 */
package com.mymaven.service;

import java.util.List;
import java.util.Map;

import com.mymaven.modle.LsJbCs;
import com.mymaven.modle.LsVtime;
import com.mymaven.modle.form.ExcelForm;

public interface LsVtimeService {
	String findIdDesc() ;

	LsVtime findByCdidLast(String cdid, String zzdy);

	List<LsJbCs> doAll(List<LsJbCs> content);

//	Map<String, Double> getVtimesByLs(LsJbCs lsJbCs, ExcelForm ef, Double popCal)throws Exception;

	
}
