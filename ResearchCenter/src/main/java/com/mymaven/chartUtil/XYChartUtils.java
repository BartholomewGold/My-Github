/**
 * @author 冯华杰
 * 
 * Email:fhj@sonluk.com.cn
 * 
 */
package com.mymaven.chartUtil;

import java.awt.Color;
import java.awt.Font;

import org.jfree.chart.ChartFactory;
import org.jfree.chart.JFreeChart;
import org.jfree.chart.labels.StandardXYItemLabelGenerator;
import org.jfree.chart.plot.IntervalMarker;
import org.jfree.chart.plot.PlotOrientation;
import org.jfree.chart.plot.XYPlot;
import org.jfree.chart.renderer.xy.XYItemRenderer;
import org.jfree.data.category.CategoryDataset;
import org.jfree.data.general.DatasetUtilities;
import org.jfree.data.xy.XYDataset;
import org.jfree.data.xy.XYSeries;
import org.jfree.data.xy.XYSeriesCollection;
import org.jfree.ui.LengthAdjustmentType;
/**
 * XY折线图
 * @author Margaret
 *
 */
public class XYChartUtils {
	/**
	 * 创建XY折线图标
	 * 
	 * @param title
	 *            标题
	 * @param xDes
	 *            X轴名称
	 * @param yDes
	 *            Y轴名称
	 * @param dataset
	 *            数据集
	 * @return
	 */
	public static JFreeChart createChart(String title, String xDes,
			String yDes, XYDataset dataset) {
		JFreeChart chart = ChartFactory.createXYLineChart(title, xDes, yDes,
				dataset, PlotOrientation.VERTICAL, true,// 生成图例
				false, // 生成热点工具，如果要在图片中实现鼠标放上时显示数据，须设置为true
				false); // 生成URL链接
		// 取出图片标题，并对其字体进行设置
		chart.getTitle().setFont(new Font("隶书", Font.BOLD, 20));
		// chart.setBackgroundPaint(Color.white);
		return chart;
	}

	/**
	 * 设置点(有BUG)
	 * @param lineNames  线名
	 * @param data  此处需要对data进行封装封装为List<Point>的形式
	 * @return
	 */
	public static XYDataset createDataset(String[] lineNames,double[][] data) {
		XYSeriesCollection xySeriesCollection = new XYSeriesCollection();
		for (int i = 0; i < lineNames.length; i++) {
			XYSeries xyserie = new XYSeries(lineNames[i]);
			for (int j = 0; j < data[i].length; j++) {
				xyserie.add(j+1,data[i][j]);
				
			}
//			for (double ds : data[i]) {
//			}
			xySeriesCollection.addSeries(xyserie);
		}
		
		return xySeriesCollection;
	}
	
	public static void doChartThing(JFreeChart chart){
		Font font = new Font("宋体", Font.BOLD, 15);
		chart.getLegend().setItemFont(font);
		// 对横竖坐标标签进行字体设置

		XYPlot plot = chart.getXYPlot();
		plot.setBackgroundPaint(Color.white);
		plot.getDomainAxis().setTickLabelFont(font);// 坐标轴标尺字体
		plot.getDomainAxis().setLabelFont(font);// 设置X轴字体
		plot.getRangeAxis().setLabelFont(font);// 设置Y轴描述字体
		plot.getRangeAxis().setLabelAngle(1.6);// 设置Y轴描述角度

		XYItemRenderer line = plot.getRenderer();
		line.setBaseItemLabelsVisible(true); 
		line.setBaseSeriesVisible(true);// series 点（即数据点）可见
		line.setBaseItemLabelGenerator(new StandardXYItemLabelGenerator());
		
		double lowpress1 = 300;
		double uperpress1 = 300;
		IntervalMarker inter = new IntervalMarker(lowpress1, uperpress1);
		inter.setLabelOffsetType(LengthAdjustmentType.EXPAND);
		inter.setPaint(Color.red);// 域顏色

		inter.setLabelFont(new Font("SansSerif", 41, 14));
		inter.setLabelPaint(Color.BLACK);
		inter.setLabel("         test");
		plot.addRangeMarker(inter);
	}

	/**
	 * 创建图表数据集--非时序图可用
	 * 
	 * @param linenames
	 *            图表线名
	 * @param columnKeys
	 *            列名
	 * @param data
	 *            数据集（一个一维数组表示一条线，为Y轴的值）
	 * @return
	 * @throws Exception
	 */
	public static CategoryDataset createDataSet(String[] linenames,
			String[] columnKeys, double[][] data) throws Exception {
		for (double[] ds : data) {
			if (ds.length != columnKeys.length) {
				throw new Exception("数据长度与列数不符合");
			}
		}
		return DatasetUtilities.createCategoryDataset(linenames, columnKeys,
				data);

	}
}
