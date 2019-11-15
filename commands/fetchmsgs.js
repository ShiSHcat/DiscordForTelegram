
module.exports = async (ctx,user,client,Telegraf,message_) => {
    var update = ctx.update;
    var message = update.message;
    if (message.from.id != user) return ctx.reply("This is not your bot. This is an instance of discordgram/DiscordForTelegram. More info: https://github.com/discordgram/DiscordForTelegram")
        var params = message.text.trim().split(/\s+/);

            let result;
            let characters       = '0123456789';
            let charactersLength = characters.length;
            for ( var i = 0; i < 25; i++ ) {
               result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
       
            var chid = params[1];
        if (typeof params[2] !== "undefined"&&!isNaN(params[1])&&typeof params[1] == "number") {
            var amount = params[2];
            if (amount > 100) {
                amount = 100;
            }
        } else if (typeof params[2] !== "undefined"&&!isNaN(params[1])&&typeof params[1] == "string"){
            var amount = parseInt(params[2]);
            if (amount > 100) {
                amount = 100;
            }
        } else {
            var amount = 10;
        }
        var chn = client.channels.get(chid)
        
    
        if(typeof chn == "undefined") {
            
           ctx.reply("Invalid channel")
    }else {
        if((!chn.type == "text")||(!chn.memberPermissions(e.guild.me).has("READ_MESSAGES"))) {return ctx.reply("Channel error")}
        if (typeof params[3]!== "undefined"||params[3] !== "") {
            var before = chn.messages.get(params[3]);
        }
        
        if (!before) {
            var msgs = (await chn.fetchMessages({limit:amount})).array() ;
        } else {
            var msgs = (await chn.fetchMessages({limit:amount,before:before.id})).array() ;
        }
        msgs.reverse();
        for (const key in msgs) {
                const msg_ = msgs[key];
                if(chn.memberPermissions(e.guild.me).has("SEND_MESSAGES"))  {
                const msge = Telegraf.Extra
                    .markup((m) => m.inlineKeyboard([
                        
                            m.switchToCurrentChatButton(`Get channel`, `server${message.guild.id} ${message.channel.name}`),
                            m.switchToCurrentChatButton(`Send message`, `sm${message.channel.id}`),
                            m.switchToCurrentChatButton(`Reply`, `sm${message.channel.id} <@${message.author.id}>`),
                          
                    ]
                        ))
                } else {
                    const msge = Telegraf.Extra
                    .markup((m) => m.inlineKeyboard([
                        
                            m.switchToCurrentChatButton(`Get channel`, `server${message.guild.id} ${message.channel.name}`),
                            m.switchToCurrentChatButton(`Fetch again`, `getlast${message.channel.id} `),
                          
                    ]
                        ))
                }
                        //todo reply
                await ctx.reply(await message_(msg_),msge);
                await sleep(0.5)

        }
    }
    }
    function sleep (time) {
        return new Promise((resolve) => setTimeout(resolve, time));
      }
