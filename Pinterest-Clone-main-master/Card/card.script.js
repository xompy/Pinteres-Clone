// Cambiar estructura de las imagenes
const images = document.querySelectorAll('.grid-item');

images.forEach((img) => {
  const newDiv = document.createElement('div');
  newDiv.classList.add('window');
  newDiv.classList.add('grid-item');

  const imgClone = img.cloneNode(true);
  imgClone.classList.remove('grid-item');
  newDiv.appendChild(imgClone); // Agregar la imagen clonada al contenedor window grid-item

  const btnContainer = document.createElement('div');
  btnContainer.classList.add('hover-zone');

  const topBar = document.createElement('div');
  topBar.classList.add('top-bar');
  const buttonText = document.createElement('p');
  buttonText.textContent = '';
  topBar.appendChild(buttonText);
  const anchorTag = document.createElement('a');
  anchorTag.textContent = 'Guardar';
  topBar.appendChild(anchorTag);
  btnContainer.appendChild(topBar);

  const bottomBar = document.createElement('div');
  bottomBar.classList.add('bottom-bar');
  const websiteAnchor = document.createElement('a');
  websiteAnchor.textContent = '↗ Pinterest.com';
  bottomBar.appendChild(websiteAnchor);
  const radiusIco = document.createElement('div');
  radiusIco.classList.add('radius-ico');
  const icon1 = document.createElement('img');
  icon1.src = 'https://cdn3.iconfinder.com/data/icons/iconset-1-1/24/icon_set_outlinder-10-256.png';
  icon1.classList.add('radius-ico1');
  const icon2 = document.createElement('img');
  icon2.src = 'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-more-256.png';
  icon2.classList.add('radius-ico1');
  radiusIco.appendChild(icon1);
  radiusIco.appendChild(icon2);
  bottomBar.appendChild(radiusIco);
  btnContainer.appendChild(bottomBar);

  newDiv.appendChild(btnContainer);

  img.parentNode.replaceChild(newDiv, img);
});



const searchSection = document.querySelector(".search-section");
const closeIcon = document.querySelector(".close-icon");
const closeIconFaTimes = document.querySelector('.close-icon i.fa-times');
const modal = document.querySelector(".modal");

// Get the element with class 
const contViaje = document.querySelector('.cont-viaje');
const contArtMan = document.querySelector('.cont-arte-manga');
const contFonPan = document.querySelector('.cont-fondo-pantalla');
const contCoches = document.querySelector('.cont-coches');
const contFotos = document.querySelector('.cont-fotos');
const contIlustraciones = document.querySelector('.cont-ilustraciones');
const contDibujos = document.querySelector('.cont-dibujos');
const contCelular = document.querySelector('.cont-celular');
const contAesthetic = document.querySelector('.cont-aesthetic');
const contFotosPerfil = document.querySelector('.cont-fotos-perfil');
const contEspaArt = document.querySelector('.cont-espa-art');
const contGames = document.querySelector('.cont-games');

// Section Card Viajes
contViaje.addEventListener('click', function () {

  const imgElements = document.querySelectorAll('img');

  imgElements.forEach(function (imgElement) {

    if (!imgElement.classList.contains('viajes-img') && !imgElement.classList.contains('img-searchbar')
      && !imgElement.classList.contains('radius-ico1') && !imgElement.classList.contains('img2')
      && !imgElement.classList.contains('question-mark') && !imgElement.classList.contains('arrow-icon')) {

      imgElement.style.display = "none";

    }

  });

  searchSection.style.display = "none";
  modal.style.display = "none";
  closeIcon.style.opacity = "1";
  closeIconFaTimes.style.backgroundColor = 'transparent';
  closeIconFaTimes.style.color = '#333';
  closeIconFaTimes.style.fontSize = '1.5em';

});

// Section Card Arte-Manga
contArtMan.addEventListener('click', function () {

  // Get all img elements on the page
  const imgElements = document.querySelectorAll('img');

  // Loop through each image
  imgElements.forEach(function (imgElement) {

    // If the image doesn't have the class arte-manga-img or img-searchbar
    if (!imgElement.classList.contains('arte-manga-img') && !imgElement.classList.contains('img-searchbar')
      && !imgElement.classList.contains('radius-ico1') && !imgElement.classList.contains('img2')
      && !imgElement.classList.contains('question-mark') && !imgElement.classList.contains('arrow-icon')) {
      // Remove the image
      imgElement.style.display = "none";
    }

  });

  // Hide search section, modal, and show close icon
  searchSection.style.display = "none";
  modal.style.display = "none";
  closeIcon.style.opacity = "1";
  closeIconFaTimes.style.backgroundColor = 'transparent';
  closeIconFaTimes.style.color = '#333';
  closeIconFaTimes.style.fontSize = '1.5em';

});

