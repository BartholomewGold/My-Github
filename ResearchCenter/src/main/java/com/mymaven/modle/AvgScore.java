/**
 * @author 冯华杰
 * 
 * Email:fhj@sonluk.com.cn
 * 
 */
package com.mymaven.modle;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * TAvgScore entity. @author MyEclipse Persistence Tools
 */
@Entity
@Table(name = "T_AvgScore")
public class AvgScore implements java.io.Serializable {

	// Fields

	private long id;
	private String cdid;
	private String dy;
	private String avg;

	// Constructors

	/** default constructor */
	public AvgScore() {
	}

	/** minimal constructor */
	public AvgScore(long id, String cdid, String dy) {
		this.id = id;
		this.cdid = cdid;
		this.dy = dy;
	}

	/** full constructor */
	public AvgScore(long id, String cdid, String dy, String avg) {
		this.id = id;
		this.cdid = cdid;
		this.dy = dy;
		this.avg = avg;
	}

	// Property accessors
	@Id
	@Column(name = "ID", unique = true, nullable = false)
	public long getId() {
		return this.id;
	}

	public void setId(long id) {
		this.id = id;
	}

	@Column(name = "cdid", nullable = false, length = 20)
	public String getCdid() {
		return this.cdid;
	}

	public void setCdid(String cdid) {
		this.cdid = cdid;
	}

	@Column(name = "dy", nullable = false, length = 8)
	public String getDy() {
		return this.dy;
	}

	public void setDy(String dy) {
		this.dy = dy;
	}

	@Column(name = "avg", length = 40)
	public String getAvg() {
		return this.avg;
	}

	public void setAvg(String avg) {
		this.avg = avg;
	}

}