// Schrijf een JavaScript functie om het woord "cool" aan een array met strings toe te voegen. Gebruik de .push method.

const arrayWithWords = ["nice", "awesome", "tof"];
const addTheWordCool = function(array) {
  // add your code
  arrayWithWords.push("cool");
  return arrayWithWords;
};
console.log("Add cool:", addTheWordCool(["nice", "awesome", "tof"]));

// Schrijf een JavaScript functie die het aantal elementen in een array retourneert.

const amountOfElementsInArray = function(total) {
  return total.length;
};

console.log(amountOfElementsInArray(["appels", "peren", "citroenen"])); // 3

// Schrijf een JavaScript functie om het éérste element uit een array te retourneren. PS: Bij welk cijfer begint een array ookalweer met tellen?

const selectBelgiumFromBenelux = function(getBelgium) {
  return getBelgium[0];
};

console.log(selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"]));
// resultaat: "Belgie"

// Schrijf een JavaScript functie om het laatste element uit een array te retourneren.

lastElementInArray = function(lastAnimal) {
  return lastAnimal.pop();
};

console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"]));
// resultaat: "Schildpad"

// Schrijf een JavaScript functie om het eerste element uit een array te halen en het restant te retourneren .
// Gebruik .slice én de alternatieve optie .splice. Wat is het verschil tussen deze functies? Hint: mutability.

const presidents = ["Trump", "Obama", "Bush", "Clinton"];

const impeachTrumpSlice = function(array) {
  return array.slice(1);
};
const impeachTrumpSplice = function(array) {
  return array.splice(1);
};

console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]
console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]

// Write a simple JavaScript program to join all elements of the following array into a string (with spaces).
// ps: deze opdracht hebben we in het Engels gelaten omdat er een dikke tip in zit over welke array method je gaat gebruiken.

stringsTogether = function(joinedText) {
  return joinedText.join(" ");
};

console.log(stringsTogether(["Winc", "Academy", "is", "leuk", ";-}"]));
//resultaat: "Winc Academy is leuk ;-}"

// Schrijf een functie die 2 arrays ['array 1'] ['array2'] combineert tot 1 array ['array1', 'array2']

const combineArrays = function(part1, part2) {
  return part1.concat(part2);
};
console.log(combineArrays([1, 2, 3], [4, 5, 6]));
// result should be [1,2,3,4,5,6]
