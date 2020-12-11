const resultList = document.querySelector('.results__list');

export const renderResults = recipe => {
  console.clear();
  resultList.innerHTML = "";
  const tenRecipes = [];
  for (let i = 0; i < 10; i++) {   // only 10 item for list
    tenRecipes.push(recipe.data.recipes[i]);
  }

  tenRecipes.forEach(item => {
    const recipeList = `
  <li>
  <a class="results__link results__link--active" href="#${item.id}" id=${item.id}>
      <figure class="results__fig">
          <img src="${item.image_url}" alt="Test">
      </figure>
      <div class="results__data">
          <h4 class="results__name">${item.publisher}</h4>
          <p class="results__author">${item.title}</p>
      </div>
  </a>
</li>
  `;
    resultList.insertAdjacentHTML("afterbegin", recipeList);

  });

};





