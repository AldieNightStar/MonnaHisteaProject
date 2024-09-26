# Storing Variables in `URL` #anchor

## Notes
* __Recommended:__ for static sites in most cases
* Allows to __save the game and share__ to friends without sending any save-files
* ⚠️ __SUPPORTS ONLY:__ `string`, `number`, and `boolean`. Otherwise it will raise an error


## Usage
* Go into your project configuration file
```ts
// Write here name of variables, that you want to store in URL #anchor
Engine.Config.anchorVariables = ['a', 'b', 'c'];

// Set to true, if you want to remember which passage is current
// DO NOT USE `Passage.args()` in combination with passageInUrlAnchor
Engine.Config.passageInUrlAnchor = false;
```


## Do i need something else?
* No.
* Just add variables to `anchorVariables` and use them with `V` as a simple ones
* __Only one thing:__ These variables have to be of type: `string`, `number`, or `boolean`
```ts
// You can use anchored variables as well as others
console.log(V['a'])
console.log(V['b'])
console.log(V['c'])
```


## Pros
* Good for __static site__
* Users can __bookmark__ some parts of your story and read later
* Good for__ blogging static sites__
* Good to __share__ the __total results__ or other stuff

## Cons
* Bad idea for novels
* User could easily change the value in browser
* Limited value types
* ALL variables together must not be more than `4KB` in size