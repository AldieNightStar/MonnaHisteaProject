# Signals

## Note
* Inspired by `Godot Engine`
* Implements __Observer__ pattern
* You can connect to signals (Once, or for a while)
* You can disconnect from signals anytime

## Signal Usage
```ts
// Create new signal
const sig = new Engine.Signal<String>();

// Set this signal to depend on Passage
// Every time passage changes, this signal going to be cleared
// Returns itself
sig.local();

// Connect to the signal
//
// fn   - Function to connect. It will be a receiver
// once - (Optional. Boolean) Tells to connect for a one time
sig.connect((value) => { }, once);

// Connect to the signal, but disconnect when element 's' will be removed from DOM (re-render | Passage change)
//
// s    - Element that will be checked if its connected to DOM or not
// fn   - Function to connect. It will be a receiver
// once - (Optional. Boolean) Tells to connect for a one time
sig.connectElem(s, (value) => { }, once);

// Disconnect this function from the Signal
sig.disconnect(func);

// Emit signal with some data. It could be anything.
// Each connection will receive it
sig.emit("Hello there");

// Wait for the signal or timeout
// Returns emit data, or null if timeout
// If timeout is not specified, then it will wait forever
//
// timeout - (Optional) Number of milliseconds to wait.
const value = await sig.wait(timeout);

// Clear all the connections
sig.clear();
```



## Signal Additions
```ts
// Waits for at least one signal to emit
// Returns emit value
const value = await Engine.Signal.waitEither([signal1, signal2, signal3])

// Wait for ALL the signals to emit, or timeout if nobody still activated
// Returns nothing. Just waits
//
// signals - List of signals to wait
// timeout - (Optional). Number of milliseconds to wait
await Engine.Signal.waitAll([signal1, signal2, signal3], timeout)

// Create Signal that will emit after a specific time
const signal1 = await Engine.Signal.timer(timeout);
```