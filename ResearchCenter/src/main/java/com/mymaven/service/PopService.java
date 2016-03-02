/**
 * @author 冯华杰
 * 
 * Email:fhj@sonluk.com.cn
 * 
 */
package com.mymaven.service;

import java.util.List;

import com.mymaven.modle.ScorePop;

public interface PopService {

	List<ScorePop> findByName(String name) ;
	ScorePop findById(Long id) ;
	ScorePop edit(ScorePop data);
	ScorePop del(Long id);
	ScorePop add(ScorePop data);
	Double getCal(String fdfs,String hfsj);
}
