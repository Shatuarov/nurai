// Падающие сердца и розы
function createHeartOrRose(){
  const elem = document.createElement("div");
  elem.classList.add(Math.random()>0.5?"heart":"rose");
  elem.innerHTML = Math.random()>0.5?"❤️":"🌹";
  elem.style.left = Math.random()*100 + "vw";
  elem.style.animationDuration = (Math.random()*3+3) + "s";
  document.body.appendChild(elem);
  setTimeout(()=>elem.remove(),6000);
}
setInterval(createHeartOrRose,300);

// Салют
function fireworks(){
  confetti({particleCount:200,spread:120,origin:{y:0.6}});
  setInterval(()=>{confetti({particleCount:100,spread:160})},1500);
}

// Слайдер
let slides = document.querySelectorAll('.slide');
let current = 0;
setInterval(()=>{
  slides[current].classList.remove('active');
  current = (current+1) % slides.length;
  slides[current].classList.add('active');
},3000);

// Конверт
function openEnvelope(){
  alert("💌 Жаным, сені қатты жақсы көремін ❤️");
}

// Таймер "сколько вместе"
const startDate = new Date("2025-11-11T00:00:00"); // сюда дату начала отношений
function updateTimer(){
  const now = new Date();
  let diff = now - startDate;
  let days = Math.floor(diff/(1000*60*60*24));
  let hours = Math.floor((diff%(1000*60*60*24))/(1000*60*60));
  let minutes = Math.floor((diff%(1000*60*60))/(1000*60));
  let seconds = Math.floor((diff%(1000*60))/1000);
  document.getElementById("timer").innerHTML = `Біз бірге: ${days} күн ${hours} сағ ${minutes} мин ${seconds} сек`;
}
setInterval(updateTimer,1000);
updateTimer();
function playMusic(){
const music = document.getElementById("bgMusic");
music.play();
}