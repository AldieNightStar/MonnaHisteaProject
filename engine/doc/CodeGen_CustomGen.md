# Create Custom Generator

## Notes
* Generator could be any script
* Generator script should be in the same folder as file commented witgh `// gen:`
* Generator __should output__ files with `.gen.ts` suffix

## Sample
* Let's write some generator `mygen.py` in python that will generate simple function that says `Hello {name}!!!`
```python
import sys

name = sys.argv[1]

with open(name + ".gen.ts", w) as f:
	f.write(f"namespace TEST {{ export function {name}() {{ console.log('Hello {name}!!!'); }}  }}")
```
* Then use it in our `ts` file
	* When you save the file `Ctrl+S` in `auto` mode, then Engine will automaticaly generate on the fly
```ts
namepsace TEST {

	// gen: python mygen.py Haxi
	// gen: python mygen.py Kerfia
	// gen: python mygen.py Aldie

	export function test() {
		Haxi();   // Hello Haxi!!!
		Kerfia(); // Hello Kerfia!!!
		Aldie();  // Hello Aldie!!!
	}
}
```