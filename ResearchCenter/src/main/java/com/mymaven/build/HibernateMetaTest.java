/**
 * @author 冯华杰
 * 
 * Email:fhj@sonluk.com.cn
 * 
 */
package com.mymaven.build;

import org.hibernate.SessionFactory;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.hibernate.cfg.Configuration;
import org.hibernate.metadata.ClassMetadata;
import org.hibernate.service.ServiceRegistry;
import org.hibernate.type.Type;

//import com.mymaven.modle.UserInfo;

public class HibernateMetaTest {
//	public static void main(String[] args) {
//		Configuration config=new Configuration().configure();
//		StandardServiceRegistryBuilder serviceRegistryBuilder = new StandardServiceRegistryBuilder();
//		ServiceRegistry serviceRegistry = serviceRegistryBuilder.build();
//		SessionFactory sessionFactory=config.buildSessionFactory(serviceRegistry);
//		ClassMetadata entityMetaInfo = sessionFactory
//				.getClassMetadata(UserInfo.class);
//		String[] propertyNames = entityMetaInfo.getPropertyNames();
//		for (int i = 0, n = propertyNames.length; i < n; i++) {
//			String propertyName = propertyNames[i];
//			Type propType = entityMetaInfo.getPropertyType(propertyName);
//			System.out.println(propertyName + "字段类型为"
//					+ propType.getReturnedClass().getName());
//		}
//		if (entityMetaInfo.hasIdentifierProperty()) {
//			String idPropName = entityMetaInfo.getIdentifierPropertyName();
//			Type idPropType = entityMetaInfo.getIdentifierType();
//			System.out.println("主键字段为:" + idPropName + "类型为"
//					+ idPropType.getReturnedClass().getName());
//		} else {
//			System.out.println("此实体无主键");
//		}
//	}
}