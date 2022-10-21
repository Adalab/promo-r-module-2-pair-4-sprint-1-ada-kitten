'use strict';

const kittenImageOne = 'https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg';
const kittenNameOne = 'Anastacio';
const kittenDescOne =
  'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!';
const kittenRaceOne = '';

const kittenImageTwo =
  'https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg';
const kittenNameTwo = 'Fiona';
const kittenDescTwo = 'Cariñoso';
const kittenRaceTwo = '';

const kittenImageThree =
  'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg';
const kittenNameThree = 'Cielo';
const kittenDescThree = 'Antipático';
const kittenRaceThree = '';

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

plus.addEventListener('click', (event) => {
  event.preventDefault();

  const newForm = document.querySelector('.js-new-form');

  if (newForm.classList.contains('collapsed')) {
    newForm.classList.remove('collapsed');
  } else {
    newForm.classList.add('collapsed');
  }
});

//Validar formulario nuevo gatito

const btnAdd = document.querySelector('.js-btn-add');

const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const labelMesageError = document.querySelector('.js-label-error');

btnAdd.addEventListener('click', (event) => {
  event.preventDefault();

  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;

  if (valueDesc === '' || valuePhoto === '' || valueName === '') {
    labelMesageError.innerHTML = 'Debe rellenar todos los valores';
  }
});

//Validar formulario búsqueda

const btnSearch = document.querySelector('.js-btn-search');

const inputDescSearch = document.querySelector('.js_in_search_desc');
const inputRaceSearch = document.querySelector('.js_search_race');
const labelMessageErrorSearch = document.querySelector(
  '.js-label-error-search'
);

btnSearch.addEventListener('click', (event) => {
  event.preventDefault();

  const valueDescSearch = inputDescSearch.value;
  const valueRaceSearch = inputRaceSearch.value;

  if (valueDescSearch === '' || valueRaceSearch === '') {
    labelMessageErrorSearch.innerHTML = 'Debe rellenar todos los valores';
  }
});

//falta el punto 4
