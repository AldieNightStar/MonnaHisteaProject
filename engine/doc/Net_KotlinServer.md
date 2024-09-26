# Kotlin Backend Server

## Notes
* Generates __Kotlin project__ with prepared server API
* Allows easily bootstrap Server project and develop fast


## Usage
* Create Server with command. Replace `com.company` with your custom package name
	* Package example could be `nickname.projectname.server`. For example `johndoe.storytell.server`
```
monnahistea gen-server com.company
```
* Then open `server` folder with your favorite IDE. For example __IDEA__


## How it works
* Under the hood, newly created server uses `jmonna` latest (`SNAPSHOT`) version
* It uses `Javalin` server as `HTTP` backend