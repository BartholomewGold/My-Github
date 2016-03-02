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
 * DmQyzq entity. @author MyEclipse Persistence Tools
 */
@Entity
@Table(name = "dm_qyzq", schema = "dbo", catalog = "dmdb")
public class DmQyzq implements java.io.Serializable {

	// Fields
	private String id;
	private String qyzq;
	
	// Constructors
	/** default constructor */
	public DmQyzq() {
	}

	/** minimal constructor */
	public DmQyzq(String id) {
		this.id = id;
	}

	/** full constructor */
	public DmQyzq(String id, String qyzq) {
		this.id = id;
		this.qyzq = qyzq;
	}

	// Property accessors
	@Id
	@Column(name = "id", length = 4)
	public String getId() {
		return this.id;
	}

	public void setId(String id) {
		this.id = id;
	}

	@Column(name = "qyzq", length = 50)
	public String getQyzq() {
		return this.qyzq;
	}

	public void setQyzq(String qyzq) {
		this.qyzq = qyzq;
	}

}