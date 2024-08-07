# Onload functions on start

## Note
* Used for restore custom logic from `V` before novel actualy starts
* Runned __before__ the first `Passage` starts


## Usage
```ts
Engine.addOnload(() => {
	// Here is your logic that called before the novel starts
})
```