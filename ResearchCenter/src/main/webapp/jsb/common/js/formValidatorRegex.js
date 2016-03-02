var regexEnum = 
{
	intege:"^-?[1-9]\\d*$",					//整数
	intege1:"^[1-9]\\d*$",					//正整数
	intege2:"^-[1-9]\\d*$",					//负整数
	num:"^(([+-]?)\\d*\\.?\\d+)$",			//数字
	numonly:"^\\d*$",						//数字only，没有+-.
	num1:"^([1-9]\\d*|0)$",					//正数（正整数 + 0）
	num2:"^-([1-9]\\d*|0)$",					//负数（负整数 + 0）
	decmal:"^([+-]?)\\d*\\.\\d+$",			//浮点数
	decmal1:"^([1-9]\\d*\\.\\d*|0\\.\\d*[1-9]\\d*)$",　　	//正浮点数
	decmal2:"^-([1-9]\\d*\\.\\d*|0\\.\\d*[1-9]\\d*)$",　 //负浮点数
	decmal3:"^-?([1-9]\\d*\\.\\d*|0\\.\\d*[1-9]\\d*|0?\\.0+|0)$",　 //浮点数
	decmal4:"^(([1-9]\\d*\\.\\d*)|(0\\.\\d*[1-9]\\d*|0?\\.0+)|(0))$",　　 //非负浮点数（正浮点数 + 0）
	decmal5:"^(-([1-9]\\d*\\.\\d*|0\\.\\d*[1-9]\\d*))|0?\\.0+|0$",　　//非正浮点数（负浮点数 + 0）
	email:"^\\w+((-\\w+)|(\\.\\w+))*\\@[A-Za-z0-9]+((\\.|-)[A-Za-z0-9]+)*\\.[A-Za-z0-9]+$", //邮件
	color:"^[a-fA-F0-9]{6}$",				//颜色
	url:"^http[s]?:\\/\\/([\\w-]+\\.)+[\\w-]+([\\w-./?%&=]*)?$",	//url
	domain:"^[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?$",	//域名
	chinese:"^[\\u4E00-\\u9FA5\\uF900-\\uFA2D]+$",					//仅中文
	ascii:"^[\\x00-\\xFF]+$",				//仅ACSII字符
	zipcode:"^\\d{6}$",						//邮编
	mobile:"^(13[0-9]{9}|15[012356789][0-9]{8}|18[02356789][0-9]{8}|147[0-9]{8})$",				//手机
	ip4:"^(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)\\.(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)\\.(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)\\.(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)$",	//ip地址
	notempty:"^\\S+$",						//非空
	picture:"(.*)\\.(jpg|bmp|gif|ico|pcx|jpeg|tif|png|raw|tga)$",	//图片
	rar:"(.*)\\.(rar|zip|7zip|tgz)$",								//压缩文件
	date:"^\\d{4}(\\-|\\/|\.)\\d{1,2}\\1\\d{1,2}$",					//日期
	qq:"^[1-9]*[1-9][0-9]*$",				//QQ号码
	tel:"^(([0\\+]\\d{2,3}-)?(0\\d{2,3})-)?(\\d{7,8})(-(\\d{3,}))?$",	//电话号码的函数(包括验证国内区号,国际区号,分机号)
	username:"^\\w+$",						//用来用户注册。匹配由数字、26个英文字母或者下划线组成的字符串
	letter:"^[A-Za-z]+$",					//字母
	letter_u:"^[A-Z]+$",					//大写字母
	letter_l:"^[a-z]+$",					//小写字母
	idcard:"^[1-9]([0-9]{14}|[0-9]{17}|[0-9]{16}([0-9]|x|X))$"	//身份证
}

var aCity={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外"} 

function isCardID(sId){ 
	var iSum=0 ;
	var info="" ;
	if(!/^\d{17}(\d|x)$/i.test(sId)) return "你输入的身份证长度或格式错误"; 
	sId=sId.replace(/x$/i,"a"); 
	if(aCity[parseInt(sId.substr(0,2))]==null) return "你的身份证地区非法"; 
	sBirthday=sId.substr(6,4)+"-"+Number(sId.substr(10,2))+"-"+Number(sId.substr(12,2)); 
	var d=new Date(sBirthday.replace(/-/g,"/")) ;
	if(sBirthday!=(d.getFullYear()+"-"+ (d.getMonth()+1) + "-" + d.getDate()))return "身份证上的出生日期非法"; 
	for(var i = 17;i>=0;i --) iSum += (Math.pow(2,i) % 11) * parseInt(sId.charAt(17 - i),11) ;
	if(iSum%11!=1) return "你输入的身份证号非法"; 
	return true;//aCity[parseInt(sId.substr(0,2))]+","+sBirthday+","+(sId.substr(16,1)%2?"男":"女") 
} 

//短时间，形如 (13:04:06)
function isTime(str)
{
	var a = str.match(/^(\d{1,2})(:)?(\d{1,2})\2(\d{1,2})$/);
	if (a == null) {return false}
	if (a[1]>24 || a[3]>60 || a[4]>60)
	{
		return false;
	}
	return true;
}

//短日期，形如 (2003-12-05)
function isDate(str)
{
	var r = str.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/); 
	if(r==null)return false; 
	var d= new Date(r[1], r[3]-1, r[4]); 
	return (d.getFullYear()==r[1]&&(d.getMonth()+1)==r[3]&&d.getDate()==r[4]);
}

