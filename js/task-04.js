let counterValue = 0;

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const counter = document.querySelector('#value');

function onDecrementBtnClick() {
  counterValue -= 1;
  counter.innerHTML = counterValue;
};

function onIncrementBtnClick() {
  counterValue += 1;
  counter.innerHTML = counterValue;
};


decrementBtn.addEventListener("click", onDecrementBtnClick);
incrementBtn.addEventListener("click", onIncrementBtnClick);
