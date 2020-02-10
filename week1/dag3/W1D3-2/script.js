// Making a sandwich
// step 1 Put butter on the sandwich
// step 2 add cheese to the sandwich
// step 3 Put another slice of bread on top

/* const makingASandwich = function() {
  console.log("step 1 Put butter on the sandwich");
  console.log("step 2 add cheese to the sandwich");
  console.log("step 3 Put another slice of bread on top");
};

makingASandwich(); */

// Hier declareer ik mijn functie
/* const makeSandwich = function(topping) {
  console.log("step 1 Put butter on the sandwich");
  console.log("step 2 add " + topping + " to the sandwich");
  console.log("step 3 Put another slice of bread on top");
  console.log("There you go, a sandwich with " + topping);
};

// Hier call ik mijn functie.
makeSandwich("cheese");
makeSandwich("peanutbutter & jelly"); */

// Deel C
/* const calculateDiscountedPrice = function(totalAmount, discount) {
  return Math.round(totalAmount - discount);
};

console.log(calculateDiscountedPrice(100.5, 45.15)); */

// Deel D
const calculateDiscountedPrice2 = function(totalAmount, discount) {
  if (totalAmount > 25) {
    return Math.round(totalAmount - discount);
  } else {
    return totalAmount;
  }
};

console.log(calculateDiscountedPrice2(50, 9.5));
console.log(calculateDiscountedPrice2(15, 9.5));
