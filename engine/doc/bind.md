# Function Binding

## Notes
* It's the same `bind` method of each function but allows to save typing
* No more additional logic. The same way how it's working in JavaScript
* When you use `func.bind` then `bind` returns `any` thus you cannot know which parameters function has

## Usage
```ts
const print = bind(logic.print, logic);
const relink = bind(s.relink, s);

print("Hello there");
relink(caption, callback);
```