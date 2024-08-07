# `el.select` Function

## Note
* Allows you select elements as you could do it in JQuery

## Usage
```js
// Select by ID ('#' as prefix)
// Returns list of elements
el.select("#id");

// Select by CLASS ('.' as prefix)
// Returns list of elements
el.select(".className");

// Select SINGLE element instead of collection of them
el.selectOne("#id");
el.selectOne(".className");
```