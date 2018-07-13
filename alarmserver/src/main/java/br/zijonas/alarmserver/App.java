package br.zijonas.alarmserver;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

import br.zijonas.alarmserver.beans.Station;
import br.zijonas.alarmserver.config.HibernateIni;

/**
 * Hello world!
 *
 */
public class App {
	public static void main(String[] args) {
		Station as = new Station();
		as.setId(0);
		as.setIpAddress("192.168.10.2");
		as.setName("MyHome");

		Configuration cfg = HibernateIni.init();
		
		SessionFactory sf = cfg.buildSessionFactory();
		
		Session sess = sf.openSession();
		
		Transaction tx = sess.beginTransaction();
		
		sess.save(as);
		
		tx.commit();
	}
}
