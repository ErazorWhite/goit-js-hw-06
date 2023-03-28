const input = document.querySelector("#validation-input");
const inputDataLength = Number(input.getAttribute("data-length"));

function onInputCheck() {
  if (input.value.length === inputDataLength) {
    if (!input.classList.contains("valid")) input.classList.add("valid");
    if (input.classList.contains("invalid")) input.classList.remove("invalid");
  } else {
    if (!input.classList.contains("invalid")) input.classList.add("invalid");
    if (input.classList.contains("valid")) input.classList.remove("valid");
  }
}

input.addEventListener("blur", onInputCheck);
