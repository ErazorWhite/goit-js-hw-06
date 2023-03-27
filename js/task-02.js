const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientToAdd = [];

ingredients.forEach((ingredient, index) => {
  ingredientToAdd.push(document.createElement("li"));
  ingredientToAdd[index].textContent = ingredient;
  ingredientToAdd[index].classList = "item";
});

const list = document.querySelector("#ingredients");
list.append(...ingredientToAdd);
