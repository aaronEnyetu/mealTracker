import { renderIngredient, renderMealsList } from './utils.js';
// import functions and grab DOM elements
const form = document.getElementById('add-ingredient');
const ingredientsList = document.getElementById('ingredients-list');

const remove = document.getElementById('remove');

const mealName = document.getElementById('meal-report');
const mealInput = document.getElementById('meal-input');
const saveMeals = document.getElementById('save-meal');
//const mealList = document.getElementById('meal-report');

// let state
let ingredientsArray = [];
let mealsArray = [];



//function resetIngredients() {
  //  ingredients = [];
    //ingredientsList.textContent = '';
//}

// set event listeners 


form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('submitting the form');
  //adding code to track each submission to the ingredients
    const formData = new FormData(form);
    console.log(formData.get('ingredient'));
    console.log(formData.get('quantity'));
    console.log(formData.get('measurement'));

    let ingredients = {
        ingredient: formData.get ('ingredient'),
        quantity: formData.get ('quantity'),
        measurement: formData.get ('measurement'),

    };
    ingredientsArray.push(ingredients);
    console.log('List of ingredients', ingredientsArray);

    renderIngredients();
    

});

//code to allow users to remove the recent ingredient
remove.addEventListener('click', () => {
    ingredientsArray.pop();
    renderIngredients();
});

//Impure render functions

function renderIngredients() {
    ingredientsList.textContent = '';
    for (let item of ingredientsArray) {
        const li = renderIngredient(item);
        ingredientsList.appendChild(li);
    }
}

saveMeals.addEventListener('click', () => {
    const mealname = mealInput.value;
    console.log(mealname);
    let totalIngredients = ingredientsArray.length;
    mealsArray.push({ mealname, totalIngredients, });
   
    
    resetIngredientList();
    renderMealsLists();

});


function renderMealsLists() {
    
    mealName.textContent = ''; 
    for (let meal of mealsArray) {
        const li = renderMealsList(meal);
        mealName.append(li);
    }
}
function resetIngredientList() {
    ingredientsList.textContent = '';

}

  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
