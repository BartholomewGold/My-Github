/**
 * @author 冯华杰
 * 
 * Email:fhj@sonluk.com.cn
 * 
 */
package com.mymaven.web;

import com.mymaven.modle.form.LineForm;
import com.mymaven.modle.form.MonthLineForm;
import com.mymaven.modle.form.SameLineForm;
import com.mymaven.service.AvgService;
import com.mymaven.service.DischargeService;
import com.mymaven.service.LsCsJobService;
import com.mymaven.service.LsVtimeService;
import com.mymaven.service.PopService;
import com.mymaven.service.QyzqService;
import com.mymaven.service.ScoreService;
import com.mymaven.service.StoreStatusService;
import com.mymaven.util.DateUtil;
import com.sonluk.echarts.Legend;
import com.sonluk.echarts.Option;
import com.sonluk.echarts.Series;
import com.sonluk.echarts.Title;
import com.sonluk.echarts.Toolbox;
import com.sonluk.echarts.Tooltip;
import com.sonluk.echarts.Tooltip.TriggerType;
import com.sonluk.echarts.XAxis;
import com.sonluk.echarts.YAxis;
import com.sonluk.echarts.enumType.AxisType;
import com.sonluk.echarts.enumType.SeriesType;
import java.io.PrintStream;
import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping({ "/chart" })
public class ChartController {

	@Autowired
	private LsVtimeService lsVtimeService;

	@Autowired
	private StoreStatusService storeStatusService;

	@Autowired
	private DischargeService dischargeService;

	@Autowired
	private QyzqService qyzqService;

	@Autowired
	private LsCsJobService lsCsJobService;

	@Autowired
	private ScoreService scoreService;

	@Autowired
	private AvgService avgService;

	@Autowired
	private PopService popService;

	public static void main(String[] args) {
		String[] a = { "grape", "orange", "banana", "apple", "peach" };
		Arrays.sort(a);
		for (String string : a)
			System.out.println(string);
	}

	@RequestMapping({ "/month" })
	public ModelAndView lineOfYear(MonthLineForm mainForm) {
		ModelAndView mv = new ModelAndView();
		mv.addObject("typeB", this.dischargeService.findTypeOfBattery());

		mv.addObject("fzdz", this.dischargeService.findFzdz());
		mv.addObject("discharge", this.dischargeService.find());
		mv.addObject("storestate", this.storeStatusService.findIdDesc());
		mv.addObject("product", this.dischargeService.findAllProduct());
		mv.setViewName("/chart/lineOfYear");
		mv.addObject("mainForm", mainForm);
		if (!mainForm.verify()) {
			mv.addObject("option", "");
			return mv;
		}
		String title = mainForm.getModel() + "， ";
		if (mainForm.getFdType().equals("恒阻"))
			title = title + mainForm.getKeyValue() + "Ω " + mainForm.getFdfs()
					+ "，" + mainForm.getVolt() + "V";
		else if (mainForm.getFdType().equals("恒流"))
			title = title + mainForm.getKeyValue() + "mA " + mainForm.getFdfs()
					+ "，" + mainForm.getVolt() + "V";
		else if (mainForm.getFdType().equals("恒功率"))
			title = title + mainForm.getKeyValue() + "mW " + mainForm.getFdfs()
					+ "，" + mainForm.getVolt() + "V";
		else {
			title = "";
		}

		Double popCal = this.popService.getCal(mainForm.getFdfs(),
				mainForm.getDwms());

		String dws = "";
		if (mainForm.getDwms().equals("小时"))
			dws = "h";
		else if (mainForm.getDwms().equals("分钟"))
			dws = "m";
		else if (mainForm.getDwms().equals("次数"))
			dws = "T";
		else if (mainForm.getDwms().equals("天数"))
			dws = "d";
		else if (mainForm.getDwms().equals("时数")) {
			dws = "hs";
		}
		List<String> dats = null;
		try {
			dats = DateUtil
					.getDiffMonth(mainForm.getCyst(), mainForm.getCyed());
		} catch (Exception e) {
			return mv;
		}
		title = title + " 连续放电性能波动";
		String[] xChart = new String[dats.size()];
		for (int i = 0; i < dats.size(); i++) {
			xChart[i] = ((String) dats.get(i));
		}

		Option option = new Option();
		option.setTitle(new Title(title, ""))
				.setTooltip(new Tooltip(Tooltip.TriggerType.axis))
				.setToolbox(new Toolbox());
		option.setxAxis(new XAxis(AxisType.category, false, xChart));
		option.setyAxis(new YAxis(AxisType.value, dws, Integer.valueOf(5)))
				.setCalculable(true);
		option.setLegend(new Legend(mainForm.getProducters()));

		Map map = avgService.findYear(mainForm);
		List sers = new ArrayList();
		for (String product : mainForm.getProducters()) {
			Series series = new Series(product, SeriesType.line);
			Map stmap = (Map) map.get(product);
			String val = "";

			Object o = null;
			for (String string : dats) {
				o = stmap.get(string);
				if (o == null)
					val = val + ",";
				else {
					val = val
							+ new DecimalFormat("0.00").format(Double.valueOf(
									String.valueOf(o)).doubleValue()
									* popCal.doubleValue()) + ",";
				}
			}

			if (!"".equals(val)) {
				val = val.substring(0, val.length() - 1);
			}
			sers.add(series.setData(new String[] { val }));
		}
		option.setSeries(sers);

		mv.addObject("option", option.toString());
		return mv;
	}

