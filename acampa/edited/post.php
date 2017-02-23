<?php
ini_set('display_errors', '1');
error_reporting(E_ALL | E_STRICT);

session_start();

if ($_POST) {
 
	$_SESSION['cash_paroquia']=$_POST['paroquia'];

	$list = array();
	if(!empty($_SESSION['list'])) {
		$list = $_SESSION['list'];
	}
	$entry = array();
	if(!empty($_POST['name'])) {
		$total_list = array();
			$entry = array();
		foreach($_POST as $key => $value) {
			$entry[$key] = $value;
		}
		$list[] = $entry;
	
	}
	$_SESSION['list'] = $list;
}

   header("Location: http://192.168.62.177/acampa/form.php");
   die();
?>
