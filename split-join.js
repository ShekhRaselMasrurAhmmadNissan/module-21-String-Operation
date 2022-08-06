let lyrics =
	'Tumi bondhu kala pakhi, ami jno ki. Boshonto kale tomai bolte parini';
/**
 * Destructuring a string
 */
const parts = lyrics.split(' ');
const sentences = lyrics.split('.');
const characters = lyrics.split('');

// console.log(parts);
// console.log(sentences);
// console.log(characters);

/**
 * Partial Slicing
 */

const partial = lyrics.slice(5, 8);
console.log(partial);

const partial2 = lyrics.substring(5, 8);
console.log(partial2);

/**
 * Concat
 */
const str1 = 'Hello';
const str2 = 'World';

console.log(str1.concat(' ', str2));
// expected output: "Hello World"

console.log(str2.concat(', ', str1));
// expected output: "World, Hello"

/**
 * Join
 */
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(''));
// expected output: "FireAirWater"

console.log(elements.join('-'));
// expected output: "Fire-Air-Water"
