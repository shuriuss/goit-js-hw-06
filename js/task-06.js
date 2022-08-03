const sumbolLengthEl = document.querySelector("#validation-input");

sumbolLengthEl.addEventListener("blur", handler);

// function handler(event) {
//   if (
//     sumbolLengthEl.getAttribute("data-length") <
//     event.currentTarget.value.length
//   ) {
//     sumbolLengthEl.classList.remove("invalid");
//     sumbolLengthEl.classList.add("valid");

//   } else {
//     sumbolLengthEl.classList.remove("valid");
//     sumbolLengthEl.classList.add("invalid");

//   }

// }


function handler(event) {
  const a = Number(sumbolLengthEl.getAttribute("data-length"));
  const b = Number( event.currentTarget.value.length);
  if (a === b) {
    sumbolLengthEl.classList.remove("invalid");
    sumbolLengthEl.classList.add("valid");
  } else {
    sumbolLengthEl.classList.remove("valid");
    sumbolLengthEl.classList.add("invalid");
  }
}
