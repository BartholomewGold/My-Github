<!--

  function tomoney(form,txtmoney,hidmoney,currType){
  	var tonumber;
    var misnumber;
    var re = /,/g;
    var txt_money = eval("document."+form+"."+txtmoney);
    var hid_money = eval("document."+form+"."+hidmoney);
    tonumber = txt_money.value.replace(re,"");
    txt_money.value = "";
    var reg = /^[0-9.]+$/;    
	  if (tonumber ==""){	      
	  }else if((!reg.test(tonumber))||(tonumber.indexOf(".")!=tonumber.lastIndexOf("."))){
	   	    alert("请输入合法的金额");
	        txt_money.focus(); 
	        return;   	
	  }else {	  	
	   	 var numberlen = tonumber.indexOf(".");
	     if (numberlen ==-1){
	     	    misnumber = ".00";
	     }else{	
	     	    if(currType == '027'){
	     	    	alert("您选择的是日元，请输入以整元为单位金额");
	        		txt_money.focus(); 
	        		return; 
	     	    }		     	
			     	misnumber = tonumber.slice(numberlen);
			     	if(misnumber.length== 1){
			     		misnumber = misnumber +"00";
			     	}else if(misnumber.length==2){
			     		misnumber = misnumber + "0";
			     	}else if(misnumber.length>=4){
			     		alert("输入金额小数点右边的位数不能超过两位！");
		          txt_money.focus(); 
		          return;
			     	} 
			     	tonumber = ''+tonumber.slice(0,numberlen);			     	
	     }
	     if(tonumber.length==0)
			     tonumber = "0";
			 else if(tonumber.length!=1){
			     tonumber=removeZero(tonumber);
			 }
			     	
	     if(tonumber.length >11){
	     	    alert("输入金额过长，请重新输入");
	     	    txt_money.focus(); 
	     	    return;  
	     }
	     var hidNumber = removeZero(tonumber+misnumber.slice(1));
	     if(hidNumber.length ==0){
	     	  hidNumber = "0";
	     	  //alert("输入的金额必须大于零");
	        //txt_money.focus(); 
	        //return; 
	     }	     
	     hid_money.value = hidNumber;
	     if(currType == '027') 
	     	  txt_money.value = parseComma(tonumber);
	     else 
	     	  txt_money.value = parseComma(tonumber)+misnumber;	     	  
    }     	
 }
    
	function parseComma(number) {
		number = '' + number;
		if (number.length > 3) {
			var mod = number.length % 3;
			var output = (mod > 0 ? (number.substring(0,mod)) : '');
			var numLen = Math.floor(number.length / 3);
			for (i=0 ; i < numLen; i++) {
//				if ((mod == 0) && (i == 0))
					output += number.substring(mod+ 3 * i, mod + 3 * i + 3);
//				else
//					output += ',' + number.substring(mod + 3 * i, mod + 3 * i + 3);
			}
			return output;
		}
		else return number;
	}
	function removeZero(number) {
	  number = ''+number;
		var sChar = '';
		var pos = 0;
		var len = number.length;
		for(var k = 0;k<len;k++){
				  sChar = number.charAt(k);
				  if(sChar == '0')
				     	pos++;
				  else break;
		}
		return (number.slice(pos));	
	}
//-->
