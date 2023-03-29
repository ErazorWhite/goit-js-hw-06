function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector("input[type=number]");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesEl = document.querySelector("#boxes");

function createBoxes(amount) {
  const divsToAdd = [];
  let divSizes = 30;

  for (let i = 0; i < amount; i++) {
    const divToAdd = document.createElement("div");
    divToAdd.style.height = divSizes + "px";
    divToAdd.style.width = divSizes + "px";
    divToAdd.style.backgroundColor = getRandomHexColor();

    divsToAdd.push(divToAdd);

    divSizes += 10;
  }

  boxesEl.append(...divsToAdd);
}

function destroyBoxes() {
  boxesEl.innerHTML = '';
}

function onCreate() {
  if (inputEl.valueAsNumber > 0) {
    createBoxes(inputEl.valueAsNumber);
  } else {
    console.log("Here must be non-zero value");
  }
}

function onDestroy() {
  destroyBoxes();
}

createBtn.addEventListener("click", onCreate);
destroyBtn.addEventListener("click", onDestroy);