// Section Card Fondos de pantalla
contFonPan.addEventListener('click', function () {

  // Get all img elements on the page
  const imgElements = document.querySelectorAll('img');

  // Loop through each image
  imgElements.forEach(function (imgElement) {

    // If the image doesn't have the class arte-manga-img or img-searchbar
    if (!imgElement.classList.contains('wallpaper-img') && !imgElement.classList.contains('img-searchbar')
      && !imgElement.classList.contains('radius-ico1') && !imgElement.classList.contains('img2')
      && !imgElement.classList.contains('question-mark') && !imgElement.classList.contains('arrow-icon')) {
      // Remove the image
      imgElement.style.display = "none";
    }

  });


  // Hide search section, modal, and show close icon
  searchSection.style.display = "none";
  modal.style.display = "none";
  closeIcon.style.opacity = "1";
  closeIconFaTimes.style.backgroundColor = 'transparent';
  closeIconFaTimes.style.color = '#333';
  closeIconFaTimes.style.fontSize = '1.5em';

});

// Section Card Coches
contCoches.addEventListener('click', function () {
  // Get all img elements on the page
  const imgElements = document.querySelectorAll('img');

  // Loop through each image
  imgElements.forEach(function (imgElement) {

    // If the image doesn't have the class arte-manga-img or img-searchbar
    if (!imgElement.classList.contains('coches-img') && !imgElement.classList.contains('img-searchbar')
      && !imgElement.classList.contains('radius-ico1') && !imgElement.classList.contains('img2')
      && !imgElement.classList.contains('question-mark') && !imgElement.classList.contains('arrow-icon')) {
      // Remove the image
      imgElement.style.display = "none";
    }

  });

  // Hide search section, modal, and show close icon
  searchSection.style.display = "none";
  modal.style.display = "none";
  closeIcon.style.opacity = "1";
  closeIconFaTimes.style.backgroundColor = 'transparent';
  closeIconFaTimes.style.color = '#333';
  closeIconFaTimes.style.fontSize = '1.5em';
});

// Section Card Fotos
contFotos.addEventListener('click', function () {

  const imgElements = document.querySelectorAll('img');
  imgElements.forEach(function (imgElement) {
    if (!imgElement.classList.contains('foto-compartir-img') && !imgElement.classList.contains('img-searchbar')
      && !imgElement.classList.contains('radius-ico1') && !imgElement.classList.contains('img2')
      && !imgElement.classList.contains('question-mark') && !imgElement.classList.contains('arrow-icon')) {
      imgElement.style.display = "none";
    }
  });

  searchSection.style.display = "none";
  modal.style.display = "none";
  closeIcon.style.opacity = "1";
  closeIconFaTimes.style.backgroundColor = 'transparent';
  closeIconFaTimes.style.color = '#333';
  closeIconFaTimes.style.fontSize = '1.5em';

});

// Section Card Ilustraciones
contIlustraciones.addEventListener('click', function () {
  const imgElements = document.querySelectorAll('img');
  imgElements.forEach(function (imgElement) {
    if (!imgElement.classList.contains('ilustraciones-img') && !imgElement.classList.contains('img-searchbar')
      && !imgElement.classList.contains('radius-ico1') && !imgElement.classList.contains('img2')
      && !imgElement.classList.contains('question-mark') && !imgElement.classList.contains('arrow-icon')) {
      imgElement.style.display = "none";
    }
  });

  searchSection.style.display = "none";
  modal.style.display = "none";
  closeIcon.style.opacity = "1";
  closeIconFaTimes.style.backgroundColor = 'transparent';
  closeIconFaTimes.style.color = '#333';
  closeIconFaTimes.style.fontSize = '1.5em';
});

// Section Card Dibujos
contDibujos.addEventListener('click', function () {

  const imgElements = document.querySelectorAll('img');

  imgElements.forEach(function (imgElement) {
    if (!imgElement.classList.contains('dibujos-img') && !imgElement.classList.contains('img-searchbar')
      && !imgElement.classList.contains('radius-ico1') && !imgElement.classList.contains('img2')
      && !imgElement.classList.contains('question-mark') && !imgElement.classList.contains('arrow-icon')) {
      imgElement.style.display = "none";
    }
  });

  searchSection.style.display = "none";
  modal.style.display = "none";
  closeIcon.style.opacity = "1";
  closeIconFaTimes.style.backgroundColor = 'transparent';
  closeIconFaTimes.style.color = '#333';
  closeIconFaTimes.style.fontSize = '1.5em';
});

