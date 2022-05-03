// import functions and grab DOM elements
const form = document.getElementById('add-ingredient');
const ingredientsList = document.getElementById('ingredients-list');

// let state
let ingredients = [];

//Impure render functions
function renderIngredients() {
    ingredientsList.textContent = '';
    for (let item of ingredients) {
        const li = renderIngredients(item);
        ingredientsList.appendChild(li);
    }
}
function resetIngredients() {
    ingredients = [];
    ingredientsList.textContent = '';
}

// set event listeners 


form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('submitting the form');
  //adding code to track each submission to the ingredients
    const formData = new FormData(form);
    console.log(formData.get('ingredient'));
    console.log(formData.get('quantity'));

    let ingredient = {
        ingredient: formData.get ('ingredient'),
        quantity: formData.get ('quantity'),

    };
    ingredients.push(ingredient);
    console.log('List of ingredients', ingredients);

    renderIngredients();
    form.reset();

});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
