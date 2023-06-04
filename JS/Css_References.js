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




const Btn_Align_Items = document.getElementById("btn_Align_Items");

Btn_Align_Items.addEventListener("click", function(event) {
  event.preventDefault();

  const section = document.getElementById("Align_Items");

  section.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
});


const Btn_Borders = document.getElementById("btn_Border");

Btn_Borders.addEventListener("click", function(event) {
  event.preventDefault();

  const section = document.getElementById("Borders");

  section.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
});

const Btn_Margin = document.getElementById("btn_Margin");

Btn_Margin.addEventListener("click", function(event) {
  event.preventDefault();

  const section = document.getElementById("Margin");

  section.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
});

const Btn_Padding = document.getElementById("btn_Padding");

Btn_Padding.addEventListener("click", function(event) {
  event.preventDefault();

  const section = document.getElementById("Padding");

  section.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
});

const Btn_Position= document.getElementById("btn_Position");

Btn_Position.addEventListener("click", function(event) {
  event.preventDefault();

  const section = document.getElementById("Position");

  section.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
});

const Btn_Width= document.getElementById("btn_Width");

Btn_Width.addEventListener("click", function(event) {
  event.preventDefault();

  const section = document.getElementById("Width");

  section.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
});

const Btn_About_Us = document.getElementById("btn_About_Us");

Btn_About_Us.addEventListener("click", function(event) {
  event.preventDefault();

  const section = document.getElementById("Footer");

  section.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
});

