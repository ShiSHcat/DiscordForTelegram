module.exports = (client,params,channel,Markup) => {
    try {
        var e = client.guilds.get(params[0].replace("server", "")).channels.array()
       } catch (error) {
        var response = []
      
       } 
        var counter = 0;
        var response =[]
      for(const chan_ in e) {
        var chan = e[chan_];
          if (typeof params[1] == "undefined"||params[1].length < 3) {//show more channels possible 
              counter++;
                if(counter <= 50) {
  
                   var chres = channel(chan,Markup)
                   if (chres) response.push(chres); else counter--;
                
              }else {
                break;
              }
          } else  if (chan.name.toUpperCase().includes(params[1].toUpperCase())) {//search
              if(counter <= 50) {
              var chres = channel(chan,Markup)
              if (chres) response.push(chres); else counter--;
          }else {
             return;
          } 
           }
        }
      return response;
}