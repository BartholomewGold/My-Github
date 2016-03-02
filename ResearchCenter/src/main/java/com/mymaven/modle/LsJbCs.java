/**
 * @author 冯华杰
 * 
 * Email:fhj@sonluk.com.cn
 * 
 */
package com.mymaven.modle;

import javax.persistence.AttributeOverride;
import javax.persistence.AttributeOverrides;
import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * LsJbCs entity. @author MyEclipse Persistence Tools
 */
@Entity
@Table(name = "ls_jb_cs", schema = "dbo", catalog = "dmdb")
public class LsJbCs implements java.io.Serializable {

	// Fields

	private LsJbCsId id;
	private String sfsc;
	private String operatorName;
	private String dylx;
	private String dcxh;
	private String dcmc;
	private String scrq;
	private String scdw;
	private String dcph;
	private String sbmc;
	private String qyrq;
	private String jchj;
	private String fzdz;
	private String zzdy;
	private String fdlx;
	private String fdfs;
	private String jljg;
	private String bzsj;
	private String jstj;
	private String dlcs;
	private String hfsj;
	private String fdrq;
	private String jsrq;
	private String fdkssj;
	private String fdjssj;
	private String xxxqs;
	private String fdts;
	private String dzys;
	private String yfws;
	private String volt1;
	private String volt2;
	private String volt3;
	private String volt4;
	private String volt5;
	private String volt6;
	private String volt7;
	private String volt8;
	private String volt9;
	private String volt10;
	private String volt11;
	private String dch;
	private String bz;
	private String shortcir1;
	private String shortcir2;
	private String shortcir3;
	private String shortcir4;
	private String shortcir5;
	private String shortcir6;
	private String shortcir7;
	private String shortcir8;
	private String shortcir9;
	private String capacity1;
	private String capacity2;
	private String capacity3;
	private String capacity4;
	private String capacity5;
	private String capacity6;
	private String capacity7;
	private String capacity8;
	private String capacity9;
	private int mark;
	private String recordnum;
	private String qyzq;
	private String fwbm;
	private String dclb;

	private String score;

	public String getScore() {
		return score;
	}

	public void setScore(String score) {
		this.score = score;
	}

	// Constructors

	/** default constructor */
	public LsJbCs() {
	}

	/** minimal constructor */
	public LsJbCs(LsJbCsId id) {
		this.id = id;
	}

	/** full constructor */
	public LsJbCs(LsJbCsId id, String sfsc, String operatorName, String dylx,
			String dcxh, String dcmc, String scrq, String scdw, String dcph,
			String sbmc, String qyrq, String jchj, String fzdz, String zzdy,
			String fdlx, String fdfs, String jljg, String bzsj, String jstj,
			String dlcs, String hfsj, String fdrq, String jsrq, String fdkssj,
			String fdjssj, String xxxqs, String fdts, String dzys, String yfws,
			String volt1, String volt2, String volt3, String volt4,
			String volt5, String volt6, String volt7, String volt8,
			String volt9, String volt10, String volt11, String dch, String bz,
			String shortcir1, String shortcir2, String shortcir3,
			String shortcir4, String shortcir5, String shortcir6,
			String shortcir7, String shortcir8, String shortcir9,
			String capacity1, String capacity2, String capacity3,
			String capacity4, String capacity5, String capacity6,
			String capacity7, String capacity8, String capacity9, short mark,
			String recordnum, String qyzq, String fwbm, String dclb) {
		this.id = id;
		this.sfsc = sfsc;
		this.operatorName = operatorName;
		this.dylx = dylx;
		this.dcxh = dcxh;
		this.dcmc = dcmc;
		this.scrq = scrq;
		this.scdw = scdw;
		this.dcph = dcph;
		this.sbmc = sbmc;
		this.qyrq = qyrq;
		this.jchj = jchj;
		this.fzdz = fzdz;
		this.zzdy = zzdy;
		this.fdlx = fdlx;
		this.fdfs = fdfs;
		this.jljg = jljg;
		this.bzsj = bzsj;
		this.jstj = jstj;
		this.dlcs = dlcs;
		this.hfsj = hfsj;
		this.fdrq = fdrq;
		this.jsrq = jsrq;
		this.fdkssj = fdkssj;
		this.fdjssj = fdjssj;
		this.xxxqs = xxxqs;
		this.fdts = fdts;
		this.dzys = dzys;
		this.yfws = yfws;
		this.volt1 = volt1;
		this.volt2 = volt2;
		this.volt3 = volt3;
		this.volt4 = volt4;
		this.volt5 = volt5;
		this.volt6 = volt6;
		this.volt7 = volt7;
		this.volt8 = volt8;
		this.volt9 = volt9;
		this.volt10 = volt10;
		this.volt11 = volt11;
		this.dch = dch;
		this.bz = bz;
		this.shortcir1 = shortcir1;
		this.shortcir2 = shortcir2;
		this.shortcir3 = shortcir3;
		this.shortcir4 = shortcir4;
		this.shortcir5 = shortcir5;
		this.shortcir6 = shortcir6;
		this.shortcir7 = shortcir7;
		this.shortcir8 = shortcir8;
		this.shortcir9 = shortcir9;
		this.capacity1 = capacity1;
		this.capacity2 = capacity2;
		this.capacity3 = capacity3;
		this.capacity4 = capacity4;
		this.capacity5 = capacity5;
		this.capacity6 = capacity6;
		this.capacity7 = capacity7;
		this.capacity8 = capacity8;
		this.capacity9 = capacity9;
		this.mark = mark;
		this.recordnum = recordnum;
		this.qyzq = qyzq;
		this.fwbm = fwbm;
		this.dclb = dclb;
	}

