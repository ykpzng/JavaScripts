
const washTeam = ["Ben", "Jenny", "Michael", "Chloe", "Timmy"];

function whoIsWashing(arr) {
  let arrLength = arr.length;
  let rnd = Math.floor(Math.random() * arrLength);

  let result = `${arr[rnd]} is going to wash dishes today!`;

  return result;
}


washTeam.push("Max"); // Diziye sonradan "Max" ekleniyor

//Everybody loved that system and their neighbours wanted this function to use. Their names are "Patrick", "AnnMarie", "Alisol" and "Walton". 

washTeam.push("Patrick", "AnnMarie", "Alisol", "Walton");

console.log(whoIsWashing(washTeam));