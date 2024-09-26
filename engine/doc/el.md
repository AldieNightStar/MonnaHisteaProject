# `el` Function API

## Notes
* Instead of write `document.createElement` we added `el()` for that
* `el` accepts `tag` and `cb` (Callback) which will be used to customize it

## API
```js
// Create simple `div` with class `hellDiv`
const element = el.of("div", d => {
    d.innerHTML = "HELLO";
    d.className = "hellDiv";
});

// Print into another element
// dest - Destination DOM element or el.Appendable
// Returns element it prints
el.print(dest, element);
el.println(dest, element);

// Print all the elements from the arguments
// For example: el.printAll(s, image, "Hello, there", element3)
// Every element is printed in a new line, to print inline, wrap them into []
el.printAll(dest, ...elements);

// Clear everything inside DOM element
el.clear(element);

// Remove element from DOM
el.remove(element);

// Reload elements callback
// Works only with elements made by `el()`
//
// target - DOM element that need to reload
await el.reload(target);

// Reload elements callback with fade
// Works only with elements made by `el()`
//
// target - DOM element that need to reload
// ms     - (Optional) Milliseconds to reload (By default: 600)
await el.reloadFade(target, ms);
```
