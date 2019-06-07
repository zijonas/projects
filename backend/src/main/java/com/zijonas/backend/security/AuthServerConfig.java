
package com.zijonas.backend.security;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.oauth2.config.annotation.configurers.ClientDetailsServiceConfigurer;
import org.springframework.security.oauth2.config.annotation.web.configuration.AuthorizationServerConfigurerAdapter;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableAuthorizationServer;
import org.springframework.security.oauth2.config.annotation.web.configurers.AuthorizationServerEndpointsConfigurer;
import org.springframework.security.oauth2.config.annotation.web.configurers.AuthorizationServerSecurityConfigurer;

@Configuration
@EnableAuthorizationServer
public class AuthServerConfig extends AuthorizationServerConfigurerAdapter {

	@Autowired
	AuthenticationManager authenticationManager;

	static class CorsFilter implements Filter {

		@Override
		public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
				throws IOException, ServletException {
			
			HttpServletResponse res = (HttpServletResponse) response;
			HttpServletRequest req = (HttpServletRequest) request;

			res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
			res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
			res.setHeader("Access-Control-Max-Age", "3600");
			res.setHeader("Access-Control-Allow-Headers", "Authorization, Content-Type");
			res.setHeader("Access-Control-Expose-Headers", "*");
			res.setHeader("Access-Control-Allow-Credentials", "true");
			System.out.println("OKOK");

			if ("OPTIONS".equalsIgnoreCase(req.getMethod())) {
				res.setStatus(200);
			} else {
				chain.doFilter(req, res);
			}
		}

	}
	
	
	@Override
	public void configure(AuthorizationServerSecurityConfigurer security) throws Exception {
		security.addTokenEndpointAuthenticationFilter(new CorsFilter());
	}

	@Override
	public void configure(ClientDetailsServiceConfigurer clients) throws Exception {
		clients.inMemory().withClient("client").secret("{noop}secret").authorizedGrantTypes("password")
		.resourceIds("oauth2-resource").scopes("read");
	}

	@Override
	public void configure(AuthorizationServerEndpointsConfigurer endpoints) throws Exception {
		endpoints.authenticationManager(authenticationManager);
	}
}
