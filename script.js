/* Evento de color del Navbar */

const inicio = document.getElementById("inicio");
const hoy = document.getElementById("hoy");

inicio.addEventListener("click", () => {
    hoy.classList.remove("active");
    inicio.classList.add("active");
});

hoy.addEventListener("click", () => {
    inicio.classList.remove("active");
    hoy.classList.add("active");
});

// --------------------------------------------------------------------------------------------------

// JS del dropdown-menu 

// Get all dropdown menu items
const dropdownItems = document.querySelectorAll('.dropdown-item');

// Add event listener to each dropdown item
dropdownItems.forEach((item, index) => {
  item.addEventListener('mouseover', () => {
    // Remove active class from previous active item
    document.querySelector('.dropdown-item.active').classList.remove('active');
    // Add active class to current item
    item.classList.add('active');
  });

  // Set the first item as active
  if (index === 0) {
    item.classList.add('active');
  }
});

//Empieza botón de ayuda estatico
document.querySelector('#boton button').addEventListener('click', function() {
  let options=document.querySelector('.opciones');
  if(options.style.display=="none")
  options.style.display = 'block';
  else options.style.display="none"
});

document.querySelector('body').addEventListener('click', function(event) {
  let targetElement = event.target; 
  let options=document.querySelector('.opciones');
    if (!document.querySelector('#boton button').contains(targetElement)) {
      options.style.display="none"
  }
})
//Termina botón de ayuda 

//Boton de mensajes
let msg=document.querySelector("#msg")
let msg2=document.querySelector("#msg2")
let cancelar=document.querySelector("#cancelar")
let msg1=document.querySelector("#msg1")
let nuevomsg=document.querySelector(".messages-nuevo")
let msgcorreo=document.querySelector(".messages-correo")
let msginner=document.querySelector(".far")

msg.addEventListener("click",abrircerrar,true)
msginner.addEventListener("click",abrircerrar,true)

function abrircerrar(){
  if(msg.style.display=="none")msg.style.display="block";
  else msg.style.display="none";
}

cancelar.addEventListener("click",cerrar,true)
function cerrar(){
  msg2.style.display="none";
  msg1.style.display="block";
  msg.style.display="block";
  msg.className=="dropdown-menu messages show"
}
nuevomsg.addEventListener("click",abrir1,true);
msgcorreo.addEventListener("click",abrir,true)
function abrir(){
  msg2.style.display="block";
  msg1.style.display="none";
  msg.style.display="block"
  msg.className=="dropdown-menu messages show"
}
function abrir1(){
  msg2.style.display="block";
  msg1.style.display="none";
  msg.style.display="block"
  msg.className=="dropdown-menu messages show"
}

