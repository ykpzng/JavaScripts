const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

console.log(companies);

// -- 1 --
for (prop of companies) {
  console.log(prop);
}

// -- 2 --
companies.forEach(element => {
  console.log(element.name);
});

companies.push({ name: "Company Ten", category: "Software", start: 2000, end: 2018 });

// -- 3 --

const filtred = companies.filter(el => el.category == "Retail")

console.log(filtred);

const filtYear = companies.filter(el => el.start >= 1980 && el.start <= 1990)

console.log(filtYear);


const filtTen = companies.filter(el => el.end - el.start >= 10);

console.log(filtTen);


// -- 4 --

const compMap = companies.map(el => el.name + ' ' + el.start + ' ' + el.end);

console.log(compMap);

// -- 5 --

companies.sort((a, b) => a.start - b.start)
console.log(companies);

// -- 6 --
console.log('-------6-----------');

const sumYear = companies.reduce((total, a) => total + (a.end - a.start), 0);

console.log(sumYear);

