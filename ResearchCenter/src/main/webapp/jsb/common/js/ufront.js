// JavaScript Document
//UObjectç»ååè¡¨ï¼æ£åè¡¨ï¼æ¸¸æ ç­çæ°æ®ç»æ
function UObject() {
	this.array = new Array() ;
}

UObject.prototype = new Object() ;

UObject.prototype.add = function(child, idxName) {
	if (! child) {return ;} 
	if(! idxName) {idxName = "id" ;} ;
	
	this.array.push (child) ;
	if($S(child[idxName])) {this[child[idxName]] = child ;}
}

//Cookie
function Cookie(document, name, hours, path, domain, secure){

    this.$document = document;
    this.$name = name;

    if (hours)  {this.$expiration = new Date((new Date()).getTime(  ) + hours*3600000); }
    else { this.$expiration = null; }

    if (path) {this.$path = path; } else {this.$path = null; }
    if (domain) {this.$domain = domain;} else {this.$domain = null; }
    if (secure) {this.$secure = true;}  else {this.$secure = false;}

}

Cookie.prototype.store = function ( ) {

    var cookieval = "";

    for(var prop in this) {
        if ((prop.charAt(0) == '$') || ((typeof this[prop]) == 'function')) {
            continue;
        }
        if (cookieval != "") cookieval += '&';

        cookieval += prop + ':' + escape(this[prop]);

    }

    var cookie = this.$name + '=' + cookieval;

    if (this.$expiration)
        cookie += '; expires=' + this.$expiration.toGMTString(  );

    if (this.$path) cookie += '; path=' + this.$path;
    if (this.$domain) cookie += '; domain=' + this.$domain;
    if (this.$secure) cookie += '; secure';

    this.$document.cookie = cookie;
}

Cookie.prototype.load = function(  ) { 

    var allcookies = this.$document.cookie;
    if (allcookies == "") return false;

    var start = allcookies.indexOf(this.$name + '=');
    if (start == -1) return false;   // Cookie not defined for this page
    start += this.$name.length + 1;  // Skip name and equals sign

    var end = allcookies.indexOf(';', start);
    if (end == -1) end = allcookies.length;

    var cookieval = allcookies.substring(start, end);
    var a = cookieval.split('&');    // Break it into an array of name/value pairs
    for(var i=0; i < a.length; i++)  // Break each pair into an array
        a[i] = a[i].split(':');

    for(var i = 0; i < a.length; i++) {
        this[a[i][0]] = unescape(a[i][1]);
    }

    return true;
}

Cookie.prototype.remove = function(  ) {

    var cookie;
    cookie = this.$name + '=';
    
    if (this.$path) cookie += '; path=' + this.$path;
    if (this.$domain) cookie += '; domain=' + this.$domain;

    cookie += '; expires=Fri, 02-Jan-1970 00:00:00 GMT';

    this.$document.cookie = cookie;
}

//====æ­£å===============================================
function URegex() {}
URegex.exp_email = "[a-zA-Z0-9_-]+(\.([a-zA-Z0-9_-])+)*@[a-zA-Z0-9_-]+[.][a-zA-Z0-9_-]+([.][a-zA-Z0-9_-]+)*" ;
URegex.exp_mobile = "[0-9]{11}" ;
URegex.EMAIL = new RegExp("^" + URegex.exp_email + "$") ;
URegex.MOBILE = new RegExp("^" + URegex.exp_mobile + "$") ;
URegex.EMAIL_MOBILE = new RegExp("^(" + URegex.exp_email + ")|(" + URegex.exp_mobile + ")$") ;
URegex.URL = new RegExp("http://") ;
URegex.NUMBER = new RegExp("^[0-9]*$") ;

function deepCopy(origin, copy) {
	if (!origin || ! origin instanceof Object) {return null ;}
	if(!copy) {copy = new Object(); }
	
	if (origin instanceof Number) {return origin ;}
	if (origin instanceof String) {return origin ;}
	
	for (var i in origin) {
		if(origin[i]) {
			try{
				copy[i] = origin[i] ;
			}catch (ex) {
			}
		}
	}
	
	return copy ;
}

function evalSize(size, offset) {
	size = eval(size) ;
	if(offset) {size += eval(offset) ;}
	return size + "px" ;
}

//åå¾äºä»¶ä¸­çé®çå¼
function getKeyCode (eve) {
	if(eve) return eve.which ;
	if(event) return event.keyCode ;
	return "0" ;
}

//åå¾äºä»¶ä¸­çé¼ æ ä½ç½®
function calPos (e, offset_x, offset_y) {
	if (!e) e = window.event ; //IE
	if (!offset_x) offset_x = 0 ;
	if(!offset_y) offset_y = 0 ;
	
	var target = e.target ? e.target : e.srcElement ;
	
	var loc = getAbsLocation (target) ;
	posX = loc.x + loc.width + offset_x ;
	posY = loc.y + offset_y ;
		
	return posX + "|" + posY ;
}

function enBright (elem, base) {
	elem = $(elem) ;
	if(!elem) {return ;}
	
	if(base) {elem.className = base ;}
	elem.baseStyle = elem.className ;
	elem.brt = (base ? base+"_" : "") + "bright" ;
	
	elem.onmouseover = function() {this.className = this.brt ;} ; 
	elem.onmouseout = function() {this.className = this.baseStyle ;} ; 
}

function expandFill (elem) {
	if(!elem) {return ;}
	elem.style.left = "0px" ;
	elem.style.top = "0px" ;
	elem.style.width =  this.document.body.clientWidth + "px" ;
	elem.style.height =  this.document.body.clientHeight + "px" ;
}

//é¡µé¢ç¸å³
function UFront() {}

