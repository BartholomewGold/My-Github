/**
 * @author 冯华杰
 * 
 * Email:fhj@sonluk.com.cn
 * 
 */
package com.mymaven.modle.form.chartform;

public class Series {
	private String name;
	private String data;//11, 11,
	private String markPoint;
//	markPoint : {
//		data : [ {
//			name : '周最低',
//			value : -10,
//			xAxis : 1,
//			yAxis : -10
//		} ]
//	},或
//	data : [ {
//		type : 'max',
//		name : '最大值'
//	}, {
//		type : 'min',
//		name : '最小值'
//	} ]
//},
	private String markLine;
//	markLine : {
//		data : [ {
//			type : 'average',
//			name : '平均值'
//		} ]
//	}
//	或
//		markLine : {
// 					data : [ [ {
// 						name : '标线1终点',
// 						xAxis : '周三',
// 						yAxis : 20
// 					}, {
// 						name : '标线1终点',
// 						xAxis : '周日',
// 						yAxis : 40
// 					} ] ]
// 				}
	public Series(){}
	public Series(String name){
		this.name=name;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getData() {
		return data;
	}
	public void setData(String data) {
		this.data = data;
	}
	public String getMarkPoint() {
		return markPoint;
	}
	public void setMarkPoint(String markPoint) {
		this.markPoint = markPoint;
	}
	public String getMarkLine() {
		return markLine;
	}
	public void setMarkLine(String markLine) {
		this.markLine = markLine;
	}
	@Override
	public String toString() {
		return "Series [name=" + name + ", data=" + data + ", markPoint="
				+ markPoint + ", markLine=" + markLine + "]";
	}
	
	
	
}
