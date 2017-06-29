package br.zij;

public class TextEditor {

	private SpellChecker spellChecker;
	
	public void setSpellChecker(SpellChecker sP) {
		System.out.println("Setting Spell checker");
		spellChecker = sP;
	}
	
	public SpellChecker getSpellChecker() {
		return spellChecker;
	}
	
	public void spellCheck() {
		spellChecker.checkSpelling();
	}
}
