// JavaScript Document

digi = function (str) {
	var d = 0 ;
	try {
		d = str.replace(/\D+/, "") ;
	}catch (ex) {
	}
	
	return eval(d) ;
}

//???origin??????target?????????????????????target???
clone = function (target, origin) {
	if(!origin || !target) {return ;}
	for (var name in origin) {
		if(! target[name] && origin[name]) {
			try {
				target[name] = origin[name] ;
			}catch (ex) {
				continue ;
			}
		}
	}
}

var disabledZone ;
var mousePoint ;


var $;
if (!$ && document.getElementById) {
  $ = function() {
    var elements = new Array();
    for (var i = 0; i < arguments.length; i++) {
      var element = arguments[i];
      if (typeof element == 'string') {
        element = document.getElementById(element);
      }
      if (arguments.length == 1) {
        return element;
      }
      elements.push(element);
    }
    return elements;
  }
}
else if (!$ && document.all) {
  $ = function() {
    var elements = new Array();
    for (var i = 0; i < arguments.length; i++) {
      var element = arguments[i];
      if (typeof element == 'string') {
        element = document.all[element];
      }
      if (arguments.length == 1) {
        return element;
      }
      elements.push(element);
    }
    return elements;
  }
}

function $S(str) {
	return (str || str == "") ;
}

function centralizeDiv(obj){
	obj = $(obj) ;
	
	if (! obj) {return } ;
  
   obj.style.left=(document.body.clientWidth/2 - obj.clientWidth/2)+"px";
   obj.style.top=(top.document.body.scrollTop + top.document.body.clientHeight/2-obj.clientHeight/2)+"px";
}

//????????????,??????????????????
function nocontextmenu(){
	event.cancelBubble = true ;
	event.returnValue = false;
	return false;
}


function envisibleElem (elem) {
	elem = $(elem) ;
	if (! elem) {return } ;
	elem.style.visibility="visible";
}


//????
function hiddenElem (elem) {
	elem = $(elem) ;
	if (! elem) {return } ;
	elem.style.visibility="hidden";
}


//????
function displayElem (elem) {
	elem = $(elem) ;
	if (! elem) {return } ;
	elem.style.display="block";
}

//????
function vanishElem (elem) {
	elem = $(elem) ;
	if (! elem) {return } ;
	elem.style.display="none";
}

function $alert(data, level, depth) {
	if(!level) {level = 2 ;}
	if(!depth) {depth = 2 ;}
	
	alert(DWRUtil.toDescriptiveString(data, level,depth)) ;
}

function $debug(data, level, depth) {
	if(!level) {level = 2 ;}
	if(!depth) {depth = 2 ;}
	
	debug(DWRUtil.toDescriptiveString(data, level,depth)) ;
}

function debug(msg, clear) {
       var output = $("output");
	   if(!output) {return ;}
	   
        if (clear == true)
          output.innerHTML = "<p>" + msg + "</p>";
        else {
          output.innerHTML += 
                            "<p>" + msg + "</p>";
        }
}

//???????????????????????????
function getAbsLocation(element)
{
    if(! element) {return { y: 0, x: 0, width: 0, height: 0 };}
	var elmt = element;
	
	if (true) {
		var tmpY = elmt.offsetTop;
		var tmpX = elmt.offsetLeft;
		var tmpWidth = elmt.offsetWidth;
		var tmpHeight = elmt.offsetHeight;
		while( elmt = elmt.offsetParent )
		{
			  // add this judge
			if ( elmt.style.position == 'absolute' || elmt.style.position == 'relative' 
				|| ( elmt.style.overflow != 'visible' && elmt.style.overflow != '' ) )
			{
				break;
			} 
			tmpY += elmt.offsetTop;
			tmpX += elmt.offsetLeft;
		}
		return { y: tmpY, x: tmpX, width: tmpWidth, height: tmpHeight };
	}else {
		return { y: elmt.y, x: elmt.x, width: elmt.width, height: elmt.height };
	}
} 

