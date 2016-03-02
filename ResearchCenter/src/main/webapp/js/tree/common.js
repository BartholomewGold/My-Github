Date.prototype.format = function(format)
{
	var o = {
		"M+" : this.getMonth()+1, //month
		"d+" : this.getDate(),    //day
		"h+" : this.getHours(),   //hour
		"m+" : this.getMinutes(), //minute
		"s+" : this.getSeconds(), //second
		"q+" : Math.floor((this.getMonth()+3)/3),  //quarter
		"S" : this.getMilliseconds() //millisecond
	}
	if(/(y+)/.test(format)) format=format.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
		for(var k in o)
			if(new RegExp("("+ k +")").test(format))
				format = format.replace(RegExp.$1, RegExp.$1.length==1 ? o[k] :	("00"+ o[k]).substr((""+ o[k]).length));
	return format;
}

// type 1：启用|禁用 2：显示|隐藏，默认为1
// $obj 点击jquery对象
// name 启用 或 禁用的状态名称
function switchStaticQiJin($obj, name, type, callback, option){
	var value = $.trim($obj.text());
	if( value == "") value = $.trim($obj.val());
	var newValue = '';
	if( type == undefined ) type = 1;
	
	if( type == 1 )
		if( value == '启用' ) {newValue = "禁用";}
		else if( value == '禁用' ) newValue = "启用";
	else ( type == 2 )
		if( value == '显示' ) newValue = "隐藏";
			else if( value == '隐藏' ) newValue = "显示";
			
	asyncbox.confirm('您确定是要 "'+newValue+'" 该'+name+'吗？','请确认！',function(action){
		if(action == 'ok'){
			$obj.text(newValue);
			$obj.attr('title','点击'+value+'该'+name);
			if( callback != undefined ) callback(option);
		}
	});
}

// type 1：启用|禁用 2：显示|隐藏，默认为1
// $obj 点击jquery对象
// name 启用 或 禁用的状态名称
function switchStaticByInput($obj, name, type, inputType, callback, option){
	var value = $.trim($obj.text());
	var newValue = '';
	
	if( type == undefined || type == "" ) type = 1;	
	if( type == 1 ){
		if( value == '启用' ) newValue = "禁用";
		else if( value == '禁用' ) newValue = "启用";}
	else if( type == 2 ){
		if( value == '显示' ) newValue = "隐藏";
			else if( value == '隐藏' ) newValue = "显示";}
	else if( type == 3 ){
		if( value == '部分解冻' ) newValue = "部分解冻";
			else if( value == '全部解冻' ) newValue = "全部解冻";}
	
	if( inputType == undefined || inputType == "" ) inputType = "text";
	
	asyncbox.prompt('您确定要“'+newValue+'”该'+name+'？','请输入理由：','',inputType,function(action,val){
	　　　if(action == 'ok'){
			if( $.trim( val ) == '' ) {alert("请输入理由"); return false;}
			if( newValue == "禁用" || newValue == "隐藏" ) {
				$obj.text(newValue);
				$obj.attr('title','点击'+value+'该'+name);
			}
			if( callback != undefined ||  callback != "" ) callback(option,val);
	　　　}
	　　　if(action == 'cancel'){
	　　　　　//alert('cancel');
	　　　}
	　　　if(action == 'close'){
	　　　　　//alert('close');
	　　　}
	});
}
function loadTabs(hash) {
    if(hash != "") $(".tabs a").not('.nottab').eq(hash.replace("tab","")).click();
	else $(".tabs a").not('.nottab').eq(0).click()
}

$(".tabs a").not('.nottab').each(function(index, element) {
	$(this).click(function(){
		$(".tabs a").not('.nottab').removeClass('cur_tab');
		$(this).addClass('cur_tab');
		$(".tabs_div").hide().eq(index).show();
		
		setBoxHeight();
	});
});

