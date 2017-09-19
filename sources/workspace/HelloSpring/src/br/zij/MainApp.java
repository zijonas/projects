package br.zij;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class MainApp {

	public static void main(String[] args) {
//		ApplicationContext context = new ClassPathXmlApplicationContext("Beans.xml");
//		HelloWorld obj = (HelloWorld) context.getBean("helloWorld");
//		System.out.println(obj.getMessage());
//		obj.setMessage("Say Hue");
//		System.out.println(obj.getMessage());
		
		
//		ApplicationContext context = new ClassPathXmlApplicationContext("Beans.xml");
//		TextEditor txte = (TextEditor) context.getBean("textEditor");
//		txte.spellCheck();
		
//		ApplicationContext context = new ClassPathXmlApplicationContext("Beans.xml");
//		JavaCollection jc = (JavaCollection) context.getBean("javaCollections");
//		jc.getMyList();
//		jc.getMyMap();
//		jc.getMyProperties();
//		jc.getMySet();
		
		AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext();
		context.register(TextEditorConfig.class);
		context.refresh();
		context.start();
		TextEditor te = context.getBean(TextEditor.class);
		te.spellCheck();
		context.stop();
	}

}