//é¡µé¢åå§å
UFront.initCanvas = function() {
	
	//æä»¬åå®äºPageä¸çä¸äºéç¨å®¹å¨
	//canvas : é¡¶çº§é¡µé¢é¢æ¿,å¦æé¡µé¢ä¸­æ²¡æå­å¨ï¼åæ¯body
	//messages : æ¶æ¯ææ¬
	//labels : æ ç­¾ææ¬
	//parts : ææçé¨ä»¶
	if(! window.canvas)   {window.canvas = window.document.body ; }
	if(! window.verimage_src)   {window.verimage_src = "" ;} 
	if(! window.messages) {window.messages = new Object() ;} 
	if(! window.labels)   {window.labels = new Object() ;} 
	if(! window.sectionFunc)   {window.sectionFunc = new Object() ;} 
	window.local_messages = new Object() ;
	window.local_labels = new Object() ;
	
	//ç®å
	window.getMessage = function(key) { 
		var rtn = window.local_messages[key] ; 
		if(! rtn) {rtn = window.messages[key] ; } 
		return rtn ? rtn : "" ;
	}
	window.getLabel = function(key) { 
		var rtn = window.local_labels[key] ? window.local_labels[key] : window.labels[key] ; 
		return rtn ? rtn : "" ;
	}
	window.getAuth = function(key) { 
		var rtn = null ;
		if(window.local_parts) {rtn = window.local_parts._auths[key] ; }
		rtn = rtn ? rtn : window.parts._auths[key] ; 
		return rtn ? rtn : "" ;
	}
	window.getPart = function(key) {
		var rtn = null ;
		if(window.local_parts) {rtn = window.local_parts[key] ; }
		if(!rtn && window.parts) {rtn = window.parts[key] ; }
		return rtn ;
	}
	
	//é»è®¤çLoadingæ¯éæ¨¡æçï¼æ¾ç°çï¼å¦ææå¶ä»çè¦æ±ï¼å¨è¿éè®¢å¶
	//é»è®¤çææ¬æ¯DEFAULT_LOADING_MESSAGEâ
	//ä¸¤ç§ï¼silent:å®é,ä¸éè¦æç¤º, pause:æ¨¡æï¼ç¦æ­¢å¶ä»å¨ä½
	window.effLoad = function(mode, msg) {this._tmpLoadMode = mode ; this._tmpLoadMsg = msg} ;
	window.getLoadMode = function () { var rtn =  this._tmpLoadMode; this._tmpLoadMode = null ; return rtn ;} ;
	window.getLoadMsg = function () { var rtn = this._tmpLoadMsg ; this._tmpLoadMsg = null ; return rtn ;} ;
	window.silentLoading = function (msg) {this.effLoad("silent", msg) ;} ;
	window.promptLoading = function (msg) {this.effLoad("prompt", msg) ;} ;
	window.pauseLoading = function (msg) {this.effLoad("pause", msg) ;} ;
	
	
	//éç¦»å±
	window.showShield = function(zindex) { //###å¦ä½éèæµè§å¨æ»å¨æ¡
		if(! this._shieldLay) {
			var lay = $("sys_shield") ;
			if(!lay) { lay = $CN("div") ; lay.id = "sys_shield" ;}
			
			lay.style.position = "absolute" ;
			lay.style.zIndex = zindex ? zindex : "600" ;
			this._shieldLay = lay ;
			this.document.body.appendChild(lay) ;
		}
		
		expandFill(this._shieldLay) ;
		$PD(this._shieldLay) ;
	}
	
	window.hiddenShield = function() {
		if(this._shieldLay) {
			$PR(this._shieldLay) ;
		}
	}
	
	//è¿åº¦æ¡å±,modeå¯ä»¥éæ©æ¯æºå¸¦éç¦»å±ï¼è¿æ¯ä¸æºå¸¦
	window.showLoading = function(msg) { 
		if(! this._loadingLay) {
			var lay = $("sys_loading") ;
			if(!lay) { lay = $CN("div") ; lay.id = "sys_loading" ;}
			
			lay.style.position = "absolute" ;
			lay.style.zIndex = "1001" ;
			var message = $CN("div") ;
			message.className = "message" ;
			lay.message = message ;
			lay.appendChild(message) ;
			
			this._loadingLay = lay ;
			this.document.body.appendChild(lay) ;
		}
		
		if(!$S(msg)) {msg = messages["default_loading"] ; }
		this._loadingLay.message.innerHTML = msg ;
		
		$PD(this._loadingLay) ;
	}
	
	window.hiddenLoading = function() {
		if(this._loadingLay) {
			$PR(this._loadingLay) ;
		}
	}
	
	//éè¯¯æç¤º
	window.showFault = function(msg) { 
		this.hiddenLoading() ;
		if(!$S(msg)) {msg = "" ; }
		
		if(this.parts.sys_fault) {
			var dialog = this.parts.sys_fault ;
			if(dialog.members["message"]) {dialog.members["message"].setValue(msg) ;}
			dialog.open(null, "æä½æ²¡ææå", true, "center", null) ;
		}else {
			$alert(msg) ;
		}
		
	}
	
	//ç»å½æ¡
	window.showLogin = function(msg) { 
		this.hiddenLoading() ;
		
		if(this.parts.sys_login) {
			var dialog = this.parts.sys_login ;
			if(!dialog.onOpening) {
				//å°æªåå§å
				dialog.onOpening = function() {
					this.members["message"].setValue("") ;
					$PH(this.members["message"]) ;
					window.errorMsgHolder = this.members["message"] ;
				}
				dialog.onClosing = function() {
					window.errorMsgHolder = null ;
				}
			}
			dialog.open(null, msg, true, "center", null) ;
		}else {
			$alert(msg) ;
		}
		
	}
	
	
	//æ¾ç¤ºLoadingæ è®°
    //éè¦ä¸ä¸ªé®è½å±ï¼å¹¶å¨é®è½å±ä¸æ¾ç¤ºloadingæ ç¤º
    DWREngine.setPreHook ( 
	  function () {
		  var mode = window.getLoadMode() ;
		  var msg = window.getLoadMsg() ;
		  switch (mode) {
			  case "silent" : break ;
			  case "pause" : window.showShield ("1000") ;
			  case "prompt" :
			  default : window.showLoading(msg) ; break ;
		  }
	  }
	);
  
    //æ¾ç¤ºLoadingæ è®°
    //åæ¶é£ä¸ªé®è½å±
    DWREngine.setPostHook(
  	  function () {
  		window.hiddenLoading() ;
		window.hiddenShield() ;
		//ä»»ä½æ¶åçä»»ä½æä½ï¼å¨ç»æåé½éè¦æ´æ°æ ¡éªç ï¼é¨åæä½æ¯ä¼å·æ°æ ¡éªç çï¼
		for (var i = 0 ; i < window.parts._verimages.length ; i ++ ){
			window.parts._verimages[i].refresh();
		}
		if(window.local_parts) {
			for (var i = 0 ; i < window.local_parts._verimages.length ; i ++ ){
				window.local_parts._verimages[i].refresh();
			}
		}
	  }
    );
  
    //å®ä¹DWRå¼å¸¸å¤çæ¹æ³
	DWREngine.setErrorHandler(
		function (errorCode) {
			if(!errorCode) {errorCode = "" ;} 
			var errorMsg = errorCode ;
			if(window.getMessage(errorCode)) {errorMsg = window.getMessage(errorCode) ;}
			if(window.errorMsgHolder) {
				window.errorMsgHolder.setValue(errorMsg) ;
				errorMsg ? $PV(window.errorMsgHolder) : $PH(window.errorMsgHolder) ;
			}
			else {
				switch(errorCode) {
					case "not_logon" : window.showLogin(errorMsg) ;break ;
					default :window.showFault(errorMsg) ;break ;
				}
			}
		}
	);
	
	//=========================================================================
	//ç¨äºå¯¼èªæ ,labelæ¯ææ¬ï¼intervalæ¯é´éç¬¦,æ ¹æ®è¿äºå¯ä»¥è·å¾å¯¼èªæ çææ¬
	window.navi = new Object() ;
	navi.interval = "<span>&nbsp;--&gt;&nbsp;</span>" ;
	navi.buildWelcome = function () {
		var label = window.getLabel("welcome") ;
		return "<span>" + label + "</span>" ; 
	}
	navi.buildDir = function (name) {
		var label = window.getLabel(name) ;
		return "<a href='javascript:(route(\"" + name + "\"))'>" + label + "</a>" ; 
	}
	navi.buildLeaf = function (name) {
		var label = window.getLabel(name) ;
		//æ¹åæ é¢æ 
		if(! window.bak_title) {window.bak_title = window.document.title ;}
		window.document.title = window.bak_title + " - " + label ;
		
		return "<span>" + label + "</span>" ; 
	}
	navi.getContent = function (path) {
	
		path = path ? path : "" ;
		if(path == "") {return this.buildWelcome() ; } //é¦é¡µæ¬¢è¿è¯
		
		var content = "" ;
		content += this.buildDir("") ; //å°âå°é¦é¡µâçé¾æ¥åç½®
		
		var remain = path ;
		var token = "" ;
		do {
			content += this.interval ;
			
			var offset = remain.indexOf("$") ;
			if (offset >= 0) {
				token += remain.substring(0, offset) ;
				remain = remain.substring(offset + 1) ;
				content += this.buildDir(token) ;
			}else {
				token += remain ;
				remain = "" ;
				content += this.buildLeaf(token) ;
			}
			
			token += "$" ;
		}while (remain != "")
		
		return content ;
	}
	//===================================================================
	
	//é¿æçCookie(ä¸å¹´)
	window.longtermCookie = new Cookie(document, "longterm", 8760) ;
	
	//åå§ååä¸ªé¨ä»¶
	window.parts = UPart.buildParts(document) ;
	
	//æ¶é¤ææé¾æ¥çèçº¿æ¡ï¼
	for(var ii=0; ii<document.links.length; ii++) {
 		document.links[ii].onfocus=function(){this.blur() ;}
	}
	
	//ä»£çé¡µé¢ä¸ç¹å»äºä»¶
	document.body.onmousedown = function () {
		
		if(window.ctxWindow && ! window.ctxWindow.using ) {
			window.ctxWindow.close();
		}
		
	};
	
	//é¡µé¢å¨ç»å½ååçåå
	window._afterLogin = new Array() ;
	window._afterLogout = new Array() ;
	window.addLoginAdvice = function (advice) {if(advice) {this._afterLogin.push(advice) ;}} ;
	window.addLogoutAdvice = function (advice) {if(advice) {this._afterLogout.push(advice) ;}} ;
	window.adaptToUser = function(user) {
		window.user = user ;
		//éèææéè¦éªè¯çé¨ä»¶
		for (var i in window.parts._auths) { $PH(window.parts._auths[i]) ; }
		if (window.local_parts) {for (var i in window.local_parts._auths) { $PH(window.local_parts._auths[i]) ; }}
		if(user) {
			var sections = user.sectionAuthors ;
			for (var i = 0 ; i < sections.length ; i ++) {
				$PV(window.getAuth(sections[i])) ;
			}
			for (var i = 0 ; i < this._afterLogin.length ; i ++ ) {
				var advice = this._afterLogin[i] ;
				if(advice) { try { advice.call(this, user) ;} catch(ex) {} }
			}
		}else {
			for (var i = 0 ; i < this._afterLogout.length ; i ++ ) {
				var advice = this._afterLogout[i] ;
				if(advice) { try { advice.call(this) ;}catch(ex) {} }
			}
		}
	}
}

UFront.fillRegion = function (path, region, content, initable) {
	
	DWRUtil.setValue(region, content) ;
	if(initable) {UFront.initContent(region) ;}
	
	if(window.sectionFunc[path]) {window.sectionFunc[path]() ;}
}

UFront.initContent = function(content) {
	window.local_parts = null ;
	
	content = $(content) ;
	if(!content) {return ;} 
	
	window.local_parts = UPart.buildParts(content) ;
	
	//if(window.local_parts._init) {window.local_parts._init.onclick();}
	
}

UFront.initPage = function() {
	var win = top ? top : window ;
	
	var errorSpan = $("errorCodeHolder") ;
	if(errorSpan && errorSpan.value) {
		if(win && win.showFault) {win.showFault(errorSpan.value) ;} 
	}
}


//å¯ææ½æ§ä»¶
UFront.draggate = function (lay) {
	lay = $(lay) ;
	if (! lay) {return ;}
	
	//lay.style.cursor = "pointer" ;
	
	//ææ½çç®æ ï¼å¦ææ²¡ææå®ï¼åææ½èªèº«
	var dragee = lay.dragee ? lay.dragee : lay ;
	
	lay.onmousedown = function(event) {beginDrag(dragee, event) ; } ;
}



//çªå£======================================================================================



//é¡µé¢é¨ä»¶======================================================================================
function UPart() {}

