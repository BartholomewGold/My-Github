function checkNecessaryInput(obj)	
	{
	var s="";
	var i;
	var j=0;
	for (i=0 ;(i<obj.elements.length)&&(j<10);i++)
		{
		if (( obj.elements[i].alt != null ) && (obj.elements[i].alt.length>0) && (obj.elements[i].value!=null) && (obj.elements[i].value.length==0) )
			{
			s+="\n"+obj.elements[i].alt;
			j=j+1;
			}
		}
	if (j > 0 )
		{
		//????????
		alert ("\u4ee5\u4e0b\u8d44\u6599\u5fc5\u987b\u8f93\u5165"+s);
		return false;
		}
	return true;
	}
	
//input??????alt
//input???????????alt?????maxlength
//input????????title?????maxlength
//textarea??????alt
//textarea???????????alt?????title????title="maxlength:?"
//textarea????????title????title="maxlength:?;title:?"

//??????????????????
function checkInputMaxlength(formObj) {
    var i, obj, objDisplayName, strArray, str, maxLen, strLen, j, errMsg;
    errMsg = "";
    for (i=0;i<formObj.elements.length;i++) {
        obj = formObj.elements[i];
	    maxLen = 0;
	    objDisplayName = "";
        if (obj.type=='textarea' && obj.title!=null && obj.title.length>0) {
            strArray = obj.title.split(";");
	        maxLen = strArray[0].substring(10);
	        if (strArray.length==2) {
	            objDisplayName = strArray[1].substring(6);
	        } else if (obj.alt!=null && obj.alt.length>0) {
	            objDisplayName = obj.alt;
	        }
        } else if (obj.type=='text' || obj.type=='password') {
            maxLen = obj.maxLength;
            if (obj.alt!=null && obj.alt.length>0) {
                objDisplayName = obj.alt;
            } else if (obj.title!=null && obj.title.length>0) {
                objDisplayName = obj.title;
            }
        }
        //alert(objDisplayName + "---" + obj.value);
        
        maxLen = parseInt(maxLen);
        if (!isNaN(maxLen) && maxLen>0) {
            str = obj.value;
            strLen = 0;
            for (j=0;j<str.length;j++) {
                if (str.charCodeAt(j)>255) strLen+=3;
                else strLen++;
            }
            if (strLen>maxLen) {
                errMsg += objDisplayName+"\u6700\u591a\u53ef\u8f93\u5165"+maxLen+"\u4e2a\u5b57\u7b26\uff0c\u60a8\u7684\u8f93\u5165\u8d85\u8fc7\u4e86\u8fd9\u4e2a\u957f\u5ea6\uff01\n";
            }
        }
    }
    if (errMsg!="") {
        alert(errMsg);
        return false;
    }
    return true;
}

function checkEmail(obj)
{
var theStr = obj.value;
if(theStr.length==0)  return true;
var atindex=theStr.indexOf('@');
var dotindex=theStr.indexOf('.',atindex);
var flag=true;
thesub=theStr.substring(0,dotindex+1);
if((atindex<1)||(atindex!=theStr.lastIndexOf('@'))||(dotindex<atindex+2)||(theStr.length<=thesub.length)){
flag=false;
obj.value="";
}
else{
flag=true;
}

return(flag);
}

