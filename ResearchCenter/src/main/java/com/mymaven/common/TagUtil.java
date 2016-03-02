/**
 * @author 冯华杰
 * 
 * Email:fhj@sonluk.com.cn
 * 
 */
package com.mymaven.common;

import java.io.IOException;
import java.util.Enumeration;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.tagext.TagSupport;

public class TagUtil extends TagSupport {
	private Page page;
	private Long currnetpage;

	public void setCurrnetpage(Long currnetpage) {
		this.currnetpage = currnetpage;
	}
	public void setPage(Page page) {
		this.page = page;
	}

	public int doEndTag() throws JspException {
		HttpServletRequest request = (HttpServletRequest) pageContext
				.getRequest();
		System.out.println(request.getRequestURL());
		Enumeration<String> a = request.getAttributeNames();
		// while (a.hasMoreElements()) {
			// System.out.println(a.nextElement() + "||||||||||||"
			// + request.getAttribute(a.nextElement()));
		// }
		JspWriter out = pageContext.getOut();
		
		//
		// <div class="pagesize">
		// <a class="btn_first" href="javascript:;" onclick="postto(1)">首页</a>
		// <a class="btn_pre" href="javascript:;"
		// onclick="postto(${nowpage.currentPage-1})"><</a>
		// <s:iterator value="nowpage.pageNum" id="num">
		// <s:if test="#num==nowpage.currentPage">
		// <a class="btn_page_cur">${num}</a>
		// </s:if>
		// <s:else>
		// <a href="javascript:;" onclick="postto(${num})">${num}</a>
		// </s:else>
		// </s:iterator>
		// <a class="btn_next" href="javascript:;"
		// onclick="postto(${nowpage.currentPage+1})">></a>
		// <a class="btn_last" href="javascript:;"
		// onclick="postto(${nowpage.maxPage})">尾页</a>
		// </div>
     
		try {
			out.print(page == null);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return TagSupport.EVAL_PAGE;
	}
}
