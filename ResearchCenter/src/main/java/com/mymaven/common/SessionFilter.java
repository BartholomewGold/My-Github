/**
 * @author 冯华杰
 * 
 * Email:fhj@sonluk.com.cn
 * 
 */
package com.mymaven.common;

import java.io.IOException;
import java.io.PrintWriter;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.filter.OncePerRequestFilter;

public class SessionFilter extends OncePerRequestFilter {
	@Override
	protected void doFilterInternal(HttpServletRequest request,
			HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {

		String[] notFilter = new String[] { "login.html", "index.html" };
		String uri = request.getRequestURI();
		if (!uri.toLowerCase().endsWith(".gif")
				&&!uri.toLowerCase().endsWith(".js")
				&& !uri.toLowerCase().endsWith(".png")&& !uri.toLowerCase().endsWith(".css")) {
		}
		if (uri.indexOf("test1") != -1) {
			boolean doFilter = true;
			for (String s : notFilter) {
				if (uri.indexOf(s) != -1) {
					doFilter = false;
					break;
				}
			}
			if (doFilter) {
				Object obj = request.getSession().getAttribute("loginedUser");
				if (null == obj) {
					request.setCharacterEncoding("UTF-8");
					response.setCharacterEncoding("UTF-8");

					PrintWriter out = response.getWriter();
					String loginPage = "http://www.baidu.com";
					StringBuilder builder = new StringBuilder();
					builder.append("<script type=\"text/javascript\">");
					builder.append("alert('网页过期，请重新登录！');");
					builder.append("window.top.location.href='");
					builder.append(loginPage);
					builder.append("';");
					builder.append("</script>");
					out.print(builder.toString());
				} else {
					filterChain.doFilter(request, response);
				}
			} else {
				filterChain.doFilter(request, response);
			}
		} else {
			filterChain.doFilter(request, response);
		}
	}

}
