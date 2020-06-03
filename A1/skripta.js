function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function zvuk0(){
 var audio = new Audio('ajkula.mp3');
 audio.play();
}
function zvuk1(){
 var audio = new Audio('albatros.mp3');
 audio.play();
}

function zvuk2(){
 var audio = new Audio('kraba.mp3');
 audio.play();
}

function zvuk3(){
 var audio = new Audio('lenjivac.mp3');
 audio.play();
}

function zvuk4(){
 var audio = new Audio('osa.mp3');
 audio.play();
}

function info0(){
var myWindow = window.open("", "MsgWindow", "width=200,height=100");
myWindow.document.write("<p>Ovo je ajkula</p>");
}

function info1(){
var x="Albatros ima veliki raspon krila";
window.alert(x);
}
function info2(){
var x="You mess with the crabo you get the stabo";
window.alert(x);
}
function info3(){
var x="Lenjivci su lenji";
window.alert(x);
}

function info4(){
var x="Ujed ove ose je veoma bolan i smrtonosan";
window.alert(x);
}