//å°ä¸ä¸ªåºååçé¨ä»¶å¨é¨æ§è¡åå§å
UPart.buildParts = function (region, parts) {
	region = $(region) ;
	if (! region) {return ;}
	
	if(!parts) { parts = new UObject() ; }
	parts._verimages = new Array() ;
	parts._auths = new Object() ;
	
	var partArray = region.getElementsByTagName("*") ;
	
	//æ ¹æ®åºååçæ ç­¾ï¼æå»ºè¿äºé¨ä»¶
	for (var i = 0 ; i < partArray.length ; i ++ ) {
		var part = partArray[i] ;
		//å¤§å°åä½ç½®
		UPart.setDimension(part) ;
		//æå³é£æ ¼çè®¾å®ï¼è¿æ¯ä¸ºäºç®åç¾å·¥æ¸²æçå·¥ä½éï¼æ²¡æå½±åä»»ä½è¡ä¸º
		UPart.setStyle(part) ;
		
		var ukind = part.getAttribute("ukind") ;
		var ugroup = part.getAttribute("ugroup") ;
		
		if(!ukind) {ukind = "" ;}
		
		//var tag = part.tagName.toLowerCase() ;
		//if(part.getAttribute("type")) {tag += "#" + part.getAttribute("type").toLowerCase() ;}
		
		//å¦æä¸ç³ææ§ä»¶ï¼ä¸äºå¤ç
		if(!ukind && !ugroup) {continue ;}
		
		//if(part.abc) {alert(part.tagName) ;}
		
		part.ukind = ukind ;
		part.ugroup = ugroup ;
		//id,name,label,manneræ¯ä¸ä¸ªé¨ä»¶çåºæ¬å±æ§ï¼å¹¶ä¸ï¼é¨ä»¶å­å¨setValue/getVauleçé»è®¤å®ç°
		part.id = part.getAttribute("id") ;
		part.name = part.getAttribute("name") ;
		part.label = part.innerHTML ;
		
		part.members = new UObject() ;
		
		//å­å¨ä¸ä¸ªå¨ä½è°ç¨æ ï¼å¯ä»¥å®æ¶å¢å è¡ä¸º
		part.advices = new Array() ;
		part.addAdvice = function(advice) {this.advices.push(advice) ; }
		part.action = function() {
			for(var i = 0 ; i < this.advices.length ; i ++) {
				var advice = this.advices[i] ;
				advice.call(this) ;
			}
		}
		
		UPart.setManner(part) ;
		
		part.setLabel = function(label) {part.innerHTML = label ? label : "" ;} ;
		part.getLabel = function() {return part.innerHTML ; } ;
		
		part._innerSign = null ;
		part.setValue = function(value) {part._innerSign = value ;} ;
		part.getValue = function() {return part._innerSign ;} ;
		
		parts.add(part) ;
	}
	
	//ç»åå³ç³»
	for (var i = 0 ; i < parts.array.length ; i ++ ) {
		var part = parts.array[i] ;
		UPart.assemble(part, parts) ;
	}
	
	//alert(parts["m1"].group) ;
	//alert("2" + "--" + parts["m1"].id + ":" + parts["m1"].group.id) ;
	
	//ç¹æ®å
	for (var i = 0 ; i < parts.array.length ; i ++ ) {
		var part = parts.array[i] ;
	
		//å¢å ç¹æ§
		var tuple = part.ukind.split("|") ; 
		if(tuple.length > 0) {
			for (var j = 0 ; j < tuple.length ; j ++ ) {
				var kind = tuple[j] ;
				switch (kind) {
					case "widget" : UPart.UWidget(part) ;break ;
					
					case "tabber" : UPart.UTabber(part) ;break ; //æ ç­¾é¡µ
					case "grid" : UPart.UGrid(part) ;break ; //è¡¨æ ¼
					case "form" : UPart.UForm(part) ;break ; //è¡¨å
					case "track" : UPart.UTrack(part) ; break ; //æ»å¨
					
					case "sign" : break ; //è®°å½ä¿¡æ¯
					case "label" : UPart.ULabel(part) ;break ; //æ¾ç¤ºä¿¡æ¯
					case "check" : UPart.UCheck(part) ;break ; //æ¾ç¤ºä¿¡æ¯
					case "command" : UPart.UCommand(part) ;break ; //æ§è¡æä½ï¼ä¹å¯æ¾ç¤ºä¿¡æ¯
					case "text" : UPart.UText(part) ;break ;
					
					case "folder" : UPart.UFolder(part) ;break ;     //æå ï¼æ¾ç¤º/éèï¼çè½å
					
					case "verimage" : UPart.UVerimage(part); parts._verimages.push(part) ; break ;   //è¡¨åçå¾çæ ¡éª
					case "auth" : UPart.UAuth(part); if($S(part.name)){parts._auths[part.name] = part ;} break ; //ä¾æ®ç¨æ·è®¢å¶
					case "submit" : UPart.USubmit(part); break ; //è¡¨åçæäº¤è¡ä¸ºææè
					case "zoom" : UPart.UZoom(part); break ; //å³èéæ©
					case "router" : UPart.URouter(part); break ; //ç»é¢è·¯ç±
					
					case "datepicker" : UPart.UDatePicker(part); break ; 
					case "panel_calendar" : UPart.UCalendar(part);break ;
					
					
					case "keeper" :  UPart.UKeeper(part); break ; //å¯ä»¥è¢«Cookieä¿å­çè½å
					
					case "init" : $PR(part); parts._init = part; break ; //åå§ååºåçè½å,åå®¹é¨åéè¦ä½¿ç¨
					
					case "region" :
					default : break ;
				}
			}
		}
	}
	
	//ç»ä¸è¿è¡åå§å
	for (var i = 0 ; i < parts.array.length ; i ++ ) {
		var part = parts.array[i] ;
		if(part.init) {part.init() ;}
	}
	
	return parts ;
}

//ç»åParté´çå³ç³»
UPart.assemble = function (part,parts) {
	
	if(!part) {return ;}
	
	
	
	//é¨ä»¶å­å¨å±ç»ï¼å±ä¸.
	var memberList = part.getAttribute("umember") ;
	var group = part.ugroup ;
	
	if(memberList) {
		var tuple = memberList.split("|") ;
		for(var i = 0 ; i < tuple.length ; i ++) {
			var member = parts[tuple[i]] ;
			if (member && member.id) {
				//æ èç¹çååå³è
				member.group = part ;
				part.members.add(member, "name") ;
			} 
		}
	}
	
	if(group) {
		if (parts[group]) {
			parts[group].members.add(part, "name") ;
			part.group = parts[group] ;
		} 
	}
	
}

UPart.setDimension = function (view) {
	var dim = view.getAttribute("dim") ;
	if(!view || !dim) {return ;}
	
	var tuple = dim.split("|") ;
	if(tuple[0]) {view.style.width = evalSize(tuple[0]) ;} 
	if(tuple[1]) {view.style.height = evalSize(tuple[1]) ; } //view.style.lineHeight = 
}

UPart.setPosition = function (view) {
	var position = view.getAttribute("position") ;
	if(!view || !position) {return ;}
	
	if(position == "center") {
		if(!view.style.width) {view.style.width = "400px" ; } 
		if(!view.style.height) {view.style.height = "300px" ; } 
		view.style.left = "50%" ;
		view.style.top = "50%" ;
		view.style.marginLeft = (0 - Math.floor(parseInt(view.style.width)/2)) + "px" ;
		view.style.marginTop = (0 - Math.floor(parseInt(view.style.height)/2)) + "px" ;
		
		return ;
	}
	
	var tuple = position.split("|") ;
	if(tuple[0]) {view.style.left = evalSize(tuple[0]) ;} 
	if(tuple[1]) {view.style.top = evalSize(tuple[1]) ;} 
}

UPart.setStyle = function(view) {
	var style = view.className ;
	
	if(!style) {return ;}
	if(style.length > 2 && style.substring(0,2) == "r_") {
		var base = style.substring(2) ;
		enBright(view, base) ;
	}
}

UPart.setManner = function (view) {
	var manner = view.getAttribute("manner") ;
	if(!view || !manner) {return ;}
	
	var tuple = manner.split("|") ;
	//å¯¹äºåç§°æ¥è¯´ï¼r_ s_ç­é½å·æç¹æ®æä¹
	view.setClassName = function (style) {
		if(!style) {return ;}
		if(style.length > 2 && style.substring(0,2) == "r_") {
			this.baseStyle = style.substring(2) ;
			this.className = this.baseStyle ;
			this.onmouseover = function() {this.className = this.baseStyle + "_bright" ;} ;
			this.onmouseout = function() {this.className = this.baseStyle ;}
		}else if(style.length > 2 && style.substring(0,2) == "s_") {
			this.className = style.substring(2) ;
			this.onmouseover = function() {} ;
			this.onmouseout = function() {} ;
		}else {
			this.className = style ;
			this.onmouseover = function() {} ;
			this.onmouseout = function() {} ;
		}
	}
	
	if(tuple[0]) {
		view.setClassName(tuple[0]) ;
	} 
	
	//å­å¨æ»å¨çæåµ
	if (tuple.length > 1) {
		view._manners = tuple ;
		view._mannerIdx = 0 ;
		view.addAdvice(function () {
			this._mannerIdx =  (this._mannerIdx + 1) % this._manners.length ;
			this.setClassName(this._manners[this._mannerIdx]) ;
		}) ;
	}
}

//æ ¹æ®ä¸ç»valuesï¼æ¥è®¾ç½®é¨ä»¶çå¼
UPart.setValues = function (parts, values) {
	if(! values || ! parts) {return ;}
	for(var i in values) {
		if(parts[i] && parts[i].setValue) {parts[i].setValue(values[i]) ;}
	}
		
}

