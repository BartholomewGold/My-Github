function grabIt(e) {
whichIt = event.srcElement;
while (whichIt.id.indexOf("login_div") == -1) {
whichIt = whichIt.parentElement;
if (whichIt == null) { return true; }}
whichIt.style.pixelLeft = whichIt.offsetLeft;
whichIt.style.pixelTop = whichIt.offsetTop;
currentX = (event.clientX + document.body.scrollLeft);
currentY = (event.clientY + document.body.scrollTop);
return true;}

function moveIt(e) {
if (whichIt == null) { return false; }
newX = (event.clientX + document.body.scrollLeft);
newY = (event.clientY + document.body.scrollTop);
distanceX = (newX - currentX); distanceY = (newY - currentY); currentX = newX; currentY = newY;
whichIt.style.pixelLeft += distanceX; whichIt.style.pixelTop += distanceY;
if(whichIt.style.pixelTop < document.body.scrollTop) whichIt.style.pixelTop = document.body.scrollTop;
if(whichIt.style.pixelLeft < document.body.scrollLeft) whichIt.style.pixelLeft = document.body.scrollLeft;
if(whichIt.style.pixelLeft > document.body.offsetWidth - document.body.scrollLeft - whichIt.style.pixelWidth - 20) whichIt.style.pixelLeft = document.body.offsetWidth - whichIt.style.pixelWidth - 20;
if(whichIt.style.pixelTop > document.body.offsetHeight + document.body.scrollTop - whichIt.style.pixelHeight - 5) whichIt.style.pixelTop = document.body.offsetHeight + document.body.scrollTop - whichIt.style.pixelHeight - 5;
event.returnValue = false;
return false;}

function dropIt() {whichIt = null;return true;}

function heartBeat() {
diffY=document.body.scrollTop;diffX=document.body.scrollLeft;
if (diffY!=lastScrollY) {
percent=.1*(diffY-lastScrollY);
if (percent>0) percent=Math.ceil(percent);else percent=Math.floor(percent);
document.all.login_div.style.pixelTop += percent;
lastScrollY = lastScrollY + percent;}
if (diffX!=lastScrollX) {
percent=.1*(diffX-lastScrollX);
if (percent>0) percent=Math.ceil(percent);else percent=Math.floor(percent);
document.all.login_div.style.pixelLeft += percent;
lastScrollX=lastScrollX + percent;}}