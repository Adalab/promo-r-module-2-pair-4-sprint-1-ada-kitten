'use strict';

const kittenImageOne = 'https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg';
const kittenNameOne = 'Anastacio';
const kittenDescOne =
  'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!';
const kittenRaceOne = 'British';

const kittenImageTwo =
  'https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg';
const kittenNameTwo = 'Fiona';
const kittenDescTwo = 'Cariñoso y Antipático pero puedes acariciarle!Antipático pero puedes acariciarle!';
const kittenRaceTwo = 'Persa';

const kittenImageThree =
  'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg';
const kittenNameThree = 'Cielo';
const kittenDescThree = 'Antipático pero puedes acariciarle! Antipático pero puedes acariciarle!Antipático ';
const kittenRaceThree = 'Burrito';

/* const newForm = document.querySelector('.js-new-form');

newForm.classList.remove("collapsed"); */

const catList = document.querySelector('.js-list');

let html = '';

/* Agregar el código del li desde HTMl 
Repetir este proceso por cada gatito */
if (kittenRaceOne === '') {
  html = `No se ha especificado la raza`;
} else {
  html = kittenRaceOne;
}
const kittenOne = ` <li class="card">
<article>
  <img class="card_img" src=${kittenImageOne} alt="gatito" />
  <h3 class="card_title">${kittenNameOne.toUpperCase()}</h3>
  <h4 class="card_race">${html}</h4>
  <p class="card_description">
  ${kittenDescOne}
  </p>
</article>
</li>`;

if (kittenRaceTwo === '') {
  html = `No se ha especificado la raza`;
} else {
  html = kittenRaceTwo;
}
const kittenTwo = ` <li class="card">
<article>
  <img class="card_img" src=${kittenImageTwo} alt="gatito" />
  <h3 class="card_title">${kittenNameTwo.toUpperCase()}</h3>
  <h4 class="card_race">${html}</h4>
  <p class="card_description">
  ${kittenDescTwo}
  </p>
</article>
</li>`;

if (kittenRaceThree === '') {
  html = `No se ha especificado la raza`;
} else {
  html = kittenRaceThree;
}

const kittenThree = ` <li class="card">
<article>
  <img class="card_img" src=${kittenImageThree} alt="gatito" />
  <h3 class="card_title">${kittenNameThree.toUpperCase()}</h3>
  <h4 class="card_race">${html}</h4>
  <p class="card_description">
  ${kittenDescThree}
  </p>
</article>
</li>`;

const content = kittenOne + kittenTwo + kittenThree;

catList.innerHTML = content;
/*  */
const input_search_desc = document.querySelector('.js_in_search_desc');
/* 
input_search_desc.value = "Ruiseño";
const descrSearchText = input_search_desc.value;

input_search_desc.value = "Cariñoso";
const descrSearchTextTwo = input_search_desc.value;

input_search_desc.value = "Antipático";
const descrSearchTextThree = input_search_desc.value; */
/*  */
if (input_search_desc.value === 'Risueño') {
  catList.innerHTML = kittenOne;
} else if (input_search_desc.value === 'Cariñoso') {
  catList.innerHTML = kittenTwo;
} else if (input_search_desc.value === 'Antipático') {
  catList.innerHTML = kittenThree;
}

/*  input_search_desc.value = ''; */

// const newForm = document.querySelector('.js-new-form');

// if (newForm.classList.contains('collapsed')) {
//   newForm.classList.remove('collapsed');
// } else {
//   newForm.classList.add('collapsed');
// }

//mostrar formulario

const plus = document.querySelector(`.js-plus`);
const newForm = document.querySelector('.js-new-form');

plus.addEventListener('click', handleClickNewCatForm);

//Validar formulario nuevo gatito

const btnAdd = document.querySelector('.js-btn-add');

const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputRace = document.querySelector('.js-input-race');
const inputName = document.querySelector('.js-input-name');
const labelMesageError = document.querySelector('.js-label-error');

function renderKitten(url, desc, name, race) {
  console.log('funciona');
  /* 
desc = inputDesc.value;
 url=  inputPhoto.value;
 name = inputName.value;
 race = inputRace.value ;
  
  catList.innerHTML += ` <li class="card">
  <article>
    <img class="card_img" src=${url} alt="gatito" />
    <h3 class="card_title">${name}</h3>
    <h4 class="card_race">${race}</h4>
    <p class="card_description">
    ${desc}
    </p>
  </article>
  </li>`; */
}

btnAdd.addEventListener('click', (event) => {
  event.preventDefault();

  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;
  const valueRace = inputRace.value;

  if (
    valueDesc === '' ||
    valuePhoto === '' ||
    valueName === '' ||
    valueRace === ''
  ) {
    labelMesageError.innerHTML = 'Debe rellenar todos los valores';
  } else {
    renderKitten(valuePhoto, valueDesc, valueName, valueRace);
  }
});

//Validar formulario búsqueda

const btnSearch = document.querySelector('.js-btn-search');

const inputDescSearch = document.querySelector('.js_in_search_desc');
const inputRaceSearch = document.querySelector('.js_search_race');
const labelMessageErrorSearch = document.querySelector(
  '.js-label-error-search'
);

const filterKitten = (event) => {
  event.preventDefault();

  const valueDescSearch = inputDescSearch.value.toLowerCase().trim();
  const valueRaceSearch = inputRaceSearch.value.toLowerCase().trim();
console.log (valueDescSearch);

  if (valueDescSearch === '' && valueRaceSearch === '') {
    labelMessageErrorSearch.innerHTML = 'Debe rellenar todos los valores';
  }

  if (kittenDescOne.toLowerCase().includes(valueDescSearch)) {
    catList.innerHTML = kittenOne;
    console.log("ruiseño");
  }

  if (kittenDescTwo.toLowerCase().includes(valueDescSearch)) {
    catList.innerHTML += kittenTwo;
  } 

  if (kittenDescThree.toLowerCase().includes(valueDescSearch)) {
    catList.innerHTML += kittenThree;
  }

};

//NOS QUEDAMOS AQUI!!!! Hay que hacer el ejercicio 3 (mostrar la raza o no) en Funciones II


btnSearch.addEventListener('click', filterKitten);

//Cancelar formulario
const btnCancel = document.querySelector('.js-btn-cancel');

const cancelNewKitten = (event) => {
  event.preventDefault();
  newForm.classList.add('collapsed');

  inputDesc.value = '';
  inputPhoto.value = '';
  inputName.value = '';
  inputRace.value = '';
};

btnCancel.addEventListener('click', cancelNewKitten);

///Mostrar/ocultar el formulario nuevo gatito

function showNewCatForm() {
  newForm.classList.remove('collapsed');
}
function hideNewCatForm() {
  newForm.classList.add('collapsed');
}

function handleClickNewCatForm(event) {
  event.preventDefault();
  if (newForm.classList.contains('collapsed')) {
    showNewCatForm();
  } else {
    hideNewCatForm();
  }
}

/////  Crear el gatito en HTML

function renderKitten(url, desc, name, race) {
  catList.innerHTML += ` <li class="card">
  <article>
    <img class="card_img" src=${url} alt="gatito" />
    <h3 class="card_title">${name}</h3>
    <h4 class="card_race">${race}</h4>
    <p class="card_description">
    ${desc}
    </p>
  </article>
  </li>`;
}
