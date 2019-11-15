module.exports = (client,params) => {
  var chid = params[0].replace("silent_sm", "");
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
    }  else if(msg.length > 0) {
      
      var rpl = msg.replace("\\n","\n")
     return [{
       //can send message

            
              type: 'article',
              id: `${result}`,
              title: `Send it!`,
              input_message_content: {
                message_text: `/s_ssm ${e.id} ${rpl}`
              }
           
    
  
}]
} else {
  return [{
    type: 'article',
    id: `${result}`,
    title: `Message lenght too small.`,
    input_message_content: {
      message_text: msg+ "  : Message length too small. Please write a longer message."
    }
 
    
}] 
}

}