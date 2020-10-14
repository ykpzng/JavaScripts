
let johnTeam, mikeTeam;

johnTeam = 90 + 100 + 113;
mikeTeam = 116 + 200 + 123;

averageJohn = Math.round(johnTeam / 3);
averageMike = Math.round(mikeTeam / 3);

// console.log(averageJohn);
// console.log(averageMike);

if (averageJohn > averageMike) {
  console.log(averageJohn + " Puanla John'un takımı kazandı");
} else if (averageJohn === averageMike) {
  console.log(averageMike + " İki takım berabere kaldı");
} else {
  console.log(averageMike + " Puanla Mike'in takımı kazandı");
}

