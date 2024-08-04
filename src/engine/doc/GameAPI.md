# Game API

## Usage
```js
// Get variable instance by name with default value
//
// name  - Name of the variable in `V`
// def   - (Optional) Default value or function if variable is not set
//
// Returns variable el.VarInstance value or default one
const v = Game.v<T>(name, def);

// Marks DTO classes in Namaspace
//
// NameSpace - Namespace object
// name      - Namespace name (Same as object name). No dots allowed
//
// More documenation:    dto Classes in Variables
Game.dto(NameSpace, "NameSpace");


// Save current data in V variable
// Makes everything save for page reload
Game.save();


// Save current data in V variable
// But this time it will pop up save window
Game.saveFile();
```
