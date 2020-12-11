const shoppingList = document.querySelector('.shopping__list');

export const addShopping = recipe => {

  shoppingList.innerHTML = "";
  recipe.data.recipe.ingredients.forEach(item => {
    const shoppingListContainer = ` 
        <li class="shopping__item">
        <div class="shopping__count">
            <input type="number" value="${item.quantity}" step="100">
            <p>${item.unit}</p>
        </div>
        <p class="shopping__description">${item.description}</p>
        <button class="shopping__delete btn-tiny">
            <svg>
                <use href="img/icons.svg#icon-circle-with-cross"></use>
            </svg>
        </button>
        </li>`;
    shoppingList.insertAdjacentHTML("afterbegin", shoppingListContainer);
  });
};


