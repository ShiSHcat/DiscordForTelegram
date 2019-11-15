module.exports = (client,params) => {
  var chid = params[0].replace("sync", "");
    var e = client.channels.get(chid);
    var msg = params;
    msg.shift();
    msg = msg.join(" ");
    let characters       = '0123456789';
    let charactersLength = characters.length;
    let result;
    for ( var i = 0; i < 25; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    if (typeof e == "undefined") { 
      
        return [{
                type: 'article',
                id: `${result}`,
                title: `Channel not found`,
                input_message_content: {
                  message_text: `${chid} : Channel not found. `
                }
             
        }]
    } else if ((e.type == "category")||(e.type == "voice")) { //not text channel
      return [{
        type: 'article',
        id: `${result}`,
        title: `${e.name} : This is not a text channel.`,
        input_message_content: {
          message_text: `${e.name} : This is not a text channel. `
        }
        
  }]
    } else if (!e.memberPermissions(e.guild.me).has("SEND_MESSAGES")) {   //cannot send message
      return [{
        type: 'article',
        id: `${result}`,
        title: `${e.name} : You cannot send messages here.`,
        input_message_content: {
          message_text: `${e.name} : You cannot send messages here.`
        }
     
  }] 
    }  else {
     return [{
       //can send message

            
              type: 'article',
              id: `${result}`,
              title: `Bind ${e.name} (${e.guild.name}) to here.`,
              description: "To unbind it use /stop",
              input_message_content: {
                message_text: `/bind ${e.id}`
              }
           
    
  
}]


}}