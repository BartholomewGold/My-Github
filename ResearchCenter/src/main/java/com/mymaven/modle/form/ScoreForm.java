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

public class ScoreForm {

	private String[] producters;// 生产者
	private String model;// 电池型号
	private String volt;// 同比电压
	private String discharge;// 放电方式
	private String keyValue;// 负载电阻/电流/功率
	private String fdType;// 放电模式
	private String cyst;// 抽样日期
	private String[] storeStatusVal;// 贮存状态
	private String btype;// 电池类别
	private String dwms;
	
	public String getDwms() {
		return dwms;
	}
	public void setDwms(String dwms) {
		this.dwms = dwms;
	}

	public ScoreForm() {
	}

	public String getBtype() {
		return btype;
	}

	public void setBtype(String btype) {
		this.btype = btype;
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

	public boolean verify() {
		// return true;
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
		if (producters.length == 0) {
			return false;
		}
		if (storeStatusVal.length == 0 || storeStatusVal.length == 1) {
			return false;
		}
		return true;
	}

}
