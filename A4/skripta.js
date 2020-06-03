function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
function info(x){
	var tekst;
	switch(x){
		case 0:tekst="Budimpesta,..."; break;
		case 1:tekst="sdf"; break;
		case 2:tekst="sdf"; break;
		case 3:tekst="sdf"; break;
		case 4:tekst="sdf"; break;
		case 5:tekst="sdf"; break;
		case 6:tekst="sdf"; break;
		case 7:tekst="sdf"; break;
		case 8:tekst="sdf"; break;
	}
	var myWindow = window.open("", "MsgWindow", "width=200,height=100");
	myWindow.document.write(tekst);
}
var aud;
function zvuk(y){
	
	switch(y){
		case 0:aud= new Audio("osa.mp3"); break;
		case 1:aud= new Audio("osa.mp3"); break;
		case 2:aud= new Audio("osa.mp3"); break;
		case 3:aud= new Audio("osa.mp3"); break;
		case 4:aud= new Audio("osa.mp3"); break;
		case 5:aud= new Audio("osa.mp3"); break;
		case 6:aud= new Audio("osa.mp3"); break;
		case 7:aud= new Audio("osa.mp3"); break;
		case 8:aud= new Audio("osa.mp3"); break;
	}
	aud.play();
}
function mut(){aud.pause();}