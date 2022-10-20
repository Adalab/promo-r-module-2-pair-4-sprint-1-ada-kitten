"use strict";

const kittenImageOne = "https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg";
const kittenNameOne = "Anastacio";
const kittenDescOne =
  "Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!";
const kittenRaceOne = "British Shorthair";

const kittenImageTwo =
  "https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg";
const kittenNameTwo = "Fiona";
const kittenDescTwo = "Cariñoso";
const kittenRaceTwo = "British Shorthair";

const kittenImageThree =
  "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg";
const kittenNameThree = "Cielo";
const kittenDescThree = "Antipático";
const kittenRaceThree = "British Shorthair";

/* const newForm = document.querySelector('.js-new-form');

newForm.classList.remove("collapsed"); */

const catList = document.querySelector(".js-list");

/* Agregar el código del li desde HTMl 
Repetir este proceso por cada gatito */
const kittenOne = ` <li class="card">
<article>
  <img class="card_img" src=${kittenImageOne} alt="gatito" />
  <h3 class="card_title">${kittenNameOne.toUpperCase()}</h3>
  <h4 class="card_race">${kittenRaceOne}</h4>
  <p class="card_description">
  ${kittenDescOne}
  </p>
</article>
</li>`;

const kittenTwo = ` <li class="card">
<article>
  <img class="card_img" src=${kittenImageTwo} alt="gatito" />
  <h3 class="card_title">${kittenNameTwo.toUpperCase()}</h3>
  <h4 class="card_race">${kittenRaceTwo}</h4>
  <p class="card_description">
  ${kittenDescTwo}
  </p>
</article>
</li>`;

const kittenThree = ` <li class="card">
<article>
  <img class="card_img" src=${kittenImageThree} alt="gatito" />
  <h3 class="card_title">${kittenNameThree.toUpperCase()}</h3>
  <h4 class="card_race">${kittenRaceThree}</h4>
  <p class="card_description">
  ${kittenDescThree}
  </p>
</article>
</li>`;

const content = kittenOne + kittenTwo + kittenThree;

catList.innerHTML = content;
/*  */
const input_search_desc = document.querySelector(".js_in_search_desc");
/* 
input_search_desc.value = "Ruiseño";
const descrSearchText = input_search_desc.value;

input_search_desc.value = "Cariñoso";
const descrSearchTextTwo = input_search_desc.value;

input_search_desc.value = "Antipático";
const descrSearchTextThree = input_search_desc.value; */
/*  */
if (input_search_desc.value === "Ruiseño") {
  catList.innerHTML = kittenOne;
} else if (input_search_desc.value === "Cariñoso"){
  catList.innerHTML = kittenTwo;
}
else if (input_search_desc.value === "Antipático")  {
catList.innerHTML = kittenThree;
 }

/*  input_search_desc.value = ''; */


const newForm = document.querySelector('.js-new-form');

/* newForm.classList.remove("collapsed"); */
/* 
if (newForm.classList("collapsed")){
  newForm.classList.remove("collapsed");
}
else{
  newForm.classList.add("collapsed");
} */


if (newForm.classList.contains("collapsed")){
  newForm.classList.remove("collapsed");
}
else{
  newForm.classList.add("collapsed");
}


let html = '';
let race = '';

if (kittenRaceOne === "") {
  html = `No se ha especificado la raza`;
} else {
  html = race;
}