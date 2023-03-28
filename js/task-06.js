const input = document.querySelector("#validation-input");
const inputDataLength = Number(input.getAttribute("data-length"));

function onInputCheck() {
  const inputClasses = input.classList;

  if (input.value.length === inputDataLength) {
    if (!inputClasses.contains("valid")) inputClasses.add("valid");
    if (inputClasses.contains("invalid")) inputClasses.remove("invalid");
  } else {
    if (!inputClasses.contains("invalid")) inputClasses.add("invalid");
    if (inputClasses.contains("valid")) inputClasses.remove("valid");
  }
}

input.addEventListener("blur", onInputCheck);
