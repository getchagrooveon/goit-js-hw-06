const numberOfCategories = document.querySelectorAll('.item').length;
console.log('Number of categories:', numberOfCategories);
const partTwo = document.querySelectorAll('li[class="item"]').forEach((element, index) => {
  console.log('Category:', element.firstElementChild.textContent);
  console.log('Elements:', element.lastElementChild.children.length);
});