function opcal1(){
	J.calendar.Show({ format:'yyyy-MM-dd HH:mm:ss', minDate:startDateValue });
}
function bindDate(strFobj, fFormat, strSobj, sFormat, fDate){
	sFormat = sFormat = "" ? fFormat : "yyyy-MM-dd HH:mm:ss";
	if( strSobj != "" )
		$(strSobj).focus(function(){
			J.calendar.Show({ format:sFormat, minDate:fDate, maxDate:'%y-%M-%d',starttime:'23:59:59' });
		});
	J(strFobj).calendar({ format:fFormat, linkageObj:strSobj, maxDate:'%y-%M-%d', starttime:'00:00:00', onSetDate:function(){
		var datestr = this.getDateStr('date');
		datestr = datestr.split('-');
		var startDateValue = new Date();
		startDateValue.setFullYear(datestr[0]);
		startDateValue.setMonth(datestr[1]-1);
		startDateValue.setDate(datestr[2]);
		fDate = startDateValue.format('yyyy-MM-dd');
	} });
	$(strFobj).focus(function(){
		J.calendar.Show({ format:fFormat, linkageObj:strSobj, maxDate:'%y-%M-%d', onSetDate:function(){
			var datestr = this.getDateStr('date');
			datestr = datestr.split('-');
			var startDateValue = new Date();
			startDateValue.setFullYear(datestr[0]);
			startDateValue.setMonth(datestr[1]-1);
			startDateValue.setDate(datestr[2]);
			fDate = startDateValue.format('yyyy-MM-dd');
		} });
	});
}
function bindDateF(strFobj, strSobj){
	J(strFobj).calendar({ format:"yyyy-MM-dd HH:mm:ss", maxDate:'%y-%M-%d', starttime:'00:00:00' });
}
function bindDateE(strFobj, strSobj){
	J(strFobj).calendar({ format:"yyyy-MM-dd HH:mm:ss", maxDate:'%y-%M-%d', starttime:'23:59:59' });
}
function getDateValue(datestr){
	datestr = datestr.split('-');
	var DateValue = new Date();
	DateValue.setFullYear(datestr[0]);
	DateValue.setMonth(datestr[1]-1);
	DateValue.setDate(datestr[2]);
	return DateValue.format('yyyy-MM-dd');
}

var $wrap = $('.wrap');
var wrapHeight = $wrap.height();
var $box = $('.box1');
var boxHeight = $box.height();

function setBoxHeight(){
	$box.height('100%');
	boxHeight = $box.height();
	
	var diff = 70;
	var windowHeight = $(window).height();
	
	if( boxHeight + diff < windowHeight )
		$box.height(windowHeight - diff);
}

function keyup_OnlyNumber($obj,len){
	var value = $obj.val();
	$obj.val( value.replace(/\D/g,'') )
	value = $obj.val();
	
	var value_len = value.length;
	if( value_len > len ) $obj.val( value.substring(0, len) );
}

function keyup_NotBlank($obj){
	var value = $obj.val();
	// 首位不能为空格 /^\s*$/g
	// 首末不能为空格 /(^\s*)|(\s*$)/g;
	// 删除全部空格符 /\s+/g
	$obj.val( value.replace(/\s+/g,'') )
}

function keyup_LenMax($obj, lenmax){
	var value = $obj.val();
	if( value.length > lenmax ) $obj.val( value.substring(0, lenmax) );
}

function setTableScroll(){
	var $tableOverflow = $(".tableOverflow");
	var $table = $tableOverflow.find("table");
	var tableWidth = $table.width();
	var tableMinWidth = $table.attr("minwidth");
	var box1_c_width = $(".box1_c").width();
	
	if( box1_c_width - 20 < tableMinWidth ) { $tableOverflow.css("overflow-x","scroll"); $table.width(tableMinWidth); }
	else { $tableOverflow.css("overflow-x",""); $table.width("98%"); }
}

function GetDateStr(AddDayCount) {
	var dd = new Date();
	dd.setDate(dd.getDate()+AddDayCount);//获取AddDayCount天后的日期
	var y = dd.getFullYear();
	var m = dd.getMonth()+1;//获取当前月份的日期
	var d = dd.getDate();
	m = m >= 10 ? m : '0' + m;
	d = d >= 10 ? d : '0' + d;
	return y+"-"+m+"-"+d;
}

