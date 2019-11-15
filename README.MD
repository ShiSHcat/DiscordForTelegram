## Discord client in telegram bot
created by 
ShiSHcat#8214 (Discord)
@ShiSHcat8214 (Telegram)

Submit bugs or get support here: (italian or english only)
 - [discord server](https://discord.gg/sgwm7Ax)
 - [telegram group](https://t.me/discordgram)
 - [github issues](https://github.com/discordgram/DiscordForTelegram/issues)

### How to use
Download and extract the repository
Run `npm install discord.js`
Run `npm install telegraf`
### edit files
Go to your node_modules directory and go in discord.js/src/client/rest/APIRequest.js and add these lines to the gen() function after request definition. 

`request.set("User-Agent", "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/0.0.258 Chrome/76.0.3809.146 Electron/6.0.12 Safari/537.36")`

`request.set("x-debug-options","canary")`

`request.set("x-super-properties","eyJvcyI6IldpbmRvd3MiLCJicm93c2VyIjoiRGlzY29yZCBDbGllbnQiLCJyZWxlYXNlX2NoYW5uZWwiOiJjYW5hcnkiLCJjbGllbnRfdmVyc2lvbiI6IjAuMC4yNTgiLCJvc192ZXJzaW9uIjoiMTAuMC4xODM2MiIsIm9zX2FyY2giOiJ4NjQiLCJjbGllbnRfYnVpbGRfbnVtYmVyIjo0OTE3NCwiY2xpZW50X2V2ZW50X3NvdXJjZSI6bnVsbH0=")`

#### edit your config.js file
- Owner chat id: Your telegram chat id. You can find it writing in a chat @TuriBot and click on DC and ID.
- Your telegram tag. If you havent one write @username.
- Your telegram bot token. To get it chat with [@BotFather](https://t.me/BotFather) . Keep it private.
- Discord user token. To get it login with the official client or chrome and follow [this](https://discordhelp.net/discord-token) guide. Keep it private.

## Run it with node index.js .
