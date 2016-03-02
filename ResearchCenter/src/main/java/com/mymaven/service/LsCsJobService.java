/**
 * @author 冯华杰
 * 
 * Email:fhj@sonluk.com.cn
 * 
 */
package com.mymaven.service;

import java.util.List;
import java.util.Map;

import net.sf.json.JSONObject;

import com.mymaven.common.Page;
import com.mymaven.modle.LsJbCs;
import com.mymaven.modle.form.MainForm;
import com.mymaven.modle.form.SameLineForm;

public interface LsCsJobService {

	Page<LsJbCs> find(MainForm form,int pageSize,int pageCount) ;
	
	LsJbCs findByCdid(String cdid);

	Map<String, Map<String, List<LsJbCs>>> findData(SameLineForm mainForm);

	List<LsJbCs> findByInfo(String hqlWithoutPro, List<String> list);
}
