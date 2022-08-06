/**
 * @function fibonacci
 * @description This function will create a fibonacci series
 * @author Shekh Rasel Masrur Ahmmad
 * @date 07/08/2022
 * @param {Number} limit
 * @returns {Array}
 */
function fibonacci(limit) {
	let fibo = [0, 1];
	for (let i = 2; i <= limit; i++) {
		fibo[i] = fibo[i - 1] + fibo[i - 2];
	}
	return fibo;
}

let limit = 15;
let fibonacciSeries = fibonacci(limit);
console.log(fibonacciSeries);
