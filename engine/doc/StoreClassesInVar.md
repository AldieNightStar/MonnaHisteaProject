# Store Classes in Variables


## Notes
* `DTO` classes are easier to store than raw __json__
* To create a `DTO` class, just add there `@Engine.dto(name)` annotation and specify uniq name

## `DTO` Sample
* Create a file, for example `Player.ts`
* ⚠️ Each `@Engine.dto` name should be unique
```ts
@Engine.dto("Player")
export class Player {
	constructor(public hp: number, public coins: number) {}
}

// Test that Player is marked with @Engine.dto
Engine.isDto(new Player()); // true
Engine.isDto(Player);       // true
Engine.isDto(anotherValue); // false
```

## Storing to `V`
```js
// Store
V.user = new User(20, 1000);

// Load
const user: User = V.user;
```


## More advanced (Just for documentation)
* It's better than `JSON.stringify` as it's supporting `class` __serialization and deserialization__ which allows you to store __classes of data__ instead of raw `json`
```js
// Pack into JSON string
//
// Will return string with JSON
Engine.pack(new Something(1, 2, 3));

// Unpack from JSON string
//
// Will return the object
Engine.unpack(jsonString);
```