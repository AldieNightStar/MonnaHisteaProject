# Export Modules

## Notes
* Novel should have `export` folder
* Inside of that folder create folder with uniq name that will not collide with others Novel modules
* ⚠️ __DO NOT__ keep files in the root of `export` folder


## Exporting
* Create `export` folder in your novel if not exist
* Add there new directory. For example `AuthorName_MyModule`
* Add there some files. For example `SampleMod.ts`:
```ts
namespace SampleMod {

	export function sayHelloWorld() {
		window.alert("HELLO WORLD");
	}

}
```
* You can publish it to public github repository
* You can pack it into `zip` and publish to your favorite file server
