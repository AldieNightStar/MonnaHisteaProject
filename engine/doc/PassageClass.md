# Passage interface

## Notes
* You can define Passages using good old `OOP` style
* Just create class and make it implement `Passage.Passage`
* That way you can use class with methods as your Passage

## Usage
```ts
class XPassage implements Passage.Passage {
	runPassage(s: el.PassageSpan): Void {
		s.println("HOWDY")
	}
}
```
* Then use it
```ts
Passage.of("Start", new XPassage());
```