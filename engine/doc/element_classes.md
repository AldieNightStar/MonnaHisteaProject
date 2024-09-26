# Element classes

## Notes
* Element classes is a way to create custom element in OOP maner
* Define class that implements specific interace, and Engine will know how to print it


## `el.Element` Interface
* This interface contains `render(el.Span)` method and it called to print all content inside
```ts
class MyElement implements el.Element {

	// Called when printed
	render(s: el.Span): void {
		s.print("Hello world!");
	}
}
```


## `el.CanvasElement` Interface
* This interface contains `renderCanvas(CanvasApi)` method and it called to draw content on canvas
```ts
class MyCanvas implements el.CanvasElement {

	// Width and height of the canvas
	size: [number, number] = [250, 250];

	// Called when printed
	// ⚠️Note, that it will call once. if you want to redraw, use c.drawing(() => {...})
	renderCanvas(c: el.CanvasApi) {
		c.color("red");
		c.rect(0, 0, 100, 100);
	}

	handleClicks(x: number, y: number) {
		// Handle click when pressed
	}
}
```

## `el.CanvasTiledElement` Interface
* This interface contains `renderTiledCanvas(CanvasTiledApi)` method and it called to draw __tiled__ content on canvas
* But to use functions fron `CanvasAPI`, just use `c.api` parameter
```ts
class MyCanvas implements el.CanvasTiledElement {

	// Width and height of the canvas
	size: [number, number] = [250, 250]

	// Size per single tile (width and height)
	tileSize: [number, number] = [25, 25]

	// ⚠️Note, that it will call once. if you want to redraw, use c.drawing(() => {...})
	renderTiledCanvas(c: el.CanvasTiledApi) {
		c.color("red");
		c.rect(5, 5);

		// Get CanvasAPI functionality, if needed
		c.api
		
	}

	handleClicks(x: number, y: number) {
		// Handle click when pressed
	}
}
```



## Magic `reload()` method
* Allows to reload element itself and all it render login.
* Works for `CanvasElement`, `el.Element` etc
* Just add `reload() {}` to the class and that's all

```ts
class MyElement implements el.Element {
	render(s: el.Span): void { }

	// Here is that method
	// It's empty, but when you call it, it will re-render this element
	reload() {}
}
```