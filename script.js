const button = document.querySelector('.btn1')
const button1 = document.querySelector('.btn2')
const texto = document.querySelector('p')
const body = document.querySelector('body')
const colors = ['white','yellow', 'orange', 'red', 'black']
const colorsCast = ['Blanco','Amarillo', 'Naranja', 'Rojo', 'Negro']
var i = 0

body.style.backgroundColor = 'white'
button.addEventListener('click', changeBackground)
button1.addEventListener('click', changeBackground1)

function changeBackground(){

if (i < 4) {
   i++;
} else
   i=0;
   body.style.backgroundColor = colors[i]
   texto.innerHTML = colorsCast[i]
}

function changeBackground1(){

   i=i-1;
   if (i>-1){
   body.style.backgroundColor = colors[i]
   texto.innerHTML = colorsCast[i]} else i=4; body.style.backgroundColor = colors[i]
   texto.innerHTML = colorsCast[i]
}


