# Monna Connect Client

## Note
* Client helps reduce code overhead. Instead of `Connect.sendMessage` you can define your own interface in typescript for example
* Let's assume we have `auth.` commands


## Client in JavaScript
* You can easily get client and use it
* Hovever JavaScript doesn't know what is in there so it's better to use typescript `interface` for that
```js
const authService = Connect.client("auth.");

await authService.register({username: "User", password: "ABC123"});
await authService.login({username: "User", password: "ABC123"});
```

## Client in TypeScript
```ts
// It's good to have defined interface
// All methods has signle {} argument and Promise with {} to return
interface AuthService {
    login(dat: {username: string, password: string}): Promise<unknown>
    register(dat: {username: string, password: string}): Promise<unknown>
}

const authService = Connect.client<AuthService>("auth.");

await authService.login({username: "User", password: "ABC123"})
await authService.register({username: "User", password: "ABC123"})
```