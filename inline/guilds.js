module.exports = (client,Markup,giq,inlineQuery) => {
    var e = client.guilds.array();
    var counter = 0;
    var response =[]
    for(const guild_ in e) {
        var guild = e[guild_];
        if (inlineQuery.query.length < 3) { //show more guilds possible 
            counter++;
            if(counter <= 48) {
              var ghres = giq(guild,Markup)
              if (ghres) response.push(ghres); else counter--;
            }
            
        } else if (typeof guild.name == "undefined"||typeof inlineQuery.query == "undefined") continue;
         else if (guild.name.toUpperCase().includes(inlineQuery.query.toUpperCase())) { //search
          var ghres = giq(guild,Markup)
              if (ghres) response.push(ghres); else counter--;
        
        }

    }
  return response; } 
  //add guilds pfp