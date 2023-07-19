
const submitBtn = document.querySelector('.js-submit-recipe-btn');

submitBtn.addEventListener('click', ()=>{
  addRecipe();
  //window.location.reload();
});
const addRecipe = () => {
  const dishName = document.querySelector('.js-dish-name').value,
        dishDesc = document.querySelector('.js-dish-desc').value,
        dishImage = document.querySelector('#image-preview').src,
        dishTag = document.querySelector('.js-dish-tags').value;

  let dishDirection = document.querySelectorAll('.js-dish-direction'),
    ingredientName = document.querySelectorAll('.js-ingredient-name'),
    ingredientAmount = document.querySelectorAll('.js-ingredient-amount'),
    dishID = crypto.randomUUID();
  
  let recipe = {dishID, dishName, dishDesc, dishTag, dishImage, dishDirection:[], ingredientName:[], ingredientAmount:[]};

  dishDirection.forEach((direction) => {
    let directions = direction.value;
    recipe.dishDirection.push(directions);
  });

  ingredientName.forEach((name) =>{
    let ingredients = name.value;
    recipe.ingredientName.push(ingredients);
  });

  ingredientAmount.forEach((amount) =>{
    let values = amount.value;
    recipe.ingredientAmount.push(values);
  });

  if(!(dishes instanceof Array)) dishes = [dishes];
  dishes.push(recipe);
  localStorage.setItem('dishes', JSON.stringify(dishes));
  clearField();
}
////////preview image selected////////
const showPreview = (event) => {
  const file = document.querySelector('input[type=file]').files[0];
  if(event.target.files.length > 0){
    let src = URL.createObjectURL(event.target.files[0]);
    let preview = document.getElementById('image-preview');
    preview.src = src;
    console.log(src);

    const reader = new FileReader();
    reader.addEventListener('load',() => {
      preview.src = reader.result
    }, false);

    if(file) reader.readAsDataURL(file);
  }
}
document.querySelector('.js-add-direction').addEventListener('click', ()=>{
  addDirection();
})
const addDirection = () => {
  let add = document.createElement('textarea'),
    tag = document.querySelector('.direction');
  add.setAttribute('rows', '5');
  add.setAttribute('class', 'js-dish-direction')
   
  tag.append(add);
}
document.querySelector('.js-add-ingredients').addEventListener(('click'),()=>{
  addIngredients();
});

const addIngredients = () => {
  let ingreName = document.createElement('input'),
    ingreAmount = document.createElement('input'),
    addedIngredients = document.querySelector('.js-ingredients');
   
    ingreName.setAttribute('class', 'js-ingredient-name');
    ingreName.setAttribute('type', 'text');
    ingreAmount.setAttribute('type', 'text');
    ingreAmount.setAttribute('class', 'js-ingredient-amount');

    addedIngredients.append(ingreName);
    addedIngredients.append(ingreAmount);
} 
const clearField = () => {
  const dishName = document.querySelector('.js-dish-name'),
  dishDesc = document.querySelector('.js-dish-desc'),
  dishImage = document.querySelector('#image-preview'),
  dishTag = document.querySelector('.js-dish-tags');
    
  let dishDirection = document.querySelectorAll('.js-dish-direction'),
  ingredientName = document.querySelectorAll('.js-ingredient-name'),
  ingredientAmount = document.querySelectorAll('.js-ingredient-amount');

  dishName.value = null;
  dishDesc.value = null;
  dishTag.value = null;
  dishDesc.value = null;
  dishImage.src = null,
  
  dishDirection.forEach((direction) => {
    direction.value = null;
  });

  ingredientName.forEach((name) =>{
    name.value = null;
  });

  ingredientAmount.forEach((amount) =>{
    amount.value = null;
  });
}

const resetStorage = () =>{
  localStorage.removeItem('dishes');
  dishes = [];
}