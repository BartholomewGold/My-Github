/**
 * @author 冯华杰
 * 
 * Email:fhj@sonluk.com.cn
 * 
 */
package com.mymaven.modle;

import javax.persistence.Column;
import javax.persistence.Embeddable;

/**
 * LsJbCsId entity. @author MyEclipse Persistence Tools
 */
@Embeddable
public class LsJbCsId implements java.io.Serializable {

	// Fields

	private String cdid;
	private String cdmc;

	// Constructors

	/** default constructor */
	public LsJbCsId() {
	}

	/** full constructor */
	public LsJbCsId(String cdid, String cdmc) {
		this.cdid = cdid;
		this.cdmc = cdmc;
	}

	// Property accessors

	@Column(name = "cdid", length = 20)
	public String getCdid() {
		return this.cdid;
	}

	public void setCdid(String cdid) {
		this.cdid = cdid;
	}

	@Column(name = "cdmc", length = 50)
	public String getCdmc() {
		return this.cdmc;
	}

	public void setCdmc(String cdmc) {
		this.cdmc = cdmc;
	}

	public boolean equals(Object other) {
		if ((this == other))
			return true;
		if ((other == null))
			return false;
		if (!(other instanceof LsJbCsId))
			return false;
		LsJbCsId castOther = (LsJbCsId) other;

		return ((this.getCdid() == castOther.getCdid()) || (this.getCdid() != null
				&& castOther.getCdid() != null && this.getCdid().equals(
				castOther.getCdid())))
				&& ((this.getCdmc() == castOther.getCdmc()) || (this.getCdmc() != null
						&& castOther.getCdmc() != null && this.getCdmc()
						.equals(castOther.getCdmc())));
	}

	public int hashCode() {
		int result = 17;

		result = 37 * result
				+ (getCdid() == null ? 0 : this.getCdid().hashCode());
		result = 37 * result
				+ (getCdmc() == null ? 0 : this.getCdmc().hashCode());
		return result;
	}

}