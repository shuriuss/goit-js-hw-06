const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const newArr = [];
ingredients.map((elem) => {
  const li = document.createElement("li");
  li.textContent = elem;
  li.classList.add("item");
  newArr.push(li);
});
console.log(newArr);

const ul = document.querySelector("#ingredients");
ul.append(...newArr);
