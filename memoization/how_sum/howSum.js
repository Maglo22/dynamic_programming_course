
// m -> target sum; n -> array length
// O(m^2 * n) time
// O(m^2) space
const howSum = (targetSum, numbers, memo = {}) => {
    // already seen this targetSum to calculate
    if (targetSum in memo) return memo[targetSum];
    // base cases
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    for(let num of numbers) {
        const remainder = targetSum - num;
        const result = howSum(remainder, numbers, memo);
        if (result !== null) {
            memo[targetSum] = [...result, num];
            return [...result, num];
        }
    }

    memo[targetSum] = null;
    return null;
};

console.log(howSum(7, [5, 3, 4, 7]));
console.log(howSum(300, [7, 14]));