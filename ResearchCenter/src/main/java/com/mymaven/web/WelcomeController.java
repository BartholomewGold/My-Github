/**
 * @author 冯华杰
 * 
 * Email:fhj@sonluk.com.cn
 * 
 */
package com.mymaven.web;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;
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

import com.mymaven.common.Constant;
import com.mymaven.common.Page;
//import com.mymaven.modle.Account;
//import com.mymaven.service.AccountService;

@Controller
@RequestMapping("/test")
public class WelcomeController {
//	@Autowired
//	private AccountService accountService;
	@RequestMapping(value = "/json")
	@ResponseBody
	public JSONObject test(HttpServletResponse response,
			@ModelAttribute("id") Long id) {
		JSONObject jsonObject = new JSONObject();
		jsonObject.put("name", "猫");
		jsonObject.put("Max.score", new Integer(100));
		jsonObject.put("Min.score", new Integer(50));
		jsonObject.put("nickname", "picglet");
		return jsonObject;
	}

	@RequestMapping(value = "/jsonArray")
	@ResponseBody
	public JSONArray josn(HttpServletResponse response,
			@ModelAttribute("id") Long id) {
		JSONArray jsonObject = new JSONArray();
		jsonObject.add("a");
		jsonObject.add("b");
		return jsonObject;
	}

	@RequestMapping(value = "/ajaxtest", method = RequestMethod.POST, produces = "text/plain;charset=UTF-8;")
	public ResponseEntity<String> getTime(HttpServletResponse response,
			@ModelAttribute("id") Long id) {
		String result = "1241234";
		return new ResponseEntity<String>(result, HttpStatus.OK);
	}

	@RequestMapping("/test")
	public ModelAndView list(@ModelAttribute("id") String id,
			HttpServletRequest request) {
		ModelAndView mv = new ModelAndView();
		// List<Account> accounts = accountService.findAll();
		// System.out.println(accounts == null);
		mv.addObject("", id);
		return mv;
	}

	@RequestMapping("/page")
	public ModelAndView list(
			@ModelAttribute("id") Long id,
			// @ModelAttribute("currentPage") Long currentPage,
			@RequestParam(value = "currentPage", required = false) Long currentPage,
			HttpServletRequest request) {
		System.out.println(Constant.proPath + "55555555555555");
		// Long currentPage = null;
		if (currentPage == null || currentPage == 0) {
			currentPage = 1l;
		}
		ModelAndView mv = new ModelAndView();
//		Page<Account> pages = accountService.findIdDesc(10, currentPage, id);
		mv.addObject("info", id);
		mv.addObject("page", null);
		mv.setViewName("index");
		return mv;
	}

	@RequestMapping("/edit")
	public ModelAndView find(@ModelAttribute("id") Long id,
			HttpServletRequest request) {
		ModelAndView mv = new ModelAndView();
//		Account account = accountService.findById(id);
//		account.setVersion(100);
		mv.addObject("account", null);
		mv.setViewName("info");
		return mv;
	}

	@RequestMapping("/login")
	public ModelAndView list(HttpServletRequest request) {
		ModelAndView mv = new ModelAndView();
		// String
		// path=request.getSession().getServletContext().getRealPath("/");
		// System.out.println(path);
//		List<Account> accounts = accountService.findAll();
//		System.out.println(accounts == null);
		mv.addObject("info",11);
		mv.addObject("test", null);
		mv.setViewName("index2");
		return mv;
	}
}
