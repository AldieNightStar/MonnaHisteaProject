# Util Lazy

## Notes
* `Lazy` classes helps you keep global element not defined unless used
* It reduses memory and allows to define data globaly before it's initialized
* First it __runs the function__ in the arguments
    * At the second time it __will reuse__ it


## Sync
```ts
// Define lazy
const player = Util.lazy(() => new Player());

// Get data from lazy
player.get();
```


## Async
```ts
// Define async lazy
const player = Util.lazy.async(async () => await getPlayer());

// Get data from async lazy
await player.get();
```