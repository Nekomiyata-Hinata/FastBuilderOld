FastBuilder websocket tools to help you building fast in MinecraftPE.
FastBuilder is an auto structures builder for MinecraftPE
[![](FastBuilder.jpg)](https://github.com/CAIMEOX/FastBuilder)
## Fast install
<code>npm i mcpefastbuilder -g</code>
## What is "Fast Builder"?
　　It is a WebSocket Server script, anyone can connet it who is in your game, but you need to follow the next steps.
## What can "Fast Builder" do?
　　Make any complex buildings in less time!
## How "FastBuilder" work?
　　Use the WebSocket script to catch clients' chat data, and output the commands by processing the data from clients.
## Why a WebSocketServer but not any Game Mod or JS?
### WebsocketServer
　　  Available on any device.

　　  Compatible with any MinecraftBE 0.16+

　　  Algorithms keeps upgrading!

　　  No any Ads.

　　  Useable in most servers and Minecraft Realms!

### ModPE
　　  Only Android devices, need Third Party Apps.

　　  Many functions is no longer avaliable.

　　  Always for free but many Ads.

　　  Limited by MinecraftBE versions.

　　  Not compatible with servers or Minecraft Realms.

## How to use "FastBuilder"?

  * If you don't want to deal with complex processes, please execute <code>npm i mcpefastbuilder -g</code>
and then you can use it directly by executing command:<code>fastbuilder</code>.

　　This is a NodeJS script, you just need a PC,VPS, or an Android phone.

Before you start, Install Node.JS.

And then,Install FastBuilder by npm.

```
npm install mcpefastbuilder -g
```

After that,Execute fastbuilder.
```
fastbuilder
```
#### How to use
First,check you IP.

Then,type command `/connect ip:port` in game.

## In game commands
　FastBuilder command is send by chat,don't use it as a game command.

　You can get pos by command:

　　`get pos`

　　or set pos manually

　　`set pos [x] [y] [z]`

　　"let"+var also ok:

　　`let x = 100`
## FastBuilder's structure generate command

　　circle: `circle [x/y/z] [radius] [height]`

　　round: `round [x/y/z] [radius] [height]`

　　ball: `circle [method] [radius]`

　　Methods:

　　　　hollow

　　　　solid

　　　　framework

　　line: `line [+/-/x/y/z] [length]`

　　tapered: `tapered [radius] [height]`

　　10: `cross [x/y/z] [radius]`

　　太极图: `taichi [direction] [radius]`

(Removed according to regulations)