// format: h:m:s
function setTime_2($objF,$objE,type,format){
	if(format == undefined) format = "h:m:s";;
	format = format.split(":");
	var str000000, str235959;
	
	if( format[0] == undefined ) str000000 = str235959 = "";
	else if( format[1] == undefined ) { str000000 = " 00"; str235959 = " 23"; }
	else if( format[2] == undefined ) { str000000 = " 00:00"; str235959 = " 23:59"; }
	else { str000000 = " 00:00:00"; str235959 = " 23:59:59"; }
	
	switch(type){
		case "today":		// 今天
			$objF.val( GetDateStr(0) + str000000 );
			$objE.val( GetDateStr(0) + str235959 );
			break;
		case "last_7":		// 最近7天
			$objF.val( GetDateStr(-6) + str000000 );
			$objE.val( GetDateStr(0) + str235959 );
			break;
		case "this_week":	// 本周
			var dd = new Date();
			week = dd.getDay();
			week = week == 0 ? 7 : week;
			$objF.val( GetDateStr(-week+1) + str000000 );
			$objE.val( GetDateStr(7-week) + str235959 );
			break;
		case "last_week":	// 上周
			var dd = new Date();
			week = dd.getDay();
			week = week == 0 ? 7 : week;
			$objF.val( GetDateStr(-week+1 -7) + str000000 );
			$objE.val( GetDateStr(7-week -7) + str235959 );
			break;
		case "this_month":	// 本月
			var dd = new Date();
			day = dd.getDate();
			dd = new Date(dd.getFullYear(), dd.getMonth() + 1, 0);
			var lastDay = dd.getDate();	//本月最后一天即为本月的天数
			$objF.val( GetDateStr(-day+1) + str000000 );
			$objE.val( GetDateStr(lastDay-day) + str235959 );
			break;
		case "this_year":	// 本年
			var dd = new Date();
			var year = dd.getFullYear();
			dd = new Date(year, 12, 0);
			var lastDay = dd.getDate();	//本月最后一天即为本月的天数
			$objF.val( year + "-1-1" + str000000 );
			$objE.val( year + "-12-" + lastDay + str235959 );
			break;
		default:			// 今天
			$objF.val( GetDateStr(0) + str000000 );
			$objE.val( GetDateStr(0) + str235959 );
			break;
	}
}

$(document).ready(function(){
	if( $(".tableOverflow").hasClass("tableOverflow") ){
		setTableScroll();
		$(window).resize(setTableScroll);
	}
	
	setBoxHeight();
	$(window).resize(setBoxHeight);
	
	if( $(".chzn-select").chosen != undefined )	$(".chzn-select").chosen();
	
	if( $('.tabs').hasClass("tabs") && $.history != undefined ) $.history.init(loadTabs);
	
	$(".table1 tr").hover(
		function(){ $(this).addClass('cur_tr'); },
		function(){ $(this).removeClass('cur_tr'); }
	);
	
	$(".numberType").live("blur",function(){
		$this = $(this);
		//alert(RegExp("(^[1-9]\\d*\\.\\d*$)|(0\\.\\d*[1-9]\\d*$)").test($this.val()));//正浮点数
		//alert(RegExp("(^[1-9]\\d*$)").test($this.val()));//正整数
		var val = $.trim($this.val());
		if (val == "") {$this.val("");return;}
		else if (!(RegExp("(^[1-9]\\d*\\.\\d*$)|(^0\\.\\d*[1-9]\\d*$)|0").test(val) || RegExp("(^[1-9]\\d*$)").test(val))) $this.val("");
		else $this.val(val);
	});
	
	$(".input_text").live("blur",function(){
		$this = $(this);
		var val = $.trim($this.val());
		$this.val(val);
	});
	
	$(".qj_f, .qj_e").live("keyup", function(){
		$(this).val($(this).val().replace(/[^0-9]/g,''));
	}).live("paste", function(){  //CTR+V事件处理
		$(this).val($(this).val().replace(/[^0-9]/g,''));
	}).live("paste", function(){  //CTR+V事件处理
		$(this).val($(this).val().replace(/[^0-9]/g,''));
	}).live("blur", function(){
		$this = $(this);
		var val = $.trim($this.val());
		if (val == "") { $this.val(""); return false; }
		else if (!(RegExp("0|(^[1-9]\\d*$)").test(val))) $this.val("");
		else $this.val(val);
	}).css("ime-mode", "disabled"); //CSS设置输入法不可用
	
	$(".inputAZ09").live("keyup", function(){
		$(this).val($(this).val().replace(/[^a-zA-Z0-9]/g,''));
	}).live("blur", function(){
		$(this).val($(this).val().replace(/[^a-zA-Z0-9]/g,''));
	}).live("paste", function(){  //CTR+V事件处理
		$(this).val($(this).val().replace(/[^a-zA-Z0-9]/g,''));
	}).css("ime-mode", "disabled"); //CSS设置输入法不可用
	
	$(".number").live("keyup", function(){
		$(this).val($(this).val().replace(/[^0-9]/g,''));
	}).live("paste", function(){  //CTR+V事件处理
		$(this).val($(this).val().replace(/[^0-9]/g,''));
	}).css("ime-mode", "disabled"); //CSS设置输入法不可用
	
	$(".fl_value").live("keyup", function(){
		$(this).val($(this).val().replace(/[^0-9.-]/g,''));
	}).live("paste", function(){  //CTR+V事件处理
		$(this).val($(this).val().replace(/[^0-9.-]/g,''));
	}).live("blur", function(){
		$this = $(this);
		var val = $.trim($this.val());
		if (val == "") { $this.val(""); return false; }
		else if ( val != "-1")
			if (!(RegExp("(^[1-9]\\d*\\.\\d{1,2}$)|(^0\\.\\d{1,2}$)").test(val) || RegExp("(^[1-9]\\d*$)").test(val))) $this.val("");
			else $this.val(val);
	}).css("ime-mode", "disabled"); //CSS设置输入法不可用
});
function sear(page){
	var maxPage=$("#maxPage").val();
	if(page>maxPage||page<1){
		return false;
	}
	var currentPage=$("#currentPage").val();
	if(page==currentPage){
		return false;
	}
	$("#goPage").val(page);
	$("form:eq(1)").submit();
}

