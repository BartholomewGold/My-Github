

//====?????===============================================
function URegex() {}
URegex.exp_email = "[a-zA-Z0-9_-]+(\.([a-zA-Z0-9_-])+)*@[a-zA-Z0-9_-]+[.][a-zA-Z0-9_-]+([.][a-zA-Z0-9_-]+)*" ;
URegex.exp_mobile = "[0-9]{11}" ;
URegex.EMAIL = new RegExp("^" + URegex.exp_email + "$") ;
URegex.MOBILE = new RegExp("^" + URegex.exp_mobile + "$") ;
URegex.EMAIL_MOBILE = new RegExp("^(" + URegex.exp_email + ")|(" + URegex.exp_mobile + ")$") ;
URegex.URL = new RegExp("http://") ;
URegex.NUMBER = new RegExp("^[0-9]*$") ;

//------
function URegexType() {}
URegexType.email = "URegexType.email";
URegexType.mobile = "URegexType.mobile";

//====????==================================================
function UValidate() {}
UValidate.notEmpty = "UValidate.notEmpty"; //??
UValidate.match = "UValidate.match"; //???????
UValidate.minLength = "UValidate.minLength"; //????
UValidate.maxLength = "UValidate.maxLength"; //????
UValidate.equal = "UValidate.equal"; //?????????

//====????==================================================
function UComponentType() {}
UComponentType.input = "input";
UComponentType.checkbox = "checkbox";
UComponentType.img = "img";
UComponentType.a = "a";

//====????==================================================
function USplit() {}
USplit.comma = ",";
USplit.vertical = "|";

function UCOOKIE() {}
UCOOKIE.EMAIL = "UCOOKIE.EMAIL";

function UURL() {}
UURL.MAIN = "/mutual/main.do?method=main";
UURL.VNVBANKMAIN = "/main.do";//main.do

function setClick(name) {
	getObj(name).click();
}
function getObj(name) {
    var t_obj = document.getElementById(name);
    if(t_obj==null)  t_obj = document.getElementsByName(name);
    if(t_obj.length>0)   t_obj=t_obj[0];
	return t_obj;
}

function getInnerText(name) {
	return getObj(name).innerText;
}


function getValue(name) {
	return getObj(name).value;
}

function getDisplay(name) {
	return getObj(name).style.display;
}

function getChecked(name) {
	return getObj(name).checked;
}


function getSize(name) {
	return getObj(name).value.length;
}

function setValue(name,value) {
	getObj(name).value = value;
}

function setInnerText(name,value) {
	return getObj(name).innerText = value; 
}

function setDisplay(name,value) {
	getObj(name).style.display = value;
}

function setAlt(name,value) {
	getObj(name).alt = value;
}

function setClass(name,value) {
	getObj(name).className = value;
}

function setURegular(name,value) {
	setProperty(name,'uregular',value);
}

function setURegex(name,value) {
	setProperty(name,'uregex',value);
}

function setProperty(name,property,value) {
	getObj(name).setAttribute(property,value);
}

	
function actionClick(itemname) {
  		if(window.event.keyCode==13) {
			var arr = getArrayByUGroupPropertyValue(itemname.ugroup,UComponentType.a,'utype','submit');
			if(isArrayNotEmpty(arr)) {
					arr[0].click();
			} 
  		}	
}

function setCookie(ugroup){
	var array = getArrayByUGroupProperty(ugroup,UComponentType.input,'ucookie');
	if(isArrayNotEmpty(array)) {
		for(var i=0;i<array.length;i++) {
			Set_Cookie(array[i].ucookie,array[i].value,30,'/','',''); //设置cookie
		}
	}
}

function getCookie(ugroup) {
	var array = getArrayByUGroupProperty(ugroup,UComponentType.input,'ucookie');
	if(isArrayNotEmpty(array)) {
		for(var i=0;i<array.length;i++) {
			var cookie_value = Get_Cookie(array[i].ucookie); //getcookie
			if(cookie_value != null) {
				setValue(array[i].name,cookie_value);
			}
		}
	}	
}

function getArrayByUGroupProperty(ugroup,type,property) {
	var array = new Array(); 
	var j = 0;
	var list = getUGroup(ugroup,type);
	if(isArrayNotEmpty(list)) {
		for(var i=0;i<list.length;i++) {
			if(list[i][property] != null) {
				array[j++] = list[i];
			}
		}	
	}
	return array;
}

function getArrayByUGroupPropertyValue(ugroup,type,property,value) {
	var array = new Array(); 
	var j = 0;
	var list = getUGroup(ugroup,type);
	if(isArrayNotEmpty(list)) {
		for(var i=0;i<list.length;i++) {
			if(list[i][property] != null) {
				if(list[i][property] == value) { //???????
					array[j++] = list[i];
				}
			}
		}	
	}
	return array;
}
//==============????????==============
function getSplitArray(value,splitSymbol) {
	if(value != null) {
		if(value.length != 0) {
			var array = value.split(splitSymbol);
			return array;
		} else {
			return null;
		}
	} else {
		return null;
	}
}

