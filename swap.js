/**
 * Swap numbers using temp variable
 */
let first = 5;
let second = 7;
console.log(first, second);

// let temp;
// temp = first;
// first = second;
// second = temp;

/**
 * Swap using Destructure
 */
[first, second] = [second, first];
console.log(first, second);
