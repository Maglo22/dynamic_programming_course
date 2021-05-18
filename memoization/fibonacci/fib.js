// memoization
// with a js object ->
// keys will be arg to func, value will be return value

// O(n) time
// O(n) space
const fib = (n, memo = {}) => {
    // check memo
    if (n in memo) return memo[n];
    // base case
    if (n <= 2) return 1;

    // save value in memo
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    
    return memo[n];
};

console.log(fib(6)); // 8