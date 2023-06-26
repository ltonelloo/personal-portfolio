const textElement = document.getElementById('typed-text');
const textArray = [
 'Desenvolvedor Web',
 'Futuro Engenheiro de Software',
 'Entusiasta',
 'Cinéfilo de Final de Semana',
 'Desenvolvedor Web',
 'Eterno Estudante',
 'Gamer de Final de Semana',
];

let currentIndex = 0;
let isDeleting = false;
let typingDelay = 100;
let deletionDelay = 10;
let delayAfterTyping = 3000;

function typeText() {
 typingDelay = 100;
 const currentText = textArray[currentIndex];

 if (isDeleting) {
  textElement.textContent = currentText.slice(
   0,
   textElement.textContent.length - 1
  );
 } else {
  textElement.textContent = currentText.slice(
   0,
   textElement.textContent.length + 1
  );
 }

 if (!isDeleting && textElement.textContent === currentText) {
  isDeleting = true;
  typingDelay = delayAfterTyping;
 } else if (isDeleting && textElement.textContent === '') {
  isDeleting = false;
  currentIndex = (currentIndex + 1) % textArray.length;
  typingDelay = 100;
 }

 setTimeout(typeText, typingDelay);
}
setTimeout(typeText, typingDelay);

let clockScreen = document.getElementById('actualHour');
let dateScreen = document.getElementById('actualDate');

function changeTime() {
 let dataHora = new Date();
 let hora = dataHora.getHours();
 let minutos = dataHora.getMinutes();
 let segundos = dataHora.getSeconds();
 let day = dataHora.getDate();
 let month = dataHora.getMonth() + 1;
 let year = dataHora.getFullYear();

 let hour = hora + ':' + minutos + ':' + segundos;
 let fullDay = day + '/' + month + '/' + year;

 clockScreen.textContent = hour;
 dateScreen.textContent = fullDay;
}

setInterval(changeTime, 1000);
