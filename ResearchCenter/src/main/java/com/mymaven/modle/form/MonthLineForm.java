/**
 * @author 冯华杰
 * 
 * Email:fhj@sonluk.com.cn
 * 
 */
package com.mymaven.modle.form;

import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.List;

import com.mymaven.util.DateUtil;
import com.mymaven.util.ListUtils;

public class MonthLineForm implements java.io.Serializable {
	private String[] producters;
	private String model;
	private Double volt;
	private String fdfs;
	private String keyValue;
	private String fdType;
	private String storestate;
	private String btype;
	private String dwms;
	private String cyst;
	private String cyed;

	public String getCyed() {
		return cyed;
	}

	public void setCyed(String cyed) {
		this.cyed = cyed;
	}

	public String getDwms() {
		return dwms;
	}

	public void setDwms(String dwms) {
		this.dwms = dwms;
	}

	public String[] getProducters() {
		return producters;
	}

	public void setProducters(String[] producters) {
		this.producters = producters;
	}

	public String getModel() {
		return model;
	}

	public void setModel(String model) {
		this.model = model;
	}

	public Double getVolt() {
		return volt;
	}

	public void setVolt(Double volt) {
		this.volt = volt;
	}

	public String getFdfs() {
		return fdfs;
	}

	public void setFdfs(String fdfs) {
		this.fdfs = fdfs;
	}

	public String getKeyValue() {
		return keyValue;
	}

	public void setKeyValue(String keyValue) {
		this.keyValue = keyValue;
	}

	public String getFdType() {
		return fdType;
	}

	public void setFdType(String fdType) {
		this.fdType = fdType;
	}

	public String getCyst() {
		return cyst;
	}

	public void setCyst(String cyst) {
		this.cyst = cyst;
	}

	public String getStorestate() {
		return storestate;
	}

	public void setStorestate(String storestate) {
		this.storestate = storestate;
	}

	public String getBtype() {
		return btype;
	}

	public void setBtype(String btype) {
		this.btype = btype;
	}

	public MonthLineForm(String[] producters, String model, Double volt,
			String fdfs, String keyValue, String fdType, String cyst,
			String storestate, String btype) {
		super();
		this.producters = producters;
		this.model = model;
		this.volt = volt;
		this.fdfs = fdfs;
		this.keyValue = keyValue;
		this.fdType = fdType;
		this.cyst = cyst;
		this.storestate = storestate;
		this.btype = btype;
	}

	public MonthLineForm() {
	}

	public boolean verify() {
		if (this.producters == null) {// 生产者
			return false;
		}
		if (this.model == null) {// 电池型号
			return false;
		}
		if (this.volt == null) {// 同比电压
			return false;
		}
		if (this.fdfs == null) {// 放电方式
			return false;
		}
		if (this.keyValue == null) {// 负载电阻/电流/功率
			return false;
		}
		if (this.fdType == null) {// 放电模式
			return false;
		}
		if (this.cyst == null) {// 抽样日期
			return false;
		}
		if (this.storestate == null) {// 贮存状态
			return false;
		}
		return true;
	}

	/**
	 * 需要对ojbs[1]的list增加生产单位值
	 * 
	 * @return
	 */
	public Object[] getSQL() {
		Object[] objs = new Object[2];
		String hql = "select a.scdw,left(a.qyrq,7) as qyrq,AVG(CONVERT(real,b.[avg])) as avgs from ls_jb_cs a,T_AvgScore b "
				+ "where a.cdid=b.cdid ";
		List<String> list = new ArrayList<String>();
		if (this.model != null) {// 电池型号
			hql += " and a.dcxh like ?";
			list.add(this.model);
		}
		if (this.volt != null) {// 同比电压
			hql += " and b.dy like ?";
			list.add(new DecimalFormat("0.000").format(volt));
		}
		if (this.fdfs != null) {// 放电方式
			hql += " and a.fdfs like ?";
			list.add(this.fdfs);
		}
		if (this.keyValue != null) {// 负载电阻/电流/功率
			hql += " and a.fzdz like ?";
			list.add(this.keyValue);
		}
		if (this.fdType != null) {// 放电模式
			hql += " and fdlx like ?";
			list.add(this.fdType);
		}
		String in="";
		try {
			in=ListUtils.listToWhere(DateUtil.getDiffMonth(cyst, cyed));
		} catch (Exception e) {
			e.printStackTrace();
		}
		if (this.cyst != null&& this.cyed!=null) {// 抽样日期
			hql += " and left(a.qyrq,7) in "+in;
//			list.add(this.cyst.trim() + "%");
		}
		if (this.storestate != null) {// 贮存状态
			hql += " and a.sbmc like ?";
			list.add(this.storestate);
		}
		if (this.btype != null) {// 电池类别
			hql += " and a.dclb like ?";
			list.add(this.btype);
		}
		if (this.producters != null) {// 生产者
			hql += " and a.scdw like ?";
			// list.add()
		}
		hql += "  group by left(a.qyrq,7),a.scdw";
		objs[0] = hql;
		objs[1] = list;
		return objs;
	}
}