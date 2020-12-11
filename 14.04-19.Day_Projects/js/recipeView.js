
const ingrediendConteiner = document.querySelector('.recipe__ingredient-list');
const recipeFigureContainer = document.querySelector('.recipe__fig');
const recipeMinute = document.querySelector('.cooking_time');
const recipeServing = document.querySelector('.cooking_serving');


export const showRecipe = recipe => {
  ingrediendConteiner.innerHTML = "";
  recipeFigureContainer.innerHTML = "";
  recipeMinute.innerHTML = "";
  recipeServing.innerHTML = "";

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

  const recipeMin = `
      <span class="recipe__info-data recipe__info-data--minutes">${recipe.data.recipe.cooking_time}</span>
  `;
  recipeMinute.insertAdjacentHTML("afterbegin", recipeMin);

  const recipeServe = `
  <span class="recipe__info-data recipe__info-data--people">${recipe.data.recipe.servings}</span>
`;
  recipeServing.insertAdjacentHTML("afterbegin", recipeServe);


};



