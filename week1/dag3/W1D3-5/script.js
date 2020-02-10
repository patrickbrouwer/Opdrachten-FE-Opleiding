// While loop
let colors = ["yellow", "blue", "red", "orange"];
let i = 0;

while (i < colors.length) {
  console.log(colors[i]);
  i++;
}

// For loop
let colors = ["yellow", "blue", "red", "orange"];
let i = 0;
for (let i = 0; i < colors.length; i++) {
  const element = colors[i];
  console.log(colors[i]);
}

// forEach array method
const colors = ["yellow", "blue", "red", "orange"];
colors.forEach(element => console.log(element));

// 1. Hoeveel regels neemt mijn for loop in beslag?
//      6

// 2. Hoeveel regels neemt mijn `forEach` method in beslag?
//      2

// 3. Welke voordelen heeft het gebruiken van een array method nog meer t.o.v. een for of een while loop?
//      Minder kans op fouten.

// Welke methode vind je bijvoorbeeld makkelijker leesbaar? Waarom?
//      array method omdat het veel overzichtelijker is.

// 4. Stel je hebt een `object` met 45 properties. Probeer eens uit te zoeken (gebruik Google) hoe je die 45 properties kunt `console.log`-en zonder elke property handmatig te `console.log` en.
// Probeer dit nu eens in een stukje code (en gebruik hier een object met 5 properties voor). Ben je nu aan het *itereren*?
//      Dit kan je doen met de array forEach.

const animals = ["dog", "cat", "elephant", "monkey", "bird"];
animals.forEach(element => console.log(element));