//çªå£
UPart.UWidget = function(content) {
	content = $(content) ;
	if (! content) {return ;}
	
	try{
		document.body.removeChild(content) ;
	}catch(ex) {}
	
	//çªå£åå§ä¸ºä¸å¯è§
	var widget = $CN("div") ;
	widget.style.overflow = "hidden" ;
	document.body.appendChild(widget) ;
	widget.className = "widget" ;
	widget.style.position = "absolute" ;
	widget.style.display = "none" ;
	
	widget.content = content ;
	content.widget = widget ;
	
	//æ é¢æ ===================================================
	var caption = $CN("div") ;
	caption.className = "caption" ;
	//ææ¬
	var title = document.createElement("span") ;
	title.className = "txt_title" ;
	content._title = title ;
	content.setCaption = function (cap) {
		if(cap) {this._title.innerHTML = cap ;}
	}
		
	//å¤çæ é¢æ 
	var icon = document.createElement("button") ;
	icon.className = "btn_icon" ;
	icon.disabled = "disabled" ;
	
	var btnClose = document.createElement("button") ;
	btnClose.title = "å³é­" ;
	btnClose.className = "btn_close" ;
	btnClose.content = content ;
	btnClose.onclick = function () {this.content.close();} ;
	
	//ç»å
	caption.appendChild (icon) ;
	caption.appendChild (title) ;
	caption.appendChild (btnClose) ;
		  
	widget.appendChild (caption) ;
	content.caption = caption ;
	caption.dragee = widget ;
	//æ é¢æ [end]===================================================
	
	//ä¸»ä½æ ===================================================
	var body = $CN("div") ;
	body.style.overflow = "auto" ;
	body.appendChild (content) ;
	widget.appendChild (body) ;
	content.body = body ;
	content.dragee = widget ;
	//ä¸»ä½æ [end]===================================================
	
	//å±è½å±========================================================
	var shield = $CN("div") ;
	content.shield = shield ;
	shield.style.overflow = "hidden" ;
	shield.style.position = "absolute" ;
	shield.className = "shield" ;
	$PR(shield) ;
	document.body.appendChild(shield) ;
	
	//å±è½å±[end]========================================================
	
	widget.onmouseover = function () {this.content.using = "using" ; } ;
	widget.onmouseout = function () {this.content.using = null ; } ;
	
	widget.onMovingX = function (deltaX) {
		if(!this.style.left || this.style.left.search("px") < 0) {this.style.left = this.offsetLeft - parseInt(this.style.marginLeft) + "px" ;}
		var left = parseInt(this.style.left) + deltaX ;
		if(left > 0 ) {this.style.left = left + "px" ; return true ; }
		return false ;
	}
	
	widget.onMovingY = function (deltaY) {
		if(!this.style.top || this.style.top.search("px") < 0) {this.style.top = this.offsetTop - parseInt(this.style.marginTop) + "px" ;}
		var top = parseInt(this.style.top) + deltaY ;
		if(top > 0 ) {this.style.top = top + "px" ; return true ; }
		return false ;
	}
	
	
	content.open = function(echo, caption, model, position, dim) {
		
		if(!dim) {dim = content.getAttribute("wdim") ;}
		
		//æå³éä¸­ç¶æååå¤
		if(echo && echo.getValue) {
			for(var i = 0 ; i < this.members.array.length ; i ++ ) {
				var member = this.members.array[i] ;
				if(member && member.preset) {member.preset(echo.getValue()) ;}	
			}
		}
		if(echo && echo.setValue) {this.reply = function(value) {echo.setValue(value); this.close(); } ;}
		else { this.reply = function(value){this.close();} ; }		
		
		//æ é¢æ å³å®æ¯å¦æ¾ç¤º
		if(caption) {
			this.setCaption (caption) ;
			UFront.draggate(this.caption) ;
			$PD(this.caption) ;
		}else {
			this.setCaption ("") ;
			//UFront.draggate(this) ;
			$PR(this.caption) ;
		}
		
		//æ¯å¦modelæ¹å¼å¼¹åº
		if(model) {
			expandFill(this.shield) ;
			$PD(this.shield) ;
			this.widget.style.zIndex = "700" ;
			this.onModel = true ;
		}else {
			this.onModel = null ;
			window.ctxWindow = this ;
		}
		
		//çªå£çé£æ ¼
		this.widget.setAttribute("position", position) ;
		this.widget.setAttribute("dim", dim) ;
		UPart.setDimension(this.widget) ;
		UPart.setPosition(this.widget) ;
		
		$PD(this.widget) ;
		if(this.onOpening) {this.onOpening() ;}
		
		return this.widget ;
	}
	
	content.close = function() {
		if(this.onClosing) {this.onClosing() ;}
		$PR(this.widget) ;
		$PR(this.shield) ;
		if(this.onModel) {
		}else {
			window.ctxWindow = null ;
		}
	}
	
}

//å³èéæ©é¡¹
//å¯¹äºzoomæ¥è¯´ï¼å®éè¦æç¥"target"çå­å¨ï¼å³ä¼ å¼å¾ç®æ 
UPart.UZoom = function(zoom, parts) {
	zoom = $(zoom) ;
	if (! zoom) {return ;}
	
	//ç±äºå¤çä¸çå·®å«ï¼divå¨åä¸ºè¾å¥æ¡ä½¿ç¨æ¶ï¼éè¦éç½®å°ºå¯¸
	var dim = zoom.getAttribute("dim") ;
	var tuple = [200, 14] ;
	if(dim) {
		var tuple = dim.split("|") ;
		if(tuple[0]) {zoom.style.width = evalSize(tuple[0], ($IE()?2:0)) ;} 
		if(tuple[1]) {zoom.style.height = evalSize(tuple[1], 2) ; }
	}
	
	//å¾çæé®
	var icon = zoom.getAttribute("icon") ;
	var triple = ["", 14, 14] ;
	if(icon) {triple = icon.split("|") ;}
	
	$AN(zoom, "input", "editor") ;
	$AN(zoom, "img", "toggle") ;
	
	zoom.editor.className = "inline" ;
	zoom.editor.group = zoom ;
	zoom.editor.action = function () {this.group.action() ;} ;
	zoom.editor.style.width = evalSize(tuple[0]-triple[1]-2) ;
	zoom.editor.style.height = evalSize(tuple[1]-2) ;
	UPart.UText(zoom.editor) ;
	zoom.setValue = function(value) {this.editor.setValue(value) ;} ;
	zoom.getValue = function() {return this.editor.getValue() ;} ;
	
	zoom.toggle.src = triple[0] ;
	zoom.toggle.style.width = evalSize(triple[1]) ;
	zoom.toggle.style.height = evalSize(triple[2]) ;
	
	//å¼¹åºçªå£
	var popup = zoom.getAttribute("popup") ;
	if(popup) {
		var tuple = popup.split("|") ;
		if(tuple.length==5 && tuple[0]) {
			zoom.toggle.onclick = function(event) {
				var host = window.getPart(tuple[0]) ;
				if(host) {host.open(this.parentNode, tuple[1], tuple[2], calPos(event, 6, 0), tuple[3]+"|"+tuple[4]) ;}
			}
		}
	}
	
}

UPart.URouter = function(router) {
	router = $(router) ;
	if (! router || !$S(router.name)) {return ;}
	
	router.style.cursor = "pointer" ;
	
	if(!router.getLabel()) {
		router.setLabel(window.getLabel(router.name)) ;
	}
	
	router.onclick = function () {
		this.action() ;
		if(window.route) {
			window.route(router.name) ;
		}
	}
}

UPart.UDatePicker = function(part) {
	part = $(part) ;
	if (! part || !part.editor ) {return ;}
	
	part.editor.toDisplay = function(date) {
		if(!date || !date instanceof Date) {return "";}
		else {return date.toLocaleDateString() ;}
	}
	part.editor.toEdition = function(date) {
		if(!date || !date instanceof Date) {return "";}
		else {return date.getYear() + "-" + (date.getMonth()+1) + "-" + date.getDate() ;}
	}
	part.editor.toSignal = function(text) {
		if(!text) {return null ;}
		var tuple = text.split("-") ;
		if(tuple.length != 3) {return null ;}
		var year = eval(tuple[0]) ;
		var month = eval(tuple[1]) ;
		var date = eval(tuple[2]) ;
		return new Date(year,month-1,date) ;
	}
}

