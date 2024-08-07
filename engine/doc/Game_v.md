# Variable Creator `v`

## Notes
* Allows to initialize default values without `if`'s
* Allows to have instaces of variables without accessing `V` itself
* All internal reference changes are still saved to `V`

## Usage
```ts
// Create Variable instance
const v = Game.v<Player>("player");
const v = Game.v<Player>("player", new Player(10, 100, 250));       // Default value
const v = Game.v<Player>("player", () => new Player(10, 100, 250)); // Default value as function

// Get value
v.get();

// Set another value
v.set(value2)

// Check is null. Returns boolean
v.isNull();

// Get value but also declare default one
v.init(defaultValue).get();
```