	// Property accessors
	@EmbeddedId
	@AttributeOverrides({
			@AttributeOverride(name = "cdid", column = @Column(name = "cdid", length = 20)),
			@AttributeOverride(name = "cdmc", column = @Column(name = "cdmc", length = 50)) })
	public LsJbCsId getId() {
		return this.id;
	}

	public void setId(LsJbCsId id) {
		this.id = id;
	}

	@Column(name = "sfsc", length = 1)
	public String getSfsc() {
		return this.sfsc;
	}

	public void setSfsc(String sfsc) {
		this.sfsc = sfsc;
	}

	@Column(name = "operator_name", length = 10)
	public String getOperatorName() {
		return this.operatorName;
	}

	public void setOperatorName(String operatorName) {
		this.operatorName = operatorName;
	}

	@Column(name = "dylx", length = 8)
	public String getDylx() {
		return this.dylx;
	}

	public void setDylx(String dylx) {
		this.dylx = dylx;
	}

	@Column(name = "dcxh", length = 10)
	public String getDcxh() {
		return this.dcxh;
	}

	public void setDcxh(String dcxh) {
		this.dcxh = dcxh;
	}

	@Column(name = "dcmc", length = 50)
	public String getDcmc() {
		return this.dcmc;
	}

	public void setDcmc(String dcmc) {
		this.dcmc = dcmc;
	}

	@Column(name = "scrq", length = 50)
	public String getScrq() {
		return this.scrq;
	}

	public void setScrq(String scrq) {
		this.scrq = scrq;
	}

	@Column(name = "scdw", length = 30)
	public String getScdw() {
		return this.scdw;
	}

	public void setScdw(String scdw) {
		this.scdw = scdw;
	}

	@Column(name = "dcph", length = 20)
	public String getDcph() {
		return this.dcph;
	}

	public void setDcph(String dcph) {
		this.dcph = dcph;
	}

	@Column(name = "sbmc", length = 50)
	public String getSbmc() {
		return this.sbmc;
	}

	public void setSbmc(String sbmc) {
		this.sbmc = sbmc;
	}

	@Column(name = "qyrq", length = 50)
	public String getQyrq() {
		return this.qyrq;
	}

	public void setQyrq(String qyrq) {
		this.qyrq = qyrq;
	}

	@Column(name = "jchj", length = 30)
	public String getJchj() {
		return this.jchj;
	}

	public void setJchj(String jchj) {
		this.jchj = jchj;
	}

	@Column(name = "fzdz", length = 20)
	public String getFzdz() {
		return this.fzdz;
	}

	public void setFzdz(String fzdz) {
		this.fzdz = fzdz;
	}

	@Column(name = "zzdy", length = 8)
	public String getZzdy() {
		return this.zzdy;
	}

	public void setZzdy(String zzdy) {
		this.zzdy = zzdy;
	}

	@Column(name = "fdlx", length = 6)
	public String getFdlx() {
		return this.fdlx;
	}

	public void setFdlx(String fdlx) {
		this.fdlx = fdlx;
	}

	@Column(name = "fdfs", length = 100)
	public String getFdfs() {
		return this.fdfs;
	}

