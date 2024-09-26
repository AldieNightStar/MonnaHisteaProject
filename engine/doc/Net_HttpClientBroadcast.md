# HttpClient Broadcasting

## Notes
* It's a websocket that allows to "chat" between novels
* You sent a message, then all receiving it
* When someone else sent a message, you will receive it
* Allows to send `objects` and `DTO`'s, thanks to `Engine.pack` functionality
* Supported on JMonna Server


## Usage
```ts
const http = new Engine.HttpClient();

// Call the broadcast
// Returns BroadcastClient
http.broadcast("/api/sample_broadcast", (b, message) => {
	// b       - BroadcastClient
	// message - Message object itself

	// Log the message or do whatever you want
	console.log(message);

	// Send some response
	b.send(response);
});
```