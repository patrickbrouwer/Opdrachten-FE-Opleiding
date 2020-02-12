// Schrijf een JavaScript functie die een bepaald item weet te vinden en retourneren op basis van een bepaalde value.
// Zoek het hele object van Spiderman, gebaseerd op de name "Spiderman". Gebruik .find.

const superheroes = [
  { name: "Batman", alter_ego: "Bruce Wayne" },
  { name: "Superman", alter_ego: "Clark Kent" },
  { name: "Spiderman", alter_ego: "Peter Parker" }
];

const findSpiderMan = function(superheroes) {
  return superheroes.find(function(superhero) {
    return superhero.name === "Spiderman";
  });
};

console.log("Find Spiderman:", findSpiderMan(superheroes));
// Find Spiderman
// result should be: {name: "Spiderman", alter_ego: "Peter Parker"}

//
// In een array met integers. Zorg dat je een array returned met de integers verdubbeld. Gebruik de .forEach method of, een level hoger: de .map method.

const doubleArrayValues = [1, 2, 3];
const map1 = doubleArrayValues.map(x => x * 2);
console.log(map1);
// result should be [2, 4, 6]

//
// In een array met integers. Schrijf een JavaScript functie die een checkt of er een integer in de array aanwezig is die groter is dan 10.

const containsNumberBiggerThan10 = function(array) {
  return array.some(number => {
    return number > 10;
  });
};

console.log(containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11]));
// result should be true

//
//In een array met strings. Schrijf een JavaScript functie die kijkt of er een bepaalde string: "Italy" in de array aanwezig is.

isItalyInTheGreat7 = function(array) {
  return array.includes("Italy");
};
console.log(
  isItalyInTheGreat7([
    "Canada",
    "France",
    "Germany",
    "Italy",
    "Japan",
    "United Kingdom",
    "United States"
  ])
);
// result should be true

// In een array met integers. Schrijf een JavaScript functie die elke integer vertienvoudigt. Gebruikt .forEach, of als je al wat advanced stuff wilt: gebruik .map.

const tenfold = function(array) {
  return array.map(number => {
    return number * 10;
  });
};

console.log(tenfold([1, 4, 3, 6, 9, 7, 11]));
// result should be [10, 40, 30, 60, 90, 70, 110]

//
// In een array met integers. Schrijf een JavaScript functie die checkt of alle waardes in de array onder de 100 zijn, en true or false retourneert.

const isBelow100 = currentValue => currentValue < 100;

console.log(
  isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98])
);
// result should be: false

//
// In een array met integers. Schrijf een JavaScript functie die alle waardes in de array bijelkaar optelt en het totaal van de som retourneert. Gebruik de .reduce method.

const bigSum = numbers => numbers.reduce((a, b) => a + b, 0);
console.log(
  bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234])
);
// result should be 1118