UPart.UCalendar = function(cal) {
	cal = $(cal) ;
	if (! cal ) {return ;}
	
	cal.cellus = new Array(42) ;
	var tbody = cal.getElementsByTagName("tbody")[0] ;
	var idx = 0 ;
	for (var j = 0 ; j < 6 ; j ++) {
		var bodyRow = $CN("tr") ;
		for (var k = 0 ; k < 7 ; k ++) {
			var td = $CN("td") ;
			bodyRow.appendChild(td) ;
			cal.cellus[idx] = td ;
			td.cal = cal ;
			td.defClass = "week" ;
			if (k == 0) { td.defClass = "sat" ;}
			if (k == 6) { td.defClass = "sun" ;}
			//td.innerHTML = idx ;
			idx ++ ;
		}
		tbody.appendChild(bodyRow) ;
	}
	
	//presetæ¯çªä½åé¨ç©ºé´çéç¨è°åº¦æ¹æ³ï¼ç¨äºå¨å¼¹åºæ¶æ ¹æ®ç¯å¢å³å®å¶ç¶æ
	cal.preset = function (date) {
		if(! date) {date = new Date();}
		if (! date instanceof Date) {return ;}
		
		this.current = date ;
		
		this.year=date.getFullYear();  //å®ä¹yearå±æ§ï¼å¹´ä»½ï¼é»è®¤å¼ä¸ºå½åç³»ç»å¹´ä»½ã
		this.month=date.getMonth()+1;  //å®ä¹monthå±æ§ï¼æä»½ï¼é»è®¤å¼ä¸ºå½åç³»ç»æä»½ã
		this.date=date.getDate();  //å®ä¹dateå±æ§ï¼æ¥ï¼é»è®¤å¼ä¸ºå½åç³»ç»çæ¥ã
		this.day=date.getDay();
		
		this.rearrange() ;
	}
	
	cal.setYear = function(year) {
		if(!year) {return ;}
		year = eval(year) ;
		if(year > 0 && year < 3000) {
			this.year = year ;
			this.rearrange() ;
		}
	}
	
	cal.setMonth = function(month) {
		if(!month && month != 0) {return ;}
		month = eval(month) ;
		if(month >= 1 && month <= 12) {this.month = month ; }
		if(month == 0) {this.month = 12 ; this.year -- ;}
		if(month == 13) {this.month = 1 ; this.year ++ ;}
		
		this.rearrange() ;
	}
	
	cal.members["b_prevYear"].onclick = function() {this.group.setYear(--this.group.year) ;} ;
	cal.members["b_nextYear"].onclick = function() {this.group.setYear(++this.group.year) ;} ;
	cal.members["b_prevMonth"].onclick = function() {this.group.setMonth(--this.group.month) ;} ;
	cal.members["b_nextMonth"].onclick = function() {this.group.setMonth(++this.group.month) ;} ;	
	cal.members["t_year"].action = function() {this.group.setYear(eval(this.value)) ;} ;	
	cal.members["t_month"].action = function() {this.group.setMonth(eval(this.value)) ;} ;	
	
	cal.rearrange = function () {
		var firstDay = new Date(this.year,this.month-1,1);
		var today = new Date() ;
		var weekOffset = firstDay.getDay() ;
		var dayCount = 0;
		
		//æ¹åæç¤ºå¨
		this.members["t_year"].value = this.year ;
		this.members["t_month"].value = this.month ;
		
		switch(this.month)
		{
			case 1:
			case 3:
			case 5:
			case 7:
			case 8:
			case 10:
			case 12:
			  dayCount=31;
			  break;
			case 4:
			case 6:
			case 9:
			case 11:
			  dayCount=30;
			  break;
			case 2:
			  if((this.year%4==0)&&(this.year%100!=0)||(this.year%400==0))
				dayCount=29;
			else
				dayCount=28; 
		}
		//æ¸é¤å½åæ¥æè¡¨æ ¼ç¶æ
		for (var i = 0 ; i < this.cellus.length ; i ++) {
			var td = this.cellus[i] ;
			td.className = "blank" ;
			td.innerHTML = "&nbsp;" ;
			td.onmouseover = null ;
			td.onmouseout = null ;
			td.onclick = null ;
		}
		//å¡«åè¡¨æ ¼
		for (var j = 1 ; j < dayCount + 1 ; j ++) {
			var td = this.cellus[j + weekOffset - 1] ;
			td.innerHTML = j ;
			if (today.getYear() == this.year && today.getMonth() == this.month-1 && j == today.getDate()) {
				td.className = "today" ;
			}else {
				td.className = td.defClass ;
			}
			
			if (this.current && 
				this.current.getYear() == this.year && 
				this.current.getMonth() == this.month-1 && 
				j == this.current.getDate()) {//è¢«éä¸­
				td.className = "marker" ;
			}
			
			enBright(td) ;
			
			td.onclick = function () {
				var cal = this.cal ;
				cal.date = eval(this.innerHTML) ;
				if (cal.group && cal.group.reply) {
					var date = new Date(cal.year,cal.month-1,cal.date) ;
					cal.group.reply(date) ;
				}
			} ;
		}
	}
}

UPart.UAuth = function(auth) {
	auth = $(auth) ;
	if (! auth || !$S(auth.name)) {return ;}
	
	$PH(auth) ;
}

UPart.UKeeper = function(keeper) {
	keeper = $(keeper) ;
	if (! keeper) {return ;}
	
	var name = keeper.name ;
	keeper.oldGetValue = keeper.getValue ;
	
	if(name && keeper.oldGetValue) {
		keeper.getValue = function() {
			var value = this.oldGetValue();
			if(value) {
				window.longtermCookie[this.name] = value ;
				window.longtermCookie.store() ;
			}
			return value;
		} ;
	}
	
	if(name && window.longtermCookie.load() && window.longtermCookie[name]) {
		if(!keeper.getValue() && keeper.setValue) {keeper.setValue(window.longtermCookie[name]) ; }
	}
}


//ææ¬ï¼è¿æ¯æåºæ¬çç¨äºæ¾ç¤ºå­ç¬¦çé¨ä»¶ï¼åªæ¯æ¾ç¤º,æ²¡ææä½è¡ä¸º==================
UPart.ULabel = function(label) {
	label = $(label) ;
	if (! label) {return ;}
	
	label.setValue = function (value) {
		if(! value) {value = "" ;}
		this.innerHTML = value ;
	} ;
	
	label.getValue = function () { return this.innerHTML ;} ;
	
	var value = label.getAttribute("value") ;
	label.setValue(value) ;
	
}

UPart.UCheck = function(check) {
	check = $(check) ;
	if (! check) {return ;}
	
	check.sign = null ;
	
	check.values = ["", ""] ;
	var sign = check.getAttribute("signal") ;
	if(sign) {
		var tuple = sign.split("|") ;
		if(tuple[0]) {check.values[0] = tuple[0] ;} 
		if(tuple[1]) {check.values[1] = tuple[1] ;} 
	}
	
	check.setValue = function (value) {
		if(! value) {value = "" ;}
		if(value == this.values[0]) {this.setAttribute("checked", "checked") ;}
		else {this.setAttribute("checked", "") ;}
	} ;
	
	check.getValue = function () { 
		if(this.checked) {return this.values[0] ;}
		else {return this.values[1] ;}
	} ;
	
	//check.setValue("accept") ;
	
}

//æé®ï¼è¿æ¯åºæ¬çæä½è¡ä¸ºçè§¦åè,å¯ä»¥ä»¥buttonæé¾æ¥æ¹å¼å­å¨===========================================
UPart.UCommand = function(command) {
	command = $(command) ;
	if (! command) {return ;}
	
	command.style.cursor = "pointer" ;
	
	command.setLabel = function (label) {
		if(! label) {label = "" ;}
		this.innerHTML = label ;
	} ;
	
	//commandæ¯ævalueè¿ä¸ªæ¦å¿µçï¼ä¸è¬æ¥è¯´ï¼å¯ä»¥å­æ¾ä¸äºç±»ä¼¼IDçå¼ï¼
	command.setValue = function (value) {this.innerValue = value ;} ;
	command.getValue = function () {return this.innerValue ;} ;
	
	//command.addAdvice(function(){alert(45);}) ;
	//å¦ææ²¡ææå®onclickäºä»¶ï¼åæ§è¡doself
	var onclick = command.getAttribute("onclick") ;
	if(!onclick) {command.onclick = function() {this.action();} ;}
	
	//var label = command.getAttribute("label") ;
	//if(label) {command.setLabel(label) ;}
	
}

UPart.UFolder = function(folder) {
	folder = $(folder) ;
	if (! folder) {return ;}
	
	folder.sign = null ;
	
	folder.values = ["", ""] ;
	var sign = folder.getAttribute("signal") ;
	if(sign) {
		var tuple = sign.split("|") ;
		if(tuple[0]) {folder.values[0] = tuple[0] ;} 
		if(tuple[1]) {folder.values[1] = tuple[1] ;} 
	}
	
	folder.labels = ["", ""] ;
	var label = folder.getAttribute("text") ;
	if(label) {
		var tuple = label.split("|") ;
		if(tuple[0]) {folder.labels[0] = tuple[0] ;} 
		if(tuple[1]) {folder.labels[1] = tuple[1] ;} 
	}
	
	//è®°å½æå ç¶æçåé
	folder._fold = 0 ;
	folder.addAdvice(function() {
		this._fold = (this._fold + 1) % 2 ;
		if(this.labels[this._fold]) {this.setLabel(this.labels[this._fold]) ;}
		this.sign = this.values[this._fold] ;
		for(var i = 0 ; i < this.members.array.length ; i ++ ) {
			var member = this.members.array[i] ;
			if(!member) {return ;}
			
			if(this._fold == 1) { $PD(member) ; } 
			if(this._fold == 0) { $PR(member) ; } 
		}
	});
	
	folder.getValue = function () {return this.sign} ;
	
	//é»è®¤é½æ¯ä¸éä¸­ç¶æ
	if(folder.labels[0]) {folder.setLabel(folder.labels[0]) ; }
	folder.sign = folder.values[0] ;
	for(var i = 0 ; i < folder.members.array.length ; i ++ ) {
		var member = folder.members.array[i] ;
		$PR(member) ;
	}
							
}

//ææ¬è¾å¥æ¡,å¯ä»¥æ¯åè¡,ä¹å¯è½æ¯å¤è¡,ææ¯å£ä»¤======================================================================================
UPart.UText = function(text) {
	text = $(text) ;
	if(!text) {return ;}
	
	var tag = text.tagName.toLowerCase() ;
	var type = text.getAttribute("type") ;
	type = type ? type.toLowerCase() : "" ;
	
	switch (tag) {
		case "input" :
			//å¯¹äºTexté½æåå¨çå¼
			text.signal = null ;
			//å¯¹å¯ä»¥å¡«åçå­ç¬¦çå¤å®
			text.regex = text.getAttribute("allow") ;
			
			text.setValue = function(value) {
				this.signal = value ;
				var display = value ;
				if(this.toDisplay) {display = this.toDisplay(value) ;}
				this.value = display ? display : "" ;
			} ;
			text.getValue = function() {
				//this.signal = this.value ;
				var rtn = this.toSignal ? this.toSignal(this.value) : this.value ;
				return rtn ;
			} ;
			
			if(type=="password") {
				text.clear = function() {this.setValue(null) ;} ;
			}
			
			
			text.onfocus = function() {
				this.oldValue = this.value ;
				if(this.toEdition) {this.value = this.toEdition(this.signal) ;}
				this.select();
			} ;
			
			
			text.originOnblur = text.getAttribute("onblur");
			text.onblur = function () {
				if(this.originOnblur) {this.originOnblur();} 
				this.signal = this.value ;
				if(this.toSignal) {this.signal = this.toSignal(this.value) ; }
				if(this.toDisplay) {this.value = this.toDisplay(this.signal);}
			}
			
			text.onkeydown = function(eve) {
				var key = getKeyCode(eve) ;
				if(key == "13") {this.blur() ; this.action();}
			} ;
			
			text.onkeyup = function(eve) {this.check() ; } ;
			
			//flagä¸ºäºè¡¨æï¼å¨éæ³å¼æ¶ï¼æ¯å¦åéåå®¹
			text.check = function() {
				if(!this.regex) {return true ;}
				if(!this.value) {return false ;}
				var reg = new RegExp(this.regex) ;
				if(!reg.test(this.value)) {
					this.value = this.oldValue ;
					return false;
				}
				this.oldValue = this.value ;
				return true ;
			} ;
			
			break ;
		case "textarea" :
			text.setValue = function (value) {this.innerHTML = value ? value : "" ;} ;
			text.getValue = function () {return this.innerHTML ;} ;
			break ; 
		default :break ;
	}
	
	var value = text.getAttribute("text") ;
	if(value) {text.setValue(value) ;}
	
	text.oldValue = text.value ;
}