	@RequestMapping({ "/line" })
	public ModelAndView line(LineForm mainForm) {
		ModelAndView mv = new ModelAndView();
		mv.addObject("typeB", this.dischargeService.findTypeOfBattery());

		mv.addObject("fzdz", this.dischargeService.findFzdz());
		mv.addObject("discharge", this.dischargeService.find());
		mv.addObject("storestate", this.storeStatusService.findIdDesc());
		mv.addObject("product", this.dischargeService.findAllProduct());
		mv.setViewName("/chart/line");
		mv.addObject("mainForm", mainForm);
		if (!mainForm.verify()) {
			mv.addObject("option", "");
			return mv;
		}
		String title = mainForm.getModel() + "， ";
		if (mainForm.getFdType().equals("恒阻"))
			title = title + mainForm.getKeyValue() + "Ω " + mainForm.getFdfs()
					+ "，" + mainForm.getVolt() + "V";
		else if (mainForm.getFdType().equals("恒流"))
			title = title + mainForm.getKeyValue() + "mA " + mainForm.getFdfs()
					+ "，" + mainForm.getVolt() + "V";
		else if (mainForm.getFdType().equals("恒功率"))
			title = title + mainForm.getKeyValue() + "mW " + mainForm.getFdfs()
					+ "，" + mainForm.getVolt() + "V";
		else {
			title = "";
		}
		String dws = "";
		if (mainForm.getDwms().equals("小时"))
			dws = "h";
		else if (mainForm.getDwms().equals("分钟"))
			dws = "m";
		else if (mainForm.getDwms().equals("次数"))
			dws = "T";
		else if (mainForm.getDwms().equals("天数"))
			dws = "d";
		else if (mainForm.getDwms().equals("时数")) {
			dws = "hs";
		}

		title = title + " 连续放电性能波动";
		int endDate = DateUtil.getLastDayOfMonth(mainForm.getCyst());
		String[] xChart = new String[endDate];
		for (int i = 1; i <= endDate; i++) {
			xChart[(i - 1)] = i + "";
		}

		Option option = new Option();
		option.setTitle(new Title(title, "抽样时间：" + mainForm.getCyst()))
				.setTooltip(new Tooltip(Tooltip.TriggerType.axis))
				.setToolbox(new Toolbox());
		option.setxAxis(new XAxis(AxisType.category, false, xChart));
		option.setyAxis(new YAxis(AxisType.value, dws)).setCalculable(true);
		option.setLegend(new Legend(mainForm.getProducters()));

		DecimalFormat df = new DecimalFormat("0.00");
		Map map = this.avgService.findMonth(mainForm);
		List sers = new ArrayList();
		for (String product : mainForm.getProducters()) {
			Series series = new Series(product, SeriesType.line);
			Map stmap = (Map) map.get(product);
			String val = "";

			for (int i = 1; i <= endDate; i++) {
				Object o = null;
				if (i < 10)
					o = stmap.get(mainForm.getCyst().trim() + "-0" + i);
				else {
					o = stmap.get(mainForm.getCyst().trim() + "-" + i);
				}
				if (o == null)
					val = val + ",";
				else {
					val = val
							+ new DecimalFormat("0.00").format(Double
									.valueOf(String.valueOf(o))) + ",";
				}
			}
			if (!"".equals(val)) {
				val = val.substring(0, val.length() - 1);
			}
			sers.add(series.setData(new String[] { val }));
		}
		option.setSeries(sers);

		mv.addObject("option", option.toString());
		return mv;
	}

