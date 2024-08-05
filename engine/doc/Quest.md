# Quests

## Notes
* Great for creating Quest based stories or dialogs
* Works like a terminal. Just type something and take the text response. As in old 90s

## Creat the Quest Handler
* It's a class that implements `Util.IQuest` and handles all the commands from the player
* It should return some text either as `string` or by using __async__ `Promise<string>`
```ts
// Create Your quest handler. Name it as you wish
class MySuperQuest implements Util.IQuest {
	private state = 0;

	evaluate(a: Util.QuestArgument): string | Promise<string> {
		// a.command - Command itself
		// a.args    - List of args that player had entered, divided by a space
		// a.raw     - All the string
		// a.rawArgs - All the string without the command name

		if (a.command === "go") {
			this.state += 1;
			return "You going further";
		} else if (a.command === "check") {
			return "Right now you are " + this.state + " far from home";
		} else {
			return "No such command. Try: go | check"
		}
	}
}

// Now instantiate that. Name it as you wish
const questObject = new MySuperQuest();
```

## Then Print it
```ts
// Just print the quest to the span
s.quest(questObject);

// Or you can create it by yourself, and then print
s.print(
	new Util.Quest(questObject)
)
```