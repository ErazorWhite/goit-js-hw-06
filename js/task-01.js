const categories = document.querySelectorAll("li.item");

console.log(`Number of categories: ${categories.length}`);
categories.forEach((category) => {
  console.log(`Category: ${category.children[0].textContent}`);
  console.log(`Elements: ${category.children[1].children.length}`);
});
