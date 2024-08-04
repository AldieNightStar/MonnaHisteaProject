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
// dest - Destination DOM element or el.IAppendable
// Returns element it prints
el.print(dest, element);
el.println(dest, element);

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


## Adding `className` and `id`
* `el` returns new element with two additional methods `CLASS` and `ID` to set up `id` without creating callbacks
* `ID` and `CLASS` returns DOM Element itself.
```js
el.of("div", cb).ID("div1").CLASS("special_div");

el.span(s => s.print("There was a story...")).CLASS("title");

el.button("Push me", cb).ID("button1").CLASS("hellButton");
```
