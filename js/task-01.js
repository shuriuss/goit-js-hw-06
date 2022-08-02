const ul = document.querySelector("#categories");
const childrenUl = ul.children;

console.log(`Number of categories: ${childrenUl.length}`);

for (const elem of childrenUl) {
  const title = elem.firstElementChild.textContent;
  console.log(`Category: ${title}`);

  const num = elem.querySelectorAll("li").length;
  console.log(`Elements: ${num}`);
}
