const button1 = document.querySelector('.btn1')
const button2 = document.querySelector('.btn2')
const button3 = document.querySelector('.btn3')
const button4 = document.querySelector('.btn4')
const puntaje = document.querySelector('h2')
const quedan = document.querySelector('p')
var i = 0
let activo = 1

button1.addEventListener('click', sumarPuntaje);
button2.addEventListener('click', sumarPuntaje)
button3.addEventListener('click', sumarPuntaje)
button4.addEventListener('click', sumarPuntaje)


let empezar = setInterval(botonActivo, 2500);
setTimeout(Apagar,19000)

function Apagar() {
  clearInterval(empezar);
  puntaje.innerHTML = 'Termino el tiempo. Tu puntaje fue de ' + i + ' puntos';
  quedan.innerHTML = '';
}


function botonActivo(){
  activo = Math.round(Math.random()*3) +1 ;
  document.querySelector('.btn'+activo).classList.add("activo");
  setTimeout(botonNoActivo,700)
}

function botonNoActivo(){
  document.querySelector('.btn'+activo).classList.remove("activo");
}



function sumarPuntaje(){
  if (this.classList.contains('activo') === true) {
  i++;
  puntaje.innerHTML = 'Puntaje: ' + i;
  this.innerHTML = '+1';
  setTimeout(sacarSuccess,850)
  }
}

function sacarSuccess (){
  puntaje.classList.remove("btn-success");
  document.querySelector('.btn'+activo).innerHTML = '';
}
