module.exports = (ctx,user,client)  => {

    var message = ctx.update.message;
    if (message.from.id != user) return ctx.reply("This is not your bot. This is an instance of discordgram/DiscordForTelegram. More info: https://github.com/discordgram/DiscordForTelegram");
    var text = message.text;
    var params = text.trim().split(/\s+/);
    params.shift();
    var text = params.join(" ");
    if(client.user) {
    client.user.setActivity(text, { type: 'playing' })
    .catch(err=>{ctx.reply("Error."+err)})
    .then((ctx)=>(res)=>{ctx.reply("Success!")})}
}