function checkDecimalInput(obj,min,max)		//????????Number(10,2)???????????onblur event
	{
	obj.value=obj.value.replace(/ /g,"");		//???
	var r, re;
	var s = obj.value ;
	var theMin=-0.0000001;
	var theMax=1000000000;
	if (min!=null) theMin=min;
	if (max!=null) theMax=max;
	if (s.length==0) return false;
	re = /-{0,1}\d{1,10}\.{0,1}\d{0,2}/i;
	r = s.match(re);								//??
	if (r==null)
	{
		obj.value="";
		//????????\n?????????????????????
		alert("\uff01\uff01\uff01\uff01\u8bf7\u6ce8\u610f\uff1a\n\u60a8\u521a\u624d\u8f93\u5165\u7684\u6570\u503c\u4e0d\u6b63\u786e\uff0c\u6211\u4eec\u5df2\u8fdb\u884c\u4e86\u6e05\u9664\u3002");
		obj.focus();
		return false;
	}
	if ((r>=theMax)||(r<=theMin))
	{
		obj.value="";
		//????????\n????????????????????????
		alert("\uff01\uff01\uff01\uff01\u8bf7\u6ce8\u610f\uff1a\n\u60a8\u521a\u624d\u8f93\u5165\u7684\u6570\u503c\u8d85\u51fa\u5141\u8bb8\u8303\u56f4\uff0c\u6211\u4eec\u5df2\u8fdb\u884c\u4e86\u6e05\u9664\u3002");
		obj.focus();
		return false;
	}
	if ( r!=s)
	{
	//	obj.value=r;
		obj.value="";
		//????????\n?????????????????????
		alert("\uff01\uff01\uff01\uff01\u8bf7\u6ce8\u610f\uff1a\n\u60a8\u521a\u624d\u8f93\u5165\u7684\u6570\u503c\u4e0d\u6b63\u786e\uff0c\u6211\u4eec\u5df2\u8fdb\u884c\u4e86\u6e05\u9664\u3002");
		obj.select();
		obj.focus();
		return false;
	}
	obj.value=r;
	return true;
	}
	
  /*add by cjh */
  function letterNumberValidate(obj) {
    var s = obj.value;
    var len = s.length;
    if(len == 0) {
     	return true;
    }
    var regv=/^([a-z]|[A-Z]|\d|-|\_|\*|\(|\))+$/ ;
	if(!regv.test(s)) {
		obj.value="";
		//????????\n?????????????????????????
	    alert("\uff01\uff01\uff01\uff01\u8bf7\u6ce8\u610f\uff1a\n\u60a8\u521a\u624d\u8f93\u5165\u7684\u5b57\u6bcd\u6216\u8005\u6570\u5b57\u4e0d\u6b63\u786e\uff0c\u6211\u4eec\u5df2\u8fdb\u884c\u4e86\u6e05\u9664\u3002");
		obj.focus();
	    return false;
	}
	return true;
  }
  
	/*add by cjh,?????????*/
    function fixTelValidate(obj){
      var s = obj.value;
      var len = s.length;
      if(len == 0) {
      	return true;
      }
	  var regv = /^((\d|\*|-|\(|\))+){1,30}$/
	  if(!regv.test(s)){
	    obj.value = "";
	    //????????\n?????????????????????????
	    alert("\uff01\uff01\uff01\uff01\u8bf7\u6ce8\u610f\uff1a\n\u60a8\u521a\u624d\u8f93\u5165\u7684\u56fa\u5b9a\u7535\u8bdd\u53f7\u7801\u4e0d\u6b63\u786e\uff0c\u6211\u4eec\u5df2\u8fdb\u884c\u4e86\u6e05\u9664\u3002");
	    obj.focus();
		return false;
	  }
	  return true;      
    }
    
	/*add by cjh,???????*/
    function mobileValidate(obj){
      var s = obj.value;
      var len = s.length;
      if(len == 0) {
      	return true;
      }
	  var regv = /^((013|913|13)(\d{9}))|((150|15[6-9])(\d{8}))$/
	  if(!regv.test(s)){
	    obj.value = "";
	    //????????\n???????????????????????
	    alert("\uff01\uff01\uff01\uff01\u8bf7\u6ce8\u610f\uff1a\n\u60a8\u521a\u624d\u8f93\u5165\u7684\u624b\u673a\u53f7\u7801\u4e0d\u6b63\u786e\uff0c\u6211\u4eec\u5df2\u8fdb\u884c\u4e86\u6e05\u9664\u3002");
	    obj.focus();
		return false;
	  }      
	  return true;
    }
    
  /*add by cjh */
  function numberValidate(obj) {
    var s = obj.value;
    
    var len = s.length;
    
    if(len == 0) {
     	return true;
    }
    var regv=/^(\d){6,32}$/ ;
	if(!regv.test(s)) {
		obj.value="";
		//????????\n?????????????????????????
	    alert("\uff01\uff01\uff01\uff01\u8bf7\u6ce8\u610f\uff1a\n\u60a8\u521a\u624d\u8f93\u5165\u7684\u6570\u5b57\u4e0d\u6b63\u786e\uff0c\u6211\u4eec\u5df2\u8fdb\u884c\u4e86\u6e05\u9664\u3002");
		obj.focus();
	    return false;
	}
	return true;
  }
  
  /*add by cjh */
  function bankCardValidate(obj) {
    var s = obj.value;
    var len = s.length;
    if(len == 0) {
     	return true;
    }
    var regv=/^(\d|-){6,32}$/ ;
	if(!regv.test(s)) {
		obj.value="";
		//????????\n?????????????????????????
	    alert("\uff01\uff01\uff01\uff01\u8bf7\u6ce8\u610f\uff1a\n\u60a8\u521a\u624d\u8f93\u5165\u7684\u6570\u5b57\u4e0d\u6b63\u786e\uff0c\u6211\u4eec\u5df2\u8fdb\u884c\u4e86\u6e05\u9664\u3002");
		obj.focus();
	    return false;
	}
	return true;
  }
  
