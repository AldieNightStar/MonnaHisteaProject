# Monna Connect API

## Notes
* Allows to connect to `Monna Connect` based server
* With `Monna Connect` you can write your own online game
* API name is `Connect` and there are all the multiplayer related functions
* Auto-reconnect is supported until you `disconnect` manualy

## Connect
```js
// Establish new connection
// 
//   address - Address to connect to
//   token   - (Optional) String with token to assign
await Connect.establish("ws://127.0.0.1:8080");
```


## Check status
```js
// Returns true if connected ok
const ok = Connect.isOk();
```


## Send and receive message
```js
// Sends a message and waits for the response
//
//   commandName - Name of the command to send
//   data        - Command arguments ({} object with some data)
//   doWait      - (Optional) Tells to wait for the response (true) or not
//
// Returns {} data from the server.
//
// Can trhow an error if something gone wrong (Server respond with error, Connection failures)
await Connect.sendMessage(commandName, data, doWait);

// Example
const var1 = await Connect.sendMessage("getVar1", {a: 1, b: 2});
```

## Disconnect
```js
// Disconnects from the Server
Connect.disconnect();
```