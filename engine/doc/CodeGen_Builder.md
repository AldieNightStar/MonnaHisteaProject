# `+builder` Generator

## Note
* Creates Builder and Interface
* No boilerplate code
* Native performance

## Usage
```ts
// gen: +builder Name   Param:Type Param2:Type Param3:Type

// gen: +builder User   age:number   name:string   items:Item[]
// gen: +builder Item   name:string  count:number  buffs:Buff[]
// gen: +builder Buff   name:string  level:number  timeSec:number

const user = newUser()
	.name("Haxi")
	.age(32)
	.items([
		newItem().name("Food" ).count(3).buffs([]).build(),
		newItem().name("Water").count(1).buffs([]).build(),
		newItem().name("Wand" ).count(1).buffs([
			newBuff().name("Magic Heal" ).level(3).timeSec(30).build(),
			newBuff().name("Magic Power").level(6).timeSec(30).build(),
		]).build()
	])
	.build();
```


## Usage
* Use it with `+builder` command name
* Has args:
	* `Name` - Name of the type to create builder for
	* `Params` - The rest parameters. Each parameter should be like `Name:Type` with no space in between.