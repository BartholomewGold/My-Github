/**
 * @author 冯华杰
 * 
 * Email:fhj@sonluk.com.cn
 * 
 */
package com.mymaven.dao;

import java.util.List;

import com.mymaven.modle.ScorePop;

public interface PopDao {

	List<ScorePop> find(String hql,List<String> param);

	ScorePop findById(Long id);

	ScorePop edit(ScorePop data);

	ScorePop del(Long id);

	List<ScorePop> searchRepeat(String data);
}
