const panel = document.getElementById("Right_Hand_Navigation_Panel");
const panelTop = panel.offsetTop;
const margin = 20;
const margin_Bottom = 680;
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




const Btn_Body = document.getElementById("btn_Body");

Btn_Body.addEventListener("click", function(event) {
  event.preventDefault();

  const section = document.getElementById("Body");

  section.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
});


const Btn_Div = document.getElementById("btn_Div");

Btn_Div.addEventListener("click", function(event) {
  event.preventDefault();

  const section = document.getElementById("Div");

  section.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
});

const Btn_HTag = document.getElementById("btn_HTag");

Btn_HTag.addEventListener("click", function(event) {
  event.preventDefault();

  const section = document.getElementById("HTAG");

  section.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
});

const Btn_Legend = document.getElementById("btn_Legend");

Btn_Legend.addEventListener("click", function(event) {
  event.preventDefault();

  const section = document.getElementById("Legend");

  section.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
});

const Btn_Ol= document.getElementById("btn_Ol");

Btn_Ol.addEventListener("click", function(event) {
  event.preventDefault();

  const section = document.getElementById("Ol");

  section.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
});

const Btn_Table= document.getElementById("btn_Table");

Btn_Table.addEventListener("click", function(event) {
  event.preventDefault();

  const section = document.getElementById("Table");

  section.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
});

const Btn_About_Us = document.getElementById("btn_About_Us");

Btn_About_Us.addEventListener("click", function(event) {
  event.preventDefault();

  const section = document.getElementById("Footer");

  section.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
});

