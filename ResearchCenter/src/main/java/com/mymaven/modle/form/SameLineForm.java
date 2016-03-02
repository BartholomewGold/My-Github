/**
 * @author 冯华杰
 * 
 * Email:fhj@sonluk.com.cn
 * 
 */
package com.mymaven.modle.form;

import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.IdentityHashMap;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import com.mymaven.util.StringUtils;

public class SameLineForm {

	private String[] producters;// 生产者
	private String model;// 电池型号
	private String volt;// 同比电压
	private String discharge;// 放电方式
	private String keyValue;// 负载电阻/电流/功率
	private String fdType;// 放电模式
	private String cyst;// 抽样日期
	private String[] storeStatusVal;// 贮存状态
	private String btype;//电池类别

	public SameLineForm() {
	}
	public String getBtype() {
		return btype;
	}
	public void setBtype(String btype) {
		this.btype = btype;
	}
	public String getHqlWithoutPro() {
		String hql = "from LsJbCs t where 1=1 ";
		if (!StringUtils.isEmpty(model)) {
			hql += " and dcxh like ?";
		}
		if (!StringUtils.isEmpty(discharge)) {
			hql += " and fdfs like ?";
		}
		if (!StringUtils.isEmpty(keyValue)) {
			hql += " and fzdz like ?";
		}
		if (!StringUtils.isEmpty(fdType)) {
			hql += " and fdlx like ?";
		}
		if (!StringUtils.isEmpty(cyst)) {
			hql += " and qyrq like ?";
		}
//		if (storeStatusVal != null && storeStatusVal.length != 0) {
//			String pa = "";
//			for (String store : storeStatusVal) {
//				pa += "?,";
//			}
//			hql += " and sbmc in (" + pa.substring(0, pa.length() - 1) + ") ";
//		}
		return hql;
	}

	public List<String> getListWithoutPro() {
		List<String> list = new ArrayList<String>();
		if (!StringUtils.isEmpty(model)) {
			list.add(model);
		}
		if (!StringUtils.isEmpty(discharge)) {
			list.add(discharge);
		}
		if (!StringUtils.isEmpty(keyValue)) {
			list.add(keyValue);
		}
		if (!StringUtils.isEmpty(fdType)) {
			list.add(fdType);
		}
		if (!StringUtils.isEmpty(cyst)) {
			list.add(cyst);
		}
//		if (storeStatusVal != null && storeStatusVal.length != 0) {
//			for (String store : storeStatusVal) {
//				list.add(store);
//			}
//		}
		return list;
	}

	@Override
	public String toString() {
		return "SameLineForm [producters=" + Arrays.toString(producters)
				+ ", model=" + model + ", volt=" + volt + ", discharge="
				+ discharge + ", keyValue=" + keyValue + ", fdType=" + fdType
				+ ", cyst=" + cyst + ", storeStatusVal="
				+ Arrays.toString(storeStatusVal) + "]";
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

	public String getVolt() {
		return volt;
	}

	public void setVolt(String volt) {
		this.volt = volt;
	}

	public String getDischarge() {
		return discharge;
	}

	public void setDischarge(String discharge) {
		this.discharge = discharge;
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

	public String[] getStoreStatusVal() {
		return storeStatusVal;
	}

	public void setStoreStatusVal(String[] storeStatusVal) {
//		IdentityHashMap<Integer,String> list=new IdentityHashMap<Integer,String>();
//		Pattern p1 = Pattern.compile("\\d*天");
//		Pattern p2 = Pattern.compile("\\d*个月");
//		Pattern p3 = Pattern.compile("\\d*年");
//		for (String string : storeStatusVal) {
//			if(string.indexOf("新电")!=-1){
//				list.put(0,string);
//			}
//			Matcher m = p.matcher(string);
//			List<String> result=new ArrayList<String>();
//			while(m.find()){
//				result.add(m.group());
//			}
//		}
		this.storeStatusVal = storeStatusVal;
	}

	public boolean verify() {
//		return true;
		if (this.producters == null) {
			return false;
		}
		if (this.producters == null) {// 生产者
			return false;
		}
		if (this.model == null) {// 电池型号
			return false;
		}
		if (this.volt == null) {// 同比电压
			return false;
		}
		if (this.discharge == null) {// 放电方式
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
		if (this.storeStatusVal == null) {// 贮存状态
			return false;
		}
		if(producters.length==0){
			return false;			
		}
		if(storeStatusVal.length==0||storeStatusVal.length==1){
			return false;			
		}
		return true;
	}
	
	
	
	public Object[] getSQL() {
		Object[] objs=new Object[2];
		List<String> list=new ArrayList<String>();
		String hql = "select a.cdid,a.cdmc,a.dcxh,a.scdw,a.qyrq,b.[avg],a.sbmc,a.fzdz,a.fdlx,a.fdfs"
				+ " from ls_jb_cs a , T_AvgScore b where a.cdid=b.cdid";
		if (!StringUtils.isEmpty(model)) {
			hql += " and a.dcxh like ?";
			list.add(model);
		}
		if(!StringUtils.isEmpty(volt)){
			hql+=" and b.dy like ?";
			list.add(new DecimalFormat("0.000").format(Double.valueOf(volt)));
		}
		if (!StringUtils.isEmpty(discharge)) {
			hql += " and a.fdfs like ?";
			list.add(discharge);
		}
		if (!StringUtils.isEmpty(keyValue)) {
			hql += " and a.fzdz like ?";
			list.add(keyValue);
		}
		if (!StringUtils.isEmpty(fdType)) {
			hql += " and a.fdlx like ?";
			list.add(fdType);
		}
		if (!StringUtils.isEmpty(cyst)) {
			hql += " and a.qyrq like ?";
			list.add(cyst);
		}
		if (!StringUtils.isEmpty(btype)) {
			hql += " and dclb like ?";
			list.add(btype);
		}
//		if (storeStatusVal != null && storeStatusVal.length != 0) {
//			String pa = "";
//			for (String store : storeStatusVal) {
//				pa += "?,";
//			}
//			hql += " and sbmc in (" + pa.substring(0, pa.length() - 1) + ") ";
//		}
		objs[0]=hql;
		objs[1]=list;
		return objs;
	}

}