function licenceNoValidate(obj) {
	var s = obj.value;
	var len = s.length;
	if(len == 0) {
		return true;
	}
	var regv=/^(\d){13,15}$/ ;
	if(!regv.test(s)) {
		obj.value="";
		alert("\u4e0d\u662f\u6709\u6548\u7684\u8425\u4e1a\u6267\u7167\u6ce8\u518c\u53f7\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165!");
		obj.focus();
		return false;
	}
	return true;
}

function accountLicenceNoValidate(obj) {
	var s = obj.value;
	var len = s.length;
	if(len == 0) {
		return true;
	}
	var regv=/^([A-Z]|[a-z]{1})(\d){13}$/ ;
	if(!regv.test(s)) {
		obj.value="";
		alert("\u4e0d\u662f\u6709\u6548\u7684\u5f00\u6237\u6838\u51c6\u53f7\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165!");
		obj.focus();
		return false;
	}
	return true;
}

function organizeNoValidate(obj) {
	var s = obj.value;
	var len = s.length;
	if(len == 0) {
		return true;
	}
	var regv=/^(\d){8}[-](\d){1}$/ ;
	if(!regv.test(s)) {
		obj.value="";
		alert("\u4e0d\u662f\u6709\u6548\u7684\u7ec4\u7ec7\u673a\u6784\u4ee3\u7801\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165!");
		obj.focus();
		return false;
	}
	return true;
}

function taxIdValidate(obj) {
	var s = obj.value;
	var len = s.length;
	if(len == 0) {
		return true;
	}
	var regv=/^(\d){15}$/ ;
	if(!regv.test(s)) {
		obj.value="";
		alert("\u4e0d\u662f\u6709\u6548\u7684\u7a0e\u52a1\u767b\u8bb0\u8bc1\u53f7\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165!");
		obj.focus();
		return false;
	}
	return true;
}

function areaValidate(obj,message){
	var idCard = obj.value;
	
	var area={11:"\u5317\u4eac",12:"\u5929\u6d25",13:"\u6cb3\u5317",14:"\u5c71\u897f",15:"\u5185\u8499\u53e4",21:"\u8fbd\u5b81",22:"\u5409\u6797",23:"\u9ed1\u9f99\u6c5f",31:"\u4e0a\u6d77",32:"\u6c5f\u82cf",33:"\u6d59\u6c5f",34:"\u5b89\u5fbd",35:"\u798f\u5efa",36:"\u6c5f\u897f",37:"\u5c71\u4e1c",41:"\u6cb3\u5357",42:"\u6e56\u5317",43:"\u6e56\u5357",44:"\u5e7f\u4e1c",45:"\u5e7f\u897f",46:"\u6d77\u5357",50:"\u91cd\u5e86",51:"\u56db\u5ddd",52:"\u8d35\u5dde",53:"\u4e91\u5357",54:"\u897f\u85cf",61:"\u9655\u897f",62:"\u7518\u8083",63:"\u9752\u6d77",64:"\u5b81\u590f",65:"\u65b0\u7586",71:"\u53f0\u6e7e",81:"\u9999\u6e2f",82:"\u6fb3\u95e8",91:"\u56fd\u5916"} 

	if(area[parseInt(idCard.substr(0,2))]==null) 
	 {
	  alert(message + "\u533a\u57df\u4ee3\u7801\u4e0d\u6b63\u786e!");
	  obj.focus(); 
	  return false;
	 }

	return true;
}

