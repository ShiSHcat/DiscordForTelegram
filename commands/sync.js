module.exports = (ctx,user,client) =>{
        var update = ctx.update;
        var message = update.message;
        if (message.from.id != user) return ctx.reply("This is not your bot. This is an instance of discordgram/DiscordForTelegram. More info: https://github.com/discordgram/DiscordForTelegram")
        var text = message.text;
        var msg = text.trim().split(/\s+/);
        msg.shift();
        var channel = msg.shift();
        var e = client.channels.get(channel);
        if (typeof e == "undefined"||e.type !== "text") {
            ctx.reply("Failed.")
            return false;
        } else {
            ctx.reply("Bound this bot to "+e.name)
            return e
        }
}