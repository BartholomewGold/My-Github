/**
 * @author 冯华杰
 * 
 * Email:fhj@sonluk.com.cn
 * 
 */
package com.mymaven.build;

import java.io.File;
import java.io.FileWriter;

import javax.tools.JavaCompiler;
import javax.tools.JavaCompiler.CompilationTask;
import javax.tools.StandardJavaFileManager;
import javax.tools.ToolProvider;

public class Test {
	public static void main(String[] args) throws Exception {
		String rt = "\r\n";
		String source = "package com.mymaven.modle;"
				+ "import javax.persistence.Column;"
				+ "import javax.persistence.Entity;"
				+ "import javax.persistence.GeneratedValue;"
				+ "import static javax.persistence.GenerationType.IDENTITY;"
				+ "import javax.persistence.Id;"
				+ "import javax.persistence.Table;"
				+ "@Entity"
				+ "@Table(name = \"menu\")"
				+ "public class Menu implements java.io.Serializable {"
				+ "	private Long id;private String name;private String url;	private Integer order;"
				+ "	private Long pid;	private String type;"
				+ "public Menu() {}"
				+ "	@Id"
				+ "	@GeneratedValue(strategy = IDENTITY)"
				+ "	@Column(name = \"ID\", unique = true, nullable = false)"
				+ "	public Long getId() {		return this.id;	}"
				+ "	public void setId(Long id) {		this.id = id;	}"
				+ "	@Column(name = \"NAME\", nullable = false)"
				+ "public String getName() {		return this.name;	}"
				+ "	public void setName(String name) {		this.name = name;	}"
				+ "@Column(name = \"URL\")"
				+ "	public String getUrl() {		return this.url;	}"
				+ "	public void setUrl(String url) {		this.url = url;	}"
				+ "	@Column(name = \"ORDER\", nullable = false)"
				+ "	public Integer getOrder() {		return this.order;	}"
				+ "	public void setOrder(Integer order) {		this.order = order;	}"
				+ "	@Column(name = \"PID\")"
				+ "	public Long getPid() {		return this.pid;	}"
				+ "	public void setPid(Long pid) {		this.pid = pid;	}"
				+ "	@Column(name = \"TYPE\", nullable = false, length = 1)"
				+ "	public String getType() {		return this.type;	}"
				+ "	public void setType(String type) {		this.type = type;	}"
				+ "}";

		String fileName = System.getProperty("user.dir")// 获取到项目的根路径
				+ File.separator + "Menu.java";
		System.out.println(fileName);
		File f = new File(fileName);

		FileWriter fw = new FileWriter(f);
		fw.write(source);
		fw.flush();
		fw.close();// 这里只是产生一个JAVA文件,简单的IO操作

		// compile下面开始编译这个Store.java
		JavaCompiler compiler = ToolProvider.getSystemJavaCompiler();
		StandardJavaFileManager fileMgr = compiler.getStandardFileManager(null,
				null, null);
		Iterable units = fileMgr.getJavaFileObjects(f);
		CompilationTask t = compiler.getTask(null, fileMgr, null, null, null,
				units);
		t.call();
		f.delete();
		fileMgr.close();
	}
}
