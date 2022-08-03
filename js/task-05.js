const inputEL = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

inputEL.addEventListener("input", handler);

// function handler(event) {
//     spanEl.textContent = event.currentTarget.value

// }

function handler(event) {
  if (event.currentTarget.value.length === 0) {
    spanEl.textContent = "Anonymous";
  } else {
    spanEl.textContent = event.currentTarget.value;
  }
}
