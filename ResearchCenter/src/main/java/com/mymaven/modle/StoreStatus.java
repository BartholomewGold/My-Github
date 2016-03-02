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

@Entity
@Table(name = "dm_zczt")
/**
 * 贮存状态
 * @author Margaret
 *
 */
public class StoreStatus implements java.io.Serializable {

	// Fields

	private String id;
	private String zczt;
	private int px;

	// Constructors

	/** default constructor */
	public StoreStatus() {
	}

	/** full constructor */
	public StoreStatus(String id, String zczt, int px) {
		this.id = id;
		this.zczt = zczt;
		this.px = px;
	}

	// Property accessors
	@Id
	@Column(name = "id", unique = true, nullable = false)
	public String getId() {
		return this.id;
	}

	public void setId(String id) {
		this.id = id;
	}

	@Column(name = "zczt", length = 50)
	public String getZczt() {
		return this.zczt;
	}

	public void setZczt(String zczt) {
		this.zczt = zczt;
	}

	@Column(name = "px")
	public Integer getPx() {
		return this.px;
	}

	public void setPx(Integer px) {
		this.px = px;
	}

}