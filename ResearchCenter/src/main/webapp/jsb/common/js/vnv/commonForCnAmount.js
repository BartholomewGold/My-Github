function toStdAmount(sAmount)
{
	var sComma = /\,/gi;
	var sResult = sAmount.replace(sComma,"");
	var iDotIndex = sResult.indexOf('.');
	var iLength = sResult.length;
	var toMatchNaNum = /\D/;
	if ((iDotIndex!=-1&&iLength-iDotIndex>3)
		||toMatchNaNum.test(sResult.slice(iDotIndex+1,iLength)))
		return -1;		//小数点后大于2位数 或 含有非数字字符
	else
	{
//将金额处理为标准的######.##形式 begin
		if (iDotIndex==-1)
			sResult = sResult+'.00';
		else if (iDotIndex==0)
		{
			if (iLength-iDotIndex==1) sResult='0'+sResult+'00';
			if (iLength-iDotIndex==2) sResult='0'+sResult+'0';
			if (iLength-iDotIndex==3) sResult='0'+sResult;
		}
		else
		{
			if (iLength-iDotIndex==2) sResult=sResult+'0';
			if (iLength-iDotIndex==1) sResult=sResult+'00';
		}
//将金额处理为标准的######.##形式 end

//处理金额非前面的0 begin
		var sTemp = "";
		sTemp = sResult.slice(0,iDotIndex);
			
		var iTemp = new Number(sTemp);
		sTemp = iTemp.toString();
		if (sTemp.length>16) return -2;
		iDotIndex = sResult.indexOf('.');
//处理金额非前面的0 end

		sResult = sTemp+sResult.slice(iDotIndex);	//返回标准的######.##形式的金额
		return sResult;
	}
}


function getChineseCurrencyString(sAmount)
{
	var value = toStdAmount(sAmount);
	if(value<0) return value;
	var sCN_Num = new Array("零","壹","贰","叁","肆","伍","陆","柒","捌","玖");
	var unit = new Array('元', '万', '亿', '万');
	var subunit = new Array('拾', '佰', '仟');
	var sCNzero = '零';

	var result = "";

	var iDotIndex = value.indexOf('.');

	var sBeforeDot = value.slice(0, iDotIndex);
	var sAfterDot = value.slice(iDotIndex);

	var len = 0;
	//before dot
	len = sBeforeDot.length;
	var i = 0, j = 0, k = 0; //j is use to subunit,k is use to unit
	var oldC = '3';
	var cc = '0';
	result = unit[0] + result;

	var oldHasN = false;  
	var hasN = false;
	var allZero = true;
		
	for (i = 0; i < len; i++) {
		if (j == 0 && i != 0) {
			if (!hasN) 
			{
				if ((k % 2) == 0) result = result.slice(1);
			}
			else
			{
				if (oldC == '0') result = sCNzero + result;
			}
			result = unit[k] + result;
			//oldC = '3';
			oldHasN = hasN;
			hasN = false;
		}
		cc = sBeforeDot.charAt(len - i - 1);
		if (oldC == '0' && cc != oldC) 
		{
			if (hasN) result = sCNzero + result;
		}
		if (cc != '0')
		{
			if (j != 0)
				result = subunit[j - 1] + result;
			var dig = '0';
			dig = sCN_Num[cc];

			if (dig == '0')
				return false;
			hasN = true;
			allZero = false;
			result = dig + result;
		}
		oldC = cc;
		j++;
		if (j == 4)
		{
			k++;
			j = 0;
		}
	}
	if (allZero) {
		result = "零元";
	}
	else {
		var bb = 0;
		if (!hasN) {
			bb++;
			if (!oldHasN) {
				bb++;
			}
		}
		if (bb != 0)
			result = result.slice(bb);
		if (result.charAt(0) == '零')
			result = result.slice(1);
	}

	//after dot
	sAfterDot = sAfterDot.slice(1);
	len = sAfterDot.length;
	var corn = new Array('0','0');			
	var cornunit = new Array('角', '分');
	var n = 0; //j is use to subunit,k is use to unit
	var dig = '0';
	corn[0] = sAfterDot.charAt(0);
	if (len > 1)
		corn[1] = sAfterDot.charAt(1);
	else
		corn[1] = '0';
	if ((corn[0] ==  '0') && (corn[1] == '0')) 
		return result += '整';
	else
		if (allZero) result = "";
	for (i = 0; i < 2; i++)
	{
		var curchar = corn[i];
		dig = sCN_Num[curchar];

		if (i==0)
		{
			if(result!=""||curchar!='0')
				result += dig;
			if(curchar!='0')
			{
				result += cornunit[0];
			}
		}
		if (i==1&&curchar!='0') result = result+dig+cornunit[1];
	}

	return result;
}
