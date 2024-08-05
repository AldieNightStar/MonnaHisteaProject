# `reload` Magic method

## Notes
* It's an empty `reload(){}` method that has no logic
* If it's present then it will reload span it renders
* Because everytime you doing `render(s)`, the `Span` always different object
	* So that means that we need to reload span in runtime, and magic `reload` comes into help
* Just add `reload(){}` to your `el.IRenderable` element
* ⚠️ __Remember__: Every instance should be __printed__ once. Otherwise it will `reload()` only last printed instance of your element

## Sample
```ts
class MyHelloButton implements el.IRenderable {
	render(s: el.Span) {
		s.button("HELLO", () => alert("Hello, world!"));
	}

	// Here we added this method
	reload(){}
}
```

## Usage
* Then we can reload the `el.IRenderable` easily and it will reload `MyHelloButton`
```ts
const b = new MyHelloButton();

b.reload();
```