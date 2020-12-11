import { renderResults } from './searchView.js';
import { showRecipe } from './recipeView.js';
import { addShopping } from './listView.js';

// Page Elements
const input = document.querySelector('.search__field');
const submitBtn = document.querySelector('.search__btn');
const searchResList = document.querySelector('.results__list');
const addToShoppingBrt = document.querySelector('.recipe__btn')
const shoppingList = document.querySelector('.shopping__list');

const url = 'https://forkify-api.herokuapp.com/api/v2/';
const apiKey = 'b9adf2d8-145b-43c6-aec5-af943edf3ff3';

// Add AJAX functions here:
const getRecipe = async () => {
    const recipeInput = input.value;
    try {
        const UrlToFetch = `${url}recipes?search=${recipeInput}&key=${apiKey}`;
        const response = await fetch(UrlToFetch);
        if (response.ok) {
            const jsonResponse = await response.json();
            renderResults(jsonResponse);
        }
    } catch (error) {
        console.log(error);
    }


}

submitBtn.addEventListener('click', getRecipe);

let addJsonResponse = "";
let shoppingId = 0;
const getOneRecipe = async (id) => {

    try {
        const UrlToFetch = `${url}recipes/${id}?${apiKey}`;
        const response = await fetch(UrlToFetch);
        if (response.ok) {
            const jsonResponse = await response.json();
            showRecipe(jsonResponse);
            addJsonResponse = jsonResponse;
            shoppingId = id;
        }
    } catch (error) {
        console.log(error);
    }
}

//get the id of the selected recipe

searchResList.addEventListener('click', e => {
    const recipeId = e.target.closest('a').id;
    shoppingList.innerHTML = "";
    return getOneRecipe(recipeId);
});

//Add to shopping list
addToShoppingBrt.addEventListener('click', () => {
    if (shoppingId !== 0) {
        addShopping(addJsonResponse);

    } else {
        alert("You must choose a recipe");
    }
});

// Remove list item
shoppingList.addEventListener('click', (e) => {
    if (e.target.closest('button')) {
        e.target.closest('button').parentElement.remove();
    }
});
