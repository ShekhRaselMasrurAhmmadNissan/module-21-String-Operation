/**
 * @function reversedWords
 * @description This function will reverse the words in a text
 * @author Shekh Rasel Masrur Ahmmad
 * @date 07/08/2022
 * @param {String} str
 */
function reversedWords(str) {
	let words = str.split(' ');
	// console.log(words);
	let result = [];
	for (let i = words.length - 1; i >= 0; i--) {
		result.push(words[i]);
	}
	return result.join(' ');
}

let myString = 'I am a good boy';
let myReversedString = reversedWords(myString);
console.log(myReversedString);
