package com.zijonas.backend;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.security.oauth2.provider.token.TokenStore;
import org.springframework.security.oauth2.provider.token.store.JdbcTokenStore;
import org.springframework.web.filter.CommonsRequestLoggingFilter;

@Configuration
public class AppConfig {

	@Value("${spring.datasource.url}")
	private String dataSourceUrl;

	@Value("${spring.datasource.driver-class-name}")
	private String dbDriverClass;

	@Value("${spring.datasource.username}")
	private String dbUsername;

	@Value("${spring.datasource.password}")
	private String dbPassword;

	@Bean
	public DataSource dataSource() {
		final DriverManagerDataSource dataSource = new DriverManagerDataSource(dataSourceUrl, dbUsername, dbPassword);
		dataSource.setDriverClassName(dbDriverClass);
		return dataSource;
	}

	@Bean
	public TokenStore tokenStore() {
		return new JdbcTokenStore(dataSource());
	}

	@Bean
	public CommonsRequestLoggingFilter requestLoggingFilter() {
		CommonsRequestLoggingFilter loggingFilter = new CommonsRequestLoggingFilter();
		loggingFilter.setIncludeClientInfo(true);
		loggingFilter.setIncludeQueryString(true);
		loggingFilter.setIncludePayload(true);
		return loggingFilter;
	}
}
