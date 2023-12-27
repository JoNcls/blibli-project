// Appending New Card
function addChild() {
  const container = document.getElementById("scroll_menu");
  const template = document.getElementById("card_content");
  const cloneDiv = template.cloneNode(true)
  container.appendChild(cloneDiv);
  const newDiv = document.createElement(template)
  container.createEle(newDiv);
}
// Popping Card
function popChild() {
  const container = document.getElementById("scroll_menu");
  if (container.lastElementChild) {
      container.removeChild(container.lastElementChild);
  }
}

// scroll button
let buttonRight = document.getElementById('slideRight');
let buttonLeft = document.getElementById('slideLeft');

let scrollableDiv = document.getElementById("scroll_menu");

buttonRight.onclick = function () {
  document.getElementById('scroll_menu').scrollLeft += 300;
};
buttonLeft.onclick = function () {
  document.getElementById('scroll_menu').scrollLeft -= 300;
};

// hiding button wannabe
document.onscroll = function(){
  if (scrollableDiv.scrollWidth <= scrollableDiv.clientWidth){
    buttonLeft.style.display = 'none'
    buttonRight.style.display = 'none'
  }else{
    buttonLeft.style.display = 'block'
    buttonRight.style.display = 'block'
  }
}

// to top button
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

// collapse button
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
