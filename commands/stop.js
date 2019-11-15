module.exports = (ctx,user,client,s) =>{
if (ctx.update.message.from.id != user) {ctx.reply("This is not your bot. This is an instance of discordgram/DiscordForTelegram. More info: https://github.com/discordgram/DiscordForTelegram");}
  

if (s){
    s.forEach(element => {
        client.off("message",element);
    });

s = false;

  ctx.reply("Done.")   }}
