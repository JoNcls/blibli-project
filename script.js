// append card wanna be variable
var cardDiv = document.getElementById("card-content")

const buttonRight = document.getElementById('slideRight');
const buttonLeft = document.getElementById('slideLeft');

buttonRight.onclick = function () {
  document.getElementById('scroll_menu').scrollLeft += 300;
};
buttonLeft.onclick = function () {
  document.getElementById('scroll_menu').scrollLeft -= 300;
};

let mybutton = document.getElementById("toTopBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function toTop() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}

document.addEventListener("DOMContentLoaded", function() {
    const coll = document.querySelector(".collapsible");
    const content = document.querySelector(".footer-content");
    
    coll.addEventListener("click", function() {
      this.classList.toggle("active");
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  });
