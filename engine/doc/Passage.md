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

// This passage is reusing of template
Passage.ofSequence("Start", s => {
    s
        .text("Hello there!")
        .img("img01.png", "Good to see you!")
        .text("Good bye");
})
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


// Set/Unset the next Passages prefix
// Good in combination with relative naming
Passage.prefix("Forrest/Home/");
Passage.prefix();


// Create passage with sequence as a single element
//
// name - Name of the passage
// cb   - Callback (s => void) with el.SequenceAdder as an API
Passage.ofSequence(name, cb);
Passage.ofSequenceNoBack(name, cb); // Do not allow back-button


// Create passage with choice.
// Supports also timer if need to
//
// name - Name of the passage
// cb   - Callback with ChoicePassageApi API
Passage.ofChoice(name, c => {
    // Caption or title of the passage
    c.caption("Choose the color")

    // Get arguments passed to this Passage or empty list
    c.args()

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



// Create linear passage that waits seconds before continue
// It goes by itself and user would not interact
Passage.ofLinear("Story Passage", s => {

    // Print title and wait for 5 seconds to continue
    //
    // sec - Seconds to wait or Music time to wait (if s.mus(...) is used)
    // text  - Text to print
    s.waitTitle(5, "A story about Snowman")

    // Print text and wait for 5 seconds to continue
    //
    // sec   - Seconds to wait or Music time to wait (if s.mus(...) is used)
    // text  - Text to print
    s.waitText(5 "This was a story of Snowman")

    // Print text and wait until music goes 0:10 time to continue
    //
    // sec   - Seconds to wait or Music time to wait (if s.mus(...) is used)
    // text  - Text to print
    s.waitText(s.mus(0, 10), "He was felt in love to Bitsie")

    // Print image and text and wait for 5 seconds to continue
    //
    // sec    - Seconds to wait or Music time to wait (if s.mus(...) is used)
    // text   - Text to print
    // center - Boolean that tells to print everything in center
    s.waitImageText(5, "001.jpg", "One day, when winter is overed...", center)

    // Print typing text and wait for 3 seconds after it to continue
    //
    // sec    - Seconds to wait or Music time to wait (if s.mus(...) is used)
    // text   - Text to print
    s.waitImageText(3, "And the Snowman stand on his feet and trying to go")

    // Immediately chaning passage to another
    //
    // passage - Name of the passage to go
    // args    - Passage arguments to pass
    s.pass("Ending", ['ended'])

    // Reload passage on the next action
    s.act(() => Passage.reload([0]));

    // Get args for that Passage
    s.args
});

// Create Canvas Passage. It will create passage that prints a full-sized passage
// Expects function that accepts CanvasApi, and el.Span itself
Passage.ofCanvas("Canvas Passage", (canvasApi, s) => {
	
	// Please, refer to el.canvas doc for more

})
```
