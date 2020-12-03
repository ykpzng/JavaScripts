// Information to reach API


// Selects page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = () => {
  const url = `https://api.datamuse.com/words?rel_rhy=${inputField.value}`

  fetch(url).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Request failed')
  }, networkError => {
    console.log(networkError)
  }).then(jsonResponse => {
    renderResponse(jsonResponse)
  })
}

// Clears previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while (responseField.firstChild) {
    responseField.removeChild(responseField.firstChild);
  }
  getSuggestions();
};

submit.addEventListener('click', displaySuggestions);
