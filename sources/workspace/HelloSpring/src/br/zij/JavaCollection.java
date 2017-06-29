package br.zij;

import java.util.List;
import java.util.Map;
import java.util.Properties;
import java.util.Set;

public class JavaCollection {
	private List myList;
	private Set mySet;
	private Map myMap;
	private Properties myProperties;

	public List getMyList() {
		System.out.println("Elements List" + myList);
		return myList;
	}

	public void setMyList(List myList) {
		this.myList = myList;
	}

	public Set getMySet() {
		System.out.println("Elements Set " + mySet);
		return mySet;
	}

	public void setMySet(Set mySet) {
		this.mySet = mySet;
	}

	public Map getMyMap() {
		System.out.println("Elements Map " + myMap);
		return myMap;
	}

	public void setMyMap(Map myMap) {
		this.myMap = myMap;
	}

	public Properties getMyProperties() {
		System.out.println("Elements Properties " + myProperties);
		return myProperties;
	}

	public void setMyProperties(Properties myProperties) {
		this.myProperties = myProperties;
	}

}
