# Http Client

## Notes
* You can use `fetch` as default. (But it's too much code)
* Instead you can use better way  to callHTTP. It's `Engine.HttpClient()`
* It allows you to write HTTP calls faster
* 💚 It uses `Engine.pack` to pack the objects and `Engine.unpack` to unpack as well
	* So you can store your objects with reference to original `class`

## Usage
```ts
// Create new HTTP Client
const client = new Engine.HttpClient();

// Login/Register functionality
// Will put token into specific header
//
// login    - Login string
// password - Password string
// token    - (Optional) Header name to put Token into. Default: Token
//
// Returns nothing
client.login(login, password, "Token")
client.register(login, password, "Token")

// Make requests
//
// client.methodName(url, data, rawText)
await client.get("/data");
await client.head("/data");
await client.post("/data", {title: "Hello"});
await client.patch("/data", {count: 32});
await client.delete("/data");
// etc

// If you want to take a raw text as a response,
// Add a 'true' value to the 'rawText' parameter
await client.get("/data", true);
await client.post("/data", {title: "Hello"}, true);

client
	.header("Content-Type", "application.json")
	.header("Authorization", "Basic ABC:DEF");

// Custom call
await client.call(method, url, body)
```

## Before (with `fetch`)
```ts
await fetch("/data", {
	method: "POST",
	headers: {
		"Content-Type": "application/json"
	},
	body: JSON.stringify(yourData)
})
```