	public void setFdfs(String fdfs) {
		this.fdfs = fdfs;
	}

	@Column(name = "jljg", length = 15)
	public String getJljg() {
		return this.jljg;
	}

	public void setJljg(String jljg) {
		this.jljg = jljg;
	}

	@Column(name = "bzsj", length = 10)
	public String getBzsj() {
		return this.bzsj;
	}

	public void setBzsj(String bzsj) {
		this.bzsj = bzsj;
	}

	@Column(name = "jstj", length = 20)
	public String getJstj() {
		return this.jstj;
	}

	public void setJstj(String jstj) {
		this.jstj = jstj;
	}

	@Column(name = "dlcs", length = 4)
	public String getDlcs() {
		return this.dlcs;
	}

	public void setDlcs(String dlcs) {
		this.dlcs = dlcs;
	}

	@Column(name = "hfsj", length = 15)
	public String getHfsj() {
		return this.hfsj;
	}

	public void setHfsj(String hfsj) {
		this.hfsj = hfsj;
	}

	@Column(name = "fdrq", length = 10)
	public String getFdrq() {
		return this.fdrq;
	}

	public void setFdrq(String fdrq) {
		this.fdrq = fdrq;
	}

	@Column(name = "jsrq", length = 10)
	public String getJsrq() {
		return this.jsrq;
	}

	public void setJsrq(String jsrq) {
		this.jsrq = jsrq;
	}

	@Column(name = "fdkssj", length = 5)
	public String getFdkssj() {
		return this.fdkssj;
	}

	public void setFdkssj(String fdkssj) {
		this.fdkssj = fdkssj;
	}

	@Column(name = "fdjssj", length = 5)
	public String getFdjssj() {
		return this.fdjssj;
	}

	public void setFdjssj(String fdjssj) {
		this.fdjssj = fdjssj;
	}

	@Column(name = "xxxqs", length = 1)
	public String getXxxqs() {
		return this.xxxqs;
	}

	public void setXxxqs(String xxxqs) {
		this.xxxqs = xxxqs;
	}

	@Column(name = "fdts", length = 3)
	public String getFdts() {
		return this.fdts;
	}

	public void setFdts(String fdts) {
		this.fdts = fdts;
	}

	@Column(name = "dzys", length = 2)
	public String getDzys() {
		return this.dzys;
	}

	public void setDzys(String dzys) {
		this.dzys = dzys;
	}

	@Column(name = "yfws", length = 2)
	public String getYfws() {
		return this.yfws;
	}

	public void setYfws(String yfws) {
		this.yfws = yfws;
	}

	@Column(name = "volt1", length = 8)
	public String getVolt1() {
		return this.volt1;
	}

	public void setVolt1(String volt1) {
		this.volt1 = volt1;
	}

	@Column(name = "volt2", length = 8)
	public String getVolt2() {
		return this.volt2;
	}

	public void setVolt2(String volt2) {
		this.volt2 = volt2;
	}

	@Column(name = "volt3", length = 8)
	public String getVolt3() {
		return this.volt3;
	}

	public void setVolt3(String volt3) {
		this.volt3 = volt3;
	}

	@Column(name = "volt4", length = 8)
	public String getVolt4() {
		return this.volt4;
	}

	public void setVolt4(String volt4) {
		this.volt4 = volt4;
	}

	@Column(name = "volt5", length = 8)
	public String getVolt5() {
		return this.volt5;
	}

	public void setVolt5(String volt5) {
		this.volt5 = volt5;
	}

	@Column(name = "volt6", length = 8)
	public String getVolt6() {
		return this.volt6;
	}

	public void setVolt6(String volt6) {
		this.volt6 = volt6;
	}

	@Column(name = "volt7", length = 8)
	public String getVolt7() {
		return this.volt7;
	}

	public void setVolt7(String volt7) {
		this.volt7 = volt7;
	}

	@Column(name = "volt8", length = 8)
	public String getVolt8() {
		return this.volt8;
	}

	public void setVolt8(String volt8) {
		this.volt8 = volt8;
	}

	@Column(name = "volt9", length = 8)
	public String getVolt9() {
		return this.volt9;
	}

	public void setVolt9(String volt9) {
		this.volt9 = volt9;
	}

	@Column(name = "volt10", length = 8)
	public String getVolt10() {
		return this.volt10;
	}

	public void setVolt10(String volt10) {
		this.volt10 = volt10;
	}

