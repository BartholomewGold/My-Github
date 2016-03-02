/**
 * @author 冯华杰
 * 
 * Email:fhj@sonluk.com.cn
 * 
 */
package com.mymaven.web;

import java.text.DecimalFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONObject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.mymaven.common.Page;
import com.mymaven.modle.LsJbCs;
import com.mymaven.modle.form.MainForm;
import com.mymaven.modle.form.SameLineForm;
import com.mymaven.modle.form.chartform.FallPercentForm;
import com.mymaven.service.DischargeService;
import com.mymaven.service.LsCsJobService;
import com.mymaven.service.LsVtimeService;
import com.mymaven.service.QyzqService;
import com.mymaven.service.ScoreService;
//import com.mymaven.modle.Account;
//import com.mymaven.service.AccountService;
import com.mymaven.service.StoreStatusService;
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

@Controller
@RequestMapping("/db")
public class DBController {
	public static int pageSize = 7;
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

	private static final SimpleDateFormat sdf = new SimpleDateFormat(
			"yyyy年MM月dd日 生成");

	@RequestMapping(value = "/count")
	@ResponseBody
	public JSONObject test() {

		JSONObject jsonObject = new JSONObject();
		jsonObject.put("name", lsVtimeService.findIdDesc());
		//
		return jsonObject;
	}
	@RequestMapping(value = "/a",method=RequestMethod.POST)
	@ResponseBody
	public JSONObject testaaa(String name,String password){
//		System.out.println(request.getm);
		JSONObject a=new JSONObject();
		a.put("name", name);
		a.put("password", password);
		System.out.println(a.toString());
		return a;
	}
	@RequestMapping(value = "/test")
	@ResponseBody
	public ModelAndView tes1t(MainForm mainForm,
			@RequestParam(value = "now", defaultValue = "1") int pageCount) {
		long time = System.currentTimeMillis();
		Page<LsJbCs> page = lsCsJobService.find(mainForm, pageSize, pageCount);
		page.setContent(lsVtimeService.doAll(page.getContent()));
		ModelAndView mv = new ModelAndView();
		mv.addObject("storeStatus", storeStatusService.findIdDesc());
		mv.addObject("discharge", dischargeService.find());
		mv.addObject("qyzq", qyzqService.findAll());
		mv.addObject("product", dischargeService.findAllProduct());
		mv.addObject("typeB", dischargeService.findTypeOfBattery());
		mv.addObject("fzdza", dischargeService.findFzdz());
		mv.addObject("jstj", dischargeService.findJsdy());
		mv.addObject("page", page);
		mv.setViewName("/chart/test");
		System.out.println("共用时" + (System.currentTimeMillis() - time));
		return mv;
	}

	@RequestMapping(value = "/sameproductionline")
	public ModelAndView tes1t(SameLineForm mainForm) {
//		System.out.println(mainForm.toString());
		ModelAndView mv = new ModelAndView();
		mv.addObject("typeB", dischargeService.findTypeOfBattery());
		mv.addObject("jstj", dischargeService.findJsdy());
		mv.addObject("fzdza", dischargeService.findFzdz());
		mv.addObject("discharge", dischargeService.find());
		mv.addObject("storeStatus", storeStatusService.findIdDesc());
		mv.addObject("product", dischargeService.findAllProduct());
		mv.setViewName("/chart/sameproductionline");
		mv.addObject("mainForm", mainForm);
		if (!mainForm.verify()) {
			mv.addObject("option","");
			return mv;
		}
		// Map<String,List<LsJbCs>> map=new HashMap<String, List<LsJbCs>>();
		String title = mainForm.getProducters()[0] + "线 " + mainForm.getModel()
				+ "， ";
		if (mainForm.getFdType().equals("恒阻")) {
			title += mainForm.getKeyValue() + "Ω " + mainForm.getDischarge()
					+ "，" + mainForm.getVolt() + "V 下降百分比";
		} else if (mainForm.getFdType().equals("恒流")) {
			title += mainForm.getKeyValue() + "mA " + mainForm.getDischarge()
					+ "，" + mainForm.getVolt() + "V 下降百分比";
		} else if (mainForm.getFdType().equals("恒功率")) {
			title += mainForm.getKeyValue() + "mW " + mainForm.getDischarge()
					+ "，" + mainForm.getVolt() + "V 下降百分比";
		} else {
			title = "";
		}
		Option option = new Option();
		option.setTitle(new Title(title, "抽样时间：" + mainForm.getCyst()))
				.setTooltip(new Tooltip(TriggerType.axis))
				.setToolbox(new Toolbox());
		option.setxAxis(new XAxis(AxisType.category, false, mainForm
				.getStoreStatusVal()));
		option.setyAxis(new YAxis(AxisType.value, "%")).setCalculable(true);
		option.setLegend(new Legend(mainForm.getProducters()));

		DecimalFormat df = new DecimalFormat("0.00");
		Map<String, Map<String, List<LsJbCs>>> map = lsCsJobService
				.findData(mainForm);
		List<Series> sers = new ArrayList<Series>();
		for (String product : mainForm.getProducters()) {// 某线
			Series series = new Series(product, SeriesType.line);
			Map<String, List<LsJbCs>> stmap = map.get(product);
			String val = "";
			double first = 0;
			for (int i = 0; i < mainForm.getStoreStatusVal().length; i++) {// 某状态
				List<LsJbCs> jbs = stmap.get(mainForm.getStoreStatusVal()[i]);
				if (jbs.isEmpty()) {
					continue;
				}
				if (i == 0) {
					first = scoreService.getAvg(jbs, mainForm.getVolt());
					val += "0,";
				} else {
					val += df.format((first - scoreService.getAvg(jbs,
							mainForm.getVolt()))
							/ first*100)
							+ ",";
				}
			}
			if (!"".equals(val)) {
				val = val.substring(0, val.length() - 1);
			}
			sers.add(series.setData(val));
		}
		option.setSeries(sers);
		// FallPercentForm fpf = scoreService.getFallPercentForm(map,
		// mainForm.getVolt(), option);
//		System.out.println(option.toString());
		mv.addObject("option", option.toString());
		return mv;
	}