// Section Card Wallpaper-Celular
contCelular.addEventListener('click', function () {

  const imgElements = document.querySelectorAll('img');

  imgElements.forEach(function (imgElement) {
    if (!imgElement.classList.contains('wall-celular-img') && !imgElement.classList.contains('img-searchbar')
      && !imgElement.classList.contains('radius-ico1') && !imgElement.classList.contains('img2')
      && !imgElement.classList.contains('question-mark') && !imgElement.classList.contains('arrow-icon')) {
      imgElement.style.display = "none";
    }
  });


  searchSection.style.display = "none";
  modal.style.display = "none";
  closeIcon.style.opacity = "1";
  closeIconFaTimes.style.backgroundColor = 'transparent';
  closeIconFaTimes.style.color = '#333';
  closeIconFaTimes.style.fontSize = '1.5em';
});

// Section Card Wallpaper-Aesthetic
contAesthetic.addEventListener('click', function () {

  const imgElements = document.querySelectorAll('img');

  imgElements.forEach(function (imgElement) {
    if (!imgElement.classList.contains('wall-aesthetic-img') && !imgElement.classList.contains('img-searchbar')
      && !imgElement.classList.contains('radius-ico1') && !imgElement.classList.contains('img2')
      && !imgElement.classList.contains('question-mark') && !imgElement.classList.contains('arrow-icon')) {
    }
  });

  searchSection.style.display = "none";
  modal.style.display = "none";
  closeIcon.style.opacity = "1";
  closeIconFaTimes.style.backgroundColor = 'transparent';
  closeIconFaTimes.style.color = '#333';
  closeIconFaTimes.style.fontSize = '1.5em';
});

// Section Card Fotos-Perfil
contFotosPerfil.addEventListener('click', function () {

  const imgElements = document.querySelectorAll('img');

  imgElements.forEach(function (imgElement) {
    if (!imgElement.classList.contains('foto-perfil-img') && !imgElement.classList.contains('img-searchbar')
      && !imgElement.classList.contains('radius-ico1') && !imgElement.classList.contains('img2')
      && !imgElement.classList.contains('question-mark') && !imgElement.classList.contains('arrow-icon')) {
      imgElement.style.display = "none";
    }
  });

  searchSection.style.display = "none";
  modal.style.display = "none";
  closeIcon.style.opacity = "1";
  closeIconFaTimes.style.backgroundColor = 'transparent';
  closeIconFaTimes.style.color = '#333';
  closeIconFaTimes.style.fontSize = '1.5em';
});

// Section Card Espacio-Artistico
contEspaArt.addEventListener('click', function () {

  const imgElements = document.querySelectorAll('img');

  imgElements.forEach(function (imgElement) {
    if (!imgElement.classList.contains('espa-art-img') && !imgElement.classList.contains('img-searchbar')
      && !imgElement.classList.contains('radius-ico1') && !imgElement.classList.contains('img2')
      && !imgElement.classList.contains('question-mark') && !imgElement.classList.contains('arrow-icon')) {
      imgElement.style.display = "none";
    }
  });

  searchSection.style.display = "none";
  modal.style.display = "none";
  closeIcon.style.opacity = "1";
  closeIconFaTimes.style.backgroundColor = 'transparent';
  closeIconFaTimes.style.color = '#333';
  closeIconFaTimes.style.fontSize = '1.5em';
});

// Section Card Games
contGames.addEventListener('click', function () {

  const imgElements = document.querySelectorAll('img');

  imgElements.forEach(function (imgElement) {
    if (!imgElement.classList.contains('games-img') && !imgElement.classList.contains('img-searchbar')
      && !imgElement.classList.contains('radius-ico1') && !imgElement.classList.contains('img2')
      && !imgElement.classList.contains('question-mark') && !imgElement.classList.contains('arrow-icon')) {
      imgElement.style.display = "none";
    }
  });

  searchSection.style.display = "none";
  modal.style.display = "none";
  closeIcon.style.opacity = "1";
  closeIconFaTimes.style.backgroundColor = 'transparent';
  closeIconFaTimes.style.color = '#333';
  closeIconFaTimes.style.fontSize = '1.5em';
});

function closeSearchSection() {
  location.reload();
}

// Agregar evento click al icono de cerrar
const closeIcon2 = document.querySelector('.close-icon');
closeIcon2.addEventListener('click', closeSearchSection);

// ------------------------------------------------------------------------------------------------------------------------------



