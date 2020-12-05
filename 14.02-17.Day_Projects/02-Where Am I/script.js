
const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");
const latitudeInput = document.querySelector("#latitude");
const longitudeInput = document.querySelector("#longitude");

const apiKey = "a1a94ce0-3728-11eb-9d2b-e912b0c940bf";  // take yours 
const alpha = "https://restcountries.eu/rest/v2/name/";

/*
const whereAmI = function (lat, lng) {
  const url = `Https://app.geocodeapi.io/api/v1/reverse?apikey=${apiKey}&point.lat=${lat}&point.lon=${lng}`;

  fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error("meaningful error message");
      }
    })
    .then(data => {
      console.log(`You are in ${data['features'][0]['properties']['locality']}, country of ${data['features'][0]['properties']['country']}`);

      const newCountry = data['features'][0]['properties']['country'];
      const alphaCountry = alpha + newCountry;

      fetch(alphaCountry).then(res => {
        if (res.ok) {
          return res.json();
        }
      }).then(data2 => {
        renderCountry(data2[0]);
      }).catch(err2 => {
        console.log(err2)
      })
    })
    .catch(err => {
      console.log(err)
    });
};

*/
// await 

const whereAmI = async (lat, lng) => {
  const url = `Https://app.geocodeapi.io/api/v1/reverse?apikey=${apiKey}&point.lat=${lat}&point.lon=${lng}`;
  try {
    const response = await fetch(url);
    const data = await response.json();

    console.log(`You are in ${data['features'][0]['properties']['locality']}, country of ${data['features'][0]['properties']['country']}`);

    const newCountry = data['features'][0]['properties']['country'];
    const alphaCountry = alpha + newCountry;
    const res = await fetch(alphaCountry);
    const data2 = await res.json();

    renderCountry(data2[0]);
  } catch (err) {
    console.log(err);
  }

};























btn.addEventListener("click", displayCountry);