	@RequestMapping(value = "/fa")
	public ModelAndView b() {
		ModelAndView mv = new ModelAndView();
		Option option = new Option();
		option.setTitle(new Title("a", "b"))
				.setTooltip(new Tooltip(TriggerType.axis))
				.setToolbox(new Toolbox());
		option.setyAxis(new YAxis(AxisType.value, "%")).setCalculable(true);
		option.setLegend(new Legend("'1','2'"));
		option.setxAxis(new XAxis(AxisType.category, false, "fd", "ap"));

		List<Series> series = new ArrayList<Series>();
		Series sery = new Series("e3", SeriesType.line, "1,2");
		series.add(sery);
		Series se = new Series("a5", SeriesType.line, "1", "2");
		series.add(se);
		option.setSeries(series);
		System.out.println(option.toString());
		mv.addObject("option", option.toString());
		mv.setViewName("/chart/brokenLine");
		return mv;
	}

	@RequestMapping(value = "/brokenLine")
	public ModelAndView singleBrokenLine(SameLineForm mainForm) {
		ModelAndView mv = new ModelAndView();
		System.out.println(mainForm.toString());
		// if(outType==null){
		// return null;
		// }else if (outType==0){
		// mv.addObject("title", "同批生产电不同贮存状态对比");
		// }
		mv.addObject("mainForm", mainForm);
		mv.setViewName("/chart/brokenLine");
		return mv;
	}

	@RequestMapping(value = "/ajaxLine", method = RequestMethod.POST, produces = "text/plain;charset=UTF-8;")
	public ResponseEntity<String> getTime(HttpServletResponse response,
			SameLineForm mainForm) {
		String title = mainForm.getProducters()[0] + "线 " + mainForm.getModel()
				+ "， ";
		if (mainForm.getFdType().equals("恒阻")) {
			title += mainForm.getKeyValue() + "Ω " + mainForm.getDischarge()
					+ "，" + mainForm.getVolt() + "V 下降百分比";
		} else if (mainForm.getFdType().equals("恒流")) {
			title += mainForm.getKeyValue() + "mA " + mainForm.getDischarge()
					+ "，" + mainForm.getVolt() + "V 下降百分比";
		} else if (mainForm.getFdType().equals("恒功率")) {
			title += mainForm.getKeyValue() + "mW " + mainForm.getDischarge()
					+ "，" + mainForm.getVolt() + "V 下降百分比";
		} else {
			title = "";
		}
		Option option = new Option();
		option.setTitle(new Title(title, "抽样时间：" + mainForm.getCyst()))
				.setTooltip(new Tooltip(TriggerType.axis))
				.setToolbox(new Toolbox());
		option.setxAxis(new XAxis(AxisType.category, false, mainForm
				.getStoreStatusVal()));
		option.setyAxis(new YAxis(AxisType.value, "%")).setCalculable(true);
		option.setLegend(new Legend(mainForm.getProducters()));

		DecimalFormat df = new DecimalFormat("0.00");
		Map<String, Map<String, List<LsJbCs>>> map = lsCsJobService
				.findData(mainForm);
		List<Series> sers = new ArrayList<Series>();
		for (String product : mainForm.getProducters()) {// 某线
			Series series = new Series(product, SeriesType.line);
			Map<String, List<LsJbCs>> stmap = map.get(product);
			String val = "";
			double first = 0;
			for (int i = 0; i < mainForm.getStoreStatusVal().length; i++) {// 某状态
				List<LsJbCs> jbs = stmap.get(mainForm.getStoreStatusVal()[i]);
				if (jbs.isEmpty()) {
					return null;
				}
				if (i == 0) {
					first = scoreService.getAvg(jbs, mainForm.getVolt());
					val += "0,";
				} else {
					val += df.format((first - scoreService.getAvg(jbs,
							mainForm.getVolt()))
							/ first)
							+ ",";
				}
			}
			if (!"".equals(val)) {
				val = val.substring(0, val.length() - 1);
			}
			sers.add(series.setData(val));
		}
		option.setSeries(sers);
		return new ResponseEntity<String>(option.toString(), HttpStatus.OK);
	}
}
