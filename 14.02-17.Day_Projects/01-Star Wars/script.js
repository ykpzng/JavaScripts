
const output = document.getElementById("output");
const spinner = document.getElementById("spinner");
let url = "https://starwars.egghead.training/";


const starWars = (endPoint) => {
  url = url + endPoint;
  fetch(url).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Request failed');
    //return Promise.reject(Error("Unsuccessful response"));
  }).then(jsonResponse => {
    console.log(jsonResponse);
    console.log(`There are ${jsonResponse.length} planets in Starwars history`);
    jsonResponse.forEach(element => {
      console.log(`Film episode_${element['episode_id']} title is ${element['title']}`)
    });

  }).catch(networkError => {
    console.log(networkError);
  });
}

//spinner.addEventListener('load', starWars('films'));


const starWarsCount = (endPoint) => {
  const urlCount = url + endPoint;
  return fetch(urlCount).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Request failed');

  });
}

const spacePromiseAll = Promise.all([starWarsCount('films'), starWarsCount('planets'), starWarsCount('species'), starWarsCount('people'), starWarsCount('starships'), starWarsCount('vehicles')]);


spacePromiseAll.then(values => {
  console.log(`There are ${values[0].length} films in Starwars history`);
  console.log(`There are ${values[1].length} planets in Starwars history`);
  console.log(`There are ${values[2].length} species in Starwars history`);
  console.log(`There are ${values[3].length} people in Starwars history`);
  console.log(`There are ${values[4].length} starships in Starwars history`);
  console.log(`There are ${values[5].length} vehicles in Starwars history`);
}).catch(rejectedValues => {
  console.log(rejectedValues);
});