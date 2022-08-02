const inputEl = document.querySelector('#font-size-control')

const textEl = document.querySelector('#text')

inputEl.addEventListener("input", handler)

function handler(event) {
    textEl.style.fontSize =`${event.currentTarget.value}px`;
}




