/**
 * @author 冯华杰
 * 
 * Email:fhj@sonluk.com.cn
 * 
 */
package com.mymaven.web;

import java.util.List;

import net.sf.json.JSONObject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.mymaven.modle.ScorePop;
import com.mymaven.service.PopService;
import com.mymaven.util.StringUtils;

@Controller
@RequestMapping("/pop")
public class ScorePopController {
	public static int pageSize = 7;
	@Autowired
	private PopService popService;

	@RequestMapping(value = "/view")
	public ModelAndView view(String name) {
		ModelAndView mv = new ModelAndView();
		List<ScorePop> list = popService.findByName(name);
		mv.addObject("list", list);
		mv.addObject("name", name);
		mv.setViewName("/static/pop");
		return mv;
	}

	@RequestMapping(value = "/find")
	@ResponseBody
	public JSONObject find(Long id) {
		if (id != null && id != 0) {
			return popService.findById(id).toJSON();
		} else {
			return new JSONObject();
		}
	}

	@RequestMapping(value = "/edit")
	@ResponseBody
	public JSONObject edit(ScorePop data) {
		data=popService.edit(data);
		return data.toJSON();

	}

	@RequestMapping(value = "/del")
	@ResponseBody
	public JSONObject del(Long id) {
		JSONObject json=new JSONObject();
		if (id != null && id != 0) {
			ScorePop delEntity=popService.del(id);
			System.out.println(delEntity.toString());
			json.put("status", 0);
		} else {
			json.put("status", 1);
		}
		return  json;

	}
	
	@RequestMapping(value = "/add")
	@ResponseBody
	public JSONObject add(ScorePop data) {
		JSONObject json = new JSONObject();
		if(data.getId()!=null&&data.getId()!=0){
			json.put("msg", "非法提交请勿组装数据");
			return json;
		}
		if(StringUtils.isEmpty(data.getFdfs())){
			json.put("msg", "放电方式不能为空");
			return json;
		}
		data=popService.add(data);
		if(data==null){
			json.put("msg", "已有该放电方式比例");
			return json;
		}
		json=data.toJSON();
		json.put("msg", 0);
		return json;

	}
	
}
