var pgeditor = new $.pge({
		pgePath: "/admin/html/ocx/",//控件文件目录
		pgeId: "_ocx_password",//控件ID
		pgeEdittype: 0,//控件类型,0星号,1明文
		pgeEreg1: "[\\s\\S]*",//输入过程中字符类型限制
		pgeEreg2: "[\\s\\S]{6,20}",	//输入完毕后字符类型判断条件
		pgeMaxlength: 20,//允许最大输入长度
		pgeTabindex:2,//tab键顺序
		pgeClass: "ocx_style",//控件css样式
		pgeInstallClass: "ocx_style",//针对安装或升级
		pgeOnkeydown:"SubmitForm();",//回车键响应函数
	    tabCallback:"_ocx_password"
});

var pgeditor1 = new $.pge({
		pgePath: "/admin/html/ocx/",//控件文件目录
		pgeId: "_ocx_password1",//控件ID
		pgeEdittype: 0,//控件类型,0星号,1明文
		pgeEreg1: "[\\s\\S]*",//输入过程中字符类型限制
		pgeEreg2: "[\\s\\S]{6,20}",	//输入完毕后字符类型判断条件
		pgeMaxlength: 20,//允许最大输入长度
		pgeTabindex: 3,//tab键顺序
		pgeClass: "ocx_style",//控件css样式
		pgeInstallClass: "ocx_style",//针对安装或升级
		pgeOnkeydown:"SubmitForm();",//回车键响应函数
	    tabCallback:"_ocx_password1"
});

var pgeditor2 = new $.pge({
		pgePath: "/admin/html/ocx/",//控件文件目录
		pgeId: "_ocx_password2",//控件ID
		pgeEdittype: 0,//控件类型,0星号,1明文
		pgeEreg1: "[\\s\\S]*",//输入过程中字符类型限制
		pgeEreg2: "[\\s\\S]{6,20}",	//输入完毕后字符类型判断条件
		pgeMaxlength: 20,//允许最大输入长度
		pgeTabindex: 4,//tab键顺序
		pgeClass: "ocx_style",//控件css样式
		pgeInstallClass: "ocx_style",//针对安装或升级
		pgeOnkeydown:"SubmitForm();",//回车键响应函数
	    tabCallback:"_ocx_password2"
});

var pgeditor3 = new $.pge({
		pgePath: "/admin/html/ocx/",//控件文件目录
		pgeId: "_ocx_password3",//控件ID
		pgeEdittype: 0,//控件类型,0星号,1明文
		pgeEreg1: "[\\s\\S]*",//输入过程中字符类型限制
		pgeEreg2: "[\\s\\S]{6,20}",	//输入完毕后字符类型判断条件
		pgeMaxlength: 20,//允许最大输入长度
		pgeTabindex: 4,//tab键顺序
		pgeClass: "ocx_style",//控件css样式
		pgeInstallClass: "ocx_style",//针对安装或升级
		pgeOnkeydown:"SubmitForm();",//回车键响应函数
	    tabCallback:"_ocx_password2"
});

if(navigator.userAgent.indexOf("MSIE")<0){
	   navigator.plugins.refresh();
}

function get_time(){
return new Date().getTime();
}
function _$(v){
	return document.getElementById(v);
}
//判断密码强度
function SetPWDStrength(n){
            _$("passwd_level_1").style.background="url(./images/bg.gif)";
            _$("passwd_level_2").style.background="url(./images/bg.gif)";
            _$("passwd_level_3").style.background="url(./images/bg.gif)";
     	    if(n==2){
				_$("passwd_level_1").style.background="url(./images/bg1.gif)";
			}
			if(n==3){
			   _$("passwd_level_1").style.background="url(./images/bg1.gif)";
			   _$("passwd_level_2").style.background="url(./images/bg1.gif)";
			}
			if(n==4){
			   _$("passwd_level_1").style.background="url(./images/bg1.gif)";
			   _$("passwd_level_2").style.background="url(./images/bg1.gif)";
			   _$("passwd_level_3").style.background="url(./images/bg1.gif)";
			}
}

function SetPWDStrength1(n){

            _$("passwd_level_4").style.background="url(./images/bg.gif)";
            _$("passwd_level_5").style.background="url(./images/bg.gif)";
            _$("passwd_level_6").style.background="url(./images/bg.gif)";
     	    if(n==2){
				_$("passwd_level_4").style.background="url(./images/bg1.gif)";
			}
			if(n==3){
			   _$("passwd_level_4").style.background="url(./images/bg1.gif)";
			   _$("passwd_level_5").style.background="url(./images/bg1.gif)";
			}
			if(n==4){
			   _$("passwd_level_4").style.background="url(./images/bg1.gif)";
			   _$("passwd_level_5").style.background="url(./images/bg1.gif)";
			   _$("passwd_level_6").style.background="url(./images/bg1.gif)";
			}

}

