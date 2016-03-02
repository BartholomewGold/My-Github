/**
 * @author 冯华杰
 * 
 * Email:fhj@sonluk.com.cn
 * 
 */
package com.sonluk.util;

import java.io.File;
import java.io.FileOutputStream;
import java.util.List;

import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFCellStyle;
import org.apache.poi.hssf.usermodel.HSSFFont;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.util.CellRangeAddress;

public class ExcelUtil {
	public static HSSFFont getFontDesc(HSSFWorkbook wb, String type,
			boolean isBold) {
		HSSFFont font = wb.createFont();
		font.setFontName(type);
		// font.setBoldweight((short) 100);
		// font.setFontHeight((short) 300);
		font.setBold(isBold);
		// font.setColor(HSSFColor.BLUE.index);
		return font;
	}
/**
 * 
 * @param fdfs 放电方式(为拼接，举例：1000mA,10s/m,1h/d,0.9v)
 * @param type 电池类型(举例:LR6)
 * @param storeState 贮存类型(按时间排序)
 * @param list 每行数据值
 * @param producter 生产单位
 * @throws Exception
 */
	public static File createDescendReport(String fdfs, String type,
			String[] storeState,List<List<String>> list,String producter) throws Exception {
		HSSFWorkbook wb = new HSSFWorkbook();
		// 创建Excel的工作sheet,对应到一个excel文档的tab
		HSSFSheet sheet = wb.createSheet("下降率报表");
		// 加粗样式
		HSSFCellStyle style = wb.createCellStyle();
		style.setVerticalAlignment(HSSFCellStyle.VERTICAL_CENTER);
		style.setAlignment(HSSFCellStyle.ALIGN_CENTER);
		style.setFont(getFontDesc(wb, "宋体", true));

		sheet.addMergedRegion(new CellRangeAddress(0, 0, 2,
				2 * storeState.length));
		sheet.addMergedRegion(new CellRangeAddress(0, 1, 1, 1));
		sheet.addMergedRegion(new CellRangeAddress(2,storeState.length*2-1, 0, 0));
		HSSFRow row = sheet.createRow(0);
		HSSFCell cell = row.createCell(0);
		cell.setCellValue("电池类型");
		cell.setCellStyle(style);
		cell = row.createCell(1);
		cell.setCellStyle(style);
		cell.setCellValue("抽样日期");
		cell = row.createCell(2);
		cell.setCellStyle(style);
		cell.setCellValue(fdfs);
		row = sheet.createRow(1);
		cell = row.createCell(0);
		cell.setCellStyle(style);
		cell.setCellValue(type);
		for (int i = 0; i < storeState.length; i++) {
			String state = storeState[i];
			if (i == 0) {
				cell = row.createCell(2);
			} else {
				cell = row.createCell(1+2*i);
			}
			cell.setCellStyle(style);
			cell.setCellValue(state);
			if (i != 0) {
				cell = row.createCell(2+2*i);
				
				cell.setCellStyle(style);
				cell.setCellValue("下降率");
			}
		}
		int addrow=0;
		int addcell=0;
		for (List<String> content : list) {
			row = sheet.createRow(2+(addrow++));
			addcell=0;
			for (String str : content) {
				cell = row.createCell(1+(addcell++));
				cell.setCellValue(str);
			}
			  
		}
		row = sheet.getRow(2);
		cell = row.createCell(0);
		
		cell.setCellStyle(style);
		cell.setCellValue(producter);
		File file=new File("desc.xls");
		FileOutputStream os = new FileOutputStream(file);
		wb.write(os);
		os.close();
		return file;
	}

