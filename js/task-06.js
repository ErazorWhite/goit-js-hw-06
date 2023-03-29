const input = document.querySelector("#validation-input");
const inputDataLength = Number(input.getAttribute("data-length"));

function onInputCheck() {
  const inputClasses = input.classList;

  if (input.value.length === inputDataLength) {
    inputClasses.add("valid");
    inputClasses.remove("invalid");
  } else {
    inputClasses.add("invalid");
    inputClasses.remove("valid");
  }
}

input.addEventListener("blur", onInputCheck);
