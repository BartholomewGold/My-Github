	String.prototype.trim = function() { 
		return this.replace(/(^\s*)|(\s*$)/g, ""); 
	} 

	String.prototype.ltrim = function() { 
		return this.replace(/(^\s*)/g, ""); 
	} 

	String.prototype.rtrim = function() { 
		return this.replace(/(\s*$)/g, ""); 
	} 

	/**
	 * 功能:判断是否为合法日期格式(格式为"YYYY-MM-DD")
	 * 例: isDate(str)
	 */
	function checkDate(oDataSrc){
		  var sValue=oDataSrc.value;
		  sValue=sValue.replace(/\s/g,"");
		  var regDate=new RegExp("^\\d{4}\\D{1}\\d{1,2}\\D{1}\\d{1,2}$");
		  if (!regDate.test(sValue)) return msgDate;
	
		  sValue=sValue.replace(/\D/g,dateSpliter);
	
		  var arrDate=getRealDate(sValue);
		  oDataSrc.value=arrDate.join(dateSpliter);
	
		  var iTempYear=parseInt(arrDate[0]);
		  var iTempMonth=parseInt(arrDate[1].replace(/^0/,""))-1;
		  var iTempDay=parseInt(arrDate[2].replace(/^0/,""));
	
		  var oRealDate=new Date(iTempYear,iTempMonth,iTempDay);
		  if (oRealDate.getMonth()!=iTempMonth || oRealDate.getDate()!=iTempDay) return msgDate;
	
		  var sMaxDate=oDataSrc.getAttribute("todate");
		  if (sMaxDate!=null) {
			var arrMaxDate=getRealDate(sMaxDate);
			if (getDateInt(arrDate)>getDateInt(arrMaxDate)) return msgRange;
		  }
		  var sMinDate=oDataSrc.getAttribute("fromdate");
		  if (sMinDate!=null) {
			var arrMinDate=getRealDate(sMinDate);
			if (getDateInt(arrDate)<getDateInt(arrMinDate)) return msgRange;
		  }
		  return msgSuccess;
	}
	/**
	 * 功能:取得中英文字节长度
	 * 例: getLengthB(str)
	 */
	function getLengthB(data){
		var i,cnt = 0;
		for(i=0; i< data.length; i++) {
			if (escape(data.charAt(i)).length >= 4 ) {
				if (escape(data.charAt(i)) >= "%uFF65" && escape(data.charAt(i)) <= "%uFF9F") {
					cnt++;
				}
				else {
					cnt+=3;
				}
			}
			else {
				cnt++;
			}
		}
		return cnt;
	}  

	//以 2004-01-01 形式显示当前日期 
	function getFullDate(){
		
		var now = new Date();
		
		var y = now.getFullYear();
		
	  	var m = (now.getMonth() + 1) + "";
	  	    m = ("00" + m).substr(m.length);
	  	    
	  	var d = now.getDate() + "";
	  	    d = ("00" + d).substr(d.length);
	
	  	return(y + "-" + m + "-" + d);
	  	
	}



	// 以 00:00 形式显示当前时间  
	function getFullTime(){
	
		var now = new Date();
		
		var h = now.getHours() + "";
		    h = ("00" + h).substr(h.length)
		    
		var m = now.getMinutes() + "";
		    m = ("00" + m).substr(m.length)
		
	  	return(h + ":" + m);
		
	}
	
	function isNumber(formEle){
	    var str = "";
	    if(document.all[formEle]!=null){
	
		    str = document.all[formEle].value;
	 
	 		if(str.trim()!=""){
	 		
				var exp=/[^0-9()-]/g;
				if(str.search(exp) != -1) {
					return false;
				}
		    }
	    }
	    return true;
	}

	function isChar(formEle) {
		var str = ""; 
	    if(document.all[formEle]!=null){
	
		    str = document.all[formEle].value;
	 		if(str.trim()!=""){
				var exp=/^([a-zA-Z0-9_])+$/;
				if(str.search(exp) != -1) {
					return true;
				}
		    }
	    }
	    return false;
	}
	
	
	
	function isEmailMul(formEle){
	
	    var formEleObj = new Array();
	
	    if((formEle!=null)&&(formEle!="")){
	
			if(formEle.indexOf(",")!=-1){
		
			    formEleObj = formEle.split(",");
			    
			}else{
			    formEleObj[0] = formEle;
		    }
		
			for(var i=0;i<formEleObj.length;i++){
		
			    if(document.all[formEleObj[i]]!=null){	    
		
			            var str = document.all[formEleObj[i]].value;
		 				if(str.trim()!=""){
				    	    var regemail=/^([_.a-zA-Z0-9-]{2,})+@(([_a-zA-Z0-9-]{2,})+\.)+[a-zA-z]{2,3}$/;
			
				            if(!regemail.test(str)){
				       			return false;
				   	    	}
				   	    }
			    }
			}
	
	    }
	    return true;
	}
	
	function isEmail(formEle){
	
	
	    var str = "";
	    if(document.all[formEle]!=null){
	
		    str = document.all[formEle].value;
	 
	 		if(str.trim()!=""){
	    	    var regemail=/^([_.a-zA-Z0-9-]{2,})+@(([_a-zA-Z0-9-]{2,})+\.)+[a-zA-z]{2,3}$/;
	            if(!regemail.test(str)){
				    return false;
		    	}
		    }
	    }else{
			return false;
	    }
	    
	    return true;
	}
	
	
	
	function isPhoneMul(formEle) {
	
	    var formEleObj = new Array();
	
	    if((formEle!=null)&&(formEle!="")){
	
			if(formEle.indexOf(",")!=-1){
		
			    formEleObj = formEle.split(",");
			}else{
			    formEleObj[0] = formEle;
		    }
		
			for(var i=0;i<formEleObj.length;i++){
			    if(document.all[formEleObj[i]]!=null){	    
		
					var str = document.all[formEleObj[i]].value;
					
					if(str.trim()!=""){
			
						var reg=/(^[0-9]{3,4}\-[0-9]{3,8}$)|(^[0-9]{3,8}$)|(^[0-9]{3,4}\-[0-9]{3,8}\-[0-9]{3,4}$)|(^\([0-9]{2,3}\)[0-9]{3,4}-[0-9]{3,8}\-[0-9]{3,4}$)|(^\([0-9]{2,3}\)[0-9]{3,4}-[0-9]{3,8}$)|(^0{0,1}13[0-9]{9}$)/
						//var reg=/(^[0-9]{3,4}\-[0-9]{3,8}$)|(^[0-9]{3,8}$)|(^\([0-9]{3,4}\)[0-9]{3,8}$)|(^0{0,1}13[0-9]{9}$)/
			    	    if(!reg.test(str)){
						    alert(document.all[formEleObj[i]].title+"的电话格式不正确,只允许输入'0-9','-','(',')'格式如下:\n最普通的电话: 12345678 [3至8位号码\n带区号的电话]: 021-12345678 [3至4位区号-3至8位号码]\n区号分机电话: 021-12345678-123 [3至4位区号-3至8位号码-3至4位分机号码]\n国际电话格式1: (86)021-12345678 [(2至3位国家代码)3至4位区号-3至8位号码\n国际电话格式2: (86)021-12345678-123 [(2至3位国家代码)3至4位区号-3至8位号码-3至4位分机号码\n手机电话号码: 13或013加9位号码\n");
						    document.all[formEleObj[i]].focus();
					        return false;
						}
					}
			    }else{
					alert(formEleObj[i]+"对象不存在");
					return false;
		    	}
		    }
		}
	    return true;
	}
	
	
	
	function isPhone(formEle) {
	
	    var str = "";
	    
	    if(document.all[formEle]!=null){
	    
			str = document.all[formEle].value;
			
			if(str.trim()!=""){	
				var reg=/(^[0-9]{3,4}\-[0-9]{3,8}$)|(^[0-9]{3,8}$)|(^[0-9]{3,4}\-[0-9]{3,8}\-[0-9]{3,4}$)|(^\([0-9]{2,3}\)[0-9]{3,4}-[0-9]{3,8}\-[0-9]{3,4}$)|(^\([0-9]{2,3}\)[0-9]{3,4}-[0-9]{3,8}$)|(^0{0,1}13[0-9]{9}$)/		
				//var reg=/(^[0-9]{3,4}\-[0-9]{3,8}$)|(^[0-9]{3,8}$)|(^\([0-9]{3,4}\)[0-9]{3,8}$)|(^0{0,1}13[0-9]{9}$)/
			    if(!reg.test(str)){
					alert(document.all[formEleObj[i]].title+"的电话格式不正确,只允许输入'0-9','-','(',')'格式如下:\n最普通的电话: 12345678 [3至8位号码\n带区号的电话]: 021-12345678 [3至4位区号-3至8位号码]\n区号分机电话: 021-12345678-123 [3至4位区号-3至8位号码-3至4位分机号码]\n国际电话格式1: (86)021-12345678 [(2至3位国家代码)3至4位区号-3至8位号码\n国际电话格式2: (86)021-12345678-123 [(2至3位国家代码)3至4位区号-3至8位号码-3至4位分机号码\n手机电话号码: 13或013加9位号码\n");
					document.all[formEle].focus();
				    return false;
				}
			}
	    }else{
			alert(formEle+"对象不存在");
			return false;
	    }
	    return true;
	}

	

	//屏蔽右键
	window.ClearEvent=function(){

		event.cancelBubble=false;var sSrcTagName=event.srcElement.tagName.toLowerCase();
		

		//各种情况下点击右键关闭 popupSel 和 popupDate
		//关闭 popupDate
		var dataWin = "gToday:normal:agenda.js";
		var popupWin = "popupSel";

		if(document.all[dataWin]!=null){	

			gfPop.fHideCal();		

		}else if(parent.document.all[dataWin]!=null){

			parent.gfPop.fHideCal();

		}else if(parent.parent.document.all[dataWin]!=null){

			parent.parent.gfPop.fHideCal();
			
		}else if(document.all["listIFrame"]!=null){
		
			if (listIFrame.document.all[dataWin]!=null)		listIFrame.gfPop.fHideCal();
			
		}else if(parent.main_Frame != null){//其他框架中	
		
			if(parent.main_Frame.document.all[dataWin]!=null){	
				parent.main_Frame.gfPop.fHideCal();		
			}else if(parent.main_Frame.listIFrame!=null){
				if(parent.main_Frame.listIFrame.document.all[dataWin]!=null)
					parent.main_Frame.listIFrame.gfPop.fHideCal();
			}
			
		}	
		
		if(document.all[popupWin]!=null){	
			hidePopup();		
		}else if(parent.document.all[popupWin]!=null){
			parent.hidePopup();
		}else if(parent.parent.document.all[popupWin]!=null){
			parent.parent.hidePopup();
		}else if(document.all["listIFrame"]!=null){
			if (listIFrame.document.all[popupWin]!=null)		listIFrame.hidePopup();
		}else if(parent.main_Frame != null){

			if(parent.main_Frame.document.all[popupWin]!=null){	
				parent.main_Frame.hidePopup();		
			}else if(parent.main_Frame.listIFrame!=null){
				if(parent.main_Frame.listIFrame.document.all[popupWin]!=null)
					parent.main_Frame.listIFrame.hidePopup();
			}
			
		}

		
		return (sSrcTagName=="textarea" || sSrcTagName=="input" || sSrcTagName=="select");
		
	}

	window.ClearKey=function() {
		event.cancelBubble=false;
		var iKeyCode=event.keyCode;
		return !(iKeyCode==78 && event.ctrlKey);
	}

	// 日期控件相关
	Date.prototype.format = function(format) {
	var o = {
	"M+" : this.getMonth()+1, //month
	"d+" : this.getDate(),    //day
	"h+" : this.getHours(),   //hour
	"m+" : this.getMinutes(), //minute
	"s+" : this.getSeconds(), //second
	"q+" : Math.floor((this.getMonth()+3)/3),  //quarter
	"S" : this.getMilliseconds() //millisecond
	}
	if(/(y+)/.test(format))
	format=format.replace(RegExp.$1,(this.getFullYear()+"").substr(4 - RegExp.$1.length));
	for(var k in o)
	if(new RegExp("("+ k +")").test(format))
	format = format.replace(RegExp.$1,RegExp.$1.length==1 ? o[k] :("00"+ o[k]).substr((""+ o[k]).length));
	return format;
	}

	function calendarCompare(obj,flag) {
		if (obj.value.length==0) return false;
		var now = new Date();
		now = now.format('yyyy-MM-dd');
		if(flag == 'beforeToday') {
			if(compareDate(obj.value,now) <= 0) {
				alert("\u8f93\u5165\u65e5\u671f\u5fc5\u987b\u5c0f\u4e8e\u4eca\u5929");
				obj.select();
				obj.focus();
				obj.value="";
				return false;
			}
		}
	}

	function compareDate(beginDate, endDate){
		var beginDate = new Date(beginDate.replace(/[-\.]/g,"/"));
		var endDate = new Date(endDate.replace(/[-\.]/g,"/"));
		return endDate - beginDate;
	}

	function checkDateInput(obj)  
	{
	if (obj.value.length==0) return false;
	var objValue=obj.value.replace(/[-\.]/g,"/");

	try
		{
		var a=new Date(objValue);
		if (isNaN(a))
			{
			obj.value="";
			alert("\uff01\uff01\uff01\uff01\u8bf7\u6ce8\u610f\uff1a\n\u60a8\u521a\u624d\u8f93\u5165\u7684\u65e5\u671f\u4e0d\u6b63\u786e\uff0c\u6211\u4eec\u5df2\u8fdb\u884c\u4e86\u6e05\u9664\u3002");
			obj.focus();
			return false;
			}
		var b;
		if (a.getFullYear()<1900||a.getFullYear()>2200) {
			var Today=new Date();
			b=Today.getFullYear()+"-"+(a.getMonth()+1)+"-"+a.getDate();
		} else if (a.getFullYear()<1930) {
			b=(a.getFullYear()+100)+"-"+(a.getMonth()+1)+"-"+a.getDate();
		} else {
			b=a.getFullYear()+"-"+(a.getMonth()+1)+"-"+a.getDate();
		}
		var rntobj = obj.value;
		obj.value=obj.value.replace(/[-\.\/]0*/g,"-");
		if (b!=obj.value) {
			obj.value=b;
			alert("\uff01\uff01\uff01\uff01\u8bf7\u6ce8\u610f\uff1a\n\u60a8\u521a\u624d\u8f93\u5165\u7684\u65e5\u671f\u4e0d\u6b63\u786e\uff0c\u6211\u4eec\u5df2\u8fdb\u884c\u4e86\u4fee\u6539\u3002");
			obj.select();
			obj.focus();
			return false;
		}
	} catch(Exception)
		{
		obj.value="";
		alert("\uff01\uff01\uff01\uff01\u8bf7\u6ce8\u610f\uff1a\n\u60a8\u521a\u624d\u8f93\u5165\u7684\u65e5\u671f\u4e0d\u6b63\u786e\uff0c\u6211\u4eec\u5df2\u8fdb\u884c\u4e86\u6e05\u9664\u3002");
		obj.focus();
		return false;
		}
	obj.value = (new Date(objValue)).format('yyyy-MM-dd');
	return true;
	}
	
	function checkMoney(value,title) {
		var r, re;
		re = /\d{1,10}\.{0,1}\d{0,2}/i;
		r = value.match(re);								
		if (r==null) {
			alert(title+"不是金额格式!");
			return false;
		}
	}
	
	function checkRatio(value,title) {
		var r, re;
		re = /\d{1,2}\.{0,1}\d{0,2}/i;
		r = value.match(re);								
		if (r==null) {
			alert(title+"不是比例格式!");
			return false;
		}		
	}
	
	//onkeypress?o??????§???text??aè??è????￥?°???°???è????′??°
	function checkIsFloat(obj){
		var nc=event.keyCode;
		if((nc>=48 && nc<=57) || nc==45 ){
		}else if(nc==46){
			var s=obj.value;
			for(var i=0;i<s.length;i++){
				if(s.charAt(i)=='.'){
					event.keyCode=0; return;
				}
			}
		}else{
			event.keyCode=0;return;
		}
	}
	
	//浮点数onchange校验,obj为校验对象;nBeforeDot约定整数长度 nAfterDot为约定小数长度
	var defaultEmptyOK = false;
	var decimalPointDelimiter = ".";
	function checkSignedFloat(obj,nBeforeDot,nAfterDot){
		var srcStr = obj.value;
		if (!isSignedFloat(srcStr)) {
			obj.value = '';
			alert('输入数字格式不合法');
			return;
		}
		var dotPos = srcStr.indexOf(".");
		if (dotPos == -1) dotPos = srcStr.length;
		var beLength = srcStr.substring(0, dotPos).length;
		var afLength = srcStr.substring(dotPos+1, srcStr.length).length;
		if (beLength > nBeforeDot || afLength > nAfterDot){
			alert('输入数字的小数位或者整数位过长');
			obj.value ='';
			return;
		}
	}
	function isEmpty(s)
	{   return ((s == null) || (s.length == 0))
	}
	function isDigit (c)
	{   return ((c >= "0") && (c <= "9"))
	}
	//校验无符号浮点数
	function isFloat (s)
	{
	    var i;
	    var seenDecimalPoint = false;
	
	    if (isEmpty(s))
	       if (isFloat.arguments.length == 1) return defaultEmptyOK;
	       else return (isFloat.arguments[1] == true);
	
	    if (s == decimalPointDelimiter) return false;
	
	    for (i = 0; i < s.length; i++)
	    {
	        var c = s.charAt(i);
	
	        if ((c == decimalPointDelimiter) && !seenDecimalPoint) seenDecimalPoint = true;
	        else if (!isDigit(c)) return false;
	    }
	
	    return true;
	}
	//校验有符号浮点数
	function isSignedFloat (s)
	
	{   if (isEmpty(s))
	       if (isSignedFloat.arguments.length == 1) return defaultEmptyOK;
	       else return (isSignedFloat.arguments[1] == true);
	
	    else {
	        var startPos = 0;
	        var secondArg = defaultEmptyOK;
	
	        if (isSignedFloat.arguments.length > 1)
	            secondArg = isSignedFloat.arguments[1];
	
	        if (s.charAt(0) == "-")
	           startPos = 1;
	        return (isFloat(s.substring(startPos, s.length), secondArg))
	    }
	}
	
		