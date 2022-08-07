/**
 * @function findSecondLargest
 * @description This function will find the second largest numbre from an array
 * @author Shekh Rasel Masrur Ahmmad
 * @date 07/08/2022
 * @param {Array} numbers
 * @returns {Number}
 */
function findSecondLargest(numbers) {
	console.log(numbers);
	for (let i = 0; i < numbers.length; i++) {
		for (let j = i + 1; j < numbers.length; j++) {
			if (numbers[i] < numbers[j]) {
				[numbers[i], numbers[j]] = [numbers[j], numbers[i]];
			}
		}
	}
	console.log(numbers);
	return numbers[1];
}

let numbers = [4, 5, 45, 67, 4, 5, 98, 78, 54, 23, 10, 20, 23, 35];
let secondLargestNumber = findSecondLargest(numbers);
console.log(secondLargestNumber);