function passwordValidate(obj) {
	var s = obj.value;
	var len = s.length;
	if(len == 0) {
	 	return true;
	}
	var regv=/^[0-9a-zA-Z]*$/ ;
	return regv.test(s);
}

function isDate(str){
	var ar = new Array(parseInt(str.substr(0,4)),parseInt(str.substr(4,2))-1,str.substr(6,2)*1);
	
	var d = new Date(ar[0],ar[1],ar[2]);
	
	return d.getFullYear()==ar[0] && d.getMonth()==ar[1] && d.getDate()==ar[2];
}

function strToDate(str){
	var ar = new Array(parseInt(str.substr(0,4)),parseInt(str.substr(5,2))-1,str.substr(6,2)*1);
	
	var d = new Date(ar[0],ar[1],ar[2]);
	return d;
}

function dateValidate(obj,message){
	//alert("dateValidate");
	var idCard = obj.value;
	var date = "";
	
	switch(idCard.length){
  		case 15:
			date = idCard.substr(6,6);
			date = "19" + date;
			break;
		case 18:
			date = idCard.substr(6,8);
			break;
	}
	//alert(date);
	if(!isDate(date)){
		alert(message + "\u51fa\u751f\u65e5\u671f\u8d85\u51fa\u8303\u56f4\u6216\u542b\u6709\u975e\u6cd5\u5b57\u7b26!");
		obj.focus(); 
		return false;
	}
	return true;
}


function checkoutValidate(obj,message){
	var factorArr = new Array(7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2,1);
	var Arr = new Array("1","0","x","9","8","7","6","5","4","3","2");
	var idCard = obj.value;
	var num = 0;
	for(i=0;i<idCard.length-1;i++) {
        num = num + parseInt(idCard.charAt(i)) * factorArr[i];
    }
	//alert(num);
	num = num % 11;
	//alert(num);
	//alert(idCard.charAt(17).toLowerCase());
	if(Arr[num] != idCard.charAt(17).toLowerCase()){
	  alert(message + "\u4e0d\u662f\u6709\u6548\u768418\u4f4d\u8eab\u4efd\u8bc1!");
	  obj.focus(); 
	  return false;
	}
	
	return true;
}

function identityCardValidate(obj,message) {
	//alert(message);
	var idCard = obj.value;
	var regv=/(^(\d){15}$)|(^(\d){17}(\d|[xX]){1}$)/;
	if(!regv.test(idCard)){
		alert(message + "\u957f\u5ea6\u4e0d\u5bf9\u6216\u542b\u6709\u975e\u6cd5\u5b57\u7b26!");
		obj.focus();
		return false;
	}
	
	if(!areaValidate(obj,message)){
		return false;
	}
	
	if(!dateValidate(obj,message)){
		return false;
	}
	
	if(idCard.length == 18){
		if(!checkoutValidate(obj,message)){
			return false;
		}
	}
	
	return true;
}


  
    