//==============????????==============
function isArrayNotEmpty(array) {
	var flag = false;
	if(array != null) {
		var length = array.length;
		if(length != 0) {
			flag = true;
		}
	}
	return flag;
}
function getUGroup(ugroup,type) {
	var array = new Array(); 
	var utype = type;
	var j = 0;	
	if(ugroup != null) {
		if(type == "") {
			utype = "input";
		}
		var list = document.getElementsByTagName(utype);
		if(list != null) {
			for(var i=0;i<list.length;i++) {
				if(list[i].ugroup != null) {
					var ugroupArray = list[i].ugroup.split(USplit.vertical);
					if(isArrayNotEmpty(ugroupArray)) {
						for(var k=0;k<ugroupArray.length;k++) {
							if(ugroup == ugroupArray[k]) { //???
								array[j++] = list[i];
							}						
						}
					}

				}
			}
		}
	}
	return array;
}

function setSrc(name,value) {
	document.getElementById(name).src = value;
}
function setHtml(name,value) {
	document.getElementById(name).innerHTML = value;
}
/*************??ajax??****************/
function parseObject(ugroup) {
	
	var object = new Object(); 
	var list = getUGroup(ugroup,UComponentType.input);
	if(isArrayNotEmpty(list)) {
		for(var i=0;i<list.length;i++) {
			object[list[i].uname] = list[i].value;
		}
	}
	return object;
}

//==================?????============================
function validate(ugroup) {
	
	var list = getUGroup(ugroup,UComponentType.input); //?????ugroup,?????????
	if(isArrayNotEmpty(list)) {
		for(var i=0;i<list.length;i++) {
			if(list[i].uregular != null) {
				var regularArray = getSplitArray(list[i].uregular,USplit.comma); //????
				if(isArrayNotEmpty(regularArray)) {
					for(var j=0;j<regularArray.length;j++) {
						var regular = regularArray[j];
						switch(regular) {
							case(UValidate.notEmpty): //??
								if(list[i].utext != null) {
									if(emptyValidate(list[i],list[i].utext) != "") {
										return false;
									}
								}
							case(UValidate.match): //???????
								if(list[i].uregex != null && list[i].utext != null) {
									if(matchValidate(list[i],list[i].uregex,list[i].utext) != "") {
										return false;
									}
								}
							case(UValidate.minLength): //????
								if(list[i].uminlength != null && list[i].utext != null) {
									if(minLengthValidate(list[i],list[i].uminlength,list[i].utext) != "") {
										return false;
									}
								}
							case(UValidate.maxLength): //????
								if(list[i].umaxlength != null && list[i].utext != null) {
									if(maxLengthValidate(list[i],list[i].umaxlength,list[i].utext) != "") {
										return false;
									}
								}
							case(UValidate.equal): //??
								if(list[i].uequal != null && list[i].utext != null) {
									var regularArray = getSplitArray(list[i].uequal,USplit.vertical); //|??
									if(isArrayNotEmpty(regularArray)) {
										var input1 = regularArray[0];
										var input2 = regularArray[1];
										var message = list[i].utext;
										if(equalValidate(input1,input2,message)) {
											return false;
										}
									}
								}						
						}
					}
				}
			}
		}
	}
	return true;
}

//==========????===================
function emptyValidate(object,message) {
	var flag = false;
	if(object.type == "checkbox") {
		if(!object.checked) {
			alert("请确认"+message+"！");
			flag = true;
		}
	} else if(object.type == "text" || object.type == "password") {
		if(object.value == "") {
			alert("请填写"+message+"！");
			flag = true;
		}
	}
		if(flag) {		
		
		return "error";
	} else {
		return "";
	}

}
//==========????????============
function matchValidate(object,regex,message) {
	var regexArray = regex.split(USplit.vertical);
	if(regexArray != null) {
		for(var i=0;i<regexArray.length;i++) {
			var re;
			if(regexArray[i] == URegexType.email) re = URegex.EMAIL;
			if(regexArray[i] == URegexType.mobile) re = URegex.MOBILE;
			if(object.value.match(re)) {
				return "";
			}
		}
	}
	alert(message+"不符合格式！");
	return errorProcess(object);
}

//==========????==================
function minLengthValidate(object,length,message) {
	if(object.value.length < length) {
		alert("您的"+message+"的长度不小于"+length+"位！");
		return errorProcess(object);
	} else {
		return "";
	}
}

