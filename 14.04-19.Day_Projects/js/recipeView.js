
const ingrediendConteiner = document.querySelector('.recipe__ingredient-list');

export const showRecipe = recipe => {
  ingrediendConteiner.innerHTML = "";
  recipe.data.recipe.ingredients.forEach(item => {
    const ingrediendList = `
      <li class="recipe__item">
          <svg class="recipe__icon">
              <use href="img/icons.svg#icon-check"></use>
          </svg>
          <div class="recipe__count">${item.quantity === null ? '' : item.quantity}</div>
          <div class="recipe__ingredient">
              <span class="recipe__unit">${item.unit}</span>
              ${item.description}
          </div>
      </li>`
    ingrediendConteiner.insertAdjacentHTML("afterbegin", ingrediendList);

  });

};


