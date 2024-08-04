# Text Story

## Notes
* Allows Writer to create `.txt` files that will be easily accessible from `Game.text.get` API
* No need to write long `json` in a `.ts` files.
* No need to write long strings in `.ts` files
* Each file could have paragraphs that are divided by __two blank lines__

## Create
* Create `story.txt` or whatever you would name it
* Inside you can write the text as in example (Sections divided by __two blank lines__)
```
The first section of the story
And this line as well


This is another section and a second element in the array


This is third one
```


## Read
* To read the story text file, you need to call `Game.text.get` API and read the array
```ts
// Returns array of strings
const sections = Game.text.get("story")

sections[0] // The first section of the story...
sections[1] // This is another section...
sections[2] // This is third one...
```