function checkDateInput(obj)  //????????????
	{
	if (obj.value.length==0) return false;
	var objValue=obj.value.replace(/[-\.]/g,"/");

	try
		{
		var a=new Date(objValue);
		if (isNaN(a))
			{
			obj.value="";
			//????????\n?????????????????????
			alert("\uff01\uff01\uff01\uff01\u8bf7\u6ce8\u610f\uff1a\n\u60a8\u521a\u624d\u8f93\u5165\u7684\u65e5\u671f\u4e0d\u6b63\u786e\uff0c\u6211\u4eec\u5df2\u8fdb\u884c\u4e86\u6e05\u9664\u3002");
			obj.focus();
			return false;
			}
		var b;
		if (a.getFullYear()<1900||a.getFullYear()>2200)
			{var Today=new Date();
			b=Today.getFullYear()+"-"+(a.getMonth()+1)+"-"+a.getDate();
			}
		else if (a.getFullYear()<1930)
			b=(a.getFullYear()+100)+"-"+(a.getMonth()+1)+"-"+a.getDate();
		else b=a.getFullYear()+"-"+(a.getMonth()+1)+"-"+a.getDate();
		obj.value=obj.value.replace(/[-\.\/]0*/g,"-");
		if (b!=obj.value)
			{
			obj.value=b;
			//????????\n?????????????????????
			alert("\uff01\uff01\uff01\uff01\u8bf7\u6ce8\u610f\uff1a\n\u60a8\u521a\u624d\u8f93\u5165\u7684\u65e5\u671f\u4e0d\u6b63\u786e\uff0c\u6211\u4eec\u5df2\u8fdb\u884c\u4e86\u4fee\u6539\u3002");
			obj.select();
			obj.focus();
			return false;
			}
		}
	catch(Exception)
		{
		obj.value="";
		//????????\n?????????????????????
		alert("\uff01\uff01\uff01\uff01\u8bf7\u6ce8\u610f\uff1a\n\u60a8\u521a\u624d\u8f93\u5165\u7684\u65e5\u671f\u4e0d\u6b63\u786e\uff0c\u6211\u4eec\u5df2\u8fdb\u884c\u4e86\u6e05\u9664\u3002");
		obj.focus();
		return false;
		}
	return true;
	}
	
function checkMonthInput(obj)	//JK 20020815 ??????yyyymm???????
{

	obj.value=obj.value.replace(/ /g,"");
	if (obj.value.length==0) return false;
	var a=/((19)|(20))\d\d[0,1]{0,1}\d/i;
	var b;
	var c;
	if (!(a.test(obj.value)))
	{
		obj.value="";
		alert("????????\n?????????????????????");
		obj.focus();
		return false;
	}
	else
	{
		b=obj.value.match(a)[0];
		b=b.substring(0,4)+"/"+b.substring(4,6)+"/1";
		c=new Date(b);
		b=c.getFullYear()+""+(c.getMonth()+1);
		if (b.length<6)
		b=c.getFullYear()+"0"+(c.getMonth()+1);
		if (b!=obj.value)
		{
		obj.value=b;
		alert("????????\n?????????????????????");
		return false;
		}
	}

}

function roundFun(numberRound,roundDigit) //??????????roundDigit

{
    	var tempNumber = parseInt((numberRound * Math.pow(10,roundDigit)+0.5))/Math.pow(10,roundDigit);
	    return tempNumber;
}

//?????
// Example:
// var b = new BrowserInfo();
// alert(b.version); 
function BrowserInfo()
{
  this.name = navigator.appName;
  this.codename = navigator.appCodeName;
  this.version = navigator.appVersion.substring(0,4);
  this.platform = navigator.platform;
  this.javaEnabled = navigator.javaEnabled();
  this.screenWidth = screen.width;
  this.screenHeight = screen.height;
}
//??????
function disableRightClick(e)
{
  var message = "Right click disabled";
  
  if(!document.rightClickDisabled) // initialize
  {
    if(document.layers) 
    {
      document.captureEvents(Event.MOUSEDOWN);
      document.onmousedown = disableRightClick;
    }
    else document.oncontextmenu = disableRightClick;
    return document.rightClickDisabled = true;
  }
  if(document.layers || (document.getElementById && !document.all))
  {
    if (e.which==2||e.which==3)
    {
      alert(message);
      return false;
    }
  }
  else
  {
    alert(message);
    return false;
  }
}
//disableRightClick();

