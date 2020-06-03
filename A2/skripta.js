function menjanje(x){
 var a;
 document.getElementById("velika").src=x;
 if(x.substr(-6,2)==10) {a=x.substr(-11);}
 else {a=x.substr(-10);}
 
 document.getElementById("ime").innerHTML=a;

}
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}