UPart.UTabber = function (tabber) {
	tabber = $(tabber) ;
	if(!tabber) {return ;}
	$PR(tabber) ;
	
	for(var i = 0 ; i < tabber.members.array.length ; i ++ ) {
		var tablet = tabber.members.array[i] ;
		if(!tablet) {return ;}
		tablet.addAdvice(function() {
			if(this.group.prevMarker) {
				//é¿åå¾ªç¯å¼ç¨ï¼å¿é¡»ä¿è¯prevMarkeråªä¼è¢«ä½¿ç¨ä¸æ¬¡
				var tmp = this.group.prevMarker ;
				this.group.prevMarker = null ;
				tmp.action() ;
			}
			this.group.prevMarker = this;
			this.group.innerValue = this.name ;
		} ) ;
	}
	
	tabber.setValue = function (value) {
		if(!$S(value)) {return ;}
		var member = this.members[value] ;
		if(member) {this.innerValue = value; member.action() ;}
		else {
			if(this.innerValue && this.members[this.innerValue]) {this.members[this.innerValue].action() ; } 
		}
	}
	
	tabber.getValue = function () {
		return this.innerValue ;
	}
	
	tabber.init = function () {
		tabber.setValue(tabber.getAttribute("default")) ;
	}
	
}

UPart.UForm = function (form) {
	form = $(form) ;
	if(!form) {return ;}
	if("SPAN" == form.tagName) {$PR(form) ;}
	
	/*
	for(var i = 0 ; i < form.members.array.length ; i ++ ) {
		var field = form.members.array[i] ;
		if(!field) {return ;}
		field.addAdvice(function () {this.group.submit() ;}) ;
	}*/
	
	form_value = new Object() ;	
	
	form.setValue = function (value) {
		if(! value) {return ;}
		this._value = value ;
		for(var i in form.members) {
			if("array" == i || "add" == i || "" == i) {continue ;}
			if(value[i]) {form.members[i].setValue(value[i])  ;}
		}	
	}
	
	form.getValue = function () {
		var value = new Object() ;
		if(this.id) { value["sys_formname"] = this.id ; } ;
		for(var i in form.members) {
			if("array" == i || "add" == i || "" == i) {continue ;}
			value[i] = form.members[i].getValue() ;
		}
		this._value = value ;
		if(form.members["sys_vericode"]) {form.members["sys_vericode"].setValue(null);}
		return value ;
	}
	
	//æ ¡éªç¸å³
	form.preValidate = function (value) {} ;
	form.failValidate = function (name,msg) {
		if (msg) {alert(msg);}
		if (name && this.members[name] && this.members[name].onfocus) {
			this.members[name].onfocus() ;
		}
	} ;
	
	form.performSubmit = function (value){$alert(value) ;} ;
	form.submit = function () {
		var value = this.getValue() ;
		var rtn = this.validate(value) ;
		if(rtn == 0) { //éè¿æ ¡éª
			for(var i in this.members) {
				if("array" == i || "add" == i || "" == i) {continue ;}
				if(this.members[i].clear){this.members[i].clear() ;}
			}
			this.performSubmit(this._value) ;
		}
	}
	
	form.addVerifDup = function (fname, frefer, message) {
		if(!(fname && frefer && message)){return ;}; 
		this.verifDup.push({name:fname,refer:frefer,msg:message}) ;} ;
		
	form.addVerifRequire = function (fname, message) {
		if(!(fname && message)){return ;};  
		this.verifRequire.push({name:fname,msg:message}) ;} ;
		
	form.addVerifFormat = function (fname, fregex, message) {
		if(!(fname && message && fregex)){return ;};  
		this.verifFormat.push({name:fname, regex:fregex, msg:message}) ;} ;
		
	form.addVerifCommon = function (message) {
		if(!message){return ;};  
		this.verifCommon.push({msg:message}) ;} ;
	
	form.validate = function (value, after) {
		
		this.verifDup = new Array() ;
		this.verifRequire = new Array() ;
		this.verifFormat = new Array() ;
		this.verifCommon = new Array() ;
		this.preValidate(value) ;
		
		//éç¨è¡ä¸º
		for (var i = 0 ; i < this.verifCommon.length ; i ++  ) {
			var msg = this.verifCommon[i].msg ;
			this.failValidate(null, msg) ;
			return 1 ;
		}
		
		//å¿è¦å­æ®µ
		for (var i = 0 ; i < this.verifRequire.length ; i ++  ) {
			var fname = this.verifRequire[i].name ;
			var msg = this.verifRequire[i].msg ;
			if (! this._value[fname]) {
				this.failValidate(fname,msg) ;
				return 1;
			}
		}
		//éå¤å­æ®µå¿é¡»ä¸è´
		for (var i = 0 ; i < this.verifDup.length ; i ++  ) {
			var fname = this.verifDup[i].name ;
			var refer = this.verifDup[i].refer ;
			var msg = this.verifDup[i].msg ;
			if (this._value[fname] != this._value[refer]) {
				this.failValidate(fname,msg) ;
				return 1;
			}
		}
		//æ°æ®æ ¼å¼ç¬¦å
		for (var i = 0 ; i < this.verifFormat.length ; i ++  ) {
			var fname = this.verifFormat[i].name ;
			var regex = this.verifFormat[i].regex ;
			var msg = this.verifFormat[i].msg ;
			
			if (! this._value[fname]) { continue ;}
			if (! this._value[fname].match(regex)) {
				this.failValidate(fname,msg) ;
				return 1;
			}
		}
		
		return 0 ;
	}
	
}


UPart.UTrack = function (track) {
	track = $(track) ;
	if(!track) {return ;}
	
	//çº¯ç²¹çæ»éåªæ¯ä¸ä¸ªå®¹å¨,å¶å¤è¡¨åºè¯¥ç±boxæå®
	track.style.padding = track.style.margin = track.style.borderWidth = "0px" ;
	
	//trackå¿é¡»æslider, å¯ä»¥æbox,å¦ææ²¡ææå®ï¼åboxæå¶èªèº«
	if(!track.slicer) {
		var slicer = track.members["slicer"] ;
		if(!slicer) {return ;}
		track.slicer = slicer ;
	}
	track.slicer.track = track ;
	UFront.draggate(track.slicer) ;
	if(!track.box) {track.box = track.members["box"] ; }
	if(!track.box) {track.box = track ; } 
	
	//Trackææ¹ååºå«ï¼ä¸åçæ¹åï¼å®ç°æ¹å¼æ¯ä¸åç
	var direct = track.getAttribute("direct") ;
	if(!direct) {direct = "T2B" ;} 
	switch (direct) {
		case "L2R" : 
		case "R2L" :
			track.getUnitSize = function () {
				var tmp = this.range ;
				if(!tmp || tmp < 1) { tmp = 1 ;}
				return this.clientWidth / tmp ;
			}
			track.calSect = function (sect) {
				this.slicer._width = Math.floor(sect * this.unitSize) ;
				this.slicer.style.width = this.slicer._width + "px" ;
				this.slicer._maxLeft = this.clientWidth - this.slicer._width ;
			}
			track.calValue = function (value) {
				this.slicer.style.marginLeft = Math.floor(value * this.unitSize) + "px" ;
			}
			track.slicer.onMovingX = function (deltaX) {
				if(!this.style.marginLeft) {this.style.marginLeft = "0px" ;}
				if(!this._left) {this._left = parseInt(this.style.marginLeft) ;}
				this._left += deltaX ;
				if(this._left < 0 ) {this.style.marginLeft = "0px"; return true ; }
				else if(this._left > this._maxLeft ) {
					this.track.onSlice(this.track.range - this.track.sect + 1) ;
					this.style.marginLeft = this._maxLeft + "px"; return true ; 
				}else {
					this.track.onSlice(Math.ceil(this._left/this.track.unitSize)) ;
					this.style.marginLeft = this._left + "px" ; 
					return true ;
				}
			} ;
			break ;
		case "T2B" :
		case "B2T" :
			track.getUnitSize = function () {
				var tmp = this.range ;
				if(!tmp || tmp < 1) { tmp = 1 ;}
				return parseInt(this.style.height) / tmp ;
			}
			track.calSect = function (sect) {
				this.slicer._height = Math.floor(sect * this.unitSize) ;
				this.slicer.style.height = this.slicer._height + "px" ;
				this.slicer._maxTop = parseInt(this.style.height) - this.slicer._height - 2 ;
			}
			track.calValue = function (value) {
				this.slicer.style.marginTop = Math.floor(value * this.unitSize) + "px" ;
			}
			track.slicer.onMovingY = function (deltaY) {
				if(!this.style.marginTop) {this.style.marginTop = "0px" ;}
				if(true) {this._top = parseInt(this.style.marginTop) ;}
				this._top += deltaY ;
				if(this._top < 0 ) {this.style.marginTop = "0px"; return true ; }
				else if(this._top > this._maxTop ) {
					this.track.onSlice(this.track.range - this.track.sect + 1) ;
					this.style.marginTop = this._maxTop + "px"; return true ; 
				}else {
					this.track.onSlice(Math.ceil(this._top/this.track.unitSize)) ;
					this.style.marginTop = this._top + "px" ; 
					return true ;
				}
			}
			break ;
		default : 
			return ;
	}
	
	
	
	track.disable = function () {$PR(this.slicer) ;} ;
	track.enable = function () {$PD(this.slicer) ;} ;
	
	track.setScale = function (range, sect) {
		this.range = Math.floor(range) ;
		this.sect = Math.floor(sect) ;
		this.unitSize = this.getUnitSize() ;
		if(!sect || !range || sect==0 || range==0 || sect >= range) { this.disable() ; return ;}
		this.calSect(sect) ;
	} ;
	
	track.setValue = function (value) {
		this._value = value ;
		if((!value && !(value==0)) || value < 0 || (value > this.range-this.sect && value != 0)) {return ;}
		this.calValue(value) ;
		this.onSlice(value+1) ;
	}
	
	track.onSlice = function(from) {
		if(from && from != this._value) {
			this._value = from ;
			if(this._client && this._client.scroll) {
				this._client.scroll(from) ;
			}
		}
	}
	
	track.prev = function() { if(this._value >= 2) {this.onSlice(this._value-1); this.calValue(this._value-1) ; } } ;
	track.next = function() { if(this._value <= (this.range - this.sect)) {this.onSlice(this._value+1); this.calValue(this._value-1);} } ;
	
	//track.setScale(7, 4) ;
	//track.setValue(0) ;
	
}

