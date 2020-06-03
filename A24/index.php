<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="stil.css">
	<title>Pocetna</title>
	<script src="skripta.js">
	</script>
</head>

<body>
	<header><span style="font-size:30px;cursor:pointer" onclick="openNav()">&#9776; navigacija</span></header>
    <div id="mySidenav" class="sidenav">
  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
  <a href="oautoru.html"  >O autoru</a>
  <a href="grafik.html" >Grafik</a>
  
</div>
	<table>
	
	<tr>
	<th>Razred</th><th>Odlican</th><th>Vrlodobar</th><th>Dobar</th><th>Dovoljan</th><th>Nedovoljan</th><th>Prosek</th>
	</tr>
	
	<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "Skola";


$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM Uspeh order by Prosek desc";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "<tr><th>" . $row["Razred"]. "</th><th>". $row["Odlican"].
		"</th><th>". $row["Vrlodobar"]. "</th><th>". $row["Dobar"]. "</th><th>".
		$row["Dovoljan"]. "</th><th>". $row["Nedovoljan"]. "</th><th>". $row["Prosek"]. "</th></tr>";
    }
} else {
    echo "0 results";
}

$conn->close();

?>
</table>
	
</body>
</html>