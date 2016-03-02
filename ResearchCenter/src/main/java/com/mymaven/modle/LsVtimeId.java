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
 * LsVtimeId entity. @author MyEclipse Persistence Tools
 */
@Embeddable
public class LsVtimeId implements java.io.Serializable {

	// Fields

	@Override
	public String toString() {
		return "LsVtimeId [cdid=" + cdid + ", dylever=" + dylever + ", dy="
				+ dy + ", time1=" + time1 + ", time2=" + time2 + ", time3="
				+ time3 + ", time4=" + time4 + ", time5=" + time5 + ", time6="
				+ time6 + ", time7=" + time7 + ", time8=" + time8 + ", time9="
				+ time9 + ", cdmc=" + cdmc + "]";
	}

	private String cdid;
	private String dylever;
	private String dy;
	private String time1;
	private String time2;
	private String time3;
	private String time4;
	private String time5;
	private String time6;
	private String time7;
	private String time8;
	private String time9;
	private String cdmc;

	// Constructors

	/** default constructor */
	public LsVtimeId() {
	}

	/** full constructor */
	public LsVtimeId(String cdid, String dylever, String dy, String time1,
			String time2, String time3, String time4, String time5,
			String time6, String time7, String time8, String time9, String cdmc) {
		this.cdid = cdid;
		this.dylever = dylever;
		this.dy = dy;
		this.time1 = time1;
		this.time2 = time2;
		this.time3 = time3;
		this.time4 = time4;
		this.time5 = time5;
		this.time6 = time6;
		this.time7 = time7;
		this.time8 = time8;
		this.time9 = time9;
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

	@Column(name = "dylever", length = 2)
	public String getDylever() {
		return this.dylever;
	}

	public void setDylever(String dylever) {
		this.dylever = dylever;
	}

	@Column(name = "dy", length = 8)
	public String getDy() {
		return this.dy;
	}

	public void setDy(String dy) {
		this.dy = dy;
	}

	@Column(name = "time1", length = 50)
	public String getTime1() {
		return this.time1;
	}

	public void setTime1(String time1) {
		this.time1 = time1;
	}

	@Column(name = "time2", length = 50)
	public String getTime2() {
		return this.time2;
	}

	public void setTime2(String time2) {
		this.time2 = time2;
	}

	@Column(name = "time3", length = 50)
	public String getTime3() {
		return this.time3;
	}

	public void setTime3(String time3) {
		this.time3 = time3;
	}

	@Column(name = "time4", length = 50)
	public String getTime4() {
		return this.time4;
	}

	public void setTime4(String time4) {
		this.time4 = time4;
	}

	@Column(name = "time5", length = 50)
	public String getTime5() {
		return this.time5;
	}

	public void setTime5(String time5) {
		this.time5 = time5;
	}

	@Column(name = "time6", length = 50)
	public String getTime6() {
		return this.time6;
	}

	public void setTime6(String time6) {
		this.time6 = time6;
	}

	@Column(name = "time7", length = 50)
	public String getTime7() {
		return this.time7;
	}

	public void setTime7(String time7) {
		this.time7 = time7;
	}

	@Column(name = "time8", length = 50)
	public String getTime8() {
		return this.time8;
	}

	public void setTime8(String time8) {
		this.time8 = time8;
	}

	@Column(name = "time9", length = 50)
	public String getTime9() {
		return this.time9;
	}

	public void setTime9(String time9) {
		this.time9 = time9;
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
		if (!(other instanceof LsVtimeId))
			return false;
		LsVtimeId castOther = (LsVtimeId) other;

		return ((this.getCdid() == castOther.getCdid()) || (this.getCdid() != null
				&& castOther.getCdid() != null && this.getCdid().equals(
				castOther.getCdid())))
				&& ((this.getDylever() == castOther.getDylever()) || (this
						.getDylever() != null && castOther.getDylever() != null && this
						.getDylever().equals(castOther.getDylever())))
				&& ((this.getDy() == castOther.getDy()) || (this.getDy() != null
						&& castOther.getDy() != null && this.getDy().equals(
						castOther.getDy())))
				&& ((this.getTime1() == castOther.getTime1()) || (this
						.getTime1() != null && castOther.getTime1() != null && this
						.getTime1().equals(castOther.getTime1())))
				&& ((this.getTime2() == castOther.getTime2()) || (this
						.getTime2() != null && castOther.getTime2() != null && this
						.getTime2().equals(castOther.getTime2())))
				&& ((this.getTime3() == castOther.getTime3()) || (this
						.getTime3() != null && castOther.getTime3() != null && this
						.getTime3().equals(castOther.getTime3())))
				&& ((this.getTime4() == castOther.getTime4()) || (this
						.getTime4() != null && castOther.getTime4() != null && this
						.getTime4().equals(castOther.getTime4())))
				&& ((this.getTime5() == castOther.getTime5()) || (this
						.getTime5() != null && castOther.getTime5() != null && this
						.getTime5().equals(castOther.getTime5())))
				&& ((this.getTime6() == castOther.getTime6()) || (this
						.getTime6() != null && castOther.getTime6() != null && this
						.getTime6().equals(castOther.getTime6())))
				&& ((this.getTime7() == castOther.getTime7()) || (this
						.getTime7() != null && castOther.getTime7() != null && this
						.getTime7().equals(castOther.getTime7())))
				&& ((this.getTime8() == castOther.getTime8()) || (this
						.getTime8() != null && castOther.getTime8() != null && this
						.getTime8().equals(castOther.getTime8())))
				&& ((this.getTime9() == castOther.getTime9()) || (this
						.getTime9() != null && castOther.getTime9() != null && this
						.getTime9().equals(castOther.getTime9())))
				&& ((this.getCdmc() == castOther.getCdmc()) || (this.getCdmc() != null
						&& castOther.getCdmc() != null && this.getCdmc()
						.equals(castOther.getCdmc())));
	}

	public int hashCode() {
		int result = 17;

		result = 37 * result
				+ (getCdid() == null ? 0 : this.getCdid().hashCode());
		result = 37 * result
				+ (getDylever() == null ? 0 : this.getDylever().hashCode());
		result = 37 * result + (getDy() == null ? 0 : this.getDy().hashCode());
		result = 37 * result
				+ (getTime1() == null ? 0 : this.getTime1().hashCode());
		result = 37 * result
				+ (getTime2() == null ? 0 : this.getTime2().hashCode());
		result = 37 * result
				+ (getTime3() == null ? 0 : this.getTime3().hashCode());
		result = 37 * result
				+ (getTime4() == null ? 0 : this.getTime4().hashCode());
		result = 37 * result
				+ (getTime5() == null ? 0 : this.getTime5().hashCode());
		result = 37 * result
				+ (getTime6() == null ? 0 : this.getTime6().hashCode());
		result = 37 * result
				+ (getTime7() == null ? 0 : this.getTime7().hashCode());
		result = 37 * result
				+ (getTime8() == null ? 0 : this.getTime8().hashCode());
		result = 37 * result
				+ (getTime9() == null ? 0 : this.getTime9().hashCode());
		result = 37 * result
				+ (getCdmc() == null ? 0 : this.getCdmc().hashCode());
		return result;
	}

}