UPart.UVerimage = function (image) {
	image = $(image) ;
	if(!image) {return ;}
	
	image._tmp = 0 ;
	image.src_bak = window.verimage_src ;
	
	image.refresh = function () {
		//this._tmp = (this._tmp + 1) % 2 ;
		this._tmp ++ ;
		this.src = this.src_bak + "?" + this._tmp + "=" + this._tmp ; 
	}
	
	image.refresh() ;
}

UPart.USubmit = function (submit) {
	submit = $(submit) ;
	if(!submit) {return ;}
	
	submit.addAdvice(function () {
		if(this.submit) {this.submit() ; }
		else if(this.group && this.group.submit) {this.group.submit() ; }
	}) ;
}

//è¡¨æ ¼ï¼è¿éçè¡¨æ ¼æ¯çº¯ç²¹çæ°æ®,æä»¥ï¼ä¸è¬æ¥è¯´ï¼åºè¯¥é½æ¯<tbody>æ ç­¾
UPart.UGrid = function (grid) {
	grid = $(grid) ;
	if(!grid) {return ;}
	
	//å¯¹äºè¡¨æ ¼ï¼å¶æ¨¡åæ¯ä¸ç»æ°æ®çéå(datum)ï¼ä½å®çå¼valueæ¯è¢«æ è®°çä¸ä¸ªè¡
	//æä»¬è®¤ä¸ºï¼è¿ç»æ°æ®ä¸­ï¼å¦æéè¦è¢«å¯ä¸åºåï¼åè³å°æä¸ä¸ªå¯è¢«ç¨ä¸ºä¸»é®çå­æ®µï¼è¿ä¸ªå­æ®µåé»è®¤ä¸º"index"
	grid.datum = [] ;
	grid.value = null ;
	grid.idxName = "index" ;
	
	//è¡¨æ ¼è¿éè¦ä¿å­å¶è¡æ°æ®ï¼ç¨Mapæ¹å¼å­åï¼æä»¬è®¤ä¸ºï¼è¿äºè¡åªæå¯ä»¥å¯ä¸åºåæ¶æææ
	grid.rowMap = new Object() ;
	
	//è¡¨æ ¼æå¶è¢«éæ©çè¡çéå¼ï¼-1:ä»»æè¡ï¼0ï¼ä¸å¯éæ©ï¼1ï¼åéï¼ an:å¯è¢«éçè¡æ°ï¼é»è®¤ä¸º1
	//é»è®¤ç¶åµï¼æ²¡æè¢«éæ©
	grid.threshold = 1 ;
	grid.markerCount = 0 ;
	
	//å°è¯´ææ§çè¡å é¤
	DWRUtil.removeAllRows(grid) ;
	
	if(!grid.cellFuncs) {grid.cellFuncs = new Array() ;}
	grid.cellFuncs.unshift(function(data) { return count ++ ; }) ;
	
	grid.capacity = grid.getAttribute("gcapacity") ;
	if(! grid.capacity) {grid = 10 ;}
	grid.capacity = eval(grid.capacity) ;
	
	grid.createBlankRow = function() {
		var tr = $CN("tr") ;
		var td = $AN(tr, "td") ;
		td.innerHTML = "&nbsp;" ;
		tr.className = "blank" ;
		return tr ;
	}
	
	//[Begin]å¤çä¸ä¸ªæ»å¨æ¡==========================================================
		var tr = $CN("tr") ;
		tr.className = "slider" ;
		for(var i = 0 ; i < grid.cellFuncs.length ; i ++) {
			var td = $CN("td") ;
			tr.appendChild(td) ;
		}
		var td = $AN(tr, "td", "td") ;
		td.className = "slider" ;
		var prev = $AN(td, "div") ;
		prev.className = "prev" ;
		var track = $AN(td, "div") ;
		track.className = "track" ;
		track.style.height = grid.getAttribute("gheight") + "px" ;
		var slicer = $AN(track, "div") ;
		slicer.className = "slicer" ;
		slicer.style.marginTop = "0px" ;
		track.box = td ;
		track.slicer = slicer ;
		UPart.UTrack(track) ;
		var next = $AN(td, "div") ;
		next.className = "next" ;
		
		prev._client = track ;
		prev.onclick = function() {this._client.prev() ;} ;
		next._client = track ;
		next.onclick = function() {this._client.next() ;} ;
		
		track.box.rowSpan = grid.capacity + 1 ;
		track._client = grid ;
		track.row = tr ;
		grid.track = track ;
		
	//[End]å¤çä¸ä¸ªæ»å¨æ¡==========================================================
	
	grid.optFuncs = {
		rowCreator:function(options) {
			var row = document.createElement("tr");
			row.baseStyle = (count % 2 == 0) ? "light" : "dark" ;
			row.className = row.baseStyle ;
			row.onmouseover = function () {this.className = "bright" ;} ;
			row.onmouseout = function () {this.className = this.baseStyle ;} ;
			return row;
		},
	  	cellCreator:function(options) {
			var td = document.createElement("td");
			return td;
		}
	} ;
	
	var count = 0;
	
	//è®¾ç½®æ°æ®éï¼åºå«äºsetValueï¼
	grid.setDatum = function (datum) {
		this.datum = datum ;
		
		DWRUtil.removeAllRows(this) ;
		
		var datum = datum ;
		if (!datum ||! datum instanceof Array) {return ;}
		if (! this.cellFuncs) {return ;}
		
		this.appendChild(this.track.row) ;
		count = 1 ;
		DWRUtil.addRows(this, datum, this.cellFuncs, this.optFuncs) ;
		for (var i = 0 ; i < this.capacity ; i ++ ) {
			this.appendChild(this.createBlankRow()) ;
		}
		
		this.gridRows = $A(this.childNodes) ;
		this.gridRows.shift() ;
		
		for(var i = 0 ; i < this.gridRows.length ; i ++) {
			this.removeChild(this.gridRows[i]) ;
		}
		
		var size = datum.length ;
		this.track.setScale(size, this.capacity) ;
		this.track.setValue(0) ;
		
		return ;
	}
	
	grid.scroll = function (from) {
		
		if(!from) {return ;}
		if(from > this.datum.length-this.capacity+1) {from = this.datum.length-this.capacity+1 ;} 
		
		if(this._oldRows) {
			for(var i = 0 ; i < this._oldRows.length ; i ++ ) {this.removeChild(this._oldRows[i]) ; }
		}
		this._oldRows = new Array() ;
		for(var i = (from-1) ; i < (from+this.capacity-1) ; i ++ ) { 
			this._oldRows.push(this.gridRows[i]) ;
			this.appendChild(this.gridRows[i]) ; 
		}
	}
	
	//è®¾ç½®å¼ï¼å¼è¡¨ç¤ºéä¸­ï¼å¯ä»¥æ¯åå¼ï¼ä¹å¯ä»¥æ¯å¤å¼
	grid.setValue = function(value) {
		if (! value) { return ;}
		
		if( ! (value instanceof Array) ) {
			var tmp = new Array();
			tmp.push(value) ;
			value = tmp ;
		}
		
		var idxName = this.idxName ;
		
		for (var i = 0 ; i < value.length ; i ++ ) {
			var entry = value[i] ;
			var index = entry[idxName] ;
			if(this.rowMap[index]) {this.rowMap[index].select() ;}
		}
	}
	
	//ååºå¼ï¼å¼è¡¨ç¤ºéä¸­ï¼å¯ä»¥æ¯åå¼ï¼ä¹å¯ä»¥æ¯å¤å¼
	grid.getValue = function() {
		
		var value = new Array() ;
		
		for(var i in this.rowMap ) {
			var row = this.rowMap[i] ;
			if(row.marked && row.value) {
				value.push(row.value) ;
			}
		}
		
		return (value.length == 1) ? value[0] : value ;
	}
	
}

