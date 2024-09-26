# Create Text Passage Processor


## Notes
* Allows to add `.custom commands` into your `txt` files
* ⚠️ __WARNING:__ Used in every `txt` files. So be careful with the names

## Create
* Custom processors means `.command arg1 arg2` in the text
* You can create your own by adding them into `Passage.textProcessors`
```ts
// Let's create new `.alert` processor
// s    - el.Span: If you need to print some buttons, links, or images
// args - Arguments: string[] values from the txt files
Passage.textProcessors["alert"] = (s, args) => {
	// We take first argument args[0] and call: window.alert(...)
	window.alert(args[0]);
}
```
* Here we can use it
```
# The punch
There will be story soon

.alert "Alan were punched you"
Alan were punched by Tomas Philip
```
* So now we created `.alert "text"` processor, that can be used anywhere in the novel