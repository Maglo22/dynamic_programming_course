# Fibonacci
Write a function `fib(n)` that takes in a number as an argument.

The function should return the n-th number of the Fibonacci sequence.

## The Fibonacci sequence
The 1st and 2nd number of the sequence is 1.

To generate the next number of the sequence, we sum the previous two.

## Classic approach
```javascript
// O(2^n) time
// O(n) space
const fib = (n) => {
    // base case
    if (n <= 2) return 1;

    return fib(n - 1) + fib(n - 2);
};
```