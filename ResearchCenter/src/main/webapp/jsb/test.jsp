<%@page pageEncoding="utf-8" contentType="text/html; charset=utf-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jstl/core_rt" %>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>电池自动放电数据分析系统</title>
<link href="/ResearchCenter/jsb/common/css.css" type="text/css" rel="stylesheet">
<link href="/ResearchCenter/jsb/common/asyncbox/asyncbox.css" type="text/css"
	rel="stylesheet">
<link href="/ResearchCenter/jsb/common/chosen.css" type="text/css" rel="stylesheet">
<link href="/ResearchCenter/jsb/common/lhgcalendar.css" type="text/css" rel="stylesheet">
<script src="/ResearchCenter/jsb/common/js/jquery-1.8.2.min.js"></script>

</head>

<body>
	<div class="wrap">
		<div class="path">
			当前路径：<a href="#">后台首页</a> - <a href="#">技术部</a> - 连续放电
			<div class="back">
				<a href="javascript:history.back();"><i>»</i>返回上一层</a>
			</div>
		</div>
		<div class="box1">
			<div class="box1_t">连续放电报表</div>
			<div class="box1_c">
				<form action="/admin/trans/getcash.do" method="post">
					<table border="0" cellspacing="0" cellpadding="0"
						class="tableform1">
						<tr>
							<td class="label">存档ID：</td>
							<!--                <td class="label">提现订单号：</td>-->
							<td class="text"><input type="text" class="input_text"
								name="saveId" value="" /></td>
							<td class="label">存档名称：</td>
							<td class="text"><input type="text" class="input_text"
								name="saveName" value="" /></td>
							<td class="label">生产单位：</td>
							<td class="select"><select data-placeholder="选择放电方式"
								class="chzn-select" style="width:176px;" name="auditTrans">
									<option value="">全部</option>
							</select></td>
						</tr>
						<tr>
							<td class="label">电池型号：</td>
							<td class="select"><select data-placeholder="选择放电方式"
								class="chzn-select" style="width:176px;" name="auditTrans">
									<option value="">全部</option>
							</select></td>
							<td class="label">负载电阻：</td>
							<td class="select"><select data-placeholder="选择放电方式"
								class="chzn-select" style="width:176px;" name="auditTrans">
									<option value="">全部</option>
							</select></td>
							<td class="label">贮存状态：</td>
							<td class="select"><select data-placeholder="选择放电方式"
								class="chzn-select" style="width:176px;" name="auditTrans" id="zczt">
									<option value="">全部</option>
							</select></td>
						</tr>
						<tr>
							<td class="label">放电方式：</td>
							<td class="select"><select data-placeholder="选择放电方式"
								class="chzn-select" style="width:176px;" name="discharge">
									<option value="">全部</option>
							</select></td>
							<td class="label">电池类别：</td>
							<td class="select"><select data-placeholder="选择电池类别"
								class="chzn-select" style="width:176px;" name="type">
									<option value="">全部</option>
							</select></td>
							<td class="label">取样周期：</td>
							<td class="select"><select data-placeholder="选择取样周期"
								class="chzn-select" style="width:176px;" name="type">
									<option value="">全部</option>
							</select></td>
						</tr>
						<tr>
							<td class="label">放电开始时间 从：</td>
							<td class="text"><input readonly="readonly" type="text"
								id="startDate" class="input_text tx_startDate" value=""
								name="beginDateStart" /></td>
							<td class="label">到：</td>
							<td class="text" colspan="3"><input readonly="readonly"
								type="text" class="input_text tx_endDate" name="beginDateEnd"
								value="" /></td>
							<!--                   </tr>  -->
							<!--                   <tr> -->
							<td class="label">放电结束时间 从：</td>
							<td class="text"><input readonly="readonly" type="text"
								id="startDate" class="input_text dk_startDate"
								value="${endDateStart}" name="endDateStart" /></td>
							<td class="label">到：</td>
							<td class="text" colspan="3"><input readonly="readonly"
								type="text" class="input_text dk_endDate" name="endDateEnd"
								value="${endDateEnd}" /></td>
						</tr>
						<tr>
							<td class="label">抽样时间 从：</td>
							<td class="text"><input readonly="readonly" type="text"
								id="startDate" class="input_text dk_startDate"
								value="${endDateStart}" name="" /></td>
							<td class="label">到：</td>
							<td class="text" colspan="3"><input readonly="readonly"
								type="text" class="input_text dk_endDate" name=""
								value="${endDateEnd}" /></td>
						</tr>
					</table>
					<div class="box1_btn">
						<input type="submit" class="btn_search btn1" value="查 询" />
				</form>
				<table border="0" cellspacing="0" cellpadding="0" class="table1">
					<tr>
						<th>创建时间</th>
						<th>4444</th>
						<th>3333</th>
						<th>2222</th>
						<th>21341</th>
						<th>dsafad</th>
						<th>21341</th>
						<th>21341</th>
						<th>21341</th>
						<th>21341</th>
						<th>21341</th>
						<th>21341</th>
						<th>21341</th>
						<th>21341</th>
						<th>21341</th>
						<th>21341</th>
						<th>21341</th>
					</tr>
					<tr>
						<td></td>
						<td>${transId}</td>
						<!--				<td><s:date  name="txDate" format="yyyy-MM-dd"/></td>-->
						<td>${account.email}</td>
						<td>${account.name}</td>
						<td>${amount}</td>
						<td>${cardnumber}</td>
						<td>${bankinfo.bankname}</td>
						<td>${cityInfo.cityName}</td>
						<td>${bankName}</td>
						<td>${accountname}</td>
						<td>大森蝶发</td>
						<td>${bankRes}</td>
						<td></td>
						<td>${operator.operatorName}</td>
						<td>${remark}</td>
						<td>按时发送到</td>
						<td></td>
						<!--				<td>-->
						<!--				 <a href="/admin/trans/cashById.do?id=${id}">查看详细</a>-->
						<!--				</td>-->
					</tr>
					<!--               </s:iterator> -->
				</table>
				<form action="/admin/trans/getcash.do" method="post" class="post">
					<input type="hidden" name="email" value="${email}" /> <input
						type="hidden" name="transId" value="${transId}" /> <input
						type="hidden" name="personName" value="${personName}" /> <input
						type="hidden" name="bankName" value="${bankName}" /> <input
						type="hidden" name="cardNo" value="${cardNo}" /> <input
						type="hidden" name="bankResponse" value="${bankResponse}" /> <input
						type="hidden" name="auditTrans" value="${auditTrans}" /> <input
						type="hidden" name="type" value="${type}" /> <input type="hidden"
						name="beginDateStart" value="${beginDateStart}" /> <input
						type="hidden" name="beginDateEnd" value="${beginDateEnd}" /> <input
						type="hidden" name="endDateStart" value="${endDateStart}" /> <input
						type="hidden" name="endDateEnd" value="${endDateEnd}" /> <input
						type="hidden" id="maxPage" value="${nowpage.maxPage}" value="" />
					<input type="hidden" id="currentPage"
						value="${nowpage.currentPage}" value="" /> <input type="hidden"
						id="goPage" name="goPage" value="" />
					<div class="pagesize">
						<a class="btn_first" href="javascript:;" onclick="postto(1)">首页</a>
						<a class="btn_pre" href="javascript:;"
							onclick="postto(${nowpage.currentPage-1})"><</a>
						<s:iterator value="nowpage.pageNum" id="num">
							<s:if test="#num==nowpage.currentPage">
								<a class="btn_page_cur">${num}</a>
							</s:if>
							<s:else>
								<a href="javascript:;" onclick="postto(${num})">${num}</a>
							</s:else>
						</s:iterator>
						<a class="btn_next" href="javascript:;"
							onclick="postto(${nowpage.currentPage+1})">></a> <a
							class="btn_last" href="javascript:;"
							onclick="postto(${nowpage.maxPage})">尾页</a>
					</div>
				</form>
				<div class="clear"></div>
			</div>
		</div>
	</div>
	<script src="/ResearchCenter/jsb/common/js/chosen.jquery.js"></script>

	<script src="/ResearchCenter/jsb/common/js/lhgcore.min.js"></script>
	<script src="/ResearchCenter/jsb/common/js/lhgcalendar.min.js"></script>

	<script src="/ResearchCenter/jsb/common/js/AsyncBox.v1.4.5.js"></script>
	<script src="/ResearchCenter/jsb/common/js/common.js"></script>
	<script>
		function postto(page) {
			var maxPage = $("#maxPage").val();
			if (page > maxPage || page < 1) {
				return false;
			}
			var currentPage = $("#currentPage").val();
			if (page == currentPage) {
				return false;
			}
			$("#goPage").val(page);
			$(".post").submit();

		}
		$(document).ready(function() {
			bindDateF('.tx_startDate', '.tx_endDate');
			bindDateE('.tx_endDate', '.tx_startDate');

			bindDateF('.dk_startDate', '.dk_endDate');
			bindDateE('.dk_endDate', '.dk_startDate');
		});
	</script>
	<script>
	function myfun() {
		$.ajax({
			type : 'POST',
			contentType : 'text/plain; charset=UTF-8',
			url : "/ResearchCenter/db/test",
			data : {
// 				"id" : _id
			},
			success : function(data) {
				var menus = data.list;
				for (var i = 0; i < menus.length; i++) {
// 				alert(1);
				$("<option value='"+menus[i].id+"'>"+menus[i].zczt+"</option>").appendTo("#sel55I_chzn_o_0");
// 				alert($("#zczt").val());
// 				$("#43").append("<option value='Value'>Text</option>");   
// 					$("#zczt").append(
// 							"<option value='"+menus[i].id+"'>"+menus[i].zczt+"</option>");
									
									
				}
			},
			error : function() {
				alert('系统错误,请稍后再试!');
			}
		});
	}
	// 用js实现在加载完成一个页面后自动执行一个方法
	/*用window.onload调用myfun()*/
	window.onload = myfun;//不要括号
</script>
</body>
</html>