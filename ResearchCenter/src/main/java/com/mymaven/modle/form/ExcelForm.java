/**
 * @author 冯华杰
 * 
 * Email:fhj@sonluk.com.cn
 * 
 */
package com.mymaven.modle.form;

import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.List;

import com.mymaven.util.StringUtils;

public class ExcelForm implements java.io.Serializable {
	private String producter;// 生产单位
	private String model;// 电池型号
	private String volt;// 同比电压
	private String btype;// 电池类别 可选
	private String fdfs;// 放电方式
	private String keyValue;// 负载电阻/电流/功率值
	private String fdtype;// 单位
	private String cycle;// 取样周期 可选
	private String cdatest;// 抽样时间开始日期
	private String cdateed;// 抽样时间结束日期
	private String stroeStatus;// 贮存状态

	private String dzczt;// 其他贮存状态
	private Integer st;
	private Integer ed;

	public String getDzczt() {
		return dzczt;
	}

	public void setDzczt(String dzczt) {
		this.dzczt = dzczt;
	}

	public Integer getSt() {
		return st;
	}

	public Integer getEd() {
		return ed;
	}

	public void setSt(Integer st) {
		this.st = st;
	}

	public void setEd(Integer ed) {
		this.ed = ed;
	}

	private List<String> list;

	@Override
	public String toString() {
		return "ExcelForm [producter=" + producter + ", model=" + model
				+ ", volt=" + volt + ", btype=" + btype + ", fdfs=" + fdfs
				+ ", keyValue=" + keyValue + ", fdtype=" + fdtype + ", cycle="
				+ cycle + ", cdatest=" + cdatest + ", cdateed=" + cdateed
				+ ", stroeStatus=" + stroeStatus + ",dzczt=" + dzczt + "]";
	}

	public List<String> getList() {
		return list;
	}


	public ExcelForm() {
	}

	public ExcelForm(String producter, String model, String volt, String btype,
			String fdfs, String keyValue, String fdtype, String cycle,
			String cdatest, String cdateed, String stroeStatus) {
		super();
		this.producter = producter;
		this.model = model;
		this.volt = volt;
		this.btype = btype;
		this.fdfs = fdfs;
		this.keyValue = keyValue;
		this.fdtype = fdtype;
		this.cycle = cycle;
		this.cdatest = cdatest;
		this.cdateed = cdateed;
		this.stroeStatus = stroeStatus;
	}

	public String getProducter() {
		return producter;
	}

