const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

document.body.style.background = "cyan";

const list = document.querySelector(".gallery");
list.style.listStyle = "none";
list.style.display = "flex";
list.style.flexWrap = "wrap";
list.style.gap = "10px";

const picturesMarkup = images
  .map(
    (image) =>
      `<li style="overflow: hidden; border: 5px dashed purple"><img src="${image.url}" alt="${image.alt}" width="360"></li>`
  )
  .join("");

list.insertAdjacentHTML("beforeend", picturesMarkup);
