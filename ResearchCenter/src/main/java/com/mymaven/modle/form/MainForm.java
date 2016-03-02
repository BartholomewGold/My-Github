/**
 * @author 冯华杰
 * 
 * Email:fhj@sonluk.com.cn
 * 
 */
package com.mymaven.modle.form;



public class MainForm implements java.io.Serializable {
	@Override
	public String toString() {
		return "MainForm [saveId=" + saveId + ", saveName=" + saveName
				+ ", productt=" + productt + ", model=" + model + ", cycle="
				+ cycle + ", stroeStatusVal=" + stroeStatusVal + ", discharge="
				+ discharge + ", type=" + type + ", keyValue=" + keyValue
				+ ", fdType=" + fdType + ", beginDateStart=" + beginDateStart
				+ ", beginDateEnd=" + beginDateEnd + ", endDateStart="
				+ endDateStart + ", endDateEnd=" + endDateEnd + ", cyst="
				+ cyst + ", cyed=" + cyed + "]";
	}
	private String saveId;
	private String saveName;
	private String productt;
	private String model;
	private String cycle;
	private String stroeStatusVal;
	private String discharge;
	private String type;
	private String keyValue;
	private String fdType;
	private String beginDateStart;
	private String beginDateEnd;
	private String endDateStart;
	private String endDateEnd;
	private String cyst;
	private String cyed;
	private String voltEd;
	public String getVoltEd() {
		return voltEd;
	}
	public void setVoltEd(String voltEd) {
		this.voltEd = voltEd;
	}
	public String getSaveId() {
		return saveId;
	}
	public void setSaveId(String saveId) {
		this.saveId = saveId;
	}
	public String getSaveName() {
		return saveName;
	}
	public void setSaveName(String saveName) {
		this.saveName = saveName;
	}
	public String getProductt() {
		return productt;
	}
	public void setProductt(String product) {
		this.productt = product;
	}
	public String getModel() {
		return model;
	}
	public void setModel(String model) {
		this.model = model;
	}
	public String getCycle() {
		return cycle;
	}
	public void setCycle(String cycle) {
		this.cycle = cycle;
	}
	public String getStroeStatusVal() {
		return stroeStatusVal;
	}
	public void setStroeStatusVal(String stroeStatusVal) {
		this.stroeStatusVal = stroeStatusVal;
	}
	public String getDischarge() {
		return discharge;
	}
	public void setDischarge(String discharge) {
		this.discharge = discharge;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
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
	public String getBeginDateStart() {
		return beginDateStart;
	}
	public void setBeginDateStart(String beginDateStart) {
		this.beginDateStart = beginDateStart;
	}
	public String getBeginDateEnd() {
		return beginDateEnd;
	}
	public void setBeginDateEnd(String beginDateEnd) {
		this.beginDateEnd = beginDateEnd;
	}
	public String getEndDateStart() {
		return endDateStart;
	}
	public void setEndDateStart(String endDateStart) {
		this.endDateStart = endDateStart;
	}
	public String getEndDateEnd() {
		return endDateEnd;
	}
	public void setEndDateEnd(String endDateEnd) {
		this.endDateEnd = endDateEnd;
	}
	public String getCyst() {
		return cyst;
	}
	public void setCyst(String cyst) {
		this.cyst = cyst;
	}
	public String getCyed() {
		return cyed;
	}
	public void setCyed(String cyed) {
		this.cyed = cyed;
	}
	
	
	
}