module.exports = (ctx,user)=> {
        
var update = ctx.update;

var message = update.message;
if (message.from.id != user) return ctx.reply("This is not your bot. This is an instance of discordgram/DiscordForTelegram. More info: https://github.com/discordgram/DiscordForTelegram");
ctx.reply("Bot working correctly! To get help for this bot , use this https://github.com/discordgram/DiscordForTelegram")

}