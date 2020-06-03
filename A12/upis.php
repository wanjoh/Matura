<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "knjigaut";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
$ime=$_POST['ime'];
$kom=$_POST['kom'];
$mejl=$_POST['mejl'];
$datum=date("Y-m-d h:i:sa");
$sql = "INSERT INTO Utisak (Ime, Komentar, Email,Datum)
VALUES ('".$ime."', '".$kom. "', '".$mejl."','".$datum."')";

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
  echo "</br><a href='index.html'>Pocetna</a>";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>