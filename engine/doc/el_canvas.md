# Canvas Element

## Note
* Allows to create advanced drawable canvas for the novels or more interactive minigames

## API
```ts
// Creates <canvas> element
//
// w    - Width in pixels
// h    - Height in pixels
// cb   - Callback to call: (canvasAPI) => {}
//
// Returns canvas element to work with. Can be reloaded by `el.reload`
el.canvas(w, h, async api => {

    // canvas element itself
    api.canvas

    // Context 2D of the canvas
    api.ctx;

    // Wait for click
    // Returns canvas local x, y coordinates
    const [x, y] = await api.waitClick();


	// Handle clicks in callback maner
	api.handleClicks((x, y) => {})

	// Get width and height of the canvas
	const [w, h] = api.size();

	// Draw a rectangle
	// Uses color(name) for color
	//
	// x, y - Coordinates
	// w, h - Size
	api.rect(x, y, w, h);

	// Draw text
	// Uses font(name, size) for font settings
	//
	// t    - Text string
	// x, y - Coordinates
	api.text(t, x, y);

	// Set color
	api.color("red");

	// Set font name and size in pixels
	api.font("Arial", 32)

	// Draw an image
	// img  - Image to draw
	// x, y - Coordinates
	// w, h - Size 
	api.image(img, x, y, w, h);

	// Draw rotated Image
	// img    - Image itself
	// x, y   - Coordinates
	// w, h   - Size
	// degree - Rotation Degree (0 - 360)
	// ax, ay - Anchor Coordinates (Pivot)
	api.imageRotated(img, x, y, w, h, degree, ax, ay);


	// Draw rotated Rectangle
	// x, y   - Coordinates
	// w, h   - Size
	// degree - Rotation Degree (0 - 360)
	// ax, ay - Anchor Coordinates (Pivot)
	api.rectRotated(img, x, y, w, h, degree, ax, ay);

	// Get Sprite (Part from the image)
	// img  - Image itself
	// x, y - Coordinates of subimage
	// w, h - Size of subimage
	api.spriteOf(img, x, y, w, h);

	// Get tileset from Image
	// img - Image itself
	// w   - Width of a Single tile
	// h   - Height of a single tile
	//
	// Returns list of Sprites (Images)
	api.tileSet(img, w, h);

	// Clear the canvas
	api.clear();

	// Automatic updates in timer
	// Runs each 15 ms and clears the canvas before it
	// Stops when passage changes or canvas gets deleted
	api.drawing(() => {
		// Logic goes here
	});

	// Change global opacity of the canvas
	// Values between 0 and 1
	api.opacity(n);

	// Draw rotated something as rotated. X and Y could 0, 0
	// deg              - Degrees (0 - 360)
	// anchorX, anchorY - Anchor coordinates (Pivot)
	// fn               - Function that draws rotated elements
	api.rotated(deg, x, y, fn);
})
```
* ⚠️ `api.dat` Will not work here. It always set to `{}`


## Tiled
* You can also make rogue-like games with text, images, and rectangles
```ts
// Get tiled API
// w - Single tile width in pixels
// h - Single tile height in pixels
const t = api.tiled(w, h);

// Draw rectangle at tile position
t.rect(x, y);

// Draw `t` string at tile position (One symbol is recommended)
t.text(t, x, y);

// Draw tile with image on it
// Images, created by api.tileSet(...) - is also supported
t.image(image, x, y);

// Set color for future tiles
t.color("red");

// Set font for future texts
// Size of font is equal to height of a single tile
t.font(name);


// Clear original canvas
t.clear()


// Get width and height of the canvas in tiles
const [w, h] = api.size();


// Waits for click on tile
// Returns x, y tile coordinates
const [x, y] = await t.waitClick();

// Handle clicks in callback maner
t.handleClicks((x, y) => {})

// Automatic updates in timer
// Runs each 15 ms and clears the canvas before it
// Stops when passage changes or canvas gets deleted
api.drawing(() => {
	// Logic goes here
});
```