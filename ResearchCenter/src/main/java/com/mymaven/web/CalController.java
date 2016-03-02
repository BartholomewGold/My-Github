/**
 * @author 冯华杰
 * 
 * Email:fhj@sonluk.com.cn
 * 
 */
package com.mymaven.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.mymaven.modle.form.MonthLineForm;
import com.mymaven.service.DischargeService;
import com.mymaven.service.LsVtimeService;
import com.mymaven.service.StoreStatusService;

@Controller
@RequestMapping("/cal")
public class CalController {
	@Autowired
	private DischargeService dischargeService;
	@Autowired
	private LsVtimeService lsVtimeService;
	@Autowired
	private StoreStatusService storeStatusService;
	/**
	 * 品管部外径月度统计	
	 * 
	 * @param mainForm
	 * @return
	 */
	@RequestMapping(value = "/month")
	public ModelAndView lineOfYear(MonthLineForm mainForm) {
		ModelAndView mv = new ModelAndView();
		mv.addObject("typeB", dischargeService.findTypeOfBattery());
//		mv.addObject("jstj", dischargeService.findJsdy());
		mv.addObject("fzdza", dischargeService.findFzdz());
		mv.addObject("discharge", dischargeService.find());
		mv.addObject("storeStatus", storeStatusService.findIdDesc());
		mv.addObject("product", dischargeService.findAllProduct());
		mv.setViewName("/info/list");
		return mv;
	}
	
}