function checkUnique(hql){
	var msg=false;;
	$.ajax( {
		type : "POST",
		url : "/admin/system/unique.do",
		data : "hql="+hql,
		async : false,
		success : function(data) {
			msg=data.unique;
		}
	});
	return msg;
}
function getThousandExcel(formNo){
//	$("#isExcel").val("1");
	var $form = $("form").eq(formNo);
	var s_action = $form.attr("action");
	$form.attr("action", "/admin/trans/getmore.do");
	$form.submit();
//	$("#isExcel").val("");
	$form.attr("action", s_action);
}
function getExcel(formNo){
	$("#isExcel").val("Y");
	$("form").eq(formNo).submit();
	$("#isExcel").val("");
}
function getText(formNo){
	$("#isExcel").val("O");
	$("form").eq(formNo).submit();
	$("#isExcel").val("");
}
function showTip($obj,mesage,type){
	var html = '<span class="ismust">* '+ mesage +'</span>';
	if( type == 1)
		$obj.parent().next().html(html);
	else if( type == 2)
		$obj.parent().parent().next().html(html);
}

function setHtml(option){
	var data = option.data;
	var _readonly = option.readonly == true ? 'readonly="readonly"' : "";
	var _readonlyCss = option.readonly == true ? ' input_readonly' : "";
	var _sftype = option.sftype == true;
	var data_len = data.length;
	var html = '<table border="0" cellspacing="0" cellpadding="0" class="tableform3">';
	html += '<tr><td><span class="c1">如不需要某限额，则将该费率设置为 -1；</span></td></tr>';
	for( var i = 0; i < data_len; i++ ){
		//if( (i+1)%3 == 1 ) html += "<tr>";
		//html += '<td width="33%" valign="top">';
		html += '<tr><td valign="top">';
		
		if(data[i].type == 1){
			html += '<table cellspacing="0" cellpadding="0" border="0" class="fl_item"><tr>';
			html += '<td width="60" class="label">收费类型</td>';
			if(option.readonly || !_sftype) {
				var sftype = data[i].sfType == 2 ? "后付手续费":"实时扣除手续费";
				html += '<td width="140" class="label">'+ sftype +'</td>';
			}
			else {
				var sftype = data[i].sfType == 2 ? '<option value="1">实时扣除手续费</option><option value="2" selected="selected">后付手续费</option>':'<option value="1" selected="selected">实时扣除手续费</option><option value="2">后付手续费</option>';
				html += '<td width="140" class="label"><select data-placeholder="选择收费类型" class="chzn-select sfType" style="width:135px;" name="sfType">'+ sftype +'</select></td>';
			}
			html += '<td width="150" class="label"><span class="fl_name">'+data[i].name+'</span>：<input type="hidden" value="'+data[i].feeid+'" name="feeid" class="feeid" /></td>';
			var d = data[i].value[0]==undefined?"":data[i].value[0];
			html += '<td width="76"><div class="input_div_4'+_readonlyCss+'"><input type="text" class="fl_value fl_value_one" name="feeValue" value="'+d+'" '+_readonly+'><b></b></div></td>';
			
			if(option.readonly) { var dw = data[i].value[1] == "0" ? "%":"固定值"; html += '<td class="text tip">'+ dw +'</td></tr></table>';}
			else { var dw = data[i].value[1] == "0" ? '<option value="0" selected="selected">%</option><option value="1">固定值</option>' : '<option value="0">%</option><option value="1" selected="selected">固定值</option>'; html += '<td class="text tip" width="100"><select data-placeholder="选择费率单位" class="chzn-select feeType" style="width:100px;" name="feeType">' + dw + '</select></td></tr></table>';}
		}
		else if(data[i].type == 2){
			html += '<table cellspacing="0" cellpadding="0" border="0" class="fl_item">';
			var _json = data[i];
			var _len = _json.value.length;
			for( var j = 0; j < _len; j++){
				html += '<tr>';
				if( j == 0 ) {
					html += '<td width="60" class="label">收费类型</td>';
					if(option.readonly||!_sftype) {
						var sftype = _json.sfType == 2 ? "后付手续费":"实时扣除手续费";
						html += '<td width="140" class="label">'+ sftype +'</td>';
					}
					else {
						var sftype = _json.sfType == 2 ? '<option value="1">实时扣除手续费</option><option value="2" selected="selected">后付手续费</option>':'<option value="1" selected="selected">实时扣除手续费</option><option value="2">后付手续费</option>';
						html += '<td width="140" class="label"><select data-placeholder="选择收费类型" class="chzn-select sfType" style="width:135px;" name="sfType">'+ sftype +'</select></td>';
					}
					html += '<td width="150" class="label"><span class="fl_name">'+_json.name+'</span>：<input type="hidden" value="'+_json.feeid+'" name="feeid" class="feeid" /></td>';
				}
				else {
					html += '<td width="60" class="label"></td>';
					html += '<td width="140" class="label"></td>';
					html += '<td width="150" class="label"></td>';
				}
				var d1 = _json.value[j][0]==undefined?"":_json.value[j][0];
				var d2 = _json.value[j][1]==undefined?"":_json.value[j][1];
				var d3 = _json.value[j][2]==undefined?"":_json.value[j][2];
				html += '<td width="76"><div class="input_div_4'+_readonlyCss+'"><input type="text" name="feeValue" class="qj_f" value="'+d1+'" '+_readonly+' /><b></b></div></td>';
				html += '<td width="10">-</td>';
				html += '<td width="76"><div class="input_div_4'+_readonlyCss+'"><input type="text" name="feeValue" class="qj_e" value="'+d2+'" '+_readonly+' /><b></b></div></td>';
				html += '<td width="76"><div class="input_div_4'+_readonlyCss+'"><input type="text" name="feeValue" class="fl_value" value="'+d3+'" '+_readonly+' /><b></b></div></td>';
				
				if(option.readonly) { var dw = _json.value[j][3] == "0" ? "%":"固定值"; html += '<td class="text tip">'+ dw +'</td>';}
				else { var dw = _json.value[j][3] == "0" ? '<option value="0" selected="selected">%</option><option value="1">固定值</option>' : '<option value="0">%</option><option value="1" selected="selected">固定值</option>'; html += '<td class="text tip" width="100"><select data-placeholder="选择费率单位" class="chzn-select feeType" style="width:100px;" name="feeType">' + dw + '</select></td>';}
				if( j == 0 ) if(option.readonly) html += '<td>　</td>'; else html += '<td>　<a href="javascript:void(0)" class="addQJ">增加</a></td>';
				else if(option.readonly) html += '<td>　</td>'; else html += '<td>　<a href="javascript:void(0)" class="delQJ">删除</a></td>';
				html += '</tr>';
			}
			html += '</table>';
		}
		html += '</td>';
		//if( (i+1)%3 == 0 ) html += "</tr>";
	}
	/*for( var i = 0; i < 3-data_len%3; i++ ){
		html += '<td width="33%" valign="top"></td>';
		if( i == (3-data_len%3-1) ) html += "</tr>";
	}*/
	html += '</table>';
	$("#fl_html").html(html);
	if(!option.readonly) $(".chzn-select").chosen();	
}