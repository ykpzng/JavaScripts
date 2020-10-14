
//Currency Conversions

function convertToUSD(value) {
  return value * 1.4;
}

function convertToBRL(paund) {
  return paund * 0.99 * 5.7;
}



function strechFunc(currency, value) {
  if (currency === 'USD') {
    return convertToUSD(value);
  } else if (currency === 'BRL') {
    return convertToBRL(value);
  }
}



function startUSD() {
  let enterUSD = prompt('Enter paunds to convert to USD ....');
  let usd = strechFunc('USD', enterUSD);
  return `£ ${enterUSD} = ${usd} USD`;
}

function startBRL() {
  let enterBRL = prompt('Enter paunds to convert to BRL....');
  let brl = strechFunc('BRL', enterBRL);
  return `£ ${enterBRL} = ${brl} BRL`;
}

alert(startUSD());
alert(startBRL());
