// O(n*m) time
// O(n+m) space
const gridTraveler = (n, m, memo = {}) => {
    const key = `${n},${m}`;
    // are args in memo
    if (key in memo) return memo[key];
    // base cases
    if (n === 0 || m === 0) return 0;
    if (n * m === 1) return 1;

    // moving down + moving right
    memo[key] = gridTraveler(n - 1, m, memo) + gridTraveler(n, m - 1, memo);
    
    return memo[key];
};

console.log(gridTraveler(2, 3)); // 3