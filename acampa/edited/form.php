<!DOCTYPE html>
<?php
session_start();
$stat = (int) $_POST["individual"];
?>
<html>
<head>
	<meta charset="utf-8">
	<title>Formulário de inscrição ACAMPA 2016</title>
	<link rel="stylesheet" media="screen" href="form_style.css">
	<link rel="stylesheet" href="./jquery-ui-1.11.4/jquery-ui.min.css">
	<script src="./jquery-ui-1.11.4/external/jquery/jquery.js"></script>
	<script src="./jquery-ui-1.11.4/jquery-ui.min.js"></script>
	<script>
		$(document).ready(function(){
			$("#data_nac").datepicker();
		
			$(".delButton").click(function(e){
	   			var id = $(this).parent().siblings('#num').text();
	   			var url = "del.php";
	   			
				var form = document.createElement('form');
				form.setAttribute('method', 'post');
				form.setAttribute('action', 'del.php');

				var input = document.createElement('input');
				input.setAttribute('type', "text");
				input.setAttribute('value', id);
				input.setAttribute('name', "index");
				
				form.appendChild(input);
				
				form.style.display = 'none';
				document.body.appendChild(form)
				form.submit();
			})
		});
	</script>
</head>
<body>
	<?php
		if($stat == 1){
			echo "<form class='registration_form' method='post' name='registration_form' action='finish.php'>";
		} else {
			echo "<form class='registration_form' method='post' name='registration_form' action='post.php'>";
		}
	?>
		<ul>
			<li>
				<h2>Inscrição para o ACAMPA 2016</h2>
				<span class="required">Campos obrigatórios marcados com <img alt="Asterístico" src="images/asterisk.png" height="13px" ></span>
			</li>
			<li>
				<label for="name">Nome completo:</label>
				<input id="name" name="name" type="text" placeholder="Nome completo" required/>
				<span class="quest_hint">Ex: João da Silva</span>
			</li>
			<li>
				<label for="data_nac">Data de nascimento:</label>
				<input id="data_nac" name="data_nac" type="date" placeholder="01/01/2001" required/>
			</li>
			<li>
				<label for="paroquia">Paróquia:</label>
				<input id="paroquia" name="paroquia" type="text" placeholder="Paróquia"  value="<?php echo $_SESSION['cash_paroquia'] ?>" required/>
			</li>
<!-- 			<li>
				<label for="comunidade">Comunidade:</label>
				<input id="comunidade" type="text" placeholder="Comunidade" required/>
			</li>
			<li>
				<label for="phone">Telefone:</label>
				<input id="phone" type="text" placeholder="Telefone" required/>
				<span class="quest_hint">Ex: (47)1234-4567</span>
			</li>
			<li>
				<label for="email">Email:</label>
				<input id="email" type="email" placeholder="Email" required/>
				<span class="quest_hint">Ex: contato@jevi.com.br</span>
			</li>
			<li>
				<label for="sigla_je">Sigla JE:</label>
				<input id="sigla_je" type="text" placeholder="Sigla" required/>
				<span class="quest_hint">Ex: JEIS</span>
			</li>-->
			<li>
			<?php
				if($stat == 1){
					echo "<input class='finish_button' type='submit' value='Ir para o pagamento' />";
				} else {
					echo "<button class='submit_button' type='submit' >Adicionar à lista</button>";
				}
			?>
			</li>
		</ul>
	</form>
<?php
if(!empty($_SESSION['list'])) {
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
			echo "\t\t<td>";
			echo "</td>\n";
		echo "</tr>\n";
	$count=1;
	foreach($list as $listid => $listcont) {
		echo "\t<tr>\n";
		echo "\t\t<td id='num'>";
		echo $count;
		echo "</td>\n";
		foreach($listcont as $id => $item) {
			echo "\t\t<td>";
			echo $item;
			echo "</td>\n";
		}
		echo "\t\t<td>";
		echo "<input class='delButton' type='button' value='Apagar'/>";
		echo "</td>\n";
		echo "\t</tr>\n";
		$count++;
	}
	echo "</table>\n";
	echo "</div>\n";
	echo "<div class='finish_container'><form method='post' action='finish.php'><input class='finish_button' type='submit' value='Ir para o pagamento' /></form></div>";
}
?>
</body>
</html>
