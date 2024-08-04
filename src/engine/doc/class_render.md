# Class and `render` Method

## Notes
* We can create `el.IRenderable` elements can be printed
* `render` should accept `el.Span`

## Usage
* All you need to have is `render(span)` method
* You can `el.reload` this span
* ⚠️ __DO NOT__ save `span` as it changes
* `el.reload` will re-call this `render` again
```ts
class Counter implements el.IRenderable {
    constructor(private count: number) {}

    render(span: el.Span): void {
        // Print stats
        span.print(`Count: ${this.count}`);

        // Button that increase counter
        span.rebutton("+", () => this.count += 1);
    }
}
```

## Usage
```js
// Create your new element
const counter = new Counter(32);

// Render your counter
s.print(counter);
```