class Media {
  constructor(title, type) {
    this._title = title;
    this._isCheckedOut = true;
    this._ratings = [];
    this._type = type;
  }

  get title() {
    return this._title;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  get ratings() {
    return this._ratings;
  }
  get type() {
    return this.type;
  }
  set isCheckedOut(value) {
    this._isCheckedOut = value;
  }

  toggleCheckOutStatus() {
    if (this._isCheckedOut) {
      return this._isCheckedOut = false;
    } else {
      return this._isCheckedOut = true;
    }
  }

  getAverageRating() {
    let sum = 0;
    for (let i = 0; i < this._ratings.length; i++) {
      sum += this._ratings[i];
    }
    return sum / this._ratings.length;
  }

  addRating(value) {
    if (value > 0 && value < 11) {
      this._ratings.push(value);
    }
  }
}

class Book extends Media {
  constructor(author, title, pages, type) {
    super(title, type);
    this._author = author;
    this._pages = pages;
  }
  get author() {
    return this._author;
  }
  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(director, title, runTime, type) {
    super(title, type);
    this._director = director;
    this._runTime = runTime;
  }
  get director() {
    return this._director;
  }
  get runTime() {
    return this._runTime;
  }

}

class CD extends Media {
  constructor(title, artist, duration, type) {
    super(title, type);
    this._artist = artist;
    this._song = [];
    this._duration = duration;
  }
  get artist() {
    return this._artist;
  }
  get song() {
    return this._song;
  }
  get duration() {
    return this._duration;
  }

  addSong(song) {
    this._song.push(song);

  }
  shuffle() {
    return this._song.sort(() => Math.random() - 0.5);
  }
}

class Catalog {
  constructor() {
    this._catalog = [];
  }
  get catalog() {
    return this._catalog;
  }
  addCatalog(value) {
    return this._catalog.push(value)
  }
  printCatalog() {
    console.log(this._catalog);
  }

}

// DOM işlemleri

const aselectType = document.getElementById('mediaTypeSelect');
const addTitle = document.getElementById('titleOfMedia');
const addType = document.getElementById('typeOfMedia');
const addCreator = document.getElementById('creatorOfMedia');
const addDuration = document.getElementById('durationOfMedia');
const addRait = document.getElementsByClassName('ratingsOfMedia');

document.getElementById('submit_btn').addEventListener('click', addLibrary);

function addLibrary() {
  let enterValue;
  if (aselectType.value === 'Book') {

    enterValue = new Book(addCreator.value, addTitle.value, addDuration.value, addType.value);
    for (i of addRait) {
      enterValue.addRating(Number(i.value))
    }

  } else if (aselectType.value === 'Movie') {

    enterValue = new Movie(addCreator.value, addTitle.value, addDuration.value, addType.value);
    for (i of addRait) {
      enterValue.addRating(Number(i.value))
    }

  } else if (aselectType.value === 'CD') {

    enterValue = new CD(addTitle.value, addCreator.value, addDuration.value, addType.value);
    for (i of addRait) {
      enterValue.addRating(Number(i.value))
    }

  }
  console.log(enterValue);
}



/*

const book1 = new Book('Édouard Louis', 'History of Violence', 224, 'Drama');

book1.addRating(5);
book1.addRating(17);
book1.addRating(7);
console.log(book1.getAverageRating());
book1.isCheckedOut = true;
console.log(book1)
console.log(book1.toggleCheckOutStatus())

const movi1 = new Movie('john doe', 'Extracrion', 2, 'action');
console.log(movi1);


const cd1 = new CD('My birthday', 'Alano Birty', 5, 'relax');
cd1.addRating(4);
cd1.addRating(8);
cd1.addRating(10);
console.log(cd1);
console.log(cd1.ratings);
cd1.addSong('Pokie');
cd1.addSong('Doudou');
cd1.addSong('Hot');
cd1.addSong('Nirvana');
cd1.addSong('La machine');

console.log(cd1.song);

console.log(cd1.shuffle());

const albums = new Catalog();

albums.addCatalog(book1);
albums.addCatalog(movi1);
albums.addCatalog(cd1);

console.log(albums.printCatalog())

*/