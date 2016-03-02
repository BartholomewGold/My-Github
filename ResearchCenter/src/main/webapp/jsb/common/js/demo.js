var pgeditor = new $.pge({
		pgePath: "/admin/html/ocx/",//控件文件目录
		pgeId: "_ocx_password",//控件ID
		pgeEdittype: 0,//控件类型,0星号,1明文
		pgeEreg1: "[\\s\\S]*",//输入过程中字符类型限制
		pgeEreg2: "[\\s\\S]{6,12}",	//输入完毕后字符类型判断条件
		pgeMaxlength: 18,//允许最大输入长度
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
		pgeEreg2: "[\\s\\S]{6,12}",	//输入完毕后字符类型判断条件
		pgeMaxlength: 18,//允许最大输入长度
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
		pgeEreg2: "[\\s\\S]{6,12}",	//输入完毕后字符类型判断条件
		pgeMaxlength: 18,//允许最大输入长度
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

function SetPWDStrength1(n){

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

function SetPWDStrength2(n){

            _$("passwd_level_7").style.background="url(../../images/bg.gif)";
            _$("passwd_level_8").style.background="url(../../images/bg.gif)";
            _$("passwd_level_9").style.background="url(../../images/bg.gif)";
     	    if(n==2){
				_$("passwd_level_7").style.background="url(../../images/bg1.gif)";
			}
			if(n==3){
			   _$("passwd_level_7").style.background="url(../../images/bg1.gif)";
			   _$("passwd_level_8").style.background="url(../../images/bg1.gif)";
			}
			if(n==4){
			   _$("passwd_level_7").style.background="url(../../images/bg1.gif)";
			   _$("passwd_level_8").style.background="url(../../images/bg1.gif)";
			   _$("passwd_level_9").style.background="url(../../images/bg1.gif)";
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
		    pgeditor1.pwdSetSk(srand_num);
		}
	 });
}

function SubmitForm1(){

	$.ajax({
		url: "../../srand_num.jsp?"+get_time(),
		type: "GET",
		async: false,
		success: function(srand_num){
		    pgeditor.pwdSetSk(srand_num);
		    pgeditor1.pwdSetSk(srand_num);
		}
	 });
}

function FormSubmit(){  
    
	if(pgeditor.pwdValid()==1){
		alert("密码不符合要求");
		 _$("_ocx_password").focus();
		 return false;
	} 	
	if(pgeditor.pwdLength()==0){
	     alert("密码不能为空");
		 _$("_ocx_password").focus();
		 return false;
	}

	
	$.ajax({
		url: "./srand_num.jsp?"+get_time(),
		type: "GET",
		async: false,
		success: function(srand_num){
		    pgeditor.pwdSetSk(srand_num);
		}
	 });

	var PwdResult=pgeditor.pwdResult();
	var machineNetwork=pgeditor.machineNetwork();
	var machineDisk=pgeditor.machineDisk();
	var machineCPU=pgeditor.machineCPU();


	_$("password").value=PwdResult;//获得密码密文,赋值给表单
	_$("local_network").value=machineNetwork;//获得网卡和MAC信息,赋值给表单
	_$("local_disk").value=machineDisk;//获得硬盘信息,赋值给表单
	_$("local_nic").value=machineCPU;//获得CPU信息,赋值给表单

	document.form1.submit();

}

function FormSubmit1(){  
	$.ajax({
		url: "./srand_num.jsp?"+get_time(),
		type: "GET",
		async: false,
		success: function(srand_num){
			pgeditorcvn.pwdSetSk(srand_num);
		}
	 });
	var PwdResult=pgeditorcvn.pwdResult();
	var machineNetwork=pgeditorcvn.machineNetwork();
	var machineDisk=pgeditorcvn.machineDisk();
	var machineCPU=pgeditorcvn.machineCPU();
	if(pgeditorcvn.pwdLength()==0){
	     alert("密码不能为空");
		 _$("_ocx_password").focus();
		 return false;
	}
	if(pgeditorcvn.pwdValid()==1){
		alert("密码不符合要求");
		 _$("_ocx_password").focus();
		 return false;
	} 

	_$("password").value=PwdResult;//获得密码密文,赋值给表单
	_$("local_network").value=machineNetwork;//获得网卡和MAC信息,赋值给表单
	_$("local_disk").value=machineDisk;//获得硬盘信息,赋值给表单
	_$("local_nic").value=machineCPU;//获得CPU信息,赋值给表单

	document.form1.submit();	
}

function FormSubmit2(){  
	$.ajax({
		url: "./srand_num.jsp?"+get_time(),
		type: "GET",
		async: false,
		success: function(srand_num){
		   pgeditoratm.pwdSetSk(srand_num);
		}
	 });
	var PwdResult=pgeditoratm.pwdResult();
	var machineNetwork=pgeditoratm.machineNetwork();
	var machineDisk=pgeditoratm.machineDisk();
	var machineCPU=pgeditoratm.machineCPU();
	if(pgeditoratm.pwdLength()==0){
	     alert("密码不能为空");
		 _$("_ocx_password2").focus();
		 return false;
	}
	if(pgeditoratm.pwdValid()==1){
		alert("密码不符合要求");
		 _$("_ocx_password2").focus();
		 return false;
	} 

	_$("password").value=PwdResult;//获得密码密文,赋值给表单
	_$("local_network").value=machineNetwork;//获得网卡和MAC信息,赋值给表单
	_$("local_disk").value=machineDisk;//获得硬盘信息,赋值给表单
	_$("local_nic").value=machineCPU;//获得CPU信息,赋值给表单

	document.form1.submit();	
}

function FormSubmit5(){  
	 
	 $.ajax({
		url: "../../srand_num.jsp?"+get_time(),
		type: "GET",
		async: false,
		success: function(srand_num){
		    pgeditor.pwdSetSk(srand_num);
		    pgeditor1.pwdSetSk(srand_num);
		    pgeditor2.pwdSetSk(srand_num);
		}
	 });
	
	if(pgeditor.pwdLength()==0){
	     alert("旧密码不能为空");
		 _$("_ocx_password").focus();
		 return false;
	}
	
	if(pgeditor1.pwdLength()==0){
	     alert("新密码不能为空");
		 _$("_ocx_password1").focus();
		 return false;
	}
	
	if(pgeditor1.pwdStrength()<3){
	     alert("密码至少是数字符号字母的两种组合！");
		 _$("_ocx_password1").focus();
		 return false;
	}
	
	if(pgeditor1.pwdValid()==1){
		alert("新密码不符合要求");
		 _$("_ocx_password1").focus();
		 return false;
	}
	if(pgeditor2.pwdLength()==0){
		alert("重复新密码不能为空");
		 _$("_ocx_password2").focus();
		 return false;
	}
	if(pgeditor1.pwdHash()!=pgeditor2.pwdHash()){
	     alert("两次密码不一致");
		 _$("_ocx_password2").focus();
		 return false;
	}	
	return true;
	//var PwdResult=pgeditor.pwdResult();
	//var machineNetwork=pgeditor.machineNetwork();
	//var machineDisk=pgeditor.machineDisk();
	//var machineCPU=pgeditor.machineCPU();
	//_$("password").value=PwdResult;//获得密码密文,赋值给表单
	//_$("local_network").value=machineNetwork;//获得网卡和MAC信息,赋值给表单
	//_$("local_disk").value=machineDisk;//获得硬盘信息,赋值给表单
	//_$("local_nic").value=machineCPU;//获得CPU信息,赋值给表单

	//document.form1.submit();	
}
//清除密码强度  
function ClearLevel(){
    _$("passwd_level_1").style.background="url(../../images/bg.gif)";
    _$("passwd_level_2").style.background="url(../../images/bg.gif)";
    _$("passwd_level_3").style.background="url(../../images/bg.gif)";
}

function ClearLevel1(){
    _$("passwd_level_4").style.background="url(../../images/bg.gif)";
    _$("passwd_level_5").style.background="url(../../images/bg.gif)";
    _$("passwd_level_6").style.background="url(../../images/bg.gif)";
}

function ClearLevel2(){
    _$("passwd_level_7").style.background="url(../../images/bg.gif)";
    _$("passwd_level_8").style.background="url(../../images/bg.gif)";
    _$("passwd_level_9").style.background="url(../../images/bg.gif)";
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
  var n=pgeditor1.pwdStrength();
  if(n>1){
  	  SetPWDStrength1(n);
  }else{
       ClearLevel1();
  }
}

//获取密码强度
function GetLevel2(){
  var n=pgeditor2.pwdStrength();
  if(n>1){
  	  SetPWDStrength2(n);
  }else{
       ClearLevel2();
  }
}