export function renderIngredient(item) {
    const li = document.createElement('li');
    li.textContent = `${item.ingredient} (${item.quantity} Quantity) (${item.measurement} Measurement)`;
    return li;
}

export function renderMealsList(meal) {
    const li = document.createElement('li');
    li.textContent = `${meal.mealname} - ${meal.totalIngredients} ingredients`;
    return li;
}