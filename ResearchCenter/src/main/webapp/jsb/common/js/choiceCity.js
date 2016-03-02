function initChoiceCity (selectProv,selectCity){
 
var v=selectProv.value;
var vCity=selectCity.value;
//alert(selectProv.options.length);
selectProv.innerHTML="";
if(v=="") 
selectProv.appendChild(addDefault());

	for(var i=0;i<cityIdArray.length;i++){

		if(cityIdArray[i].length==2) selectProv.appendChild(addOption(cityNameArray[i], cityIdArray[i])) ;
	}

	checkSelectedValue(selectProv,v);

	mySetSelectCity(selectProv,selectCity);
	checkSelectedValue(selectCity,vCity);
	
}
function mySetSelectCity(obj,selectCity){

selectCity.innerHTML="";
selectCity.appendChild(addDefault());
//	alert(selectCity.value);

	for(var i=0;i<cityIdArray.length;i++){

	if(cityIdArray[i].length!=2 && cityIdArray[i].substring(0,2)==obj.value) 
	selectCity.appendChild(addOption(cityNameArray[i], cityIdArray[i])) ;
	}

	

} 

function addOption(label, value) {
		var opt = document.createElement('option');
		opt.value = value ;
		opt.innerHTML = label ;
		
		return opt ;
}

function checkSelectedValue(obj,v){
	var opts=obj.options;
	for(var i=0;i<opts.length;i++){
		if(opts[i].value==v) opts[i].selected=true;
	}
	
}

function addDefault(){
return addOption("è¯·éæ©","");
 

}


