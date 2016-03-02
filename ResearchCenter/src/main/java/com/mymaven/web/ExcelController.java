/**
 * @author 冯华杰
 * 
 * Email:fhj@sonluk.com.cn
 * 
 */
package com.mymaven.web;

import java.io.File;
import java.io.OutputStream;
import java.text.DecimalFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONObject;

import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.mymaven.modle.LsJbCs;
import com.mymaven.modle.form.ExcelForm;
import com.mymaven.service.AvgService;
import com.mymaven.service.DischargeService;
import com.mymaven.service.LsCsJobService;
import com.mymaven.service.LsVtimeService;
import com.mymaven.service.PopService;
import com.mymaven.service.ScoreService;
import com.mymaven.service.StoreStatusService;
import com.sonluk.util.ExcelUtil;

@Controller
@RequestMapping("/excel")
public class ExcelController {
	@Autowired
	private LsVtimeService lsVtimeService;
	@Autowired
	private StoreStatusService storeStatusService;
	@Autowired
	private DischargeService dischargeService;
	@Autowired
	private LsCsJobService lsCsJobService;
	@Autowired
	private ScoreService scoreService;
	@Autowired
	private PopService popService;
	@Autowired
	private AvgService avgService;

	@RequestMapping(value = "/descper")
	public ModelAndView desc() {
		ModelAndView mv = new ModelAndView();
		mv.addObject("typeB", dischargeService.findTypeOfBattery());
		mv.addObject("jstj", dischargeService.findJsdy());
		mv.addObject("fzdza", dischargeService.findFzdz());
		mv.addObject("discharge", dischargeService.find());
		mv.addObject("storeStatus", storeStatusService.findIdDesc());
		mv.addObject("product", dischargeService.findAllProduct());
		mv.addObject("rq", new SimpleDateFormat("统计截止至yyyy-MM-dd 00:00:00")
				.format(new Date()));
		mv.setViewName("/excel/desc");
		return mv;
	}

	@RequestMapping(value = "/list")
	public ModelAndView list() {
		ModelAndView mv = new ModelAndView();
		mv.addObject("typeB", dischargeService.findTypeOfBattery());
		mv.addObject("jstj", dischargeService.findJsdy());
		mv.addObject("fzdza", dischargeService.findFzdz());
		mv.addObject("discharge", dischargeService.find());
		mv.addObject("storeStatus", storeStatusService.findIdDesc());
		mv.addObject("product", dischargeService.findAllProduct());
		mv.addObject("rq", new SimpleDateFormat("统计截止至yyyy-MM-dd 00:00:00")
				.format(new Date()));
		mv.setViewName("/excel/list");
		return mv;
	}
	
	@RequestMapping(value = "/getlist")
	@ResponseBody
	public JSONObject test(ExcelForm ef) throws Exception {
		System.out.println(ef.getHqlWithoutPro());

		List<LsJbCs> lsjbs = lsCsJobService.findByInfo(ef.getHqlWithoutPro(),
				ef.getList());

		JSONObject json = new JSONObject();
		json.put("size", lsjbs.size());
		json.put("list", lsjbs);

		return json;
	}

	/**
	 * 仅有放电得分的导出
	 * 
	 * @param ef
	 * @param res
	 * @throws Exception
	 */
	@RequestMapping(value = "/getNormalexcel")
	@ResponseBody
	public void getNormalExcel(ExcelForm ef, HttpServletResponse res)
			throws Exception {
		long test = System.currentTimeMillis();
		// DecimalFormat df = new DecimalFormat("0.000");
		List<Map<String, Object>> avgs = avgService.findList(
				(String) ef.getAvgSql()[0], (List<String>) ef.getAvgSql()[1],
				ef.getSt(), ef.getEd());
		Double popCal = popService.getCal(
				String.valueOf(avgs.get(0).get("fdfs")),
				String.valueOf(avgs.get(0).get("hfsj")));
		String dw = null;
		if (ef.getFdtype().equals("恒阻")) {
			dw = "Ω";
		} else if (ef.getFdtype().equals("恒流")) {
			dw = "mA";
		} else if (ef.getFdtype().equals("恒功率")) {
			dw = "mW";
		}
		String hfsj = String.valueOf(avgs.get(0).get("hfsj"));
		String dws = null;
		if (hfsj.equals("小时")) {
			dws = "(h)";
		} else if (hfsj.equals("分钟")) {
			dws = "(m)";
		} else if (hfsj.equals("次数")) {
			dws = "(T)";
		} else if (hfsj.equals("天数")) {
			dws = "(d)";
		} else if (hfsj.equals("时数")) {
			dws = "(hs)";
		}
		String simpfdfs = ef.getKeyValue() + dw + "，" + ef.getFdfs() + "至"
				+ ef.getVolt() + "V " + dws;
		if (popCal == null) {
			popCal = 0.0;
		}
		DecimalFormat df = new DecimalFormat("0.00");
		List<List<String>> excelList = new ArrayList<List<String>>();
		for (Map<String, Object> avg : avgs) {
			List<String> list = new ArrayList<String>();
			list.add(String.valueOf(avg.get("qyzq")));
			list.add(String.valueOf(avg.get("dcxh")));
			list.add(String.valueOf(avg.get("scdw")));
			list.add(String.valueOf(avg.get("qyrq")));
			list.add(String.valueOf(avg.get("sbmc")));
			list.add(simpfdfs);
			list.add(df.format(Double.valueOf((String) avg.get("avg")) * popCal));
			excelList.add(list);
		}
		File file = ExcelUtil.createWeekReport(excelList);
		OutputStream os = res.getOutputStream();
		try {
			res.reset();
			res.setHeader("Content-Disposition", "attachment; filename="
					+ System.currentTimeMillis() + ".xls");
			res.setContentType("application/octet-stream; charset=utf-8");
			os.write(FileUtils.readFileToByteArray(file));
			os.flush();
		} finally {
			if (os != null) {
				os.close();
			}
		}
		System.out.println(System.currentTimeMillis() - test);
	}

