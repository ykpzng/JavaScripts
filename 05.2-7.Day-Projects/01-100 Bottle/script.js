

oneHunBottle = () => {
  let i = 99;
  let numberOfBottles = 0;
  while (i) {
    numberOfBottles = prompt('Duvarda kaç şişe düşecek ...');
    i -= numberOfBottles;
    console.log(`${numberOfBottles} şişe düştü... Kalan şişe : ${i}`);
    numberOfBottles += numberOfBottles;
    if (numberOfBottles < 1) {
      console.log('Tüm şişeler düştü....');
      break;
    }

  }

}

oneHunBottle();

