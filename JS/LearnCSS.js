const panel = document.getElementById("Right_Hand_Navigation_Panel");
const panelTop = panel.offsetTop;
const margin = 20;
const margin_Bottom = 585;
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




const Btn_Introduction_CSS = document.getElementById("btn_Introduction_CSS");

Btn_Introduction_CSS.addEventListener("click", function(event) {
  event.preventDefault();

  const section = document.getElementById("Introduction_Of_CSS");

  section.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
});


const Btn_Inline_CSS = document.getElementById("btn_Inline_CSS");

Btn_Inline_CSS.addEventListener("click", function(event) {
  event.preventDefault();

  const section = document.getElementById("Inline_CSS");

  section.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
});

const Btn_Internal_CSS = document.getElementById("btn_Internal_CSS");

Btn_Internal_CSS.addEventListener("click", function(event) {
  event.preventDefault();

  const section = document.getElementById("Internal_CSS");

  section.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
});

const Btn_External_CSS = document.getElementById("btn_External_CSS");

Btn_External_CSS.addEventListener("click", function(event) {
  event.preventDefault();

  const section = document.getElementById("External_CSS");

  section.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
});

const Btn_CSS_Margin= document.getElementById("btn_CSS_Margin");

Btn_CSS_Margin.addEventListener("click", function(event) {
  event.preventDefault();

  const section = document.getElementById("CSS_Margins");

  section.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
});

const Btn_About_Us = document.getElementById("btn_About_Us");

Btn_About_Us.addEventListener("click", function(event) {
  event.preventDefault();

  const section = document.getElementById("Footer");

  section.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
});