	@RequestMapping(value = "/getDesc")
	@ResponseBody
	public void getDescExcel(ExcelForm ef, HttpServletResponse res)
			throws Exception {
		long time = System.currentTimeMillis();
		DecimalFormat df = new DecimalFormat("0.00");
		Object[] ojbs = ef.getSqlDesc();
		List<Map<String, Object>> avgs = avgService.findList(
				String.valueOf(ojbs[0]), (List<String>) ojbs[1], ef.getSt(),
				ef.getEd());
		String hfsj = String.valueOf(avgs.get(0).get("hfsj"));
		Double popCal = popService.getCal(
				String.valueOf(avgs.get(0).get("fdfs")), hfsj);
		if (popCal == null) {
			popCal = 0.0;
		}
//		System.out.println("比例："+popCal);
		String dw = null;
		if (ef.getFdtype().equals("恒阻")) {
			dw = "Ω";
		} else if (ef.getFdtype().equals("恒流")) {
			dw = "mA";
		} else if (ef.getFdtype().equals("恒功率")) {
			dw = "mW";
		}
		String[] stores = ef.getDzczt().split(",");
		String dws = null;
		if (hfsj.equals("小时")) {
			dws = "(h)";
		} else if (hfsj.equals("分钟")) {
			dws = "(m)";
		} else if (hfsj.equals("次数")) {
			dws = "(T)";
		} else if (hfsj.equals("天数")) {
			dws = "(d)";
		} else if (hfsj.equals("时数")) {
			dws = "(hs)";
		}

		String simpfdfs = ef.getKeyValue() + dw + "，" + ef.getFdfs() + "至"
				+ ef.getVolt() + "V " + dws;
		List<List<String>> excelList = new ArrayList<List<String>>();
		for (Map<String, Object> map : avgs) {
			List<String> list = new ArrayList<String>();
			list.add(String.valueOf(map.get("qyrq")));
			Map<String, Double> scores = avgService.getOtherScores(map, ef,
					popCal);
			// lsVtimeService.getVtimesByLs(lsJbCs, ef,
			// popCal);
//			list.add(String.valueOf(scores.get("fdfs")));
			Double maindz =Double.valueOf(String.valueOf(map.get("avg")));
			list.add(df.format(maindz));
			for (String ent : stores) {
				if (map == null) {
					list.add("");
					list.add("");
					continue;
				}
				Double ordz = scores.get(ent);
//				System.out.println("ordz:"+ordz);
				if (ordz == null) {
					list.add("");
					list.add("");
				} else {
					list.add(df.format(ordz));
					list.add(df.format((maindz - ordz) / maindz * 100) + "%");
				}
			}
			excelList.add(list);
		}
		String[] insert = new String[] { ef.getStroeStatus() };
		String[] c = new String[insert.length + stores.length];
		System.arraycopy(insert, 0, c, 0, insert.length);
		System.arraycopy(ef.getDzczt().split(","), 0, c, insert.length,
				stores.length);
		File file = ExcelUtil.createDescendReport(simpfdfs, ef.getModel(), c,
				excelList, ef.getProducter());
		OutputStream os = res.getOutputStream();
		try {
			res.reset();
			res.setHeader("Content-Disposition",
					"attachment; filename=desc.xls");
			res.setContentType("application/octet-stream; charset=utf-8");
			os.write(FileUtils.readFileToByteArray(file));
			os.flush();
			System.out.println("共用：" + (System.currentTimeMillis() - time));
		} finally {
			if (os != null) {
				os.close();
			}
		}
	}

}
