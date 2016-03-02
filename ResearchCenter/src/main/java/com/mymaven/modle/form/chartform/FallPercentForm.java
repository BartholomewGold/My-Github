/**
 * @author 冯华杰
 * 
 * Email:fhj@sonluk.com.cn
 * 
 */
package com.mymaven.modle.form.chartform;

import java.util.List;

public class FallPercentForm {
	private String xAxisData;//'新电', '3个月', '6个月'
	private String legend;//'701', '702'
	private List<Series> seriess;
	public String getxAxisData() {
		return xAxisData;
	}
	public void setxAxisData(String xAxisData) {
		this.xAxisData = xAxisData;
	}
	public String getLegend() {
		return legend;
	}
	public void setLegend(String legend) {
		this.legend = legend;
	}
	public List<Series> getSeriess() {
		return seriess;
	}
	public void setSeriess(List<Series> seriess) {
		this.seriess = seriess;
	}
	@Override
	public String toString() {
		return "FallPercentForm [xAxisData=" + xAxisData + ", legend=" + legend
				+ ", seriess=" + seriess + "]";
	}

	
}
