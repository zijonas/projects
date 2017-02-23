<?php
ini_set('display_errors', '1');
error_reporting(E_ALL | E_STRICT);

session_start();

if ($_POST) {
 

	$list = array();
	if(!empty($_SESSION['list'])) {
		$list = $_SESSION['list'];
		
		$index = (int) $_POST['index'];
		unset($list[$index-1]);
		$_SESSION['list'] = array_values($list);
	}
}

   header("Location: http://192.168.62.177/acampa/form.php");
   die();
?>
