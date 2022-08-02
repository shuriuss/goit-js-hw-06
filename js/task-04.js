
let counterValue = 0
const value = document.querySelector("#value")
const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]'); 

decrement.addEventListener('click', subhandler)
increment.addEventListener('click', addhandler)


function subhandler() {
value.textContent = counterValue -=1;
}

function addhandler() {
    value.textContent = counterValue +=1;

}