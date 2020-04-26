const button1 = document.querySelector('.btn1')
const button2 = document.querySelector('.btn2')
const button3 = document.querySelector('.btn3')
const button4 = document.querySelector('.btn4')
const puntaje = document.querySelector('h2')
const quedan = document.querySelector('.empezar')
const segundos = document.querySelector('p')
var i = 0
let activo = 1

button1.addEventListener('click', sumarPuntaje);
button2.addEventListener('click', sumarPuntaje)
button3.addEventListener('click', sumarPuntaje)
button4.addEventListener('click', sumarPuntaje)


quedan.addEventListener('click', empezar)

 
function empezar() {
		let terminar=setInterval(botonActivo, 2500);
    setTimeout(function(){clearInterval(terminar);
  if (puntaje > 1) {			  
  puntaje.innerHTML = 'Termino el tiempo. Encontraste ' + i + ' veces a la rata Vaccaro. Este especimen es muy raro, habita en las mazmorras de Ezeiza y pocos lo han visto, felicitaciones!';} else {'Termino el tiempo. La rata Vaccaro es muy escurridiza, mejor suerte la proxima'}
  quedan.innerHTML = '';}  ,19500);
    segundos.style.visibility = "hidden"
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
  puntaje.classList.add("btn-success");
  setTimeout(sacarSuccess,850)
  }
}

function sacarSuccess (){
  puntaje.classList.remove("btn-success");
  document.querySelector('.btn'+activo).innerHTML = '';
}
