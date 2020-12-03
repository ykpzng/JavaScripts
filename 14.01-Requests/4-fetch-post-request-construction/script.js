// Reconstruct the code step-by-step until you have written a complete POST request using fetch() and .then().

const url = 'https://api.rebrandly.com/v1/links';

const data = {
  name: 'john',
  lastname: 'Doe',
  email: 'sadfc@d.com'
}
const postRequest = {
  mathod: 'POST',
  body: JSON.stringify(data)
}
fetch(url, postRequest).then(response => {
  if (response.ok) {
    return response.json();
  }
  throw new Error('Request failed')
}, networkError => {
  console.log(networkError)
}).then(jsonResponse => {
  console.log(jsonResponse)
})