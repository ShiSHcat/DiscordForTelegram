module.exports = async (ctx,user,client) => {
var update = ctx.update;
var message = update.message;
if (message.from.id != user) return ctx.reply("This is not your bot. This is an instance of discordgram/DiscordForTelegram. More info: https://github.com/discordgram/DiscordForTelegram")



var text = message.text;
var msg = text.trim().split(/\s+/);
msg.shift();
var channel = msg.shift();
var e = client.channels.get(channel);
var msg = msg.join(" ");
if (typeof e == "undefined"||e.type !== "text") {
    return ctx.reply("Failed.")
}

    try {
        var rpl = msg.replace("\\n","\n")
        e.startTyping();
        await sleep(0.5);
        await e.stopTyping(true);
       var re =  await e.send(rpl)
         
    } catch (err) {

    }

}
function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }