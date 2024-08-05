# Save/Load files

## Notes
* Engine allows to save and load the story state
* To do that use `Engine.Variables` API

## Usage
```js
// Will create save dialog and reader can choose where to save
Engine.Variables.saveFile();

// Will create load dialog and reader can choose file to load story from
Engine.Variables.loadFile();
```