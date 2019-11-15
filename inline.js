module.exports= async ({ inlineQuery, answerInlineQuery },client,channel,channelsh,guildsh,config,Markup,giq,sendmessageh,getlasth,synch,silent_sm) => { //inline incoming
    if (inlineQuery.from.id == config.owner_chat_id) {
      let params = inlineQuery.query.trim().split(/\s+/)
      if ((params[0].includes("server"))&&(!isNaN(params[0].replace("server", "")  ) )  ) {
  
  
        //CHANNEL HANDLER
        var response = channelsh(client,params,channel,Markup);
        // END CHANNEL HANDLER
  
  
  } else if ((params[0].includes("sm"))&&(!isNaN(params[0].replace("sm", "")  ) )  ) {
  
  
        //SEND MESSAGES
       var response = sendmessageh(client,params);
        //END SEND MESSAGES
  
      } else if ((params[0].includes("sync"))&&(!isNaN(params[0].replace("sync", "")  ) )  ) {
        //BIND BOT TO CHANNEL
        var response = synch(client,params);
        //END 
      } else if ((params[0].includes("getlast"))&&(!isNaN(params[0].replace("getlast", "")  ) )  ) {
          //FETCH MESSAGES
          var response = getlasth(client,params,Markup);
          //END FETCH MESSAGES
      } else if ((params[0].includes("silent_sm"))&&(!isNaN(params[0].replace("silent_sm", "")  ) )  ) {
        //FETCH MESSAGES
        var response = silent_sm(client,params);
        //END FETCH MESSAGES
      }
    else  {
      // GUILDS HANDLER
      var response = guildsh(client,Markup,giq,inlineQuery);
      // GUILDS HANDLER
    }
      
    } else {
      var response = [
        {
          type: 'article',
          id: `0`,
          title: `You arent allowed to use this bot.`,
          input_message_content: {
            message_text: `contact the owner : @shishcat8214`
          },
        }
      ]
    }
    return answerInlineQuery(response,{cache_time: 0})
  }
  
  