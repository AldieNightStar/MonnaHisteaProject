# Timer API

## Notes
* Timer is needed for more dynamic passages and stories
* For example when need to think quicker
* Timers in this API is bound to Passage. And when passage getting reloaded then these timers cleared
* ⚠️ __DO NOT__ use `setInterval` or `setTimeout` as it's not controlled and prone to bugs


## Usage
```js
// Create a single timer. It will run after ms and stop
//
// ms - Milliseconds
// cb - Callback to call
//
// Returns Timer instance
Engine.Timer.single(ms, cb);

// Create interval timer. It will repeat until we stop it or change the passage
//
// ms - Milliseconds
// cb - Callback
//
// Returns Timer instance
Engine.Timer.interval(ms, cb);

// Clear all the timers manualy
Engine.Timer.clear();

// Wait function. Made to use with async API
// Will be blocked until this timer is passed
await Engine.Timer.wait(ms);

// Returns time since Story first start
// Working even on page reloads
Engine.Timer.elapsed();       // Returns milliseconds
Engine.Timer.elapsedSec();    // Returns seconds
Engine.Timer.elapsedMinSec(); // Returns [minutes, seconds]
```


## Timer Instance
```ts
// Get Timer instance
const t = Engine.Timer.wait(1000);

// Stop the timer
t.stop();
```