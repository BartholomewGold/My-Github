/**
 * @author 冯华杰
 * 
 * Email:fhj@sonluk.com.cn
 * 
 */
package com.sonluk.util;


public class OPNode {
	public char op;  //�������
	public int level; //��������ȼ�
	
	public OPNode(String op) {
		this.op = op.charAt(0);
		//��ݲ�ͬ�������ŷ������ȼ�
		if(op.equals("+")||op.equals("-")) {
			this.level = 1; //�Ӽ��������ȼ�Ϊ1
		}else if(op.equals("*")||op.equals("/")) {
			this.level = 2; //�˳��������ȼ�Ϊ2
		}else if(op.equals("(")) {
			this.level = -3;  //"("���ȼ�Ϊ-3
		}else {
			this.level = -1;   //")"���ȼ�Ϊ-1
		}
	}
}
