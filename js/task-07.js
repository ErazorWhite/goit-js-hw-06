const input = document.querySelector("#font-size-control");
const label = document.querySelector("#text");

function onInputChange() {
  label.style.fontSize = input.value + 'px';
}

input.addEventListener("input", onInputChange);
