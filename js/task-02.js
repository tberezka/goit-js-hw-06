const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector("#ingredients");

// Вариант 1
// const items = ingredients.map(item => {
//   const listItem = document.createElement("li");
//   listItem.textContent = item;
//   listItem.classList.add("item");
//   return listItem;
// });

// ingredientsEl.append(...items);

// Вариант 2
const MakeIngredientItem = (ingredient) => {
  const listItem = document.createElement("li");
  listItem.textContent = ingredient;
  listItem.classList.add("item");
  return listItem;
}

const items = ingredients.map(MakeIngredientItem);
console.log(items);

ingredientsEl.append(...items);