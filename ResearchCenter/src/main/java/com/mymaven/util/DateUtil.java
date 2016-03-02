/**
 * @author 冯华杰
 * 
 * Email:fhj@sonluk.com.cn
 * 
 */
package com.mymaven.util;

import java.io.PrintStream;
import java.util.ArrayList;
import java.util.List;

public class DateUtil
{
  public static int getLastDayOfMonth(String ym)
  {
    String[] str = ym.split("-");
    if (str.length != 2) {
      return 0;
    }
    int year = Integer.valueOf(str[0]).intValue();
    int month = Integer.valueOf(str[1]).intValue();
    if ((month == 1) || (month == 3) || (month == 5) || (month == 7) || (month == 8) || 
      (month == 10) || (month == 12)) {
      return 31;
    }
    if (month == 2) {
      if (year % 4 == 0) {
        if (year % 100 == 0) {
          if (year % 400 == 0) {
            return 29;
          }
          return 28;
        }

        return 29;
      }

      return 28;
    }

    return 30;
  }

  public static List<String> getDiffMonth(String st, String ed)
    throws Exception
  {
    List list = new ArrayList();
    int styear = Integer.valueOf(st.split("-")[0]).intValue();
    int stmonth = Integer.valueOf(st.split("-")[1]).intValue();
    int edyear = Integer.valueOf(ed.split("-")[0]).intValue();
    int edmonth = Integer.valueOf(ed.split("-")[1]).intValue();
    if (edyear < styear) {
      throw new Exception("范围错误");
    }
    if (edmonth < stmonth) {
      throw new Exception("范围错误");
    }
    for (int j = styear; j <= edyear; j++) {
      for (int i = 1; i <= 12; i++) {
        if (i < 10)
          list.add(j + "-0" + i);
        else {
          list.add(j + "-" + i);
        }
      }
    }
    for (int i = 1; i < stmonth; i++) {
      if (i < 10)
        list.remove(styear + "-0" + i);
      else {
        list.remove(styear + "-" + i);
      }
    }
    for (int i = 12; i > edmonth; i--) {
      if (i < 10)
        list.remove(edyear + "-0" + i);
      else {
        list.remove(edyear + "-" + i);
      }
    }

    return list;
  }
  public static void main(String[] args) throws Exception {
    for (String a : getDiffMonth("2008-01", "2009-05"))
      System.out.println(a);
  }
}