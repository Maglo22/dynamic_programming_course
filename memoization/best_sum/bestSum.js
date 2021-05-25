
// m -> target sum; n -> array length
// O(m^2 * n) time
// O(m^2) space
const bestSum = (targetSum, numbers, memo = {}) => {
    // already seen this targetSum to calculate
    if (targetSum in memo) return memo[targetSum];
    // base cases
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    let shortestCombination = null;

    for(let num of numbers) {
        const remainder = targetSum - num;
        const result = bestSum(remainder, numbers, memo);

        if (result !== null) {
            const combination = [...result, num];
            if (shortestCombination === null || combination.length < shortestCombination.length) {
                shortestCombination = combination;
            }
        }
    }

    memo[targetSum] = shortestCombination;
    return shortestCombination;
};

console.log(bestSum(7, [5, 3, 4, 7]));
console.log(bestSum(100, [1, 2, 5, 25]));