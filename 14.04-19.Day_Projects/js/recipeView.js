
const ingrediendConteiner = document.querySelector('.recipe__ingredient-list');
const recipeFigureContainer = document.querySelector('.recipe__fig');

export const showRecipe = recipe => {
  ingrediendConteiner.innerHTML = "";
  recipeFigureContainer.innerHTML = "";
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

  const recipeFigure = `
  <img src="${recipe.data.recipe.image_url}" alt="Tomato" class="recipe__img">
  <h1 class="recipe__title">
      <span>${recipe.data.recipe.title}</span>
  </h1>`;
  recipeFigureContainer.insertAdjacentHTML("afterbegin", recipeFigure);
};



