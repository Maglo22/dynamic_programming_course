# Memoization
## Memoization recipe

1. Make it work
    - Visualize the problem as a tree.
    - Implement the tree using recursion.
    - Test it.

2. Make it efficient.
    - Add a (shared) memo object (key, value mapping).
    - Add a base case to return memo values.
    - Store return values into the memo.

## Visualizing as a tree
When visualizing the problem as a tree, identical subtrees start to appear as you travel through it.
This subtrees can be stored, so when the recursion finds one of them, it skips re-calculating it, and just takes the stored value.

We can translate this to code by using a (key, value) data structure, where the **key** will be the _root of the subtree_, and the **value** the return _value of calculating that subtree_.

### Example
![fibonacci](https://user-images.githubusercontent.com/30937057/118701228-17cc8e00-b7d9-11eb-87a8-23ba0a715951.png)


In this tree, the subtree:
```text
 3
2 1
```
appears 3 times. Rather than calculating it each time, we calculate it the first time, and store the result in a data structure.

```javascript
// root: calculated value
storedValues = {
    3: 2,
}
```

The next time we encounter it, we grab the stored value, skipping the need to recalculate an already known value, which in turn reduces the execution time.

```javascript
...
if (root in storedValues) return storedValues[root];
...
```
