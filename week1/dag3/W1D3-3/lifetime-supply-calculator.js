// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.

const calculateSupply = function(age, amountPerDay) {
  const maxAge = 80;
  const totalNeed = amountPerDay * 365 * (maxAge - age);
  let message =
    "You will need " +
    totalNeed +
    " cups of coffee to last you until the ripe old age of " +
    maxAge;
  console.log(message);
};

calculateSupply(31, 6);
calculateSupply(42, 6);
calculateSupply(72, 4);