//?????
function setStatusBar(msgStr) { 
	self.status = msgStr; 
}
//????????
function howManyWords(inputString)
{
  return inputString.split(' ').length;
}
//??????
function isNumberFloat(inputString)
{
  return (!isNaN(parseFloat(inputString))) ? true : false;
}
//?????
function isNumberInt(inputString)
{
  return (!isNaN(parseInt(inputString))) ? true : false;
}
//??????
function messageWindow(title, msg)
{
  var width="300", height="125";
  var left = (screen.width/2) - width/2;
  var top = (screen.height/2) - height/2;
  var styleStr = 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbar=no,resizable=no,copyhistory=yes,width='+width+',height='+height+',left='+left+',top='+top+',screenX='+left+',screenY='+top;
  var msgWindow = window.open("","msgWindow", styleStr);
  var head = '<head><title>'+title+'</title></head>';
  var body = '<center>'+msg+'<br><p><form><input type="button" value="   ??   " onClick="self.close()"></form>';
  msgWindow.document.write(head + body);
}
//?????
var popUpWin=0;
function popUpWindow(URLStr, left, top, width, height)
{
  if(popUpWin)
  {
    if(!popUpWin.closed) popUpWin.close();
  }
  popUpWin = open(URLStr, 'popUpWin', 'toolbar=no,location=no,directories=no,status=no,menub ar=no,scrollbar=no,resizable=no,copyhistory=yes,width='+width+',height='+height+',left='+left+', top='+top+',screenX='+left+',screenY='+top+'');
}

//??????????????????????????????
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
if(/(y+)/.test(format))
format=format.replace(RegExp.$1,(this.getFullYear()+"").substr(4 - RegExp.$1.length));
for(var k in o)
if(new RegExp("("+ k +")").test(format))
format = format.replace(RegExp.$1,RegExp.$1.length==1 ? o[k] :("00"+ o[k]).substr((""+ o[k]).length));
return format;
}

//??
function calendarCompare(obj,flag) {
	if (obj.value.length==0) return false;
	var now = new Date();
	now = now.format('yyyy-MM-dd');
	if(flag == 'beforeToday') {
		if(compareDate(obj.value,now) <= 0) {
			alert("非法的出生日期！");
			obj.select();
			obj.focus();
			obj.value="";
			return false;
		}
	}
}
//????
function compareDate(beginDate, endDate){
	var beginDate = new Date(beginDate.replace(/[-\.]/g,"/"));
	var endDate = new Date(endDate.replace(/[-\.]/g,"/"));
	return endDate - beginDate;
//	if (beginDate < endDate)	return 1;
//	else if (beginDate > endDate)	return -1;
//	else	return 0;
	
}

/*
Function:	???radio group????????????
			????????????????????????????length???
Parameters:	radName		radio group???.
Return:		????radio group????????
Author:		xjzhang
Last Update:2001-04-03
*/
function getRadioGroup(rgName)
{
		var rads = document.all(rgName);
		var radios = new Array();
		var j = 0;
		
		if(rads==null)return radios;
		else{
			if(rads.length!=null)
				for(var i = 0; i < rads.length; i++)
				{
					radios[j++]= rads[i];
				}
			else radios[0]=rads;
		}
		return radios;
}

