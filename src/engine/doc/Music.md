# Music

## Notes
* `Monna Histea Engine 2` allows you to add music to your novel
* Music is looping but can be stopped at any time
* Music restores its playing even after page reload

## Usage
```js
// Play some music
// src     - Source name. For example "Music.ogg". (OGG is more recommended)
// volume  - Volume between 0 and 1
// time    - (Optional) Time to start from (In seconds)
Engine.Audio.playMusic("music.ogg", volume, time);

// You can stop the music
Engine.Audio.stopMusic();

// Get current seconds of the music
// Returns null if music is not playing
Engine.Audio.time();

// Set current time in seconds manualy
Engine.Audio.setTime(sec);

// Check that Music is playing or is Paused. Returns boolean
Engine.Audio.isPlaying();
Engine.Audio.isPaused();

// Wait until music time in seconds is `seconds`.
await Engine.Audio.waitTime(seconds);
```