function $PV(elem) {
	elem = $(elem) ;
	if (! elem) {return } ;
	elem.style.visibility="visible";
}



//????
function $PH (elem) {
	elem = $(elem) ;
	if (! elem) {return } ;
	elem.style.visibility="hidden";
}

function $PC (elem) {
	elem = $(elem) ;
	if (! elem) {return } ;
	clearZone(elem) ;
}

function $CN (tagName) {
	if (! tagName) {return null;} 
	return document.createElement(tagName) ;
}

function $AN (parent, tagName, name) {
	if (!parent || !tagName) {return null;} 
	var node = $CN (tagName) ;
	parent.appendChild(node) ;
	if(name) {parent[name] = node ;}
	
	return node ;
}

//????
function $PD (elem) {
	elem = $(elem) ;
	if (! elem || elem.style.display != "none" ) {return } ;
	
	elem.style.display = elem._display_bak ? elem._display_bak : "";
}

function $PDI (elem) {
	elem = $(elem) ;
	if (! elem) {return } ;
	elem.style.display="inline";
}


//????
function $PR (elem) {
	elem = $(elem) ;
	if (! elem || elem.style.display == "none" ) {return } ;
	
	elem._display_bak = elem.style.display ;
	elem.style.display="none";
}

function $CS (parent, name) {
	return $CT ( "span", parent, name) ;
}

function $CD (parent, name) {
	return $CT ("div", parent, name ) ;
}

function $CT (tagName, parent, name ) {
	var elem = document.createElement(tagName) ;
	$AE(parent, name, elem);
	return elem ;
}

function $AT (parent, text) {
	var tn = document.createTextNode(text) ;
	parent.appendChild(tn) ;
}

function $AE (parent, name, elem) {
	elem = $(elem) ;
	if (! elem ) {return ;}
	if(parent) {parent.appendChild(elem) ; } ;
	if(parent && name) {parent[name] = elem ;} ;
}


//????css????
function setStyleClass (obj, styleName) {
	if (! obj) { return; }
	obj.getAttributeNode("class").value = styleName ;
}

//????????<span>??????????????name??????????Name????????????????
function getNamedSpan (elem, name) {
	if (! elem) { return null; }
	var spans = elem.getElementsByTagName("span") ;
	
	for (var idx = 0 ; idx < spans.length ; idx ++) {
		
		var _name = spans[idx].getAttribute("name") ;
		if (_name == name) {
			return spans[idx] ;
		}
	}
	
	return null ;
}

//????????<div>??????????????name??????????Name????????????????
function getNamedZone (elem, name) {
	if (! elem) { return null; }
	var divs = elem.getElementsByTagName("div") ;
	
	for (var idx = 0 ; idx < divs .length ; idx ++) {
		
		var _name = divs [idx].getAttribute("name") ;
		if (_name == name) {
			return divs [idx] ;
		}
	}
	
	return null ;
}

function $IE() {
	if(document.all) {
		return true ;
	}else {
		return false ;
	}
}

//????????<div>??????????????type????????
function getZonesByType (elem, type) {
	if (! elem) { return null; }
	var divs = elem.getElementsByTagName("div") ;
	var zones = new Array() ;
	
	for (var idx = 0 ; idx < divs .length ; idx ++) {
		
		var _type = divs [idx].getAttribute("type") ;
		if (_type == type) {
			zones.push(divs[idx]) ;
		}
	}
	
	return zones ;
}

function clearZone (elem) {
	elem = $(elem) ;
	if (! elem || ! elem.childNodes) { return null; }
	for (var idx = 0 ; idx < elem.childNodes.length ; idx ++) {
		elem.removeChild(elem.childNodes[idx]) ;
	}
}


/*????????????***************************************************************************/