function minLength(obj,length) {
	if(obj.value.length < length && obj.value != '') {
		alert("\uff01\uff01\uff01\uff01\u8bf7\u6ce8\u610f\uff1a\n\u60a8\u8f93\u5165\u7684\u957f\u5ea6\u5c0f\u4e8e" + length + "\u4f4d");
		obj.value = "";
		return false;
	}
}

	/*????*/
	function killSpace(obj) {
	  var t = obj.value;
	  t = t.replace(/(^\s*)|(\s*$)/g, "");
	  obj.value = t;
	}
	
	function killAllSpace(obj) {
		var t = obj.value;
		var   reg   =   /\s/g;   
  		var   t   =   t.replace(reg,   ""); 
  		obj.value = t;  
	}
	
        function moneySelect(obj,path) {
	  		var params1="status:no; scroll:yes; resizable:no; help:no;dialogWidth:690px;dialogHeight:460px;";
	  		
	  		var url=path+"/page/common/select_money.jsp?money="+document.getElementById(obj).value;
	  		var popup=window.showModalDialog(url,"", params1);
 			if (popup!=null)
			{
					document.getElementById(obj).value=popup;
					document.getElementById(obj).focus();
			}        
        }
        
        function calculatorSelect(obj,path) {
	  		var params1="status:no; scroll:no; resizable:no;help:no;dialogWidth:390px;dialogHeight:360px;";
	  		
	  		//var url=path+"/page/common/calculator.jsp?money="+document.getElementById(obj).value;
	  		var url=path+"/page/common/simpleCalculator.jsp?money="+document.getElementById(obj).value;
	  		var popup=window.showModalDialog(url,"", params1);
 			if (popup!=null)
			{
					document.getElementById(obj).value=popup;
					document.getElementById(obj).focus();
			}        
        }
        
        　　function printit() 
　　	{
　　		if (confirm('确定打印吗？')) { 
			document.getElementById('Noprint').style.display = 'none';　　
			window.print();
　　		}
　　} 


 function Chinese(num)  //将阿拉伯数字翻译成中文的大写数字
{
    if(!/^\d*(\.\d*)?$/.test(num)){alert("Number is wrong!"); return "Number is wrong!";}
    var AA = new Array("零","壹","贰","叁","肆","伍","陆","柒","捌","玖");
    var BB = new Array("","拾","佰","仟","萬","億","点","");
    
    var a = (""+ num).replace(/(^0*)/g, "").split("."), k = 0, re = "";

    for(var i=a[0].length-1; i>=0; i--)
    {
        switch(k)
        {
            case 0 : re = BB[7] + re; break;
            case 4 : if(!new RegExp("0{4}\\d{"+ (a[0].length-i-1) +"}$").test(a[0]))
                     re = BB[4] + re; break;
            case 8 : re = BB[5] + re; BB[7] = BB[5]; k = 0; break;
        }
        if(k%4 == 2 && a[0].charAt(i+2) != 0 && a[0].charAt(i+1) == 0) re = AA[0] + re;
        if(a[0].charAt(i) != 0) re = AA[a[0].charAt(i)] + BB[k%4] + re; k++;
    }

    if(a.length>1) //加上小数部分(如果有小数部分)
    {
        re += BB[6];
        for(var i=0; i<a[1].length; i++) re += AA[a[1].charAt(i)];
    }
    return re;
}
/**
 * 格式化金额
 * @param amount 金额
 * @param scale 精确度（小数位数），默认为2
 * @param separatorPK 每千位分隔符，默认为,
 * @param prefix 货币前缀，如"$"，默认为空
 */
function formatAmount(amount,scale,separatorPK,prefix){
	if(typeof(amount)!="number"&&isNaN(parseFloat(amount))){
		return amount;
	}
	if(scale!=parseInt(scale)||scale<0){
		scale = 2;
	}
	if(typeof(separatorPK)!="string"){
		separatorPK = ",";
	}
	if(typeof(prefix)!="string"){
		prefix = "";
	}
	var amountValue = parseFloat(amount).toString();
	var dotIndex = amountValue.indexOf(".");
	if(dotIndex<0){
		amountValue += ".0";
		dotIndex = amountValue.indexOf(".");
	}
	while(dotIndex+scale>=amountValue.length){
		amountValue += "0";
	}
	var decimal = amountValue.substr(dotIndex+1,scale);
	var integer = amountValue.substring(0,dotIndex);
	var res = "";
	for(var i=integer.length;i>=0;i-=3){
		var beginIndex = (i-3)<0 ? 0 : i-3;
		var s = integer.substring(beginIndex,i);
		if(s=="") break;
		res = s+separatorPK+res;
	}
	if(res.substring(res.length-1)==separatorPK){
		res = res.substring(0,res.length-1);
	}
	if(scale>0){
		res += decimal;
	}
	//已得到不带小数点的格式化字符串，以下进行四舍五入
	var last = parseInt(res.substring(res.length-1));
	var tail = parseInt(amountValue.substr(dotIndex+1+scale,1));
	if(tail>4){
		last += 1;
		res = res.substring(0,res.length-1)+last;
	}
	//加上小数点
	if(scale>0){
		res = res.substring(0,res.length-scale)+"."+res.substring(res.length-scale);
	}
	res = prefix+res;
	return res;
}

String.prototype.trim = function(){
return this.replace(/(^\s*)|(\s*$)/g,"");
}