	@Column(name = "volt11", length = 8)
	public String getVolt11() {
		return this.volt11;
	}

	public void setVolt11(String volt11) {
		this.volt11 = volt11;
	}

	@Column(name = "dch", length = 9)
	public String getDch() {
		return this.dch;
	}

	public void setDch(String dch) {
		this.dch = dch;
	}

	@Column(name = "bz", length = 1073741823)
	public String getBz() {
		return this.bz;
	}

	public void setBz(String bz) {
		this.bz = bz;
	}

	@Column(name = "shortcir1", length = 6)
	public String getShortcir1() {
		return this.shortcir1;
	}

	public void setShortcir1(String shortcir1) {
		this.shortcir1 = shortcir1;
	}

	@Column(name = "shortcir2", length = 6)
	public String getShortcir2() {
		return this.shortcir2;
	}

	public void setShortcir2(String shortcir2) {
		this.shortcir2 = shortcir2;
	}

	@Column(name = "shortcir3", length = 6)
	public String getShortcir3() {
		return this.shortcir3;
	}

	public void setShortcir3(String shortcir3) {
		this.shortcir3 = shortcir3;
	}

	@Column(name = "shortcir4", length = 6)
	public String getShortcir4() {
		return this.shortcir4;
	}

	public void setShortcir4(String shortcir4) {
		this.shortcir4 = shortcir4;
	}

	@Column(name = "shortcir5", length = 6)
	public String getShortcir5() {
		return this.shortcir5;
	}

	public void setShortcir5(String shortcir5) {
		this.shortcir5 = shortcir5;
	}

	@Column(name = "shortcir6", length = 6)
	public String getShortcir6() {
		return this.shortcir6;
	}

	public void setShortcir6(String shortcir6) {
		this.shortcir6 = shortcir6;
	}

	@Column(name = "shortcir7", length = 6)
	public String getShortcir7() {
		return this.shortcir7;
	}

	public void setShortcir7(String shortcir7) {
		this.shortcir7 = shortcir7;
	}

	@Column(name = "shortcir8", length = 6)
	public String getShortcir8() {
		return this.shortcir8;
	}

	public void setShortcir8(String shortcir8) {
		this.shortcir8 = shortcir8;
	}

	@Column(name = "shortcir9", length = 6)
	public String getShortcir9() {
		return this.shortcir9;
	}

	public void setShortcir9(String shortcir9) {
		this.shortcir9 = shortcir9;
	}

	@Column(name = "capacity1", length = 6)
	public String getCapacity1() {
		return this.capacity1;
	}

	public void setCapacity1(String capacity1) {
		this.capacity1 = capacity1;
	}

	@Column(name = "capacity2", length = 6)
	public String getCapacity2() {
		return this.capacity2;
	}

	public void setCapacity2(String capacity2) {
		this.capacity2 = capacity2;
	}

	@Column(name = "capacity3", length = 6)
	public String getCapacity3() {
		return this.capacity3;
	}

	public void setCapacity3(String capacity3) {
		this.capacity3 = capacity3;
	}

	@Column(name = "capacity4", length = 6)
	public String getCapacity4() {
		return this.capacity4;
	}

	public void setCapacity4(String capacity4) {
		this.capacity4 = capacity4;
	}

	@Column(name = "capacity5", length = 6)
	public String getCapacity5() {
		return this.capacity5;
	}

	public void setCapacity5(String capacity5) {
		this.capacity5 = capacity5;
	}

	@Column(name = "capacity6", length = 6)
	public String getCapacity6() {
		return this.capacity6;
	}

	public void setCapacity6(String capacity6) {
		this.capacity6 = capacity6;
	}

	@Column(name = "capacity7", length = 6)
	public String getCapacity7() {
		return this.capacity7;
	}

	public void setCapacity7(String capacity7) {
		this.capacity7 = capacity7;
	}

	@Column(name = "capacity8", length = 6)
	public String getCapacity8() {
		return this.capacity8;
	}

	public void setCapacity8(String capacity8) {
		this.capacity8 = capacity8;
	}

	@Column(name = "capacity9", length = 6)
	public String getCapacity9() {
		return this.capacity9;
	}

	public void setCapacity9(String capacity9) {
		this.capacity9 = capacity9;
	}

	@Column(name = "mark")
	public int getMark() {
		return this.mark;
	}

	public void setMark(int mark) {
		this.mark = mark;
	}

