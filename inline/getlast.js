module.exports = (client,params,Markup)=> {
    let result;
        let characters       = '0123456789';
        let charactersLength = characters.length;
        for ( var i = 0; i < 25; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
    var chid = params[0].replace("getlast", "");
    if (typeof params[1] !== "undefined"&&!isNaN(params[1])&&typeof params[1] == "number") {
        if (amount > 100) {
            amount = 100;
        }
    } else if (typeof params[1] !== "undefined"&&!isNaN(params[1])&&typeof params[1] == "string"){
        var amount = parseInt(params[1]);
        if (amount > 100) {
            amount = 100;
        }
    } else {
        var amount = 10;
    }
    var chn = client.channels.get(chid)
    
    if(typeof chn == "undefined") {
        
        return [{
            type: 'article',
            id: `${result}`,
            title: `Invalid channel`,
            input_message_content: {
              message_text: `${params[0].replace("getlast", "")} : Channel not found. `
            }
         
    }]
    
    //var parts = msgs.match(/[\s\S]{1,4096}/g) || [];
}else {
    if (typeof params[2]!== "undefined") {
        var before = chn.messages.get(params[2])
        if(before) {
            before = before.id;
        } else {
            before = "";
        }
    }  else var before = "";

    return [{
        type: 'article',
        id: `${result}`,
        title: `Get last ${amount} messages in ${chn.name}`,
        input_message_content: {
          message_text: `/fetchmsgs ${chn.id} ${amount} ${before}`
        },
     /* reply_markup: Markup.inlineKeyboard([
        Markup.switchToCurrentChatButton('', `server${} `)
         ]
      )*/
     }];
}
}