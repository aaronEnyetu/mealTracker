export function renderIngredients(item) {
    const li = document.createElement('li');
    li.textContent = `${item.player} (${item.quantity} Quantity)`;
    return li;
}