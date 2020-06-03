function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}



/*	var i=0;
	showSlides();
 
function showSlides(){
 var slides = document.getElementsByClassName("r");
  var tacke=document.getElementsByClassName("kvdr");
  if(i!=0) {slides[i-1].style.display="none";tacke[i-1].classList.remove("active");}
  else {slides[slides.length-1].style.display="none";tacke[tacke.length-1].classList.remove("active");}
    slides[i].style.display = "block";
	tacke[i].classList.add("active");
  i++;
  if (i = slides.length) {i=0;}
  
  
  setTimeout(showSlides, 3000);
}*/

/*
var slideIndex = 0;
showSlides();
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("r");
  var dots = document.getElementsByClassName("kvdr");
  return setInterval(function() { for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setInterval(showSlides, 3000); }, 3000);
 
}
*/

//showSlides();

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("r");
  var dots = document.getElementsByClassName("kvdr");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); 
}