	@Column(name = "recordnum", length = 10)
	public String getRecordnum() {
		return this.recordnum;
	}

	public void setRecordnum(String recordnum) {
		this.recordnum = recordnum;
	}

	@Column(name = "qyzq", length = 50)
	public String getQyzq() {
		return this.qyzq;
	}

	public void setQyzq(String qyzq) {
		this.qyzq = qyzq;
	}

	@Column(name = "fwbm", length = 50)
	public String getFwbm() {
		return this.fwbm;
	}

	public void setFwbm(String fwbm) {
		this.fwbm = fwbm;
	}

	@Column(name = "dclb", length = 10)
	public String getDclb() {
		return this.dclb;
	}

	public void setDclb(String dclb) {
		this.dclb = dclb;
	}

	@Override
	public String toString() {
		return "LsJbCs [id=" + id + ", sfsc=" + sfsc + ", operatorName="
				+ operatorName + ", dylx=" + dylx + ", dcxh=" + dcxh
				+ ", dcmc=" + dcmc + ", scrq=" + scrq + ", scdw=" + scdw
				+ ", dcph=" + dcph + ", sbmc=" + sbmc + ", qyrq=" + qyrq
				+ ", jchj=" + jchj + ", fzdz=" + fzdz + ", zzdy=" + zzdy
				+ ", fdlx=" + fdlx + ", fdfs=" + fdfs + ", jljg=" + jljg
				+ ", bzsj=" + bzsj + ", jstj=" + jstj + ", dlcs=" + dlcs
				+ ", hfsj=" + hfsj + ", fdrq=" + fdrq + ", jsrq=" + jsrq
				+ ", fdkssj=" + fdkssj + ", fdjssj=" + fdjssj + ", xxxqs="
				+ xxxqs + ", fdts=" + fdts + ", dzys=" + dzys + ", yfws="
				+ yfws + ", volt1=" + volt1 + ", volt2=" + volt2 + ", volt3="
				+ volt3 + ", volt4=" + volt4 + ", volt5=" + volt5 + ", volt6="
				+ volt6 + ", volt7=" + volt7 + ", volt8=" + volt8 + ", volt9="
				+ volt9 + ", volt10=" + volt10 + ", volt11=" + volt11
				+ ", dch=" + dch + ", bz=" + bz + ", shortcir1=" + shortcir1
				+ ", shortcir2=" + shortcir2 + ", shortcir3=" + shortcir3
				+ ", shortcir4=" + shortcir4 + ", shortcir5=" + shortcir5
				+ ", shortcir6=" + shortcir6 + ", shortcir7=" + shortcir7
				+ ", shortcir8=" + shortcir8 + ", shortcir9=" + shortcir9
				+ ", capacity1=" + capacity1 + ", capacity2=" + capacity2
				+ ", capacity3=" + capacity3 + ", capacity4=" + capacity4
				+ ", capacity5=" + capacity5 + ", capacity6=" + capacity6
				+ ", capacity7=" + capacity7 + ", capacity8=" + capacity8
				+ ", capacity9=" + capacity9 + ", mark=" + mark
				+ ", recordnum=" + recordnum + ", qyzq=" + qyzq + ", fwbm="
				+ fwbm + ", dclb=" + dclb + ", score=" + score + "]";
	}
	public Double scoreGet(LsVtime vtime) {
		if(vtime==null){
			return 0.0;
		}
		double total = 0;
		int num = 0;
		for (int i = 0; i < dch.length(); i++) {
			if (dch.charAt(i) == '1') {
				num++;
				switch (i) {
				case 0:
					total += Double.parseDouble(vtime.getId().getTime1());
					break;
				case 1:
					total += Double.parseDouble(vtime.getId().getTime2());
					break;
				case 2:
					total += Double.parseDouble(vtime.getId().getTime3());
					break;
				case 3:
					total += Double.parseDouble(vtime.getId().getTime4());
					break;
				case 4:
					total += Double.parseDouble(vtime.getId().getTime5());
					break;
				case 5:
					total += Double.parseDouble(vtime.getId().getTime6());
					break;
				case 6:
					total += Double.parseDouble(vtime.getId().getTime7());
					break;
				case 7:
					total += Double.parseDouble(vtime.getId().getTime8());
					break;
				case 8:
					total += Double.parseDouble(vtime.getId().getTime9());
					break;
				default:
					break;
				}
				
			}
		}
		if(num==0){
			return null;
		}
		return total/num;
	}

}