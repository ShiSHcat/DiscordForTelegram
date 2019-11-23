//Generate Inline query entry

module.exports.channel = (chan,Markup) => {
  if (chan.type == "category") {
    return false;
  }
  if (chan.type == "voice") {
    return false;
  }
  if (!chan.parent) {
    var parent = "";
 } else {
   var parent = chan.parent.name
    parent += " -";
 }
    let result;
    let characters       = '0123456789';
    let charactersLength = characters.length;
    for ( var i = 0; i < 25; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
   
    var rt =  {
            type: 'article',
            id: `${result}`,
            title: `${parent} - ${chan.name}`,
            input_message_content: {
              message_text: `${parent} - ${chan.name} - ${chan.topic} - ${chan.id}`
            },
          
         };
         if (!chan.memberPermissions(chan.guild.me).has("READ_MESSAGES")||!chan.memberPermissions(chan.guild.me).has("VIEW_CHANNEL")) {  //non readable

          var show_inline_fetch = false;
          var show_inline_sm = false;
          var t2 = "This channel is hidden.";
        } else if (chan.memberPermissions(chan.guild.me).has("READ_MESSAGES")&&!chan.memberPermissions(chan.guild.me).has("SEND_MESSAGES")) { //non writable
          var show_inline_fetch = true;
          var show_inline_sm = false;
          var t2 = "You cannot send messages here.";
         } 
         else { //writable
          var show_inline_fetch = true;
          var show_inline_sm = true;
          var t2 = "";
         }
         var markups = [];
         markups.push([
          Markup.switchToCurrentChatButton('Back to guild', `server${chan.guild.id} `)
                 ]        );
         if (show_inline_sm) {
          markups.push([Markup.switchToCurrentChatButton('Send a message', `sm${chan.id} `)]);
         } 
         if (show_inline_fetch) {
          markups.push([
              Markup.switchToCurrentChatButton('Fetch 10 messages', `getlast${chan.id} 10`),
              Markup.switchToCurrentChatButton('Bind this channel', `sync${chan.id}`)
          ]);
        }
            
          
         
        rt.reply_markup = {inline_keyboard:markups} 
           
          
         
         
         if (t2!== "") {
           rt.description = t2;
           rt.input_message_content.message_text += "\n"+t2;
         }
         
         return rt;
}




module.exports.guild = (guild,Markup) => {
  let result;
  let characters       = '0123456789';
  let charactersLength = characters.length;
  for ( var i = 0; i < 25; i++ ) {
   result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  let e =  {
    type: 'article',
    id: `${result}`,
    title: `${guild.name}`,
    input_message_content: {
      message_text: `${guild.name} - ${guild.id}`
    },
  reply_markup: Markup.inlineKeyboard([
    Markup.switchToCurrentChatButton('Choose a channel', `server${guild.id} `)
     ]
  )
 };
 if(guild.iconURL) {
   e.thumb_url = guild.iconURL;
 } 
 return e;
}

