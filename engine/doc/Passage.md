# Passage

## Notes
* `Passage` is an type of scenes in `Monna Histea Engine 2` that is using `Passage.of` API
* You can divide passages into a story chapters, locations or even make a lot of scenes

## Creation
* Create `ts` file with any name in `passages` folder
    * For example: `Story.ts`
* `s` argument - [Uses `Span` functionality.](el_span.md)
```js
// First passage is Start. Is always starting with it
Passage.of("Start", s => {
    s.print("Hello there!");
    s.pass("Go to second passage", "Second Passage");
});
```

## API
* `Passage` has it's own `API` to work with them
```js
// Returns name of the current Passage you are in
// For example "Start"
Passage.current();

// Returns list of passage names to `goto`
// For example ["Start", "Second Passage"]
Passage.list();

// Reload current passage
Passage.reload();

// Go to another passage
// name - Passage name. For example "Second Passage"
// args - Give additional arguments for Passage.args()
//
// Returns true if everything is ok
Passage.goto(name, args);

// Fadeout the Passage, call the function, then Fade in
//
// Used in Passage.goto() and Passage.reload()
Passage.fadeChange(func);
```



## Passage creator function
```ts
// Create passage in standard way
//
// name   - Name of the passage
// cb     - Callback (s => void) with el.Span as an API
Passage.of(name, cb);


// Create passage with choice.
// Supports also timer if need to
//
// name - Name of the passage
// cb   - Callback with ChoicePassageApi API
Passage.ofChoice(name, c => {
    // Caption or title of the passage
    c.caption("Choose the color")

    // Get arguments passed to this Passage or empty list
	// requiredCount  - (Optional) required argument count
    c.args(requiredCount)
    c.args()

	// Set new args without Passage reload
	// Works for page reload and to save updated args
	c.setArgs(args)

    // Variant links.
    // caption  - Name of the link
    // passage  - Name of the passage to go to
    // args     - Arguments for the passage
    // callback - Optional callback before go
    c.variant("red", "Choiced", [], callback)
    c.variant("green", "Choiced", [], callback)
    c.variant("blue", "Choiced", [], callback)

    // Add variant with passage reload itself
    // When choosed then will reload current passage with new arguments
    c.reload("Need more time", [], callback)

    // Tell that passage will have a timer that will go to another passage on out
    // seconds  - Seconds of the timer to countdown
    // passage  - Passage name to go to
    // args     - Arguments for the passage
    // callback - Optional callback before go
    c.timer(10, "Choiced", [], callback)
});


// Create Canvas Passage. It will create passage that prints a full-sized canvas
// Expects function that accepts CanvasApi, and el.Span itself
Passage.ofCanvas("Canvas Passage", (canvasApi, s) => {
	// Please, refer to Canvas doc for more
})

// Create Tiled Canvas Passage. It will create passage that prints a full-sized tiled-canvas
// Expects function that accepts CanvasTiledApi, and el.Span itself
Passage.ofTiledCanvas("Canvas Passage", (canvasApi, s) => {
	// Please, refer to Canvas doc for more
})
```
