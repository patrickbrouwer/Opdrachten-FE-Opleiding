const sum = function(...getallen) {
  return getallen.reduce((prev, curr) => {
    return prev + curr;
  });
};

console.log(sum(1, 2, 3, 4, 5, 6));

//

const sum2 = function(num1, num2, num3) {
  return num1 + num2 + num3;
};

const cijfers = [1, 2, 3];

console.log(sum2(...cijfers));