	public static File createWeekReport(List<List<String>> list)
			throws Exception {
		// 创建Excel的工作书册 Workbook,对应到一个excel文档
		HSSFWorkbook wb = new HSSFWorkbook();
		// 创建Excel的工作sheet,对应到一个excel文档的tab
		HSSFSheet sheet = wb.createSheet("电池综合性能报表");
		// 设置excel每列宽度
		sheet.setColumnWidth(0, 4000);
		sheet.setColumnWidth(1, 3500);
		HSSFFont font = getFont(wb, "宋体", true);
		HSSFCellStyle style = getTitleStyle(wb, font);
		// 创建Excel的sheet的一行
		HSSFRow row = sheet.createRow(0);
		row.setHeight((short) 500);// 设定行的高度
		// 创建一个Excel的单元格
		HSSFCell cell = row.createCell(0);
		sheet.addMergedRegion(new CellRangeAddress(0, 0,0, 6));
		cell.setCellStyle(style);
		cell.setCellValue("电池综合性能报表");
		
		font = getContextFont(wb, "宋体", true);
		style = getTitleStyle(wb, font);
		row = sheet.createRow(1);
		cell = row.createCell(0);
		cell.setCellStyle(style);
		cell.setCellValue("抽样周期");
		cell = row.createCell(1);
		cell.setCellStyle(style);
		cell.setCellValue("素电等级");
		cell = row.createCell(2);
		cell.setCellStyle(style);
		cell.setCellValue("生产线");
		cell = row.createCell(3);
		cell.setCellStyle(style);
		cell.setCellValue("取样日期");
		cell = row.createCell(4);
		cell.setCellStyle(style);
		cell.setCellValue("储存状态");
		cell = row.createCell(5);
		cell.setCellStyle(style);
		cell.setCellValue("放电方式");
		cell = row.createCell(6);
		cell.setCellStyle(style);
		cell.setCellValue("放电结果");
		int a=2;
		font = getContextFont(wb, "宋体", false);
		style = getTitleStyle(wb, font);
		for (List<String> rowlist : list) {
			row = sheet.createRow(a++);
			int col=0;
			for (String string : rowlist) {
				cell = row.createCell(col++);
				cell.setCellStyle(style);
				cell.setCellValue(string);
			}
		}
		File file=new File("desc.xls");
		FileOutputStream os = new FileOutputStream(file);
		wb.write(os);
		os.close();
		return file;
	}
	
	public static HSSFCellStyle getTitleStyle(HSSFWorkbook wb, HSSFFont font) {
		// 创建单元格样式
		HSSFCellStyle style = wb.createCellStyle();
		style.setAlignment(HSSFCellStyle.ALIGN_CENTER);
		style.setVerticalAlignment(HSSFCellStyle.VERTICAL_CENTER);
		// style.setFillForegroundColor(HSSFColor.LIGHT_TURQUOISE.index);
		// style.setFillPattern(HSSFCellStyle.SOLID_FOREGROUND);
		// 设置边框
		// style.setBottomBorderColor(HSSFColor.RED.index);
		// style.setBorderBottom(HSSFCellStyle.BORDER_THIN);
		// style.setBorderLeft(HSSFCellStyle.BORDER_THIN);
		// style.setBorderRight(HSSFCellStyle.BORDER_THIN);
		// style.setBorderTop(HSSFCellStyle.BORDER_THIN);
		style.setFont(font);// 设置字体
		return style;
	}

	public static HSSFFont getFont(HSSFWorkbook wb, String type, boolean isBold) {
		HSSFFont font = wb.createFont();
		font.setFontName(type);
		font.setBoldweight((short) 100);
		font.setFontHeight((short) 300);
		font.setBold(isBold);
		// font.setColor(HSSFColor.BLUE.index);
		return font;
	}
	public static HSSFFont getContextFont(HSSFWorkbook wb, String type, boolean isBold) {
		HSSFFont font = wb.createFont();
		font.setFontName(type);
//		font.setBoldweight((short) 100);
//		font.setFontHeight((short) 300);
		font.setBold(isBold);
		// font.setColor(HSSFColor.BLUE.index);
		return font;
	}
	

}