# Parse Line

## Notes
* Internal method that could help if need to parse commands in the line
* Ignores commas

## Usage
```ts
// Will return ["Command", "a", "b", "c"]
Util.parseLine("Command a b c");
```

## Parses:
```ts
Command arg1 arg2 arg3 ...
Command "arg 1 and 2" arg2 arg3 ...
Command "escaped \" symbol" arg2 arg3 ...
```
