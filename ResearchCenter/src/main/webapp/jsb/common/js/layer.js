var divHtml = "<style type='text/css'>\n";
divHtml += "div.alpha {";
divHtml += "opacity: 0.6;";
divHtml += "-moz-opacity: 0.6;";
divHtml += "filter: progid:DXImageTransform.Microsoft.Alpha(style=0,opacity=60,finishOpacity=100);";
divHtml += "height: 100%;";
divHtml += "}\n";
divHtml += "</style>\n";
divHtml += "<div id='openDiv' style='position: absolute;left: 0px;top: 0px;z-index: 1;visibility: hidden'>";
divHtml += "<div class='alpha' style='background-color: #F0FAFD;position: absolute;left: 0px;top: 0px;width:100%;height:100%;'></div>";
divHtml += "<iframe name='contentFrame' id='contentFrame' src='/toppay/page/util/blank.jsp' frameborder='0' width='500' height='300' scrolling='auto' style='background-color: #F0FAFD;position: absolute;left: 0px;top: 0px;border:1px solid #000;'></iframe>";
divHtml += "</div>";
document.write(divHtml);

var defaultFrameWidth = 500;
var defaultFrameHeight = 300;

function getMainDiv(){
	return document.getElementById("openDiv");
}
function getContentFrame(){
	return document.getElementById("contentFrame");
}
function resizeContentFrame(width, height){
	var frameObj = getContentFrame();
	frameObj.width = width;
	frameObj.height = height;
	resetPosition();
}
function resetPosition(){
	var frameObj = getContentFrame();
	var frameWidth = frameObj.width;
	var frameHeight = frameObj.height;
	var totalWidth = document.body.clientWidth;
	var totalHeight = document.body.clientHeight;
	frameObj.style.posLeft = (totalWidth-frameWidth)/2;
	frameObj.style.posTop = (totalHeight-frameHeight)/2;
}
function initSize(){
	var totalWidth = document.body.scrollWidth;
	var totalHeight = document.body.scrollHeight;
	var mainDiv = getMainDiv();
	mainDiv.style.posWidth = totalWidth;
	mainDiv.style.posHeight = totalHeight;
}
function openLayer(url,width,height,scrolling){
	var contentFrame = getContentFrame();
	contentFrame.src = url;
	if(width!=undefined && height!=undefined){
		resizeContentFrame(width,height);
	}else{
		resizeContentFrame(defaultFrameWidth,defaultFrameHeight);
	}
	if(scrolling==undefined){
		contentFrame.scrolling = "auto";
	}else if(scrolling){
		contentFrame.scrolling = "yes";
	}else{
		contentFrame.scrolling = "no";
	}
}
function showLayer(windowObj){
    var width = windowObj.document.body.scrollWidth;
    var height = windowObj.document.body.scrollHeight;
    windowObj.parent.resizeLayer(width,height);
	getMainDiv().style.visibility = "visible";
}
function hideLayer(){
	getMainDiv().style.visibility = "hidden";
	getContentFrame().src = "/unspay/page/util/blank.jsp";
}
function resizeLayer(width, height){
	resizeContentFrame(width, height);
}
function onBodyLoad(){
	initSize();
}