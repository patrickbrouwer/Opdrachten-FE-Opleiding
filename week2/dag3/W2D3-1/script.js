// zet de functie om naar een arrow functie
const ikRockArrowFunctions = function() {
  console.log("Joe, ik rock de arrow functions!");
};

ikRockArrowFunctions();

const ikRockArrowFunctions2 = () =>
  console.log("Joe, ik rock de arrow functions!");

ikRockArrowFunctions2();

//Origineel
const fivePlusSeven = function() {
  return 5 + 7;
};

fivePlusSeven();

// Omgebouwd naar arrow function

const fivePlusSeven2 = () => 5 + 7;

fivePlusSeven2();

//Opdracht: schrijf een zo kort mogelijke arrow function, zonder naam  (je hoeft het dus ook niet in een const te stoppen), die 1 + 2 bij elkaar optelt.
() => 1 + 2;

//Opdracht: Schrijf een arrow function, op 1 regel (dus met een impliciete return statement), die de params a en b bijelkaar optelt. Noem de functie myFunction.
const myFunction = (a, b) => a + b;

// Opdracht: Schrijf een arrow function op 1 regel, die de parameter a behoudt, en altijd a plus 5 returned. Noem de functie addFive.
const addFive = a => a + 5;

// Opdracht: Schrijf een arrow function met de naam createObject met een implicit return statement (dus op 1 regel) die een simpel object returned: {greeting: "hoi"}
const createObject = () => ({ greeting: "hoi" });
