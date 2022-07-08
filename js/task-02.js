const ul = document.querySelector("ul");
const li = document.createElement("li");
li.class = "item";
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const createLiFromArray = (array) =>
  array.reduce((acc, el) => acc + `<li class="item">${el}</li>`, "");
  const list = createLiFromArray(ingredients);
ul.insertAdjacentHTML("beforeend", list);
console.log(createLiFromArray(ingredients));


