// TASK 1
const categoriesList = document.querySelector("#categories");
const listLength = categoriesList.children; 
const listArray = [...listLength];


console.log('Number of categories: ', listArray.length);

// TASK 1.2






listArray.forEach((item) =>  {
  const categorieHead = item.querySelector('h2')
  const categorieItemsCount = item.querySelectorAll('li').length;
  console.log(`Категорія: ${categorieHead.textContent}`);
  console.log(`Кількість елементів: ${categorieItemsCount}`);

});

