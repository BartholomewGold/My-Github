/**
 * @author 冯华杰
 * 
 * Email:fhj@sonluk.com.cn
 * 
 */
package com.mymaven.modle;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import net.sf.json.JSONObject;

/**
 * TScorePop entity. @author MyEclipse Persistence Tools
 */
@Entity
@Table(name = "T_SCORE_POP")
public class ScorePop implements java.io.Serializable {

	// Fields

	private Long id;
	private String fdfs;
	private String minTime;
	private String hourTime;
	private String daysTime;
	private String cirTime;
	private String hoursTime;
	private String remark;

	// Constructors

	/** default constructor */
	public ScorePop() {
	}

	/** minimal constructor */
	public ScorePop(Long id) {
		this.id = id;
	}

	/** full constructor */
	public ScorePop(Long id, String fdfs, String minTime, String hourTime,
			String daysTime, String cirTime, String hoursTime,String remark) {
		this.id = id;
		this.fdfs = fdfs;
		this.minTime = minTime;
		this.hourTime = hourTime;
		this.daysTime = daysTime;
		this.cirTime = cirTime;
		this.hoursTime = hoursTime;
		this.remark=remark;
	}
	public JSONObject toJSON(){
		JSONObject json=new JSONObject();
		json.put("id", id);
		json.put("fdfs", fdfs);
		json.put("minTime", minTime==null?"":minTime);
		json.put("hourTime", hourTime==null?"":hourTime);
		json.put("daysTime", daysTime==null?"":daysTime);
		json.put("cirTime", cirTime==null?"":cirTime);
		json.put("hoursTime", hoursTime==null?"":hoursTime);
		json.put("remark", remark==null?"":remark);
		return json;
	}

	// Property accessors
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id", unique = true, nullable = false)
	public Long getId() {
		return this.id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	@Column(name = "fdfs")
	public String getFdfs() {
		return this.fdfs;
	}

	public void setFdfs(String fdfs) {
		this.fdfs = fdfs;
	}

	@Column(name = "minTime")
	public String getMinTime() {
		return this.minTime;
	}

	public void setMinTime(String minTime) {
		this.minTime = minTime;
	}

	@Column(name = "hourTime")
	public String getHourTime() {
		return this.hourTime;
	}

	public void setHourTime(String hourTime) {
		this.hourTime = hourTime;
	}

	@Column(name = "daysTime")
	public String getDaysTime() {
		return this.daysTime;
	}

	public void setDaysTime(String daysTime) {
		this.daysTime = daysTime;
	}

	@Column(name = "cirTime")
	public String getCirTime() {
		return this.cirTime;
	}

	public void setCirTime(String cirTime) {
		this.cirTime = cirTime;
	}

	@Column(name = "hoursTime")
	public String getHoursTime() {
		return this.hoursTime;
	}

	public void setHoursTime(String hoursTime) {
		this.hoursTime = hoursTime;
	}

	@Column(name = "remark")
	public String getRemark() {
		return remark;
	}
	public void setRemark(String remark) {
		this.remark = remark;
	}
	
}