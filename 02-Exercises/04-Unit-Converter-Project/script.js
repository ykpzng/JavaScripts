
const kelvin = 293;   // kelvin adında bir sabit tanımladık

let celsius = kelvin - 273;  // kelvin değişkeninden 273 çıkarınca Cesius'u buluruz

let fahrenheit = Math.round(celsius * (9 / 5) + 32); //bu formülle fahrenheit hesapladık ve round ile yuvarladık

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.
Use string interpolation to replace ${fahrenheit} with the value saved to fahrenheit`)

let newton = celsius * (33 / 100);
newton = Math.floor(newton);

console.log('Newton :' + newton);


/*
console.log('Kelvin :' + kelvin);
console.log('Celsius :' + celsius);
console.log('Fahrenheit :' + fahrenheit);
*/