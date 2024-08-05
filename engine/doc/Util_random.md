# Util Random API

## Notes
* API that could be used to not reinvent the wheel 😅

## Random API
```js
// Generates random number between 1 and 10 (Integer)
// min - Minimum number
// max - Maximum number (Including)
Util.rand(1, 10);

// Generate random number between 1 and 10 (Floating number)
// min - Minimum number
// max - Maximum number (Exclusive). Floats usualy not reaching exact 10. Rather 9.99
Util.randf(1, 10);

// Returns true if Random chance is success.
// number - Any number between 0 and 1
//
// Example: Util.chance(0.5) - means 50% of success (true)
// Example: Util.chance(0.1) - means 10% of success (true)
Util.chance(number)

// Choose random element from the list
// list - List of any elements
//
// Returns random element from list
// Returns null if list is empty
Util.randChoose(list)
```
