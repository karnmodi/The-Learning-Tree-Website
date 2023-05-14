const panel = document.getElementById("Right_Hand_Navigation_Panel");
const panelTop = panel.offsetTop;
const margin = 20;
const margin_Bottom = 500;
const footer = document.querySelector("footer");
const footerTop = footer.offsetTop;
const maxMove = footerTop - panelTop - margin_Bottom;

window.addEventListener('scroll', function() {
  const offsetY = window.pageYOffset;
  if (offsetY > panelTop) {
    const move = Math.min(offsetY - panelTop + margin, maxMove);
    panel.style.transform = `translateY(${move}px)`;
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

const Btn_Tables = document.getElementById("btn_Html_Tables");

Btn_Tables.addEventListener("click", function(event) {
  event.preventDefault();

  const section = document.getElementById("HTML_Tables");

  section.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
});

const Btn_Forms = document.getElementById("btn_Html_Forms");

Btn_Forms.addEventListener("click", function(event) {
  event.preventDefault();

  const section = document.getElementById("HTML_Forms");

  section.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
});

const Btn_About_Us = document.getElementById("btn_About_Us");

Btn_About_Us.addEventListener("click", function(event) {
  event.preventDefault();

  const section = document.getElementById("Footer");

  section.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
});

