const jsonButton = document.querySelector('#generate');
const buttonContainer = document.querySelector('#buttonContainer');
const display = document.querySelector('#displayContainer');
const collection = ["Another", "Oooops", "More", "Next", "Continue", "Keep going", "Click me", "A new one", "Try Again", "So Close", "Well Done"];
const url = 'https://jsonplaceholder.typicode.com/';


// methot fetch-then.catch
const getJson = () => {
  const urlToFetch = url + 'users';

  fetch(urlToFetch)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
    .then(data => {
      renderResponse(data);
    })
    .catch(err => {
      console.log(err);
    });

};

//method fetch 
const getJson1 = async () => {
  try {
    const urlToFetch = url + 'users';
    const response = await fetch(urlToFetch);
    const data = await response.json();
    renderResponse(data);
  } catch (err) {
    console.log(err);
  }

}


const sendJson = () => {
  fetch(url + 'posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'Merhaba',
      body: 'Dünya',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json))

}

sendJson();

// DO NOT CHANGE BELOW THIS LINE 
const formatJson = (resJson) => {
  resJson = JSON.stringify(resJson);
  //console.log(resJson);
  let counter = 0;
  return resJson.split('')
    .map(char => {
      switch (char) {
        case ',':
          return `,\n${' '.repeat(counter * 2)}`;
        case '{':
          counter += 1;
          return `{\n${' '.repeat(counter * 2)}`;
        case '}':
          counter -= 1;
          return `\n${' '.repeat(counter * 2)}}`;
        default:
          return char;
      }
    })
    .join('');
}

const renderResponse = (jsonResponse) => {
  const jsonSelection = Math.floor(Math.random() * 10);
  //sendJson();
  jsonButton.innerHTML = `${collection[jsonSelection]}!`;
  display.innerHTML = `<pre>${formatJson(jsonResponse[jsonSelection])}</pre>`;
}

jsonButton.addEventListener('click', getJson1);

