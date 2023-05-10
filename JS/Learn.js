const panel = document.getElementById("Right_Hand_Navigation_Panel");
const panelTop = panel.offsetTop;
const margin = 20;
window.addEventListener('scroll', function() {
  if (window.pageYOffset > panelTop) {
    panel.style.transform = `translateY(${window.pageYOffset - panelTop + margin}px)`;
  } else {
    panel.style.transform = `translateY(${margin}px)`;
  }
});


const Btn_Introduction = document.getElementById("btn_Introduction");

Btn_Introduction.addEventListener("click", function(event) {
  event.preventDefault();

  const section = document.getElementById("Introduction_Of_HTML");

  section.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
});


const Btn_Basics = document.getElementById("btn_Html_Basics");

Btn_Basics.addEventListener("click", function(event) {
  event.preventDefault();

  const section = document.getElementById("Basics_Of_HTML");

  section.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
});

const Btn_Classes = document.getElementById("btn_Classes");

Btn_Classes.addEventListener("click", function(event) {
  event.preventDefault();

  const section = document.getElementById("Classes_Ids");

  section.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
});



