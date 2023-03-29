const form = document.querySelector(".login-form");

function onFormSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const mail = formElements.email.value;
  const password = formElements.password.value;

  if (!mail || !password) {
    alert("Все поля должны быть заполнены");
    return;
  }

  const formData = {
    mail,
    password,
  };

    console.log("🚀 ~ file: task-08.js:12 ~ onFormSubmit ~ formData:", formData);

    form.reset();
}

// FormData implementation
// function onFormSubmit(event) {
//   event.preventDefault();
//   const formData = new FormData(event.currentTarget);
//   formData.forEach((value, name) => {
//     console.log("🚀 ~ file: task-08.js:23 ~ formData.forEach ~ name:", name);
//     console.log("🚀 ~ file: task-08.js:23 ~ formData.forEach ~ value:", value);
//   });

//   form.reset();
// }

form.addEventListener("submit", onFormSubmit);
