# `el.table` Table API


## Notes
* Allows to build the table easily
* There are two ways to print the table
	* By using `s.table`
	* Or by using `el.table`


## Usage
```ts
// Create a table
// The same could be done with Span:  s.table(a => ...)
el.table(a => {

	// Make table bordered
	// Called at top
	a.bordered();

	// Make current row text as BOLD
	a.bold();

	// Add column as single printable value
	a.value("HELLO!")

	// Add column as span value
	a.span(s => {s.print("Hell there")});

	// Go to the next row
	a.nextRow();

})
```



## Example
```ts
s.table(a => {
	a.bordered()
		.bold() // BOLD row (Title)
		.value("Name")
		.value("Age")
		.value("Role")
	a.nextRow()
		.value("Alan")
		.value("18")
		.value("User");
	a.nextRow()
		.value("Mary")
		.value("21")
		.value("User")
	a.nextRow()
		.value("Haxi")
		.value("32")
		.value("Admin")
});
```
* Output will be like this:

|Name|Age|Role |
|----|---|-----|
|Alan|21 |User |
|Mary|18 |User |
|Haxi|32 |Admin|
