const array = [
  { name: "N. Armstrong", profession: "spacecowboy", age: 89 },
  { name: "H. de Haan", profession: "kippen hypnotiseur", age: 59 },
  { name: "A. Curry", profession: "kikvorsman", age: 32 },
  { name: "F. Vonk", profession: "slangenmelker", age: 36 },
  { name: "B. Bunny", profession: "konijnen uitlaatservice", age: 27 },
  { name: "Dr.Evil", profession: "digital overlord", age: 56 }
];

for (let person of array) {
  //hier moeten console.logs komen
  console.log("Dit is de gehele persoon:", person);
  // Log enkel alle namen met daarvoor een introductie ⇒  log bijv. (dit is naam)
  console.log("Dit is alleen de naam:", person.name);
  // Log alle geboortedata (dus niet de leeftijd)
  console.log("geboortejaar:", 2020 - person.age);
  // Log alle namen + beroep ⇒ zodat je bijvoorbeeld logt "N. Armstrong is een spacecowboy"
  console.log(person.name + " is een " + person.profession);
  // Plaats een if statement in de loop die checkt of een persoon ouder is dan 50 jaar.
  // Zet vervolgens weer een console.log in deze if-statement. Werkt je if statement?
  if (person.age > 50) {
    console.log("Persoon is ouder dan 50", person.name);
  }
}
