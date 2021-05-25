
// m -> target sum; n -> array length
// O(m * n) time
// O(m) space
const canSum = (targetSum, numbers, memo = {}) => {
    // already seen this targetSum to calculate
    if (targetSum in memo) return memo[targetSum];
    // base cases
    if (targetSum === 0) return true;
    if (targetSum < 0) return false;

    for(let num of numbers) {
        const remainder = targetSum - num;
        if (canSum(remainder, numbers, memo) === true) {
            memo[targetSum] = true;
            return true;
        }
    }

    memo[targetSum] = false;
    return false;
};

console.log(canSum(7, [5, 3, 4, 7]));
console.log(canSum(300, [7, 14]));