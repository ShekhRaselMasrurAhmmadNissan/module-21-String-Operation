/**
 * @function maxInArray
 * @description Find the max number in array
 * @author Shekh Rasel Masrur Ahmmad
 * @date 07/08/2022
 * @param {Array} numbers
 * @returns {Number}
 */
function maxInArray(numbers) {
	let largest = numbers[0];
	for (let i = 0; i < numbers.length; i++) {
		if (numbers[i] > largest) {
			largest = numbers[i];
		}
	}
	return largest;
}

/**
 * @function minInArray
 * @description Find the min number in array
 * @author Shekh Rasel Masrur Ahmmad
 * @date 07/08/2022
 * @param {Array} numbers
 * @returns {Number}
 */
function minInArray(numbers) {
	let lowest = numbers[0];
	for (let i = 0; i < numbers.length; i++) {
		if (numbers[0] < lowest) {
			lowest = numbers[i];
		}
	}
	return lowest;
}

let heights = [167, 190, 120, 165, 137];
let tallest = maxInArray(heights);
let shortest = minInArray(heights);
console.log('The tallest person is', tallest);
console.log('The shortest person is', shortest);
