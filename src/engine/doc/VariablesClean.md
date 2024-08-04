# Temporary Variables and Clean

## Note:
* Temporary variables is `_name` variables (that has prefix `_`)
* They could be cleaned out on `clean()` method usage in the API

## Usage
```js
// This is temporary variable
const v = Game.v<number>("_score");

// Will delete ALL variables with `_` prefix. For example `V._hp` or `V._name`
Engine.Variables.clean();
```