	public void setProducter(String producter) {
		this.producter = producter;
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

	public String getBtype() {
		return btype;
	}

	public void setBtype(String btype) {
		this.btype = btype;
	}

	public String getFdfs() {
		return fdfs;
	}

	public void setFdfs(String fdfs) {
		this.fdfs = fdfs;
	}

	public String getKeyValue() {
		return keyValue;
	}

	public void setKeyValue(String keyValue) {
		this.keyValue = keyValue;
	}

	public String getFdtype() {
		return fdtype;
	}

	public void setFdtype(String fdtype) {
		this.fdtype = fdtype;
	}

	public String getCycle() {
		return cycle;
	}

	public void setCycle(String cycle) {
		this.cycle = cycle;
	}

	public String getCdatest() {
		return cdatest;
	}

	public void setCdatest(String cdatest) {
		this.cdatest = cdatest;
	}

	public String getCdateed() {
		return cdateed;
	}

	public void setCdateed(String cdateed) {
		this.cdateed = cdateed;
	}

	public String getStroeStatus() {
		return stroeStatus;
	}

	public void setStroeStatus(String stroeStatus) {
		this.stroeStatus = stroeStatus;
	}

	public String getHqlWithoutPro() throws Exception {
		list = new ArrayList<String>();
		String hql = "from LsJbCs t where 1=1 ";
		if (!StringUtils.isEmpty(producter)) {
			hql += " and scdw like ?";
			list.add(producter);
		}

		if (!StringUtils.isEmpty(model)) {
			hql += " and dcxh like ?";
			list.add(model);
		} 
		if (!StringUtils.isEmpty(btype)) {
			hql += " and dclb like ?";
			list.add(btype);
		}
		if (!StringUtils.isEmpty(fdfs)) {
			hql += " and fdfs like ?";
			list.add(fdfs);
		}
		if (!StringUtils.isEmpty(keyValue)) {
			hql += " and fzdz like ?";
			list.add(keyValue);
		}

		if (!StringUtils.isEmpty(fdtype)) {
			hql += " and fdlx like ?";
			list.add(fdtype);
		} 

		if (!StringUtils.isEmpty(cycle)) {
			hql += " and qyzq like ?";
			list.add(cycle);
		}
		
		if (!StringUtils.isEmpty(cdatest)) {
			hql += " and  CONVERT(varchar(100),qyrq,23)>=CONVERT(varchar(100),?,23)";
			list.add(cdatest);
		}
		if (!StringUtils.isEmpty(cdateed)) {
			hql += " and  CONVERT(varchar(100),qyrq,23)<=CONVERT(varchar(100),?,23)";
			list.add(cdateed);
		}
		if (!StringUtils.isEmpty(stroeStatus)) {
			hql += " and sbmc like ?";
			list.add(stroeStatus);
		} 
		hql += " order by scdw,CONVERT(varchar(100),qyrq,23),sbmc desc";
		return hql;
	}
	
	


	public Object[] getAvgSql()throws Exception{
		Object[] ret=new Object[2];
		ArrayList<String> test = new ArrayList<String>();
		String hql="select a.*,b.avg from ls_jb_cs a ,T_AvgScore b where a.cdid=b.cdid and a.zzdy=b.dy ";
		if (!StringUtils.isEmpty(producter)) {
			hql += " and b.dy like ?";
			test.add(new DecimalFormat("0.000").format(Double.parseDouble(volt)));
		}
		if (!StringUtils.isEmpty(producter)) {
			hql += " and a.scdw like ?";
			test.add(producter);
		}
		if (!StringUtils.isEmpty(model)) {
			hql += " and a.dcxh like ?";
			test.add(model);
		}
		if (!StringUtils.isEmpty(btype)) {
			hql += " and a.dclb like ?";
			test.add(btype);
		}
		if (!StringUtils.isEmpty(fdfs)) {
			hql += " and a.fdfs like ?";
			test.add(fdfs);
		}
		if (!StringUtils.isEmpty(keyValue)) {
			hql += " and a.fzdz like ?";
			test.add(keyValue);
		}
		if (!StringUtils.isEmpty(fdtype)) {
			hql += " and a.fdlx like ?";
			test.add(fdtype);
		}
		if (!StringUtils.isEmpty(cycle)) {
			hql += " and a.qyzq like ?";
			test.add(cycle);
		}
		if (!StringUtils.isEmpty(cdatest)) {
			hql += " and  CONVERT(varchar(100),a.qyrq,23)>=CONVERT(varchar(100),?,23)";
			test.add(cdatest);
		}
		if (!StringUtils.isEmpty(cdateed)) {
			hql += " and  CONVERT(varchar(100),a.qyrq,23)<=CONVERT(varchar(100),?,23)";
			test.add(cdateed);
		}
		if (!StringUtils.isEmpty(stroeStatus)) {
			hql += " and a.sbmc like ?";
			test.add(stroeStatus);
		} 
		hql += " order by a.scdw,CONVERT(varchar(100),a.qyrq,23),a.sbmc desc";
		ret[0]=hql;
		ret[1]=test;
		return ret;
	}
	
	
	public Object[] getSqlDesc() throws Exception {
		Object[] ret=new Object[2];
		ArrayList<String> list = new ArrayList<String>();
		String hql = "select a.cdid,a.cdmc,a.dcxh,a.scdw,a.qyrq,"
				+ "b.[avg],a.sbmc,a.fzdz,a.fdlx,a.fdfs,a.hfsj from ls_jb_cs a,T_AvgScore b"
				+ " where a.cdid=b.cdid";
		if (!StringUtils.isEmpty(producter)) {
			hql += " and a.scdw like ?";
			list.add(producter);
		}
		if (!StringUtils.isEmpty(model)) {
			hql += " and a.dcxh like ?";
			list.add(model);
		} 
		if (!StringUtils.isEmpty(volt)) {
			hql += " and b.dy like ?";
			DecimalFormat df = new DecimalFormat("0.000");
			list.add(df.format(Double.valueOf(volt)));
		} 
		
		if (!StringUtils.isEmpty(btype)) {
			hql += " and a.dclb like ?";
			list.add(btype);
		}
		if (!StringUtils.isEmpty(fdfs)) {
			hql += " and a.fdfs like ?";
			list.add(fdfs);
		} 
		if (!StringUtils.isEmpty(keyValue)) {
			hql += " and a.fzdz like ?";
			list.add(keyValue);
		}
		if (!StringUtils.isEmpty(fdtype)) {
			hql += " and a.fdlx like ?";
			list.add(fdtype);
		} 
		if (!StringUtils.isEmpty(cycle)) {
			hql += " and a.qyzq like ?";
			list.add(cycle);
		}
		if (!StringUtils.isEmpty(cdatest)) {
			hql += " and CONVERT(varchar(100),a.qyrq,23)>=CONVERT(varchar(100),?,23)";
			list.add(cdatest);
		}
		if (!StringUtils.isEmpty(cdateed)) {
			hql += " and CONVERT(varchar(100),a.qyrq,23)<=CONVERT(varchar(100),?,23)";
			list.add(cdateed);
		}
		if (!StringUtils.isEmpty(stroeStatus)) {
			hql += " and sbmc like ?";
			list.add(stroeStatus);
		}
		hql += " order by a.scdw,CONVERT(varchar(100),a.qyrq,23),a.sbmc desc";
		ret[0]=hql;
		ret[1]=list;
		return ret;
	}
	
	
	
	public Object[]  getOtherScore() throws Exception {
		Object[] ret=new Object[2];
		ArrayList<String> list = new ArrayList<String>();
		String hql = "select a.cdid,a.cdmc,a.dcxh,a.scdw,a.qyrq,"
				+ "b.[avg],a.sbmc,a.fzdz,a.fdlx,a.fdfs,a.hfsj from ls_jb_cs a , T_AvgScore b"
				+ " where a.cdid=b.cdid";
		if (!StringUtils.isEmpty(producter)) {
			hql += " and a.scdw like ?";
			list.add(producter);
		}
		if (!StringUtils.isEmpty(model)) {
			hql += " and a.dcxh like ?";
			list.add(model);
		}
		if (!StringUtils.isEmpty(volt)) {
			hql += " and b.dy like ?";
			DecimalFormat df = new DecimalFormat("0.000");
			list.add(df.format(Double.valueOf(volt)));
		}
		if (!StringUtils.isEmpty(btype)) {
			hql += " and a.dclb like ?";
			list.add(btype);
		}
		if (!StringUtils.isEmpty(fdfs)) {
			hql += " and a.fdfs like ?";
			list.add(fdfs);
		}
		if (!StringUtils.isEmpty(keyValue)) {
			hql += " and a.fzdz like ?";
			list.add(keyValue);
		}

		if (!StringUtils.isEmpty(fdtype)) {
			hql += " and a.fdlx like ?";
			list.add(fdtype);
		}

		if (!StringUtils.isEmpty(cycle)) {
			hql += " and a.qyzq like ?";
			list.add(cycle);
		}
		if (!StringUtils.isEmpty(dzczt)) {
			String[] a=dzczt.split(",");
			String str="";
			for (String string : a) {
				str+="'"+string+"',";
			}
			str=str.substring(0,str.length()-1);
			hql += " and a.sbmc in ("+str+")";
		}
		hql += " and a.qyrq like ?";
		ret[0]=hql;
		ret[1]=list;
		return ret;
	}
}