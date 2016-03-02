/**
 * @author 冯华杰
 * 
 * Email:fhj@sonluk.com.cn
 * 
 */
package com.mymaven.chartUtil;

import java.awt.BasicStroke;
import java.awt.Color;
import java.awt.Font;
import java.util.Random;

import org.jfree.chart.ChartFactory;
import org.jfree.chart.JFreeChart;
import org.jfree.chart.axis.CategoryAxis;
import org.jfree.chart.axis.NumberAxis;
import org.jfree.chart.axis.ValueAxis;
import org.jfree.chart.labels.StandardCategoryItemLabelGenerator;
import org.jfree.chart.labels.StandardXYItemLabelGenerator;
import org.jfree.chart.plot.CategoryPlot;
import org.jfree.chart.plot.PlotOrientation;
import org.jfree.chart.renderer.category.CategoryItemRenderer;
import org.jfree.chart.renderer.category.LineAndShapeRenderer;
import org.jfree.data.category.CategoryDataset;
import org.jfree.data.category.DefaultCategoryDataset;
import org.jfree.data.xy.XYDataset;
import org.jfree.data.xy.XYSeries;
import org.jfree.data.xy.XYSeriesCollection;

public class LineChartUtils {
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
			String yDes, CategoryDataset dataset) {
		 JFreeChart  chart = ChartFactory.createLineChart(title,xDes, yDes, dataset,  
	                PlotOrientation.VERTICAL, // 绘制方向  
	                true, // 显示图例  
	                true, // 采用标准生成器  
	                false // 是否生成超链接  
	                );  
	
		// 取出图片标题，并对其字体进行设置
		chart.getTitle().setFont(new Font("隶书", Font.BOLD, 20));
        chart.getLegend().setItemFont(new Font("宋体", Font.BOLD, 20));// 设置图例类别字体  
        chart.setBackgroundPaint(Color.WHITE);// 设置背景色   
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
		Font font = new Font("宋体",Font.BOLD,20);
		CategoryPlot plot = chart.getCategoryPlot();  
        plot.setBackgroundPaint(Color.white); // 设置绘图区背景色  
        plot.setRangeGridlinePaint(Color.WHITE); // 设置水平方向背景线颜色  
        plot.setRangeGridlinesVisible(true);// 设置是否显示水平方向背景线,默认值为true  
        plot.setDomainGridlinePaint(Color.WHITE); // 设置垂直方向背景线颜色  
        plot.setDomainGridlinesVisible(true); // 设置是否显示垂直方向背景线,默认值为false  
        
        CategoryItemRenderer render = plot.getRenderer();
        render.setBaseItemLabelsVisible(true); 
        render.setBaseSeriesVisible(true);// series 点（即数据点）可见
        render.setBaseItemLabelGenerator(new StandardCategoryItemLabelGenerator());
//        
//        render.setShapesVisible(true);
//        render.setDrawOutlines(true);
//        render.setUseFillPaint(true);
//        render.setFillPaint(java.awt.Color.white);
		
        CategoryAxis domainAxis = plot.getDomainAxis();     
        domainAxis.setLabelFont(font); // 设置横轴字体  
        domainAxis.setTickLabelFont(font);// 设置坐标轴标尺值字体  
        domainAxis.setLowerMargin(0.01);// 左边距 边框距离  
        domainAxis.setUpperMargin(0.06);// 右边距 边框距离,防止最后边的一个数据靠近了坐标轴。  
        domainAxis.setMaximumCategoryLabelLines(2);  
          
        ValueAxis rangeAxis = plot.getRangeAxis();  
        rangeAxis.setLabelFont(font);   
        rangeAxis.setStandardTickUnits(NumberAxis.createIntegerTickUnits());//Y轴显示整数  
        rangeAxis.setAutoRangeMinimumSize(1);   //最小跨度  
        rangeAxis.setUpperMargin(0.18);//上边距,防止最大的一个数据靠近了坐标轴。     
        rangeAxis.setLowerBound(0);   //最小值显示0  
        rangeAxis.setAutoRange(false);   //不自动分配Y轴数据  
        rangeAxis.setTickMarkStroke(new BasicStroke(1.6f));     // 设置坐标标记大小  
        rangeAxis.setTickMarkPaint(Color.BLACK);     // 设置坐标标记颜色  
        
   
	}
	public static void drawLine(CategoryPlot plot ,DefaultCategoryDataset dataSet){
		  // 获取折线对象  
        LineAndShapeRenderer renderer = (LineAndShapeRenderer) plot.getRenderer();  
        BasicStroke realLine = new BasicStroke(1.8f); // 设置实线  
        
        float dashes[] = { 5.0f };   
        BasicStroke brokenLine = new BasicStroke(2.2f, // 线条粗细  
                BasicStroke.CAP_ROUND, // 端点风格  
                BasicStroke.JOIN_ROUND, // 折点风格  
                8f, dashes, 0.6f);   
        for (int i = 0; i < dataSet.getRowCount(); i++) {  
            if (i % 2 == 0)  
                renderer.setSeriesStroke(i, realLine); // 利用实线绘制  
            else  
                renderer.setSeriesStroke(i, brokenLine); // 利用虚线绘制  
        }  
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
	public static DefaultCategoryDataset createDataSet(String[] linenames,
			String[] columnKeys, double[][] data) throws Exception {
		DefaultCategoryDataset dataSet = new DefaultCategoryDataset();  
		for (double[] ds : data) {
			if (ds.length != columnKeys.length) {
				throw new Exception("数据长度与列数不符合");
			}
		}
		
		dataSet.setValue(24,"aa", "bb"); 
		dataSet.setValue(48.24,"aa", "cc"); 
		dataSet.setValue(new Random().nextInt(100),"dd", "cc"); 
		dataSet.setValue(new Random().nextInt(100),"dd", "bb"); 
		return dataSet;

	}
}
