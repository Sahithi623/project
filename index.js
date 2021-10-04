mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("food-munch-logo").style.height = "120px";
    document.getElementById("food-munch-logo").style.width = "140px";
    mybutton.style.display = "block";
  } else {
    document.getElementById("food-munch-logo").style.height = "280px";
    document.getElementById("food-munch-logo").style.width = "300px";
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
}