# Sound

## Notes
* `Monna Histea Engine 2` Support sound playing
* Do it with `Engine.Audio.playSound()`


## Usage
```js
// Just plays an audio sound and that's it
// src    - Sound src to play
// volume - Sound volume to play (Between 0 and 1)
//
// Returns DOM Sound object (In case you want to stop it yourself)
//   Recommended not to use long sounds more than 5 seconds
//   Just to have less work on stopping them 😄
Engine.Audio.playSound("sound.ogg", 1);
```