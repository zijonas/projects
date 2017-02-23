<!DOCTYPE html>
<?php
	session_start();
?>
<html>
<head>
	<link rel="stylesheet" media="screen" href="form_style.css">
</head>
<body>
<?php
if(!empty($_SESSION['list'])) {
	$prize = 0.00;
	$full = 100.00;
	$half = $full/2;
	$list = $_SESSION['list'];
	echo "</br>";
	echo "<div class='CSSTableGenerator'>\n";
	echo "<center><h2>Lista dos inscritos</h2></center>\n";
	echo "\t<table>\n";
		echo "\t<tr>\n";
			echo "\t\t<td>";
			echo "N.";
			echo "</td>\n";
			echo "\t\t<td>";
			echo "Nome";
			echo "</td>\n";
			echo "\t\t<td>";
			echo "Data de nascimento";
			echo "</td>\n";
			echo "\t\t<td>";
			echo "Paróquia";
			echo "</td>\n";
		echo "</tr>\n";
	$count=1;
	foreach($list as $listid => $listcont) {
		echo "\t<tr>\n";
		echo "\t\t<td id='num'>";
		echo $count;
		echo "</td>\n";
		foreach($listcont as $id => $item) {
			if($id=="paroquia") {
				$prize += $full;
			}
			echo "\t\t<td>";
			echo $item;
			echo "</td>\n";
		}
		echo "\t</tr>\n";
		$count++;
	}
	echo "</table>\n";
	echo "</div>\n";
	echo "<form class='finish_container' method='post' action='form.php'><input class='finish_button' type='submit' value='Editar inscritos' /></form>";
	echo "<h2>O valor da inscrição é de R$";
	echo number_format($prize, 2,'.','');
	echo "</h2>";
	echo "<div class='finish_container'><form method='post' action='payment.php'><input class='finish_button' type='submit' value='Pagar' /></form></div>";
}

?>
</body>
</html>