//判断密码强度
function SetPWDStrength2(n){
            _$("passwd_level_1").style.background="url(../../images/bg.gif)";
            _$("passwd_level_2").style.background="url(../../images/bg.gif)";
            _$("passwd_level_3").style.background="url(../../images/bg.gif)";
     	    if(n==2){
				_$("passwd_level_1").style.background="url(../../images/bg1.gif)";
			}
			if(n==3){
			   _$("passwd_level_1").style.background="url(../../images/bg1.gif)";
			   _$("passwd_level_2").style.background="url(../../images/bg1.gif)";
			}
			if(n==4){
			   _$("passwd_level_1").style.background="url(../../images/bg1.gif)";
			   _$("passwd_level_2").style.background="url(../../images/bg1.gif)";
			   _$("passwd_level_3").style.background="url(../../images/bg1.gif)";
			}
}

function SetPWDStrength3(n){

            _$("passwd_level_4").style.background="url(../../images/bg.gif)";
            _$("passwd_level_5").style.background="url(../../images/bg.gif)";
            _$("passwd_level_6").style.background="url(../../images/bg.gif)";
     	    if(n==2){
				_$("passwd_level_4").style.background="url(../../images/bg1.gif)";
			}
			if(n==3){
			   _$("passwd_level_4").style.background="url(../../images/bg1.gif)";
			   _$("passwd_level_5").style.background="url(../../images/bg1.gif)";
			}
			if(n==4){
			   _$("passwd_level_4").style.background="url(../../images/bg1.gif)";
			   _$("passwd_level_5").style.background="url(../../images/bg1.gif)";
			   _$("passwd_level_6").style.background="url(../../images/bg1.gif)";
			}

}


function EntertoTab(){
	document.getElementById("input2").focus();
}

function SubmitForm(){

	$.ajax({
		url: "./srand_num.jsp?"+get_time(),
		type: "GET",
		async: false,
		success: function(srand_num){
		    pgeditor.pwdSetSk(srand_num);
		    pgeditor2.pwdSetSk(srand_num);
		}
	 });
}

function FormSubmit5(){  
	 
	 $.ajax({
		url: "../../srand_num.jsp?"+get_time(),
		type: "GET",
		async: false,
		success: function(srand_num){
		    pgeditor.pwdSetSk(srand_num);
		    pgeditor2.pwdSetSk(srand_num);
		}
	 });
}
//清除密码强度  
function ClearLevel(){
    _$("passwd_level_1").style.background="url(./images/bg.gif)";
    _$("passwd_level_2").style.background="url(./images/bg.gif)";
    _$("passwd_level_3").style.background="url(./images/bg.gif)";
}

function ClearLevel1(){
    _$("passwd_level_4").style.background="url(./images/bg.gif)";
    _$("passwd_level_5").style.background="url(./images/bg.gif)";
    _$("passwd_level_6").style.background="url(./images/bg.gif)";
}

function ClearLevel2(){
    _$("passwd_level_1").style.background="url(../../images/bg.gif)";
    _$("passwd_level_2").style.background="url(../../images/bg.gif)";
    _$("passwd_level_3").style.background="url(../../images/bg.gif)";
}

function ClearLevel3(){
    _$("passwd_level_4").style.background="url(../../images/bg.gif)";
    _$("passwd_level_5").style.background="url(../../images/bg.gif)";
    _$("passwd_level_6").style.background="url(../../images/bg.gif)";
}


//获取密码强度
function GetLevel(){
  var n=pgeditor.pwdStrength();
  if(n>1){
  	  SetPWDStrength(n);
  }else{
       ClearLevel();
  }
}

//获取密码强度
function GetLevel1(){
  var n=pgeditor2.pwdStrength();
  if(n>1){
  	  SetPWDStrength1(n);
  }else{
       ClearLevel1();
  }
}

function GetLevel2(){
  var n=pgeditor.pwdStrength();
  if(n>1){
  	  SetPWDStrength2(n);
  }else{
       ClearLevel2();
  }
}

//获取密码强度
function GetLevel3(){
  var n=pgeditor2.pwdStrength();
  if(n>1){
  	  SetPWDStrength3(n);
  }else{
       ClearLevel3();
  }
}
