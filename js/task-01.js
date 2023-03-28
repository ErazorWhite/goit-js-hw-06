const categoriesHtmlParser = [
  // { headerName: "testName", itemsCount: 5 }
];
// Parser for HTML code. Stores array with two arguments.
// 1. headerName - name of category. Selector: "li.item > h2"
// 2. itemsCount - count of li items deep in the #categories. Selector: "li.item > ul".children.length

const categorieHeaders = document.querySelectorAll("li.item > h2");

categorieHeaders.forEach((categorie, index) =>
  categoriesHtmlParser.push({
    headerName: categorie.textContent,
    itemsCount:
      document.querySelectorAll("li.item > ul")[index].children.length,
  })
);

console.log(`Number of categories: ${categoriesHtmlParser.length}`);
categoriesHtmlParser.forEach(({ headerName, itemsCount }) => {
  console.log(`Category: ${headerName}`);
  console.log(`Elements: ${itemsCount}`);
});
