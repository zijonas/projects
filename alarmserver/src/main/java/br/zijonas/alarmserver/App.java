package br.zijonas.alarmserver;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

import br.zijonas.alarmserver.beans.AlarmStation;

/**
 * Hello world!
 *
 */
public class App {
	public static void main(String[] args) {
		AlarmStation as = new AlarmStation();
		as.setId(0);
		as.setIpAddress("192.168.10.2");
		as.setName("MyHome");

		Configuration cfg = new Configuration()
				.setProperty("hibernate.dialect", "org.hibernate.dialect.PostgreSQLDialect")
				.setProperty("hibernate.connection.driver_class", "org.postgresql.Driver")
				.setProperty("hibernate.connection.username", "dbadmin")
				.setProperty("hibernate.connection.password", "admin")
				.setProperty("hibernate.connection.url", "jdbc:postgresql://localhost:5432/rampage")
				.addAnnotatedClass(AlarmStation.class);
		
		SessionFactory sf = cfg.buildSessionFactory();
		
		Session sess = sf.openSession();
		
		Transaction tx = sess.beginTransaction();
		
		sess.save(as);
		
		tx.commit();
	}
}
