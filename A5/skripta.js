function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
menjaj();

function menjaj(){
	var str;
	var i,b,c,a;
	//for(i=2;i<14;i++) {document.getElementById("s"+i).style.backgroundColor="red";}
	for(i=2;i<53;i=i+4){
		a=i+1;
		b=i+2;
		c=i+3;
		document.getElementById("tabela").innerHTML+="<tr><th id='s"+i+"' onclick='sed(id)'>"+i+
	"</th><th></th><th id='s"+a+"' onclick='sed(id)'>"+a+"</th><th></th><th id='s"+b+"' onclick='sed(id)'>"+b+
	"</th><th></th><th id='s"+c+"' onclick='sed(id)'>"+c+"</th></tr><tr><th></th><th></th><th></th><th></th><th></th><th></th><th></th></tr>";
	document.getElementById("s"+i).style.backgroundColor="green";
	document.getElementById("s"+a).style.backgroundColor="green";
	document.getElementById("s"+b).style.backgroundColor="green";
	document.getElementById("s"+c).style.backgroundColor="green";
	}	
}

function sed(y){
	if (document.getElementById(y).style.backgroundColor=="red") window.alert("sediste je zauzeto");
	else document.getElementById("broj").value=y.substr(1);
}
function zauzeto(x){
	document.getElementById("s"+x).style.backgroundColor="red";
}
