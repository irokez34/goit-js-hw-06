//TASK 1
const listCategories = document.querySelectorAll('.item');
console.log('Number of categories: ', listCategories.length);

// TASK 1.2

const categoriesList = document.querySelector("#categories");
const listItem = categoriesList.querySelectorAll(".item");




listItem.forEach((item) =>  {
  const categorieHead = item.querySelector('h2')
  const categorieItemsCount = item.querySelectorAll('li').length;
  console.log(`Категорія: ${categorieHead.textContent}`);
  console.log(`Кількість елементів: ${categorieItemsCount}`);
});

