const data = {};
const form = document.querySelector(".login-form");
form.addEventListener("submit", handler);

function handler(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    alert("Введите данные");
  } else {
    data.email = email.value;
    data.password = password.value;
    // console.log(email.value);
    // console.log(password.value);
    event.target.reset();
  }
  console.log(data);
}
