package br.zij;

public class HelloWorld {
	private String message;

	public String getMessage() {
		return "The message is: " + message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public void init() {
		this.message = "Is initialized";
	}

}