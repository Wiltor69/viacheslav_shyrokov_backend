//Using the formula provides linear time complexity O(1), making the function very fast even for large numbers.
function sum_to_n_a(n: number): number {
  if (n < 0) {
    throw new Error("Number must be non-negative");
  }
  return (n * (n + 1)) / 2; // Using the formula for the sum of an arithmetic progression for optimization
}

console.log(sum_to_n_a(5));
console.log(sum_to_n_a(10));

function sum_to_n_b(n: number): number {
  if (n === 1) {
    return 1;
  } else {
    // Recursive call: sum of current number and sum of all previous numbers
    return n + sum_to_n_b(n - 1);
  }
}

// Example of use:
const result = sum_to_n_b(5);
console.log(result);

//using a loop
function sum_to_n_c(n: number): number {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
