# Util Declicker
## (Not recommended to use)

## Notes
* Used in `el.reloadFade` and Passage fade reloader to disable clicks during fade to prevent cheating
* It's not recommended to use by yourself unless you are knowing what you are doing

## API
```js
// Recursively removes 'onclick' parameters from ALL elements
// ⚠️Dangerous. Please use carefuly - it could remove onclick on elements you don't want to
Util.declick(span);
```