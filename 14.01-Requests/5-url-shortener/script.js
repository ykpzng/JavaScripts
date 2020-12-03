// Information to reach API
const apiKey = '<Your API Key>';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
const shortenUrl = () => {
  const url = 'https://api.rebrandly.com/v1/links'

  const requestBody = {
    destination: inputField.value
  }
  let requestHeaders = {
    "Content-Type": "application/json",
    "apikey": '<Your API Key>',     // you should add API Key from www.rebrandly.com
  }
  const postRequest = {
    method: 'POST',
    body: JSON.stringify(requestBody),
    headers: requestHeaders
  }

  fetch(url, postRequest).then(response => {
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

// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while (responseField.firstChild) {
    responseField.removeChild(responseField.firstChild)
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);