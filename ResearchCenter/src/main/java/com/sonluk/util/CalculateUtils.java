/**
 * @author �뻪��
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
		Deque stack = new LinkedList();  //���������Ҫʹ�õ�ջ
		List list = new LinkedList();  //���������Ҫʹ�õ��б�
		//������ʽ�������ʽ
		Matcher m = entryOfExpression.matcher(expression);
		//�Է�������ÿ�����ش���
		while(m.find()) {
			String nodeString = expression.substring(m.start(), m.end());
			if(nodeString.matches("[0-9].*")) {
//				System.out.println(Double.valueOf(nodeString));
				list.add(Double.valueOf(nodeString));
			}else {
				//����������,���ݲ�ͬ�������
				OPNode opn = new OPNode(nodeString);
				int peekLevel = (stack.peek()==null)?0:((OPNode)stack.peek()).level;
				if(opn.level>peekLevel) {
					stack.push(opn);
				}else {
					if(opn.level==-1) {
						OPNode tempOpn = (OPNode)stack.pop();
						while(tempOpn.level!=-3) {
							list.add(tempOpn);  //��ջ����������б�
							tempOpn =(OPNode)stack.pop();
						}
					}else if(opn.level==-3) {
						stack.push(opn); //���Ϊ"("ֱ����ջ
					}else {
						//������������ջ����������ȼ�����һֱ��ջ
						//ֱ��ջ�ռ�����������ջ����������ȼ���
						OPNode tempOpn = (OPNode)stack.pop();
						while(tempOpn.level>=opn.level) {
							list.add(tempOpn);
							if(stack.isEmpty()) break;
							tempOpn = (OPNode)stack.pop();
						}
						stack.push(opn); //�����������ջ
					}
				}
			}
		}
		OPNode tempOpn = null;
		//ջ��ʣ������������б�
		while(!stack.isEmpty()) {
			tempOpn = (OPNode)stack.pop();
			list.add(tempOpn);
		}
		//�������ʾ����
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
		//��ӡ������
		return (Double)stack.pop();
	}
}

