/*
 * Create the function factorial here
 */

function factorial(n) {
  let result = 1;
  while (num > 0) {
    result *= n;
    n--;
  }
  return result;
}

// 더 간단하게
const factorial = (n) => (n === 0 ? 1 : n * factorial(n - 1));
