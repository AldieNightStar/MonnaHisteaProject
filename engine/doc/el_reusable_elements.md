# Premade elements in `el`

## Notes
* There are __already made__ elements to be reused

## API
```js
// Creates button with some caption and action
//
// caption   - innerText property to set up
// onclick   - action on click event
// cb        - (Optional) Callback to customize
//
// Returns new element
el.button(caption, onclick, cb);


// Creates button with some caption and action. Will reload specific element on click
//
// reloadable - Element that will be reloaded on click
// caption    - innerText property to set up
// onclick    - action on click event
// cb         - (Optional) Callback to customize
//
// Returns new element
el.rebutton(reloadable, caption, onclick, cb);


// Creates <a> link
//
// caption   - innerText property to set up
// onclick   - action on click event
// cb        - (Optional) Callback to customize
//
// Returns new element
el.link(caption, onclick, cb);


// Creates <a> link. Will reload specific element on click
//
// reloadable - Element that will be reloaded on click
// caption    - innerText property to set up
// onclick    - action on click event
// cb         - (Optional) Callback to customize
//
// Returns new element
el.relink(reloadable, caption, onclick, cb);


// Creates <a> link. Will change the current Passage
//
// reloadable - Element that will be reloaded on click
// caption    - innerText property to set up
// args       - arguments to pass into Passage.args()
// onclick    - action on click event
// cb         - (Optional) Callback to customize
//
// Returns new element
el.passlink(reloadable, caption, args, onclick, cb);


// Creates <a> link. Will change the current Passage and also clean _temp variables
//
// reloadable - Element that will be reloaded on click
// caption    - innerText property to set up
// args       - arguments to pass into Passage.args()
// onclick    - action on click event
// cb         - (Optional) Callback to customize
//
// Returns new element
el.passCleanLink(reloadable, caption, args, onclick, cb);


// Creates <img> image
//
// src - src property to set up
// w   - Width string. For example "100px"
// h   - Height string. For example "100px"
// cb  - (Optional) Callback to customize
//
// Returns new element
el.img(src, w, h, cb);
await el.img(src, w, h, cb).wait(); // ASYNC


// Creates <br> element. Next line operator
el.br();


// Creates <hr> element. Horizontal line
el.hr();


// Create <center> tag with element inside
el.center(element)


// Create H1 title
// caption - Text to print
// cb      - (Optional) Customizing callback
el.title(caption, cb)


// Creates span element with text that is typing as if someone does it
//
// text   - Text to print
// ms     - Time in milliseconds for each character
// onChar - (Optional) Callback for each character to be printed: (char) => {}
// onDone - (Optional) Callback that will be called when typing is done
el.typing(text, ms, onChar, onDone);


// Creates timer link element which gets auto-clicked on timeout
// Will stop when is removed from DOM
//
// seconds - Seconds to remain
// text    - Text to print
// cb      - Callback to call when clicked or timeout
//
// Returns Link element
el.timerLink(seconds, text, cb)


// Creates choose menu consisting of links
// Will self-remove when choice is made
//
// variants - Variants to be choosed.
//     [
//         ["CAPTION1", "VALUE1"],
//         ["CAPTION2", "VALUE2"]
//     ]
// callback - Callback to be called on choice is made: (value) => {}
//
// Returns span element with menu logic
el.choose(variants, callback)

// Creates canvas which captures the mouse pointer
// Allows to create knob-like settings
//
// Mostly used for debugs and editors
el.adjuster(target, (x, y) => { /* */ })
```