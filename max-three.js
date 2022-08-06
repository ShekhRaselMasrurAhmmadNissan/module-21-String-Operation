function findMax(first, second, third) {
	// if (first > second && first > third) {
	// 	return first;
	// } else if (second > first && second > third) {
	// 	return second;
	// } else {
	// 	return third;
	// }

	return Math.max(first, second, third);
}
function findMin(first, second, third) {
	// if (first < second && first < third) {
	// 	return first;
	// } else if (second < first && second < third) {
	// 	return second;
	// } else {
	// 	return third;
	// }

	return Math.min(first, second, third);
}

// let jim = 67;
// let dela = 97;
// let chinku = 99;

// if (jim > dela && jim > chinku) {
// 	console.log('Jim will get the cake');
// } else if (dela > jim && dela > chinku) {
// 	console.log('Dela will get the cake');
// } else {
// 	console.log('Chinku will get the cake');
// }

/**
 * Easiest way to compare the values only
 */

// console.log(Math.max(jim, dela, chinku));
// console.log(Math.min(jim, dela, chinku));

let first = 67;
let second = 97;
let third = 99;

console.log(findMax(first, second, third));
console.log(findMin(first, second, third));
