<?php
$a=0;
$file = fopen("sedista.txt", "r");

while(! feof($file)) {
  $line = fgets($file);
  if ($_GET["brs"]==$line) $a=1;
}

fclose($file);

if($a==0){
	$file = fopen("sedista.txt", "a");
	fwrite($file,PHP_EOL.$_GET["brs"]) or die("Greska");
	header("Location: index.php");
}
else die("To mesto je vec zauzeto");

?>