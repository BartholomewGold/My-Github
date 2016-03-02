/**
 * @author 冯华杰
 * 
 * Email:fhj@sonluk.com.cn
 * 
 */
package com.mymaven.build;

import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class CreateJavaFileSystem {
	private StringBuilder sb;
	private String packageVal;
	private String className;
	private List<String> imports;
	private List<String> staticImports;
	public CreateJavaFileSystem() {
		this.sb = new StringBuilder();
		this.imports=new ArrayList<String>();
		this.staticImports=new ArrayList<String>();
	}

//	import javax.persistence.Column;
//	import javax.persistence.Entity;
//	import javax.persistence.GeneratedValue;
//	import static javax.persistence.GenerationType.IDENTITY;
//	import javax.persistence.Id;
//	import javax.persistence.Table;
	public void addImport(String importVal)
			throws JavaFileCreateException {
		if (importVal == null || "".equals("")) {
			throw new JavaFileCreateException(
					DictionaryOfExceptionMessage.IMPORT_EXCEPTION
							.toString());
		} else {
			importVal = importVal.trim();
			Pattern pat = Pattern.compile("[^a-zA-Z0-9]*");
			String[] temp = importVal.trim().split("\\.");
			if (temp.length == 0) {
				throw new JavaFileCreateException(
						DictionaryOfExceptionMessage.IMPORT_EXCEPTION
								.toString());
			} else {
				for (String string : temp) {
					Matcher mat = pat.matcher(string);
					boolean rs = mat.find();
					if (rs) {
						throw new JavaFileCreateException(
								DictionaryOfExceptionMessage.IMPORT_EXCEPTION
										.toString());
					}
				}
			}
		}
		imports.add(importVal);
	}
	
	public void setClassName(String className)
			throws JavaFileCreateException {
		if (className == null ||className.equals("")) {
			throw new JavaFileCreateException("类名不能为空");
		} else {
			className = className.trim();
			Pattern pat = Pattern.compile("[A-Z]{1}[a-zA-Z0-9]+");
			Matcher mat = pat.matcher(className);
			boolean rs = mat.find();
			if (!rs) {
				throw new JavaFileCreateException(
						DictionaryOfExceptionMessage.CLASSNAME_EXCEPTION
						.toString());
			}
			this.className=className;
		}
	}
	public void setPackage(String packageVal)
			throws JavaFileCreateException {
		if (packageVal == null || "".equals("")) {
			// 默认项目路径
			System.out.println("默认包路径");
		} else {
			packageVal = packageVal.trim();
			Pattern pat = Pattern.compile("[^a-zA-Z0-9]*");
			String[] temp = packageVal.trim().split("\\.");
			if (temp.length == 0) {
				throw new JavaFileCreateException(
						DictionaryOfExceptionMessage.PACKAGE_EXCEPTION
								.toString());
			} else {
				for (String string : temp) {
					Matcher mat = pat.matcher(string);
					boolean rs = mat.find();
					if (rs) {
						throw new JavaFileCreateException(
								DictionaryOfExceptionMessage.PACKAGE_EXCEPTION
										.toString());
					}
				}
			}
		}
		this.packageVal=packageVal;
	}
}
