# Loader API

## Notes
* Loads media before use
* Allows to cache long music files or big images for slower connection
* Writer could provide __loading screen__ that will make reader wait until music/images will load

## Usage
```js
// Ensure load media
// Returns awaited list of Image/Audio from src list you provided
// Throws error when some is not loaded
await Engine.Loader.load(
    "images/image.jpg",
    "audio/music.ogg"
);

// Ensure load image
// Returns awaited Image object
// Throws error when media is not loaded
await Engine.Loader.image("images/image.jpg");

// Ensure load audio
// Returns awaited Audio object
// Throws error when media is not loaded
await Engine.Loader.audio("audio/music.ogg");
```

## Print image that is still not loaded
* Awaitables gets easily printed
```js
// We can use `Engine.Loader.image` without await as well
s.print(Engine.Loader.image("images/image.jpg"));
```