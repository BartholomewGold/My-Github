<%@page pageEncoding="utf-8" contentType="text/html; charset=utf-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jstl/core_rt"%>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>电池自动放电数据分析系统</title>
<link href="/ResearchCenter/jsb/common/css.css" type="text/css"
	rel="stylesheet">
<link href="/ResearchCenter/jsb/common/asyncbox/asyncbox.css"
	type="text/css" rel="stylesheet">
<link href="/ResearchCenter/jsb/common/chosen.css" type="text/css"
	rel="stylesheet">
<link href="/ResearchCenter/jsb/common/lhgcalendar.css" type="text/css"
	rel="stylesheet">
<script src="/ResearchCenter/jsb/common/js/jquery-1.8.2.min.js"></script>
</head>
<body>
	<div class="wrap">
		<div class="path">
			当前路径：<a href="#">后台首页</a> - 放电情况查询-下降率
			<div class="back">
				<a href="javascript:history.back();"><i>»</i>返回上一层</a>
			</div>
		</div>
		<div class="box1">
			<div class="box1_t">放电情况查询-下降率</div>
			<div class="box1_c">
				<form id="mainForm" action="" method="post">
					<table border="0" cellspacing="0" cellpadding="0"
						class="tableform1">
						<tr>
							<td class="label">生产单位：</td>
							<td class="select"><select data-placeholder="选择生产单位"
								class="chzn-select" id="scdw" style="width:176px;"
								name="producters" multiple="multiple">
									<c:forEach var="pro" items="${product}">
										<option value="${pro}"
											<c:forEach var="pfd" items="${mainForm.producters}">
											<c:if test="${pfd eq pro}">
									  selected="selected"
									  </c:if>
										  </c:forEach>>${pro}</option>
									</c:forEach>
							</select></td>
							<td class="label">电池型号：</td>
							<td class="select"><select id="dcxh"
								data-placeholder="选择电池型号" class="chzn-select"
								style="width:176px;" name="model">
									<option value=""
										<c:if test="${mainForm.model eq ''}">
									  selected="selected"</c:if>>全部</option>
									<c:forEach var="dcxh" items="${typeB}">
										<option value="${dcxh}"
											<c:if test="${mainForm.model eq dcxh}">
									  selected="selected"</c:if>>${dcxh}</option>
									</c:forEach>
							</select></td>
							<td class="label">同比电压：</td>
							<td class="select"><input type="text" id="volt"
								class="input_text" value="${mainForm.volt}" name="volt" />V</td>
						</tr>
						<tr>
							<td class="label">放电方式：</td>
							<td class="select"><select data-placeholder="选择放电方式"
								class="chzn-select" style="width:176px;" id="discharge"
								name="discharge">
									<option value="">全部</option>
									<c:forEach var="discharget" items="${discharge}">
										<option value="${discharget}"
											<c:if test="${mainForm.discharge eq discharget}">
									  selected="selected"
									  </c:if>>${discharget}</option>
									</c:forEach>
							</select></td>
							<td class="label">负载电阻/电流/功率：</td>
							<td class="select"><select data-placeholder="选择负载电阻/电流/功率值"
								class="chzn-select" style="width:176px;" id="keyValue"
								name="keyValue">
									<option value="">全部</option>
									<c:forEach var="fzdza" items="${fzdza}">
										<option value="${fzdza}"
											<c:if test="${mainForm.keyValue eq fzdza}">
									  selected="selected"
									  </c:if>>${fzdza}</option>
									</c:forEach>
							</select></td>
							<td class="label" id="fdType"><input type="radio"
								name="fdType" value="恒阻"
								<c:if test="${mainForm.fdType eq '恒阻'}">checked="checked"</c:if>>Ω
								<input type="radio" name="fdType" value="恒流"
								<c:if test="${mainForm.fdType eq '恒流'}">checked="checked"</c:if>>mA
								<input type="radio" name="fdType" value="恒功率"
								<c:if test="${mainForm.fdType eq '恒功率'}">checked="checked"</c:if>>mW</td>
						</tr>

						<tr>
							<td class="label">抽样时间：</td>
							<td class="text"><input type="text" id="cdate"
								class="input_text" value="${mainForm.cyst}" name="cyst" /></td>
							<td class="label">例如:2015-09-07</td>
							<td class="label">贮存状态：</td>
							<td class="select">${storeStatust.zczt.lenth}<select
								data-placeholder="选择贮存状态" class="chzn-select"
								style="width:176px;" name="storeStatusVal" id="zczt"
								multiple="multiple">
									<!-- 									<option value="">全部</option> -->
									<c:forEach var="storeStatust" items="${storeStatus}">
										<option value="${storeStatust.zczt}"
											<c:forEach var="sst" items="${mainForm.storeStatusVal}">
											<c:if test="${sst eq storeStatust.zczt}">
									  selected="selected"
									  </c:if>
									 </c:forEach>>${storeStatust.zczt}</option>
									</c:forEach>
							</select><br> <span class="ismust">时间按照从小到大选择</span></td>
							<td class="label">电池类别：</td>
							<td class="select"><select data-placeholder="选择取样周期"
								class="chzn-select" style="width:176px;" id="btype" name="btype">
									<option value="">全部</option>
									<option
										<c:if test="${mainForm.btype eq '生产电池'}">
									  selected="selected"
									  </c:if>
										value="生产电池">生产电池</option>
									<option
										<c:if test="${mainForm.btype eq '成品电池'}">
									  selected="selected"
									  </c:if>
										value="成品电池">成品电池</option>
									<option
										<c:if test="${mainForm.btype eq '试验电池'}">
									  selected="selected"
									  </c:if>
										value="试验电池">试验电池</option>
									<option
										<c:if test="${mainForm.btype eq '样品电池'}">
									  selected="selected"
									  </c:if>
										value="样品电池">样品电池</option>
									<option
										<c:if test="${mainForm.btype eq '半成品电池'}">
									  selected="selected"
									  </c:if>
										value="半成品电池">半成品电池</option>
							</select></td>
						</tr>

					</table>
					<div class="box1_btn">
						<input id="sub" type="button" class="btn_search btn1" value="查 询" />

					</div>
				</form>
				<div>
					<span class="ismust">请确认选择的贮存状态对应值存在</span>

				</div>
				<table border="0" cellspacing="0" cellpadding="0" class="table1">
					<tr>
						<div id="main"
							style="height:400px;<!-- background: url('/ResearchCenter/jsb/common/sonluk.png') -->"></div>
					</tr>
				</table>
				<div class="clear"></div>
			</div>
		</div>
	</div>
	<script src="/ResearchCenter/jsb/common/js/chosen.jquery.js"></script>
	<script src="/ResearchCenter/jsb/common/js/AsyncBox.v1.4.5.js"></script>
	<script src="/ResearchCenter/jsb/common/js/jquery.form.js"></script>
	<script src="/ResearchCenter/jsb/common/js/common.js"></script>
	<script src="/ResearchCenter/jsb/common/js/lhgcore.min.js"></script>
	<script src="/ResearchCenter/jsb/common/js/lhgcalendar.min.js"></script>
	<div><script src="/ResearchCenter/echarts/echarts-all.js"></script></div>
	<script type="text/javascript">
		var myChart = echarts.init(document.getElementById('main'));
		option = ${option};
		// 为echarts对象加载数据 
		myChart.setOption(option);
	</script>
	<script type="text/javascript">
		$(document).ready(function() {
			$('#sub').click(function() {
				$('#mainForm').submit();
			});
		});
		// 		$(document).ready(function() {
		// 			$('#sub').click(function() {
		// 				var scdw = '';
		// 				$("#scdw  option:selected").each(function() {
		// 					scdw += $(this).val() + ',';
		// 				});
		// 				scdw = scdw.substring(0, scdw.length - 1);
		// 				var dcxh = $('#dcxh  option:selected').text();
		// 				var volt = $('#volt').val();
		// 				var fdfs = $('#discharge  option:selected').text();
		// 				var keyVal = $('#keyValue  option:selected').text();
		// 				var fdType = $('#fdType  input[name="fdType"]:checked').val();
		// 				var cdate=$('#cdate').val();
		// 				var zczt='';
		// 				$('#zczt  option:selected').each(function() {
		// 					zczt += $(this).val() + ',';
		// 				});
		// 				zczt = zczt.substring(0, zczt.length - 1);
		// 				alert(zczt);
		// 				$('#sub').attr("disabled", "disabled");
		// 				return ;
		// 				var a = verify();
		// 				if (!a) {
		// 					$("#sub").removeAttr("disabled");
		// 					return;
		// 				}

		// 				$('#mainForm').ajaxSubmit({
		// 					type : 'post', // 提交方式 get/post
		// 					url : '/ResearchCenter/db/ajaxLine', // 需要提交的 url
		// 					data : {},
		// 					success : function(data) { // data 保存提交后返回的数据，一般为 json 数据
		// 						alert('提交成功！');
		// 						$("#sub").removeAttr("disabled");
		// 					},
		// 					error : function(data) {
		// 						$("#sub").removeAttr("disabled");
		// 					}
		// 				});

		// 			});
		// 		});
		function verify() {
			if ($('#dcxh  option:selected').text() == '全部') {
				alert("请选择电池类型");
				return false;
			}
			if ($('#scdw  option:selected').text() == '全部') {
				alert("请选择生产单位");
				return false;
			}
			if ($('#discharge  option:selected').text() == '全部') {
				alert("请选择放电方式");
				return false;
			}
			if ($('#voltEd  option:selected').text() == '全部') {
				alert("请选择结束电压");
				return false;
			}
			if ($('#cdate').val() == '') {
				alert("请输入抽样时间");
				return false;
			}
			if ($('#zczt  option:selected').text() == '') {
				alert("请选择贮存状态");
				return false;
			}
			return true;
		}
	</script>
</body>
</html>