	@RequestMapping({ "/descper" })
	public ModelAndView allScore(SameLineForm mainForm) {
		ModelAndView mv = new ModelAndView();
		mv.addObject("typeB", this.dischargeService.findTypeOfBattery());
		mv.addObject("jstj", this.dischargeService.findJsdy());
		mv.addObject("fzdza", this.dischargeService.findFzdz());
		mv.addObject("discharge", this.dischargeService.find());
		mv.addObject("storeStatus", this.storeStatusService.findIdDesc());
		mv.addObject("product", this.dischargeService.findAllProduct());
		mv.setViewName("/chart/sameproductionline");
		mv.addObject("mainForm", mainForm);
		if (!mainForm.verify()) {
			mv.addObject("option", "");
			return mv;
		}
		String title = mainForm.getProducters()[0] + "线 " + mainForm.getModel()
				+ "， ";
		if (mainForm.getFdType().equals("恒阻"))
			title = title + mainForm.getKeyValue() + "Ω "
					+ mainForm.getDischarge() + "，" + mainForm.getVolt()
					+ "V 下降百分比";
		else if (mainForm.getFdType().equals("恒流"))
			title = title + mainForm.getKeyValue() + "mA "
					+ mainForm.getDischarge() + "，" + mainForm.getVolt()
					+ "V 下降百分比";
		else if (mainForm.getFdType().equals("恒功率"))
			title = title + mainForm.getKeyValue() + "mW "
					+ mainForm.getDischarge() + "，" + mainForm.getVolt()
					+ "V 下降百分比";
		else {
			title = "";
		}
		Option option = new Option();
		option.setTitle(new Title(title, "抽样时间：" + mainForm.getCyst()))
				.setTooltip(new Tooltip(Tooltip.TriggerType.axis))
				.setToolbox(new Toolbox());
		option.setxAxis(new XAxis(AxisType.category, false, mainForm
				.getStoreStatusVal()));
		option.setyAxis(new YAxis(AxisType.value, "%")).setCalculable(true);
		option.setLegend(new Legend(mainForm.getProducters()));

		DecimalFormat df = new DecimalFormat("0.00");
		Map map = this.avgService.findData(mainForm);
		List sers = new ArrayList();
		for (String product : mainForm.getProducters()) {
			Series series = new Series(product, SeriesType.line);
			Map stmap = (Map) map.get(product);
			String val = "";
			double first = 0.0D;
			for (int i = 0; i < mainForm.getStoreStatusVal().length; i++) {
				List jbs = (List) stmap.get(mainForm.getStoreStatusVal()[i]);
				if (jbs.isEmpty()) {
					val = val + ",";
				} else if (i == 0) {
					first = this.scoreService.getAvgs(jbs).doubleValue();
					val = val + "0,";
				} else {
					Double a = this.scoreService.getAvgs(jbs);
					if (a == null)
						val = val + ",";
					else {
						val = val
								+ df.format((first - a.doubleValue()) / first
										* 100.0D) + ",";
					}
				}
			}
			if (!"".equals(val)) {
				val = val.substring(0, val.length() - 1);
			}
			sers.add(series.setData(new String[] { val }));
		}
		option.setSeries(sers);

		mv.addObject("option", option.toString());
		return mv;
	}
}