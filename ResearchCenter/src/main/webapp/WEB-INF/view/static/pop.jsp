<%@page pageEncoding="utf-8" contentType="text/html; charset=utf-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jstl/core_rt"%>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>放电管理系统</title>
<link href="/ResearchCenter/jsb/common/css.css" type="text/css"
	rel="stylesheet">
<link href="/ResearchCenter/jsb/common/asyncbox/asyncbox.css"
	type="text/css" rel="stylesheet">
<link href="/ResearchCenter/jsb/common/chosen.css" type="text/css"
	rel="stylesheet">
<script src="/ResearchCenter/jsb/common/js/jquery-1.8.2.min.js"></script>
</head>

<body>
	<div class="wrap">
		<div class="path">
			当前路径：<a href="#">后台首页</a> - <a href="#">常量管理</a> - 放电方式与放电得分比例维护
			<div class="back">
				<a href="javascript:history.back();"><i>»</i>返回上一层</a>
			</div>
		</div>
		<div class="box1">
			<div class="box1_t">放电方式与放电得分比例维护</div>
			<div class="box1_c">
				<form action="/ResearchCenter/pop/view" method="post">
					<table border="0" cellspacing="0" cellpadding="0"
						class="tableform1">
						<tr>
							<td class="label">放电方式：</td>
							<td class="text"><input type="text" class="input_text"
								name="name" value="${name}" /></td>
							<td>输入放电方式时可用%代替任意字符串，如:(1000mA10s,300mA10s)1T/0.5h,24h/d 可用
								(%,%)%/%,% 表示</td>

						</tr>
						<tr>
							<td><input type="submit" class="btn_search btn1" value="查 询" /></td>
							<td><input id="add" type="button" class="btn_search btn1"
								value="新 增" /></td>
						</tr>
					</table>
				</form>
				<table id="mainTab" border="0" cellspacing="0" cellpadding="0"
					class="table1">
					<tr>
						<th width="5%">ID</th>
						<th width="20%">放电方式</th>
						<th width="10%">分钟比例</th>
						<th width="10%">小时比例</th>
						<th width="10%">天数比例</th>
						<th width="10%">次数比例</th>
						<th width="10%">时数比例</th>
						<th width="10%">备注</th>
					</tr>
					<c:forEach var="pop" items="${list}">
						<tr id="${pop.id}" ondblclick="dowhat(this,${pop.id})">
							<td class="id">${pop.id }</td>
							<td class="fdfs">${pop.fdfs }</td>
							<td class="min">${pop.minTime }</td>
							<td class="hour">${pop.hourTime }</td>
							<td class="days">${pop.daysTime }</td>
							<td class="cir">${pop.cirTime }</td>
							<td class="hours">${pop.hoursTime }</td>
							<td class="remark">${pop.remark }</td>
						</tr>
					</c:forEach>
				</table>
				<div class="clear"></div>
			</div>
		</div>
	</div>
	<script src="/ResearchCenter/jsb/common/js/formValidatorRegex.js"></script>
	<script src="/ResearchCenter/jsb/common/js/AsyncBox.v1.4.5.js"></script>
	<script src="/ResearchCenter/jsb/common/js/common.js"></script>
	<script src="/ResearchCenter/2.js"></script>
	<script>
		function dodel(id) {
			var r = confirm("确认要删除id为" + id + "的数据吗");
			if (r == true) {
				$.ajax({
					type : "POST",
					url : "/ResearchCenter/pop/del",
					timeout : 20000,
					error : function() {
						alert('error');
					},
					data : {
						"id" : id
					},
					success : function(data) {
						if (data.status == 0) {
							alert("删除成功");
						} else {
							alert("删除失败");
						}

					}
				});
			}
		}
		function dofind(id) {
			$.ajax({
				type : "POST",
				url : "/ResearchCenter/pop/find",
				timeout : 20000,
				error : function() {
					alert('error');
				},
				data : {
					"id" : id
				},
				success : function(data) {
					var text = data.id;
					// 					alert(text);
					edit(data);
					//当AJAX请求失败时添加一个被执行的方法

				}
			});
		}

		function dowhat(obj, id) {
			var diag = new Dialog();
			var type = null;
			diag.Title = "操作选项";
			diag.URL = "a.html";
			diag.OKEvent = function() {
				var chkObjs = diag.innerFrame.contentWindow.document
						.getElementsByName('exportType');
				for (var i = 0; i < chkObjs.length; i++) {
					if (chkObjs[i].checked) {
						type = chkObjs[i].value;
					}
				}
				refresh(type, obj, id);
				diag.close();
			};
			diag.show();
			var doc = diag.innerFrame.contentWindow.document;
			doc.open();
			doc.write('<html><body>'
					+ '<input type="radio" name="exportType" value="1"/>修改'
					+ '<br><input type="radio" name="exportType" value="2"/>删除'
					+ '</body></html>');
			doc.close();
		}
		function refresh(type, obj, id) {
			if (type == 1) {
				dofind(id);
			} else if (type == 2) {
				dodel(id);
				obj.parentNode.removeChild(obj);
			}
		}

		function edit(data) {
			var diag = new Dialog();
			diag.Title = "修改";
			diag.URL = "edit.html";
			diag.OKEvent = function() {
				var minTime = diag.innerFrame.contentWindow.document
						.getElementsByName('min')[0].value;
				var hourTime = diag.innerFrame.contentWindow.document
						.getElementsByName('hour')[0].value;
				var daysTime = diag.innerFrame.contentWindow.document
						.getElementsByName('days')[0].value;
				var cirTime = diag.innerFrame.contentWindow.document
						.getElementsByName('cir')[0].value;
				var hoursTime = diag.innerFrame.contentWindow.document
						.getElementsByName('hours')[0].value;
				var remark = diag.innerFrame.contentWindow.document
						.getElementsByName('remark')[0].value;
				doedit(data.id, data.fdfs, minTime, hourTime, daysTime,
						cirTime, hoursTime, remark);
				diag.close();
			};
			diag.show();
			var doc = diag.innerFrame.contentWindow.document;
			doc.open();
			doc
					.write('<html><body>'
							+ 'id：'
							+ data.id
							+ '<br>放电方式：'
							+ data.fdfs
							+ '<br>分钟比例：<input type="text" name="min" value="'+data.minTime+'" />'
							+ '<br>小时比例：<input type="text" name="hour" value="'+data.hourTime+'" />'
							+ '<br>天数比例：<input type="text" name="days" value="'+data.daysTime+'" />'
							+ '<br>次数比例：<input type="text" name="cir" value="'+data.cirTime+'" />'
							+ '<br>时数比例：<input type="text" name="hours" value="'+data.hoursTime+'" />'
							+ '<br>备&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注：<input type="text" name="remark" value="'+data.remark+'" />'
							+ '</body></html>');
			doc.close();
		}
		function doedit(id, fdfs, minTime, hourTime, daysTime, cirTime,
				hoursTime, remark) {
			$.ajax({
				type : "POST",
				url : "/ResearchCenter/pop/edit",
				timeout : 20000,
				error : function() {
					alert('error');
				},
				data : {
					"id" : id,
					"fdfs" : fdfs,
					"minTime" : minTime,
					"hourTime" : hourTime,
					"daysTime" : daysTime,
					"cirTime" : cirTime,
					"hoursTime" : hoursTime,
					"remark" : remark
				},
				success : function(data) {
					var obj = $('#' + id);
					obj.find("td.min").html(data.minTime);
					obj.find("td.hour").html(data.hourTime);
					obj.find("td.days").html(data.daysTime);
					obj.find("td.cir").html(data.cirTime);
					obj.find("td.hours").html(data.hoursTime);
					obj.find("td.remark").html(data.remark);
				}
			});
		}

		function add() {
			var diag = new Dialog();
			diag.Title = "新增";
			diag.URL = "add.html";
			diag.OKEvent = function() {
				var fdfs = diag.innerFrame.contentWindow.document
						.getElementsByName('fdfs')[0].value;
				var minTime = diag.innerFrame.contentWindow.document
						.getElementsByName('min')[0].value;
				var hourTime = diag.innerFrame.contentWindow.document
						.getElementsByName('hour')[0].value;
				var daysTime = diag.innerFrame.contentWindow.document
						.getElementsByName('days')[0].value;
				var cirTime = diag.innerFrame.contentWindow.document
						.getElementsByName('cir')[0].value;
				var hoursTime = diag.innerFrame.contentWindow.document
						.getElementsByName('hours')[0].value;
				var remark = diag.innerFrame.contentWindow.document
						.getElementsByName('remark')[0].value;
				doadd(fdfs, minTime, hourTime, daysTime, cirTime, hoursTime,
						remark);
				diag.close();
			};
			diag.show();
			var doc = diag.innerFrame.contentWindow.document;
			doc.open();
			doc
					.write('<html><body>'
							+ '<br>放电方式：<input type="text" name="fdfs"/>'
							+ '<br>分钟比例：<input type="text" name="min" />'
							+ '<br>小时比例：<input type="text" name="hour" />'
							+ '<br>天数比例：<input type="text" name="days" />'
							+ '<br>次数比例：<input type="text" name="cir"  />'
							+ '<br>时数比例：<input type="text" name="hours" />'
							+ '<br>备&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注：<input type="text" name="remark"/>'
							+ '</body></html>');
			doc.close();
		}

		function doadd(fdfs, minTime, hourTime, daysTime, cirTime, hoursTime,
				remark) {
			$.ajax({
				type : "POST",
				url : "/ResearchCenter/pop/add",
				timeout : 20000,
				error : function() {
					alert('error');
				},
				data : {
					"fdfs" : fdfs,
					"minTime" : minTime,
					"hourTime" : hourTime,
					"daysTime" : daysTime,
					"cirTime" : cirTime,
					"hoursTime" : hoursTime,
					"remark" : remark
				},
				success : function(data) {
					if (data.msg == 0) {
						editHtml(data)
					} else {
						alert(data.msg);
					}
				}
			});
		}
		function editHtml(pop) {
			var obj = $('#mainTab');
			obj.append('<tr id="'+pop.id+'" ondblclick="dowhat(this,'+pop.id+')">'+
							'<td class="id">'+pop.id +'</td>'+
							'<td class="fdfs">'+pop.fdfs +'</td>'+
							'<td class="min">'+pop.minTime +'</td>'+
							'<td class="hour">'+pop.hourTime +'</td>'+
							'<td class="days">'+pop.daysTime +'</td>'+
							'<td class="cir">'+pop.cirTime +'</td>'+
							'<td class="hours">'+pop.hoursTime +'</td>'+
							'<td class="remark">'+pop.remark +'</td>'+
						'</tr>');
// 			alert(data.id);
		}
		$(document).ready(function() {
			$('#add').click(function() {
				add();
// 				editHtml(11);
			});
		});
	</script>
</body>
</html>