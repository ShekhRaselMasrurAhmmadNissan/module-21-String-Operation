/**
 * @function reverseString
 * @description This function will return the reversed String of input string
 * @author Shekh Rasel Masrur Ahmmad
 * @date 07/08/2022
 * @param {String} text
 *
 */
function reverseString(text) {
	let reversed = '';
	for (let i = text.length - 1; i >= 0; i--) {
		reversed = reversed + text[i];
		console.log(text[i]);
	}

	return reversed;
}

let myString = 'I am a Good Boy';
let reversed = reverseString(myString);
console.log(reversed);
