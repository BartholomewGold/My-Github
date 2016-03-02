/**
 * @author 冯华杰
 * 
 * Email:fhj@sonluk.com.cn
 * 
 */
package com.mymaven.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mymaven.dao.LsCsJobDao;
import com.mymaven.dao.LsVTimeDao;
import com.mymaven.dao.PopDao;
import com.mymaven.modle.LsJbCs;
import com.mymaven.modle.LsVtime;
import com.mymaven.service.LsVtimeService;
import com.sonluk.util.FFUtil;

@Service
@Transactional(readOnly = true)
public class LsVTimeServiceImpl implements LsVtimeService {
	@Autowired
	private LsVTimeDao lsVTimeDao;
	@Autowired
	private LsCsJobDao lsCsJobDao;
	@Autowired
	private PopDao popDao;

	public String findIdDesc() {
		return lsVTimeDao.getCount();
	}

	@Override
	public LsVtime findByCdidLast(String cdid, String zzdy) {
		String hql = "from LsVtime where cdid like ? and dy like ?";
		List<String> list = new ArrayList<String>();
		list.add(cdid.trim());
		list.add(zzdy.trim());
		return lsVTimeDao.findByCdidLast(hql, list);
	}

	@Override
	public List<LsJbCs> doAll(List<LsJbCs> content) {
		List<LsJbCs> list = new ArrayList<LsJbCs>();
		for (LsJbCs job : content) {
			LsVtime vtime = findByCdidLast(job.getId().getCdid(), job.getZzdy());
			job.setScore(FFUtil.getScore(job, vtime) + "");
			list.add(job);
		}
		return list;
	}
}
