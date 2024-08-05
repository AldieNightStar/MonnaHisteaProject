# What is Code Generator

## Definition
* Code generator is a script that generates code into `.gen.ts` files
* Comments looks like this `// gen: command arg1 arg2 arg3`
* It allows you to generate code on the fly. For example some boilerplate code on every change

## How it works
* When `ts` (TypeScript) Files has comments like `// gen: python code.py` then it will be a command `python code.py`
* `// gen:` comments will be executed __before__ the compilation started
* Engine is watching `.ts` changes, but not `.gen.ts`, simply to not fall in endless loop


## Working Flow
* You working with `monnahistea auto` command (`auto` compilation mode)
* You can write code and then add `// gen: ` comment with your command
* Then you push `Ctrl+S` and Editor will see your generator output changes, so you can use it with no editor reload

## Requirements
* Comments like `// gen:` should be inside `ts` files only
* Any interpreter or program using is allowed
* Generator should generate `.gen.ts` files only. __DON'T FORGET `.gen.ts`__ suffix 🙂

## Example
* Let's imagine that we have `generate.js` script that generates functions according to their name and files `.gen.ts`
* In this example we use created __imaginary__ ts files `db1.gen.ts`, `db2.gen.ts` and `db3.gen.ts` with specific functions
```ts
namespace TEST {

	// gen: node generate.js connection db1
	// gen: node generate.js connection db2
	// gen: node generate.js connection db3

	export function sample() {
		db1.connect().doingSomething();
		db2.connect().test(1);
		db3.printName();
	}
}
```

## Multiline Generator Comment
* Sometimes you need more space for a comment
* For example, you want to generate builder with 20 fields
* Just add ` \ ` (Backslash) in the end, so it would tell Engine to continue in the second comment
```ts
// gen: node generate.js something1 something2 something3 \
//      something4 something 5
```
* Another example
```ts
// gen: +builder User \
//    name:string   age:number \
//    items:Item[]  buffs:Buff[]
```