/*
//è¡¨æ ¼ï¼è¿éçè¡¨æ ¼æ¯çº¯ç²¹çæ°æ®,æä»¥ï¼ä¸è¬æ¥è¯´ï¼åºè¯¥é½æ¯<tbody>æ ç­¾
UPart.UGrid = function (grid) {
	grid = $(grid) ;
	if(!grid) {return ;}
	
	//å¯¹äºè¡¨æ ¼ï¼å¶æ¨¡åæ¯ä¸ç»æ°æ®çéå(datum)ï¼ä½å®çå¼valueæ¯è¢«æ è®°çä¸ä¸ªè¡
	//æä»¬è®¤ä¸ºï¼è¿ç»æ°æ®ä¸­ï¼å¦æéè¦è¢«å¯ä¸åºåï¼åè³å°æä¸ä¸ªå¯è¢«ç¨ä¸ºä¸»é®çå­æ®µï¼è¿ä¸ªå­æ®µåé»è®¤ä¸º"index"
	grid.datum = [] ;
	grid.value = null ;
	grid.idxName = "index" ;
	
	//è¡¨æ ¼è¿éè¦ä¿å­å¶è¡æ°æ®ï¼ç¨Mapæ¹å¼å­åï¼æä»¬è®¤ä¸ºï¼è¿äºè¡åªæå¯ä»¥å¯ä¸åºåæ¶æææ
	grid.rowMap = new Object() ;
	
	//è¡¨æ ¼æå¶è¢«éæ©çè¡çéå¼ï¼-1:ä»»æè¡ï¼0ï¼ä¸å¯éæ©ï¼1ï¼åéï¼ an:å¯è¢«éçè¡æ°ï¼é»è®¤ä¸º1
	//é»è®¤ç¶åµï¼æ²¡æè¢«éæ©
	grid.threshold = 1 ;
	grid.markerCount = 0 ;
	
	//æ¯ä¸ªè¡¨æ ¼éè¦å¨è®¾è®¡é¡µé¢æ¶çä¸å³äºè¡çå¤§çº²
	var rows = grid.getElementsByTagName("tr") ;
	if(rows.length > 0) {
		var tds = rows[0].getElementsByTagName("td") ;
		
		//trä¸è®°è½½äºä½ä¸ºä¸»é®çå­æ®µå
		grid.idxName = rows[0].getAttribute("index") ;
		
		grid.tmpRow = new Array() ;
			
		for(var j = 0 ; j < tds.length ; j ++) {
			var cell = tds[j] ;
			var td = $CN("td") ;
			td.innerHTML = cell.innerHTML ;
			grid.tmpRow.push(td) ;
		}
	}
	
	//å°è¯´ææ§çè¡å é¤
	DWRUtil.removeAllRows(grid) ;
	
	//è®¾ç½®æ°æ®éï¼åºå«äºsetValueï¼
	grid.setDatum = function (datum) {
		this.datum = datum ;
		
		DWRUtil.removeAllRows(this) ;
		
		var datum = datum ;
		if (! datum instanceof Array) {return ;}
		if (! this.tmpRow) {return ;} 
		
		//å¡«åæ°æ®
		for(var i = 0 ; i < datum.length ; i ++) {
			var tr = $CN("tr") ;
			
			//å¯¹äºè¡ï¼å®ç¥éèªå·±æå±çè¡¨æ ¼ï¼ä»¥åå®æå·æçå¼
			tr.grid = this ;
			tr.value = datum[i] ;
			
			if(datum[i][this.idxName]) {this.rowMap[datum[i][this.idxName]] = tr ;} ;
			
			//å¢å ä¸ä¸ªè¡ï¼åæ¬å¶ä¸­ææçååæ ¼
			for(var j = 0 ; j < grid.tmpRow.length ; j ++) {
				var cell = grid.tmpRow[j] ;
				var td = $CN("td") ;
				td.innerHTML = cell.innerHTML ;
				tr.appendChild(td) ;
			}
			
			//å¯¹äºä¸ä¸ªè¡ï¼æ¬èº«å­å¨ä¸ä¸ªé¨ä»¶éå
			tr.parts = UPart.buildParts(tr) ;
			UPart.setValues(tr.parts, datum[i]) ;
			
			//è®¾ç½®æé©¬çº¿ï¼äº®æ¾
			tr.baseStyle = (i % 2 == 0) ? "light" : "dark" ;
			tr.className = tr.baseStyle ;
			tr.onmouseover = function () {this.className = "bright" ;} ;
			tr.onmouseout = function () {this.className = this.baseStyle ;} ;
			
			tr.onclick = function () {
				if(! this.marked) {
					this.select() ;
					if (this.grid.onselect) {this.grid.onselect(this.value) ; }
				}else {
					this.unselect() ;
				}
			} ;
			
			//è¡è¢«éæ©çäºä»¶
			tr.unselect = function() {
				//åæ¶éä¸­
				this.className = this.baseStyle ;
				this.marked = null ;
				this.grid.markerCount -- ;
				this.grid.prevMarker = null ;
				this.onmouseover = function () {this.className = "bright" ;} ;
				this.onmouseout = function () {this.className = this.baseStyle ;} ;
			}
			tr.select = function() {
				//å¼å§éä¸­
				if(this.grid.markerCount == this.grid.threshold) {if(this.grid.prevMarker) {this.grid.prevMarker.unselect();}} ;
				this.className = "marker" ;
				this.marked = "marked" ;
				this.grid.markerCount ++ ;
				this.grid.prevMarker = this ;
				this.onmouseover = function () {} ;
				this.onmouseout = function () {} ;
			}
			
			this.appendChild(tr) ;
		}
	}
	
	//è®¾ç½®å¼ï¼å¼è¡¨ç¤ºéä¸­ï¼å¯ä»¥æ¯åå¼ï¼ä¹å¯ä»¥æ¯å¤å¼
	grid.setValue = function(value) {
		if (! value) { return ;}
		
		if( ! (value instanceof Array) ) {
			var tmp = new Array();
			tmp.push(value) ;
			value = tmp ;
		}
		
		var idxName = this.idxName ;
		
		for (var i = 0 ; i < value.length ; i ++ ) {
			var entry = value[i] ;
			var index = entry[idxName] ;
			if(this.rowMap[index]) {this.rowMap[index].select() ;}
		}
	}
	
	//ååºå¼ï¼å¼è¡¨ç¤ºéä¸­ï¼å¯ä»¥æ¯åå¼ï¼ä¹å¯ä»¥æ¯å¤å¼
	grid.getValue = function() {
		
		var value = new Array() ;
		
		for(var i in this.rowMap ) {
			var row = this.rowMap[i] ;
			if(row.marked && row.value) {
				value.push(row.value) ;
			}
		}
		
		return (value.length == 1) ? value[0] : value ;
	}
	
}


//å¼¹åºçªå£ url:è·¯å¾ï¼echo:ååºèï¼model:æ¨¡æï¼positionï¼ä½ç½®ï¼dim:å°ºå¯¸
openWindow = function (echo, caption, url, model, position, dim) {
	//å¨é¡¶å±
	var canvas = UFront.getCanvas() ;
		
	if(!canvas.widgets) {canvas.widgets = new Object() ;} 
	
	var wdg = canvas.widgets[url] ;
	if(!wdg) {
		wdg = $CN("div") ;
		wdg.setAttribute("ukind", "widget") ;
		wdg.setAttribute("caption", caption) ;
		wdg.className = "widget" ;
		wdg.style.position = "absolute" ;
		UPart.UWidget(wdg) ;
		canvas.widgets[url] = wdg ;
		canvas.document.body.appendChild(wdg) ;
	}
	
	//æå³ä½ç½®åå°ºå¯¸ãå¦ææ²¡ææå®ä½ç½®ï¼åéç¨é¼ æ ç¸å¯¹å®ä½
	if(! position) {position = getMousePos () ;} 
	wdg.setAttribute("position", position) ;
	wdg.setAttribute("dim", dim) ;
	UPart.setPosition(wdg) ;
	UPart.setDimension(wdg) ;
	
	wdg.echo = echo ;
	wdg.setLocation(url) ;
	wdg.open(model) ;
}

UPart.UWidget = function(widget) {
	widget = $(widget) ;
	if (! widget) {return ;}
	
	widget.setContent = function(content) {
		this.innerHTML = content ;
	}
	
	//çªå£åå§ä¸ºä¸å¯è§
	widget.style.display = "none" ;
	
	//æ é¢æ 
	if(widget.getAttribute("caption")) {
		var caption = $CN("div") ;
		caption.className = "caption" ;
		//ææ¬
		var title = document.createElement("span") ;
		title.className = "txt_title" ;
		title.innerHTML = widget.getAttribute("caption") ;
			
		//å¤çæ é¢æ 
		var icon = document.createElement("button") ;
		icon.className = "btn_icon" ;
		icon.disabled = "disabled" ;
		
		var btnClose = document.createElement("button") ;
		btnClose.title = "å³é­" ;
		btnClose.className = "btn_close" ;
		btnClose.onclick = function () {widget.close();} ;
		
		//ç»å
		caption.appendChild (icon) ;
		caption.appendChild (title) ;
		caption.appendChild (btnClose) ;
			  
		widget.appendChild (caption) ;
		widget.caption = caption ;
		
		UFront.draggate(widget) ;
	}
	
	var content = $CN("div") ;
	content.innerHTML = "<iframe src='' width='100%' height='100%' marginwidth='0' marginheight='0' frameborder='0' scrolling='no'></iframe>" ;
	content.frm = content.getElementsByTagName("iframe")[0] ;
	
	widget.appendChild (content) ;
	widget.content = content ;
	
	widget.setLocation = function(location) {
		if(!location) {return ;} 
		this.content.frm.src = location ;
	}
	
	widget.onmouseover = function () {this.using = "using" ; } ;
	widget.onmouseout = function () {this.using = null ; } ;
	
	
	widget.open = function(model) {
		$PD(this) ;
		if(model) {
			UFront.showShield() ;
			this.style.zIndex = "700" ;
			widget.onModel = true ;
		}else {
			widget.onModel = null ;
			UFront.getCanvas().ctxWindow = widget ;
		}
	}
	
	widget.close = function(model) {
		//this.setLocation(" ") ;
		$PR(this) ;
		if(widget.onModel) {
			UFront.hiddenShield() ;
		}else {
			UFront.getCanvas().ctxWindow = null ;
		}
	}
}
*/

