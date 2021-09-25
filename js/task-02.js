const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
// let itemsEl= [];
// for (let ingredient of ingredients) {
// const itemEl = document.createElement("li");
// itemEl.classList.add("item");
// itemEl.textContent = ingredient;

// itemsEl.push(itemEl)
// }
// const listEl = document.querySelector("#ingredients");
const itemsEl = ingredients.map(text => {
  const itemEl = document.createElement("li");
itemEl.classList.add("item");
itemEl.textContent = text;
return itemEl
})
const listEl = document.querySelector("#ingredients");
listEl.append(...itemsEl)