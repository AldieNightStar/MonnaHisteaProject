# Store Classes in Variables


## Notes
* `DTO` classes are easier to store than the raw __json__
* To create a `DTO` class then define it inside a namespace `DTO`

## `DTO` Sample
* Create a file, for example `Player.ts`
```ts
namespace DTO {
	
	// This class would be a DTO class
	// Because it is inside of DTO namespace
	export class Player {
		constructor(public hp: number, public coins: number) {}
	}

}
```

## Configure `DTO`
* When you create a new project, Engine generates `DTO.ts` that configures `DTO` namespace
* ⚠️ __You don't need__ to change something, unless you know what you are doing
* It has these lines of code:
```ts
Engine.Config.dto.namespace = DTO;
Engine.Config.dto.path = "DTO";
```

## Under the hood?
* Under the hood it uses `Game.dto`.
* It reads `Engine.Config.dto` configuration and init `DTO` namespace for you
* All that goes before the novel is starting


## Storing to `V`
```js
// Store
V.user = new DTO.User("HaxiDenti", 20, 1000);

// Load
const user: DTO.User = V.user;
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