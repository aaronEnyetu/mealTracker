export function renderIngredient(item) {
    const li = document.createElement('li');
    li.textContent = `${item.ingredient} (${item.quantity} Quantity) (${item.measurement} Measurement)`;
    return li;
}