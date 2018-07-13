package br.zijonas.alarmserver.config;

import org.hibernate.cfg.Configuration;

import br.zijonas.alarmserver.beans.Station;

public class HibernateIni {

	public static Configuration init() {
		return new Configuration().setProperty("hibernate.dialect", "org.hibernate.dialect.PostgreSQLDialect")
				.setProperty("hibernate.connection.driver_class", "org.postgresql.Driver")
				.setProperty("hibernate.connection.username", "dbadmin")
				.setProperty("hibernate.connection.password", "admin")
				.setProperty("hibernate.connection.url", "jdbc:postgresql://localhost:5432/rampage")
				.addAnnotatedClass(Station.class);
	}
}
