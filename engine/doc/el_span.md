# Span API

## Notes
* Made for easier elements compose
* One of the building block of story components.
* Can be nested many times
* Reloadable

## Usage
```ts
// This way we create the Span
el.span(s => {

    // Print element (text, number, HTMLElement, el.Element)
    s.print(element);
    s.println(element);
    s.printCenter(element);

    // Print formatted text and next line after it
    // 
    // $(name)   - Prints values from `V` variable. Supports el.Element also
    // $(0) $(1) - Prints values from additional arguments
    // __word__  - Makes text bold
    // //word//  - Makes text italic
    //
    // ...args   - (Optional) Additional arguments. Could be el.Element
    s.printf("Hello $(name). It's a __great__ day to //live//", ...args);

    // Print all elements. Returns nothing
	// Every element is printed in a new line, to print inline, wrap them into []
    s.printAll(...elements);

    // Print button element
    s.button("Caption", callback);
    s.buttonln("Caption", callback);

    // Print button element (Reloads span on click)
    s.rebutton("Caption", callback);
    s.rebuttonln("Caption", callback);

    // Print link element
    s.link("Caption", callback);
    s.linkln("Caption", callback);

    // Print link element (Reloads span on click)
    s.relink("Caption", callback);
    s.relinkln("Caption", callback);

    // Print link element (Clears span on click - No reload)
    s.clink("Caption", callback);
    s.clinkln("Caption", callback);

    // Print button element (Clears span on click - No reload)
    s.cbutton("Caption", callback);
    s.cbuttonln("Caption", callback);

    // Print horizontal line
    s.hr();

    // Print line break
    s.br();

    // Print title (H1)
    s.title("Text");
    s.title("Text", true); // Centerd

    // Print Image
    s.img(src);
    s.img(src, true); // Centered

    // Link that changes the passage
    //
    // caption  - Caption for the link
    // passage  - Passage name to go to
    // args     - Argument to pass to the passage. Can be empty: []
    // callback - Callback to call before goto
    s.pass("Title", "PassageName", args, callback);
    s.passln("Title", "PassageName", args, callback);
    s.passClean("Title", "PassageName", args, callback);   // Cleans temporary variables. For ex: _temp
    s.passCleanln("Title", "PassageName", args, callback); // Cleans temporary variables. For ex: _temp

    // Link that fully reloads Passage
    s.relinkPassage("Text", [], callback);
    s.relinkPassageln("Text", [], callback);

    // Print typing text
    // ms     - Milliseconds per char
    // onChar - (Optional: char => void) When single character printed
    // onDone - (Optional: ()   => void) When text is done printing
    s.type("Text", ms, onChar, onDone)
    s.typeln("Text", ms, onChar, onDone)

    // Print canvas element
    // w    - Width of the canvas
    // h    - Height of the canvas
    // cb   - Callback to work with canvas: (canvas, context) => void
    //
    // Returns canvas itself
    s.canvas(w, h, cb);

    // Change Reload Time milliseconds
    s.reloadTime = 600;
    s.reloadTime = 0; // No fading. Instant

    // Reload the span (Uses reloadTime property)
    s.reload();

    // Clear (Does it automaticaly on reload)
    s.clear();

    // Wait some time. (Uses: Engine.Timer.wait(ms))
    await s.wait(ms)

    // Fade out (Removes all clicks)
    await s.fadeOut();

    // Fade in
    await s.fadeIn();

    // Calls fade out, then callback and then fade in
    await s.fadeChange(callback);

});
```