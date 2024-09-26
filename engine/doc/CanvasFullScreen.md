# Fullscreen Canvas

## Notes
* Allows to spawn full screen canvas to work with
* Creates Canvas HTML Element, that need to __print explicitly__


## Code
* [Canvas API](el_canvas.md)
```ts
const canvas = Util.fullCanvas(c => {
	// Please, Refer to Canvas API
})

// If you want to make BACKGROUND Canvas
canvas.style.zIndex = "-9999";

// Need to be printed explicitly
s.print(canvas)
```