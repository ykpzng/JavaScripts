const resultList = document.querySelector('.results__list');

export const renderResults = recipe => {
  resultList.innerHTML = "";

  const tenRecipes = [];
  if (recipe.data.recipes.length < 10) {  // Seçilen yemeğin tarif sayısı 10 adetten az ise
    for (let i = 0; i < recipe.data.recipes.length; i++) {
      tenRecipes.push(recipe.data.recipes[i]);
    }
  } else {         // Seçilen yemeğin tarif sayısı 10 adetten fazla ise 10 adet al
    for (let i = 0; i < 10; i++) {
      tenRecipes.push(recipe.data.recipes[i]);
    }
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





