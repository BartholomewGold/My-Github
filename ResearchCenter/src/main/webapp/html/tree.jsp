<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="page" tagdir="/WEB-INF/tags"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<html>
<head>
<title></title>
<meta name="GENERATOR" content="Microsoft Visual Studio .NET 7.1">
<meta name="ProgId" content="VisualStudio.HTML">
<meta name="Originator" content="Microsoft Visual Studio .NET 7.1">
<link type="text/css" href="/mymaven/html/css/tree.css" rel="stylesheet">
<script type="text/javascript">
	function ChangeStatus(o) {
		if (o.parentNode) {
			if (o.parentNode.className == "Opened") {
				o.parentNode.className = "Closed";
			} else {
				o.parentNode.className = "Opened";
			}
		}
	}
</script>
</head>
<body>
	<div class="TreeMenu" id="CategoryTree">
		<h4>CSS树形菜单</h4>
		<ul>
			<li class="Opened"><img class=s src="css/s.gif"
				onclick="javascript:ChangeStatus(this);"><a href="#"
				onclick="javascript:ChangeStatus(this);">根节点</a>
				<ul>
					<li class="Closed"><img class=s src="css/s.gif"
						onclick="javascript:ChangeStatus(this);"><a href="#"
						onclick="javascript:ChangeStatus(this);">学习</a>
						<ul>
							<li class="Closed"><img class=s src="css/s.gif"
								onclick="javascript:ChangeStatus(this);"><a href="#"
								onclick="javascript:ChangeStatus(this);">编程</a></li>
							<ul>
								<li class="Child"><img class=s src="css/s.gif"><a
									href="http://www.csdn.net" target="mainFrame">csdn</a></li>
							</ul>
						</ul>
						<ul>
							<li class="Closed"><img class=s src="css/s.gif"
								onclick="javascript:ChangeStatus(this);"><a href="#"
								onclick="javascript:ChangeStatus(this);">网络</a></li>
							<ul>
								<li class="Child"><img class=s src="css/s.gif" ><a
									href="http://www.csdn.net" target="mainFrame">csdn</a></li>
							</ul>
						</ul>
						<ul>
							<li class="Closed"><img class=s src="css/s.gif"
								onclick="javascript:ChangeStatus(this);"><a href="#"
								onclick="javascript:ChangeStatus(this);">网站制作</a></li>
							<ul>
								<li class="Child"><img class=s src="css/s.gif"><a
									href="http://www.csdn.net" target="mainFrame">csdn</a></li>
							</ul>
						</ul>
					<li class="Closed"><img class=s src="css/s.gif"
						onclick="javascript:ChangeStatus(this);"><a href="#"
						onclick="javascript:ChangeStatus(this);">娱乐</a>
						<ul>
							<li class="Child"><img class=s src="css/s.gif"><a
								href="http://www.163.com" target="mainFrame">网易</a></li>
							<li class="Child"><img class=s src="css/s.gif"><a
								href="http://www.sina.com" target="mainFrame">新浪</a></li>
							<li class="Child"><img class=s src="css/s.gif"><a
								href="http://www.sohu.com" target="mainFrame">搜狐</a></li>
							<li class="Child"><img class=s src="css/s.gif"><a
								href="http://www.maopu.com" target="mainFrame">猫扑</a></li>
						</ul>
					<li class="Closed"><img class=s src="css/s.gif"
						onclick="javascript:ChangeStatus(this);"><a href="#"
						onclick="javascript:ChangeStatus(this);">新闻</a>
						<ul>
							<li class="Child"><img class=s src="css/s.gif"><a
								href="http://www.cctv.com" target="mainFrame">中央电视台</a></li>
						</ul></li>
				</ul>
	</div>
</body>
</html>