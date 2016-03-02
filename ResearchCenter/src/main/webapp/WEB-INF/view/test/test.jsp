<%@page import="com.mymaven.timer.SpringTest"%>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ page language="java" import="java.io.*,java.util.*"%>
<%@ page language="java" import="com.mymaven.spring.*"%>
<%

SpringContextHolder s=new SpringContextHolder();
SpringTest a=(SpringTest)s.getBean("test");
a.job1();
 %>
