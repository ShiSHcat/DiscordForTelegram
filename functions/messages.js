module.exports = async (element) => {
    var message;
    if (element.content !== undefined||element.content !== ""||element.content == null) { //check for only attachment message
        msg = element.content;
        let mentions = element.mentions.users.array()
        for (const snowflake in mentions) {
            
                const user_ = mentions[snowflake];
                let mention = "<@"+user_.id+">";
                let mention2 = "<@!"+user_.id+">";
                if (!element.guild.member(user_)) {
                msg = msg.replace(mention," @ "+user_.tag);
                msg = msg.replace(mention2," @ "+user_.tag);
                } else {
                    if(element.guild.member(user_).nickname) {
                msg = msg.replace(mention," @ "+user_.tag+element.guild.member(user_).nickname);
                msg = msg.replace(mention2," @ "+user_.tag+" ( "+element.guild.member(user_).nickname+" ) ");
                    } else {
                        msg = msg.replace(mention," @ "+user_.tag);
                        msg = msg.replace(mention2," @ "+user_.tag);
                    }
                }
            
        
    }
    let mentions_ = element.mentions.channels.array()
    for(const snowflake in mentions_) {
        const chan__ = mentions_[snowflake];
        let mention = "<#"+chan__.id+">";
        msg = msg.replace(mention," # "+chan__.name);
        
    }
        } else msg = "";
        if (!element.member||!element.member.nickname) {
            message = element.author.tag+" : ";
        } else {
            message = element.author.tag+" ( "+element.member.nickname+" ) : ";
        }
        
        
    
        message+=msg;
        
        var eat = element.attachments.array(); //handles attachments
        eat = eat.map(e=>e.url)
        if (!typeof eat == 'undefined' ||! eat.length == 0) {
            message += "\n\n Attachments link: "+eat.join(" | ")+"\n"
        }
        if(element.embeds) {
            element.embeds.forEach(element_ => {
                message += embed(element_) 
            }); //add embeds
            
        }
        return message;
        
}
function embed (embed) {
    var rsp = "\n\nEmbeds:\n";
    if(embed.author) {
        rsp += " Author: "+embed.author.name+"\n"
    }
    if(embed.title) {
        rsp += " Title: "+embed.title+"\n"
    }
    if(embed.description) {
        rsp += " Description : \n\n"+embed.description+"\n"
    }
    embed.fields.forEach(element => {
        rsp += "Field\n "+element.name+"\n"
        rsp += element.value+"\n";
    });
    if(embed.imageURL) {
        rsp += " Image : \n\n"+embed.imageURL+"\n"
    }
    return rsp;
}

