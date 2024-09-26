# Text Passage

## Notes
* Allows to create linear story with only `txt` files
* In case you want to write a simple story, without gaming experience
* Each text __part__ will be executed one by one
* Text __parts__ are divided by a single __empty line__


## Create Passage
* `Passage1` - is the name of your passage
* `file1` - is `file1.txt` file that engine will load to read from
	* Do not add `.txt` at the end. It will not work
```ts
Passage.ofText("Passage1", "file1")
```

## Text file
* Create `txt` file. For example `file1.txt`
* Then write some text inside, as follows
* Logic is divided by __Processors__ and __Printables__
	* __Printables__ - are the simple `Text` or `# Title` or `---`
	* __Processors__ - are the `.commands and arguments` that starts with a single dot
* [List of existing Processors](TextPassageProcessors.md)
* [Create Custom Processor](TextPassageCreateProcessors.md)
```
.bg "Home1.png"
# This is a title text
This is a simple line

This text will be divided
---
By the horizontal line

.bg "Home2.png"
This is text with a different background image
```