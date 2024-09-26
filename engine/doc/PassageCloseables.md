# Passage and `Closeable` interface

## Notes
* Used to `close` some resource when moving between passages

## Usage
```ts
class Something implements Engine.Closeable {
	close() {
		// Do something to free the resources
	}
}
```
* Then use `closeOnGoto`
	* When Passage will reload/change then this `close()` method will be called
```ts
Passage.closeOnGoto(something);
```