//????DisableZone ;
function showDisableZone (zIndex) {
	var doc = document ;
	//if (top)  { doc = top.document; }
	
	if (! doc) { return ;}
	
	if (! disabledZone) {
	
		disabledZone = doc.createElement('div');
		
		disabledZone.setAttribute('id', 'lay_disabledZone');
		disabledZone.style.position = "absolute";
		disabledZone.style.zIndex = "900";
		disabledZone.style.left = "0px";
		disabledZone.style.top = "0px";
		disabledZone.style.width = "100%";
		disabledZone.style.height = "100%";
		disabledZone.style.backgroundColor="#FFFFFF"
		disabledZone.style.filter="Alpha(Opacity=85)"
		//mozilla : "-moz-opacity: 0.9;" ????????
		
		disabledZone.style.visibility = "hidden" ;
		
		
		doc.body.appendChild(disabledZone);
	}
	
	if (zIndex) {
		disabledZone.style.zIndex = zIndex;
	}
	
	envisibleElem (disabledZone) ;
}

function hiddenDisableZone () {
	hiddenElem (disabledZone) ;
}



//????????
var beginDrag = function (dragee, e) {
	
	if (!e) e = window.event ; //IE
	
	//if(!dragee.style.left || dragee.style.left.search("px") < 0) {dragee.style.left = dragee.offsetLeft - parseInt(dragee.style.marginLeft) + "px" ;}
	//if(!dragee.style.top || dragee.style.top.search("px") < 0) {dragee.style.top = dragee.offsetTop - parseInt(dragee.style.marginTop) + "px" ;}
	//var deltaX = e.clientX - parseInt(dragee.style.left) ;
	//var deltaY = e.clientY - parseInt(dragee.style.top) ;
	//var deltaX = e.clientX - dragee.offsetLeft ;
	//var deltaY = e.clientY - dragee.offsetTop ;
	
	var referX = e.clientX ;
	var referY = e.clientY ;
	
	if(document.addEventListener) { //DOM L2
		document.addEventListener("mousemove", moveHandler, true) ;
		document.addEventListener("mouseup", upHandler, true) ;
	}else if (document.attachEvent) { //IE 5+
		document.attachEvent ("onmousemove", moveHandler) ;
		document.attachEvent ("onmouseup", upHandler) ;
	}else { //IE 4
		var oldmovehandler = document.onmousemove ;
		var olduphandler = document.onmouseup ;
		document.onmousemove = moveHandler ;
		document.onmouseup = upHandler ;
	}
	
	if (e.stopPropagation ) {e.stopPropagation() ;} //DOM L2
	else {e.cancelBubble = true ;} //IE
	
	if (e.preventDefault) {e.preventDefault() ;}//DOM L2
	else {e.returnValue = false ; }//IE
	
	function moveHandler (e) {
		if (!e) e = window.event ; //IE
		
		if(dragee.onMovingX) {if(dragee.onMovingX(e.clientX - referX)) {referX = e.clientX ; } }
		if(dragee.onMovingY) {if(dragee.onMovingY(e.clientY - referY)) {referY = e.clientY ; } }
		
		if(e.stopPropagation) {e.stopPropagation() ;} //DOM L2
		else {e.cancelBubble = true ; } //IE
		
		if(dragee.setCapture) {dragee.setCapture(); }
	}
	
	function upHandler(e) {
		if (!e) e = window.event ; //IE
		
		if (document.removeEventListener) { //DOM
			document.removeEventListener("mouseup", upHandler, true) ;
			document.removeEventListener("mousemove", moveHandler, true) ;
		}else if (document.detachEvent) { //IE 5+
			document.detachEvent ("onmouseup", upHandler) ;
			document.detachEvent ("onmousemove", moveHandler) ;
		}else { //IE 4
			document.onmouseup = olduphandler ;
			document.onmousemove = oldmovehandler ;
		}
		
		if(e.stopPropagation) {e.stopPropagation() ;} //DOM L2
		else {e.cancelBubble = true ; } //IE
		
		if(dragee.releaseCapture) {dragee.releaseCapture(); }
	}
	
}

