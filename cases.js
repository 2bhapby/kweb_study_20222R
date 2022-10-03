const factorial = (n) => {
	let res = 1;

	while (n > 0)
	{
		res *= n;
		n -= 1;
	}
	return res;
}

const permutation = (n, r) => {
	return factorial(n) / (factorial(n - r));
}

const multiPermutation = (n, r) => {
	res = 1;

	while (r > 0)
	{
		res *= n;
		r -= 1;
	}
	return res;
}

const combination = (n, r) => {
	return factorial(n) / (factorial(n - r) * factorial(r));
}

const multiCombination = (n, r) => {
	return factorial(n + r - 1) / (factorial(n - 1) * factorial(r));
}

module.exports = {
	permutation,
	multiPermutation,
	combination,
	multiCombination
}