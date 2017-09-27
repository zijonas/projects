package br.zij;

import org.springframework.context.ApplicationEvent;
import org.springframework.context.ApplicationListener;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class TextEditorConfig implements ApplicationListener<ApplicationEvent> {

	@Bean
	public TextEditor getTextEditor() {
		return new TextEditor(getSpellChecker());
	}
	
	public SpellChecker getSpellChecker() {
		return new SpellChecker();
	}

	@Override
	public void onApplicationEvent(ApplicationEvent arg0) {
		System.out.println(arg0.getClass());
	}
}