/*????????***************************************************************************/



function showShield () {
	var shield = $("shield") ;
	
	if(! shield) {
		shield = document.createElement("div") ;
		shield.id = "shield" ;
		$PH(shield) ;
		document.body.appendChild(shield) ;
	}
	
	shield.style.top = "0px" ;
	shield.style.left = "0px" ;
	shield.style.width = document.body.offsetWidth + "px" ;
	shield.style.height = document.body.offsetHeight + "px" ;
	$PV(shield) ;
}

function takeoffShield() {
	var shield = $("shield") ;
	
	if(shield) {
		$PH(shield) ;
	}
}

/****************************************************************************/
function getArgs() {
	if (! location.search || location.search.length < 2) {return null ;} 
	var query = location.search.substring(1) ;
	return query ;
}

function getArgBeans () {
	var args = new Object () ;
	args.map = new Object () ;
	args.page = "welcome" ;
	args.params = "" ;
	
	
	if (! location.search || location.search.length < 2) {return args ;} 
	
	var query = location.search.substring(1) ;
	
	var pairs = query.split("&") ;
	
	for (var i = 0 ; i < pairs.length ; i ++) {
		var tuple = pairs[i].split("=") ;
		if (tuple && tuple.length == 2) {
			if(i == 0) {
				if("page" == tuple[0]) {
					args.page = unescape(tuple[1]) ; 
					args.params = query.substring(pairs[i].length + 1) ;
				}else {
					args.params = query ;
					args.map[tuple[0]] = unescape(tuple[1]) ;
				}
			}else {
				args.map[tuple[0]] = unescape(tuple[1]) ;
			}
		}
	}
	
	return args ;
}
// Below method is create by wingfeng it can operator check box array.
/**
 * Get the defined selected checkboxes number
 * @param selectElementArray the checkbox array
 * @WingFeng add on 2006-11-16 mail fx19800215@163.com
 */
function getSelectedNum (selectElementArray)
{
    var total = 0;

    if (selectElementArray != null)
	{
    	var max = selectElementArray.length;
    	
    	if (max==null)
    	{
    		if (selectElementArray.checked == true)
				total = 1;
    	}
    	
    	if (max > 1)
		{
	    	for (var index = 0; index < max; index++) 
       			if (selectElementArray[index].checked == true)
                	total += 1;
		}
    	else
		{
    		if (selectElementArray.checked == true)
				total = 1;
		}
    }

    return total;
}


/**
 * Get the first selected checkboxes value
 * @param selectElementArray the checkbox array
 */
function getFirstSelectedValue(selectElementArray)
{
	if (selectElementArray != null)
	{
		var max = selectElementArray.length;
		
		//	the selectElementArray is not a array, only a select object
		if (max==null)
		{
			if (selectElementArray.checked == true)
			{
				return selectElementArray.value;
			}
		}
		
		for (var index = 0; index < max; index++) 
    	{
    		if (selectElementArray[index].checked == true)
    		{
				return selectElementArray[index].value;
            }
    	}
    }
    
    return null;
}

/**
 *	Clear all the options under the specified select element
 */
function clearSelect(select)
{
	if (null==select.options) return;

	for (i=select.options.length-1;i>=0;i--)
	{
		var	option = select.options[i];
		select.removeChild(option);
	}
}

/**
 *	Get the specified select element value.
 */
function getSelectedValue(select)
{
	if (null==select.options) return null;
	
	for (i=0;i<select.options.length;i++)
	{
		if (select.options[i].selected == true)
		{
			return select.options[i].value;
		}
	}

	return null;
}

function checkPasswordNum(value)

{
	var str=/^[a-zA-Z]{1}([a-zA-Z0-9]){1,}$/;
	return value.match(str);
}

