 /***************************************************************************************************************
  * ? ? ??selectListTools.js 
  * ?????2004.6.23
  * ? ? ??LxcJie 
  * ???????list??????????
  *
  * ?????
  *          1? moveUp(oSelect,isToTop) ???????????? ??????list?????????
  *                                                                ????????????????????
  *          2? moveDown(oSelect,isToBottom)?????????? ??????list?????????
  *                                                                ????????????????????
  *          3? moveSelected(oSourceSel,oTargetSel) ?????? ????????????
  *          4? moveAll(oSourceSel,oTargetSel)????????? ??????????????
  *          5? deleteSelectItem(oSelect) ??????????? ???????
  * 
  ****************************************************************************************************************/
  
 /**
  * added by LxcJie 2004.6.23
  * ????????
  *
  * oSelect: ????
  * isToTop: ??????????????????
  *          true???????false??????false
  */
 function moveUp(oSelect,isToTop)
 {
     //???????????
     if(isToTop == null)
         var isToTop = false;
         
     //?????------------------------------------------------------------------
     if(oSelect.multiple)
     {
         for(var selIndex=0; selIndex<oSelect.options.length; selIndex++)
         {
             //????????????
             if(isToTop)
             {
                 if(oSelect.options[selIndex].selected)
                 {
                     var transferIndex = selIndex;
                     while(transferIndex > 0 && !oSelect.options[transferIndex - 1].selected)
                     {
                         oSelect.options[transferIndex].swapNode(oSelect.options[transferIndex - 1]);
                         transferIndex --;
                     }
                 }
             }
             //???????????
             else
             {
                 if(oSelect.options[selIndex].selected)
                 {
                     if(selIndex > 0)
                     {
                         if(!oSelect.options[selIndex - 1].selected)
                             oSelect.options[selIndex].swapNode(oSelect.options[selIndex - 1]);
                     }
                 }
             }
         }
     }
     //?????--------------------------------------------------------------------
     else
     {
         var selIndex = oSelect.selectedIndex;
         if(selIndex <= 0)
             return;
         //????????????
         if(isToTop)
         {
             while(selIndex > 0)
             {
                 oSelect.options[selIndex].swapNode(oSelect.options[selIndex - 1]);
                 selIndex --;
             }
         }
         //???????????
         else        
             oSelect.options[selIndex].swapNode(oSelect.options[selIndex - 1]);
     }
 }

/**
  * added by LxcJie 2004.6.23
  * ????????
  *
  * oSelect: ????
  * isToTop: ??????????????????
  *          true???????false??????false
  */
 function moveDown(oSelect,isToBottom)
 {
     //???????????
     if(isToBottom == null)
         var isToBottom = false;
         
     var selLength = oSelect.options.length - 1;
     
     //?????------------------------------------------------------------------
     if(oSelect.multiple)
     {
         for(var selIndex=oSelect.options.length - 1; selIndex>= 0; selIndex--)
         {
             //????????????
             if(isToBottom)
             {
                 if(oSelect.options[selIndex].selected)
                 {
                     var transferIndex = selIndex;
                     while(transferIndex < selLength && !oSelect.options[transferIndex + 1].selected)
                     {
                         oSelect.options[transferIndex].swapNode(oSelect.options[transferIndex + 1]);
                         transferIndex ++;
                     }
                 }
             }
             //???????????
             else
             {
                 if(oSelect.options[selIndex].selected)
                 {
                     if(selIndex < selLength)
                     {
                         if(!oSelect.options[selIndex + 1].selected)
                             oSelect.options[selIndex].swapNode(oSelect.options[selIndex + 1]);
                     }
                 }
             }
         }
     }
     //?????--------------------------------------------------------------------
     else
     {
         var selIndex = oSelect.selectedIndex;
         if(selIndex >= selLength - 1)
             return;
         //????????????
         if(isToBottom)
         {
             while(selIndex < selLength - 1)
             {
                 oSelect.options[selIndex].swapNode(oSelect.options[selIndex + 1]);
                 selIndex ++;
             }
         }
         //???????????
         else        
             oSelect.options[selIndex].swapNode(oSelect.options[selIndex + 1]);
     }
 }

/**
  * added by LxcJie 2004.6.23
  * ??select?????,????value?????value???????
  *
  * oSourceSel: ?????? 
  * oTargetSel: ???????
  */
 function moveSelected(oSourceSel,oTargetSel)
 {
     //????value?text?????
     var arrSelValue = new Array();
     var arrSelText = new Array();
     //????????options??value???
     var arrValueTextRelation = new Array();
     var index = 0;//??????????
     
     //????????????????????value???option?????
     for(var i=0; i<oSourceSel.options.length; i++)
     {
         if(oSourceSel.options[i].selected)
         {
             //??
             arrSelValue[index] = oSourceSel.options[i].value;
             arrSelText[index] = oSourceSel.options[i].text;
             //??value???option?????
             arrValueTextRelation[arrSelValue[index]] = oSourceSel.options[i];
             index ++;
         }
     }
     
     //???????????????????????????
     for(var i=0; i<arrSelText.length; i++)  
     {
         //??
         var oOption = document.createElement("option");
         oOption.text = arrSelText[i];
         oOption.value = arrSelValue[i];
         oTargetSel.add(oOption);
         //???????????
         oSourceSel.removeChild(arrValueTextRelation[arrSelValue[i]]);
     }
 }

/**
  * added by LxcJie 2004.6.23
  * ??select?????
  *
  * oSourceSel: ?????? 
  * oTargetSel: ???????
  */
 function moveAll(oSourceSel,oTargetSel)
 {
     //????value?text?????
     var arrSelValue = new Array();
     var arrSelText = new Array();
     
     //???????????????
     for(var i=0; i<oSourceSel.options.length; i++)
     {
         arrSelValue[i] = oSourceSel.options[i].value;
         arrSelText[i] = oSourceSel.options[i].text;
     }
     
     //?????????????select?
     for(var i=0; i<arrSelText.length; i++)  
     {
         var oOption = document.createElement("option");
         oOption.text = arrSelText[i];
         oOption.value = arrSelValue[i];
         oTargetSel.add(oOption);
     }
     
     //?????????????
     oSourceSel.innerHTML = "";
 }

/**
  * added by LxcJie 2004.6.23
  * ??????
  *
  * oSelect: ?????? 
  */
 function deleteSelectItem(oSelect)
 {
     for(var i=0; i<oSelect.options.length; i++)
     {
         if(i>=0 && i<=oSelect.options.length-1 && oSelect.options[i].selected)
         {
             oSelect.options[i] = null;
             i --;
         }
     }
 }
 
function palette_select_all(element)
{
  var options = element.options;

  for (var i = 0; i < options.length; i++)
    options[i].selected = true;
}
