// Please construct the boilerplate code necessary to create a GET request using the fetch() function step-by-step.

const url = 'https://jsonplaceholder.typicode.com/users';

fetch(url).then(response => {
  if (response.ok) {
    return response.json();
  }
  throw new Error('Request failed')
}, networkError => {
  console.log(networkError)
}).then(jsonResponse => {
  console.log(jsonResponse)
})