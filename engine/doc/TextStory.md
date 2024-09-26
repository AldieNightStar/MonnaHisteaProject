# Text Files API

## Notes
* Allows Writer to create `.txt` files that will be easily accessible from `Game.text.get` API
* No need to write long `json` in a `.ts` files.
* Each file could have paragraphs that are divided by __single blank line__

## Create
* Create `story.txt` or whatever you would name it
* Inside you can write the text as in example (Sections divided by __single blank line__)
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
const parts = Game.text.get("story")

parts[0] // The first section of the story...
parts[1] // This is another section...
parts[2] // This is third one...
```