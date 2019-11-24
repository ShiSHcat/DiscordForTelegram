<h1 align="center">
<a href="https://github.com/discordgram/DiscordForTelegram">DiscordForTelegram</a>
</h1>

<p align="center">
<a href="https://spdx.org/licenses/MIT.html"><img alt="license" src="https://img.shields.io/github/license/discordgram/DiscordForTelegram"/></a>
<a href="https://shishcat.ga"><img alt="author" src="https://img.shields.io/badge/author-ShiSHcat8214-red"/></a>
<a href="https://telegraf.js.org"><img alt="framework" src="https://img.shields.io/badge/framework--telegram-Telegraf-yellow"/></a>
<a href="https://discord.js.org"><img alt="framework" src="https://img.shields.io/badge/framework--discord-discord.js-yellow"/></a>
<br>
<br>
<img alt="GitHub watchers" src="https://img.shields.io/github/watchers/discordgram/DiscordForTelegram?style=social">
<img alt="GitHub stars" src="https://img.shields.io/github/stars/discordgram/DiscordForTelegram?style=social">
<img alt="GitHub forks" src="https://img.shields.io/github/forks/discordgram/DiscordForTelegram?style=social">
<a href="https://www.patreon.com/shishcat"><img alt="donate" src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png"/></a>
<h1>⚠️⚠️<b>WARNING</b>⚠️⚠️</h1>
<h2>This client could lead to termination of your account due to violation of the Discord terms of service. Use it at your own risk. In any case I have never seen anyone be banned from discord for the use of custom clients or Betterdiscord.
Also, this client still in beta.🍝🍝</h2>
</p>

## Description
DiscordForTelegram is a discord client in a telegram bot


## Contribute!
If you want to help with the project, **go on**!

**Fork the repo, modify the code and submit a PR**.

Help, suggestions and improvements are **always welcome**!


## Features
We will support soon:
- Attachments
- DMS 

We will maybe support calls in another project.


## How to use
Create a bot and get the token with [@BotFather](https://t.me/BotFather)
Set the bot inline sending /setinline to botfather
(/)start the bot

Download and extract the repository

Run `npm install discord.js`

Run `npm install telegraf`


### Edit files
Go to your node_modules directory and go in discord.js/src/client/rest/APIRequest.js and add these lines to the gen() function after request definition. 

`request.set("User-Agent", "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/0.0.258 Chrome/76.0.3809.146 Electron/6.0.12 Safari/537.36")`

`request.set("x-debug-options","canary")`

`request.set("x-super-properties","eyJvcyI6IldpbmRvd3MiLCJicm93c2VyIjoiRGlzY29yZCBDbGllbnQiLCJyZWxlYXNlX2NoYW5uZWwiOiJjYW5hcnkiLCJjbGllbnRfdmVyc2lvbiI6IjAuMC4yNTgiLCJvc192ZXJzaW9uIjoiMTAuMC4xODM2MiIsIm9zX2FyY2giOiJ4NjQiLCJjbGllbnRfYnVpbGRfbnVtYmVyIjo0OTE3NCwiY2xpZW50X2V2ZW50X3NvdXJjZSI6bnVsbH0=")`


### Edit your config.js file
Rename your config.example.js to config.js
- Owner chat id: Your telegram chat id. You can find it writing in a chat @TuriBot and click on DC and ID.
- Your telegram tag. If you havent one write @username.
- Your telegram bot token. Keep it private.
- Discord user token. To get it login with the official client or chrome and follow [this](https://discordhelp.net/discord-token) guide. Keep it private.

Then run it with node index.js .


## Commands guide
Write @the_bot_name into the bot chat. Inline buttons will help you.

To remove binded channels, do /stop.

To send a playing presence to discord, send /play <game>.


## Need help?
- [Discord server](https://discord.gg/sgwm7Ax)
- [Telegram group](https://t.me/discordgram)
- [Github issues](https://github.com/discordgram/DiscordForTelegram/issues)


## License
This code uses the [MIT](https://spdx.org/licenses/MIT.html) License
