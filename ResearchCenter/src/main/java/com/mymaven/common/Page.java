/**
 * @author 冯华杰
 * 
 * Email:fhj@sonluk.com.cn
 * 
 */
package com.mymaven.common;

import java.util.ArrayList;
import java.util.List;

public class Page<T> {
	/**
	 * 前后显示页数，默认为2(可设置),显示的页号数为 ( 2*fab+1 )
	 */
	private int fab = 2;
	/**
	 * 页面内容
	 */
	private List<T> content;
	/**
	 * 当前页号（默认为1）
	 */
	private long currentPage = 1;
	/**
	 * 每页条数(默认为10)
	 */
	private int size = 10;
	/**
	 * 总条数
	 */
	private long counts;
	/**
	 * 显示的页号
	 */
	private List<Integer> pageNums;
	/**
	 * 总页号
	 */
	private int countsPages;

	public int getCountsPages() {
		return countsPages;
	}

	public void setFab(int fab) {
		this.fab = fab;
	}

	public Page(List<T> content, long currentPage, int size, long counts) {
		super();
		this.content = content;
		this.currentPage = currentPage;
		this.size = size;
		this.counts = counts;
		setCountsPages(counts, size);
		setPageNums();
	}

	public void setCountsPages(long counts, int size) {
		this.countsPages = (counts % size == 0) ? ((int) (counts / size))
				: ((int) ((counts / size) + 1));
	}

	private void setPageNums() {
		pageNums = new ArrayList<Integer>();
		if (this.currentPage <= this.fab) {
			for (int i = 1; i <= fab * 2 + 1; i++) {
				if (i <= countsPages) {
					pageNums.add(i);
				}
			}
		} else if ((this.currentPage + this.fab) >= this.countsPages) {
			for (int i = (countsPages - (fab * 2)); i <= countsPages; i++) {
				if (i <= countsPages) {
					pageNums.add(i);
				}
			}
		} else {
			System.out.println("*");
			for (int i = ((int) this.currentPage - this.fab); i <= (this.currentPage + this.fab); i++) {
				if (i <= countsPages) {
					pageNums.add(i);
				}
			}
		}

	}
	public Page() {
		super();
	}

	public List<T> getContent() {
		return content;
	}

	public void setContent(List<T> content) {
		this.content = content;
	}

	public long getCurrentPage() {
		return currentPage;
	}

	public void setCurrentPage(long currentPage) {
		this.currentPage = currentPage;
	}

	public int getSize() {
		return size;
	}

	public void setSize(int size) {
		this.size = size;
	}

	public long getCounts() {
		return counts;
	}

	public List<Integer> getPageNums() {
		return pageNums;
	}

	public static int getStartOfPage(long pageNo, int pageSize) {
		return (int) (pageNo - 1) * pageSize;
	}
//	public void setCounts(long counts) {
//		this.counts = counts;
//	}
}
