let weeklyDishHTML = '';

dishes.forEach((dish) => {
   weeklyDishHTML += `
    <div class="js-recipe-of-the-week-container">
      <img src="${dish.dishImage}" alt="image" class="js-dish-image" data-dish-id="${dish.dishID}">
      <h4>${dish.dishName}</h4>
      <p>${dish.dishID}</p>
    </div>
  `;

  document.querySelector('.js-recipe-of-the-week-container').innerHTML = weeklyDishHTML;
  
});

document.querySelectorAll('.js-dish-image').forEach((image) => {
  image.addEventListener('click',()  => {
    console.log(image.dataset.dishId)
  })
})