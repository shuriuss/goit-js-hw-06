const ul = document.querySelector("#categories");
const childrenUl = ul.children;
console.log(childrenUl);

console.log(`Number of categories: ${childrenUl.length}`);

const arr = Array.from(childrenUl);

arr.forEach(elem => {
  const title = elem.firstElementChild.textContent;
  console.log(`Category: ${title}`);
  const num = elem.querySelectorAll("li").length;
  console.log(`Elements: ${num}`);

});

