/**
 * @author 冯华杰
 * 
 * Email:fhj@sonluk.com.cn
 * 
 */
package com.sonluk.util;

import java.util.Deque;
import java.util.LinkedList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;



public class CalculateUtils {
	public static Double getCal(String expression) {
		Pattern entryOfExpression = Pattern.compile("[0-9]+(\\.[0-9]+)?|\\(|\\)|\\+|-|\\*|/");
		Deque stack = new LinkedList();  //运算过程中要使用的栈
		List list = new LinkedList();  //运算过程中要使用的列表
		//用正则式分析表达式
		Matcher m = entryOfExpression.matcher(expression);
		//对分析出的每个语素处理
		while(m.find()) {
			String nodeString = expression.substring(m.start(), m.end());
			if(nodeString.matches("[0-9].*")) {
//				System.out.println(Double.valueOf(nodeString));
				list.add(Double.valueOf(nodeString));
			}else {
				//如果是运算符,根据不同情况处理
				OPNode opn = new OPNode(nodeString);
				int peekLevel = (stack.peek()==null)?0:((OPNode)stack.peek()).level;
				if(opn.level>peekLevel) {
					stack.push(opn);
				}else {
					if(opn.level==-1) {
						OPNode tempOpn = (OPNode)stack.pop();
						while(tempOpn.level!=-3) {
							list.add(tempOpn);  //出栈的运算符送列表
							tempOpn =(OPNode)stack.pop();
						}
					}else if(opn.level==-3) {
						stack.push(opn); //如果为"("直接入栈
					}else {
						//如果新运算符比栈顶运算符优先级低则一直出栈
						//直到栈空间或新运算符比栈顶运算符优先级高
						OPNode tempOpn = (OPNode)stack.pop();
						while(tempOpn.level>=opn.level) {
							list.add(tempOpn);
							if(stack.isEmpty()) break;
							tempOpn = (OPNode)stack.pop();
						}
						stack.push(opn); //新运算符号入栈
					}
				}
			}
		}
		OPNode tempOpn = null;
		//栈中剩余运算符送入列表
		while(!stack.isEmpty()) {
			tempOpn = (OPNode)stack.pop();
			list.add(tempOpn);
		}
		//后续表达示计算
		stack.clear();
		for(Object o:list) {
			if(o instanceof Double) {
				stack.push(o);
			}else {
				
				double opd2 = ((Double)stack.pop()).doubleValue();
				double opd1 = ((Double)stack.pop()).doubleValue();
//				System.out.println(opd2+","+opd1);
				switch(((OPNode)o).op) {
				case '+':stack.push(opd1 + opd2);break;
				case '-':stack.push(opd1 - opd2);break;
				case '*':stack.push(opd1 * opd2);break;
				case '/':stack.push(opd1 / opd2);break;
				}
			}
		}
		//打印计算结果
		return (Double)stack.pop();
	}
}

