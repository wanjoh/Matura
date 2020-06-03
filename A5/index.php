<html>
<head>
	<title>Pocetna</title>
	<link rel="stylesheet" href="stil.css">
</head> 
<body >
<header><span style="font-size:30px;cursor:pointer" onclick="openNav()">&#9776; navigacija</span></header>
<div id="mySidenav" class="sidenav">
  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
  <a href="oautoru.html">O autoru</a>
  <a href="uputstvo.html">Uputstvo</a>
</div>


<table id="tabela">
	
	</table>
	<form action="rezervacija.php" method="get">
	Ime i prezime<input type="text" name="ime"></br>
	Broj sedista:<input id="broj" type="number" required name="brs"></br>
	Mejl<input type="email" name="mejl"></br>
	<input type="Submit" value="Rezervisi">
	</form>
<script type="text/javascript" src="skripta.js">

</script>
<?php
$file = fopen("sedista.txt", "r");

while(! feof($file)) {
  $line = fgets($file);
  echo "<script>zauzeto(".$line.");</script>";
}

fclose($file);

?>
</body>
</html>