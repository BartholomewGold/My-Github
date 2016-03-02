/**
 * @author 冯华杰
 * 
 * Email:fhj@sonluk.com.cn
 * 
 */
package com.mymaven.common;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;


public class Init extends HttpServlet {
	@Override
	public void init() throws ServletException {
		super.init();
		ServletContext context = getServletContext();
		Constant.proPath = context.getRealPath("/").replace("\\", "/");// 当前路径
	}

}
