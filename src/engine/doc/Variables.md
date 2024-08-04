# Variables

## Notes
* Variables is a __required__ functionality of any Interactive Fiction novels
* You can control them to save or not with `Engine.Variables.save()` or `Game.save()` functionality

## Usage
```js
V.score = 10;
if (V.player.hp < 10) {
    // ...
}

V.score += 100;
```

## API
* `Variables` has its own `API` for them.
```js
// Save variables
// Automatically calling every 5 seconds
Engine.Variables.save();

// Load variables back into `V` variable
// Automatically calling on page loading
Engine.Variables.load();

// Load variables from FILE
// Will show dialog box
Engine.Variables.loadFile();

// Save variables to FILE
// Will show dialog box
Engine.Variables.saveFile();

// Reset all the variables
// Makes 'V' completely clean
Engine.Variables.reset();

// Removes any variables with `_` prefix
// For example `_hp` and `_score` will be removed as they starting with `_` symbol
Engine.Variables.clean();
```