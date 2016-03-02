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
 * DmDischarge entity. @author MyEclipse Persistence Tools
 */
@Entity
@Table(name = "dm_discharge")
public class DmDischarge implements java.io.Serializable {

	// Fields

	
	/**
	 * 
	 */
	private String fdfsDm;
	private String fdfs;

	// Constructors

	/** default constructor */
	public DmDischarge() {
	}

	/** minimal constructor */
	public DmDischarge(String fdfsDm) {
		this.fdfsDm = fdfsDm;
	}

	/** full constructor */
	public DmDischarge(String fdfsDm, String fdfs) {
		this.fdfsDm = fdfsDm;
		this.fdfs = fdfs;
	}

	// Property accessors
	@Id
	@Column(name = "fdfs_dm", length = 3)
	public String getFdfsDm() {
		return this.fdfsDm;
	}

	public void setFdfsDm(String fdfsDm) {
		this.fdfsDm = fdfsDm;
	}

	@Column(name = "fdfs", length = 200)
	public String getFdfs() {
		return this.fdfs;
	}

	public void setFdfs(String fdfs) {
		this.fdfs = fdfs;
	}

}