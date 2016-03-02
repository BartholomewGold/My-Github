/**
 * @author 冯华杰
 * 
 * Email:fhj@sonluk.com.cn
 * 
 */
package com.mymaven.build;

public enum DictionaryOfExceptionMessage {
	PACKAGE_EXCEPTION("包路径输入错误"), CLASSNAME_EXCEPTION("类命名不合标准"), 
	IMPORT_EXCEPTION("引入类命名不合标准");
	private String exceptionMessage;

	DictionaryOfExceptionMessage(String exceptionMessage) {
		this.exceptionMessage = exceptionMessage;
	}

	public String toString() {
		return exceptionMessage;
	}
}
