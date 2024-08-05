# Effects API

## Notes
* Allows to add Fade and not only effects to the story
* Lives in `Engine.Effect`

## API
```js
// Fade in for the element
//
// element - HTMLElement object
// ms      - Number of milliseconds (Default is 600)
await Engine.Effect.fadeIn(element, ms)


// Fade out for the element
//
// element - HTMLElement object
// ms      - Number of milliseconds (Default is 600)
await Engine.Effect.fadeOut(element, ms)


// Change element with fade, using callback function
//
// element - HTMLElement object
// ms      - Number of milliseconds (Default is 600)
// cb      - Callback that will have this element as an argument
await Engine.Effect.fadeChange(element, ms, cb);
```