//长时间，形如 (2003-12-05 13:04:06)
function isDateTime(str)
{
	var reg = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/; 
	var r = str.match(reg); 
	if(r==null) return false; 
	var d= new Date(r[1], r[3]-1,r[4],r[5],r[6],r[7]); 
	return (d.getFullYear()==r[1]&&(d.getMonth()+1)==r[3]&&d.getDate()==r[4]&&d.getHours()==r[5]&&d.getMinutes()==r[6]&&d.getSeconds()==r[7]);
}

function keyup_OnlyNumber($obj,len){
	var value = $obj.val();
	$obj.val( value.replace(/\D/g,'') )
	value = $obj.val();
	
	var value_len = value.length;
	if( value_len > len ) $obj.val( value.substring(0, len) );
}

// option : obj,type,event
// type : 0 首位不能为空格 /^\s*$/g
// type : 1 首末不能为空格 /(^\s*)|(\s*$)/g; 默认
// type : 2 删除全部空格符 /\s+/g
// Ex: $("input").keyup(function(event){ keyup_NoBlank({"obj":$(this),type:"1", "event":event}); });
function keyup_NoBlank(option){
	if( option.obj != undefined ){
		var value = option.obj.val();
		var type = option.type == undefined ? "1" : option.type;
		
		var event = option.event == undefined ? false : option.event;
		if( event ){
			var keycode = event.which;
			if( keycode == 8 || keycode == 46 ) return false;
		}
		switch(type){
			case "0" : option.obj.val( value.replace(/^\s*$/g,'') ); break;
			case "1" : option.obj.val( value.replace( /(^\s*)|(\s*$)/g,'') ); break;
			case "2" : option.obj.val( value.replace(/\s+/g,'') ); break;
			default : option.obj.val( value.replace( /(^\s*)|(\s*$)/g,'') );
		}
	}
}

function keyup_NotBlank($obj){
	var value = $obj.val();
	// 首位不能为空格 /^\s*$/g
	// 首末不能为空格 /(^\s*)|(\s*$)/g;
	// 删除全部空格符 /\s+/g
	$obj.val( value.replace(/\s+/g,'') );
}

function keyup_NotBlank($obj,event){
	var value = $obj.val();
	// 首位不能为空格 /^\s*$/g
	// 首末不能为空格 /(^\s*)|(\s*$)/g;
	// 删除全部空格符 /\s+/g
	var keycode = event.which;
	if( keycode == 8 || keycode == 46 ) return false;
	else if( keycode < 35 ||  keycode > 40 )
		$obj.val( value.replace(/\s+/g,'') );
}

function trimAllValue($form){
	var $inputs = $form.find("input[type=text]");
	var len = $inputs.length;
	for( var i = 0; i < len; i++){
		var $input = $inputs.eq(i);
		var val = $input.val();
		$input.val( val.replace(/(^\s*)|(\s*$)/g,'') );
	}
}

function keyup_LenMax($obj, lenmax){
	var value = $obj.val();
	if( value.length > lenmax ) $obj.val( value.substring(0, lenmax) );
}
//CharMode函数 
//测试某个字符是属于哪一类
function CharMode(iN){ 
    if (iN>=48 && iN <=57) //数字 
    return 1; 
    if (iN>=65 && iN <=90) //大写字母 
    return 2; 
    if (iN>=97 && iN <=122) //小写 
    return 4; 
    else 
    return 8; //特殊字符 
}

 //bitTotal函数 
//计算出当前密码当中一共有多少种模式 
function bitTotal(num){ 
    modes=0; 
    for (i=0;i<4;i++){ 
    if (num & 1) modes++; 
    num>>>=1; 
    } 
    return modes; 
}

//checkStrong函数 
//返回密码的强度级别 
function checkStrong(sPW){ 
    if (sPW.length<6||sPW.length>18) 
    return 0; //密码太短 
    var Modes=0;
    var isN = false;//数字
    var isE = false;//英文字母
    for (i=0;i<sPW.length;i++){ 
	    //测试每一个字符的类别并统计一共有多少种模式. 
    	var mode = CharMode(sPW.charCodeAt(i));
	    Modes|=mode;
	    if( mode == 1 ) isN = true;
	    if( mode == 2 || mode == 4 ) isE = true;
	}
    if( !(isN && isE) ) return 10; //密码必须包含数字、英文字符 
    return bitTotal(Modes);
}