//=========????==================
function maxLengthValidate(object,length) {
	if(object.value.length > length) {
		alert("您的"+message+"的长度不大于"+length+"位！");
		return errorProcess(object);
	} else {
		return false;
	}
}
//=========相等===================
function equalValidate(name1,name2,message) {
	if(getValue(name1) != getValue(name2)) {
		alert("您的"+message+"两次输入不一致，请确认！");
		return errorProcess(getObj(name2));
	} else {
		return "";
	}
}
//=========错误处理================
function errorProcess(object) {
	if(object.type == "checkbox") {
		object.focus();
	} else if(object.type == "text") {
		if(object.value == "") {
			object.focus();
		} else {
			object.select();
		}
	}
	return "error";
}

var imageNum = 0;
/************?????*******************/
function freshVericode(name,url) {
	
	if(getObj(name) != null) {
		++imageNum;
		setSrc(name,url + "?" + imageNum + "=" + imageNum);
	}
}

function clearComponent(name) {
	if(getObj(name) != null) {
		setValue(name,'');
	}
}
	
	function killSpace(obj) {
	  var t = obj.value;
	  t = t.replace(/(^\s*)|(\s*$)/g, "");
	  obj.value = t;
	}
function showProcessing() {
	setProperty('sys_processing','className','sys_processing_show');
}

function hideProcessing() {
	setProperty('sys_processing','className','sys_processing_hide');
}
	
function showLoading() {
	setProperty('sys_loading','className','sys_loading_show');
}

function hideLoading() {
	setProperty('sys_loading','className','sys_loading_hide');
}

function loading(url) {
	//hideProcessing(); //处理的进度条隐藏
	//showLoading();	//显示正在下载页面的进度条
	location.href = url;
} 
	
//====================cookie======================

function Get_Cookie(name) {
  var start = document.cookie.indexOf(name + '=');
  var len = start + name.length + 1;
  if ((!start) && (name != document.cookie.substring(0,name.length)))
    return null;
  if (start == -1)
    return null;
  var end = document.cookie.indexOf(';',len);
  if (end == -1) end = document.cookie.length;
  if(end == start){
  	return '';
  }
  return unescape(document.cookie.substring(len,end));
}

function Set_Cookie( name, value, expires, path, domain, secure ) 
{
// set time, it's in milliseconds
var today = new Date();
today.setTime( today.getTime() );

/*
if the expires variable is set, make the correct 
expires time, the current script below will set 
it for x number of days, to make it for hours, 
delete * 24, for minutes, delete * 60 * 24
*/
if ( expires )
{
expires = expires * 1000 * 60 * 60 * 24;
}
var expires_date = new Date( today.getTime() + (expires) );

document.cookie = name + "=" +escape( value ) +
( ( expires ) ? ";expires=" + expires_date.toGMTString() : "" ) + 
( ( path ) ? ";path=" + path : "" ) + 
( ( domain ) ? ";domain=" + domain : "" ) +
( ( secure ) ? ";secure" : "" );
}

function Delete_Cookie(name,path,domain) {
  if (Get_Cookie(name))
    document.cookie =
      name + '=' +
      ( (path) ? ';path=' + path : '') +
      ( (domain) ? ';domain=' + domain : '') +
      ';expires=Thu, 01-Jan-1970 00:00:01 GMT';
}

/*
returns an array of cookie values from a single cookie
*/
function get_sub_cookies(cookie){
	var cookies = new Array();
	var end ='';
	if(cookie && cookie != ''){
		end = cookie.indexOf('#')
		while(end > -1){
			var cur = cookie.substring(0, end);
			 cookie = cookie.substring(end + 1, cookie.length);
			var name = cur.substring(0, cur.indexOf('='));
			var value = cur.substring(cur.indexOf('=') + 1, cur.length);
			cookies[name] = value;
			
			end = cookie.indexOf('#')
		}
	}
	return cookies;
}

function subs_to_cookie(cookies){

	
	var cookie = '';
		for (var i in cookies)
		{
			cookie += i  + '=' + cookies[i] + '#';
		}
	return cookie;
}

// 移动手机号码验证
function checkCmMobile(number)
{
 var reg0=/^13[4-9]\d{8}$/;
 var reg1=/^150\d{8}$/;
 var reg2=/^15[6-9]\d{8}$/;
 var my=false;
 if (reg0.test(number))my=true;
 if (reg1.test(number))my=true;
 if (reg2.test(number))my=true;
 return my;
}

function onlyNumber(number) {
	return number.match(URegex.NUMBER)
}

function checkPasswordNum(object)

{
	var objvalue=object.value;
	
		var result=objvalue.replace(/^(?:([a-z])|([A-Z])|([0-9])|(.)){5,}|(.)+$/g, "$1$2$3$4$5").length;
		if(result<2)
		{
			return true;
		}else
		{
			return false;
		}
	
}