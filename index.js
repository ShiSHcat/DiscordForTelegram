
//DISCORD
const Discord = require('discord.js'); 
//TELEGRAM
const Telegraf = require('telegraf');
const Markup = require('telegraf/markup');
//CONFIG
const config = require("./config.js");
var sync_ = false;
//FUNCTIONS
const message_ = require("./functions/messages")
const channel = require("./functions/generate_iqentry").channel;
const giq = require("./functions/generate_iqentry").guild;
//INLINE
const inline = require("./inline.js");
const channelsh = require("./inline/channels");
const guildsh = require("./inline/guilds");
const getlasth = require("./inline/getlast");
const sendmessageh = require("./inline/sendmessage");
const synch = require("./inline/sync.js")
const silent_sm = require("./inline/silent_sendmessage")
//COMMANDS
const sssm = require("./commands/silent_ssm");
const ssm = require("./commands/ssm");
const startbot = require("./commands/start");
const fetch = require("./commands/fetchmsgs");
const play = require("./commands/play.js")
const sync = require("./commands/sync.js")
const stop = require("./commands/stop.js")

const bot = new Telegraf(config.bt)
const client = new Discord.Client();


bot.command('sm', (ctx) => ssm(ctx,config.owner_chat_id,client));
bot.command('s_ssm', (ctx) => sssm(ctx,config.owner_chat_id,client));
bot.command("start",(ctx)=>startbot(ctx,config.owner_chat_id))
bot.command("fetchmsgs",(ctx)=> fetch(ctx,config.owner_chat_id,client,Telegraf,message_))
bot.command("play",(ctx)=> play(ctx,config.owner_chat_id,client))
bot.command("stop",(ctx)=> stop(ctx,config.owner_chat_id,client,sync_))
bot.on('inline_query', (ctx)=>inline(ctx,client,channel,channelsh,guildsh,config,Markup,giq,sendmessageh,getlasth,synch,silent_sm));
bot.command("bind",(ctx)=> 
  {
    var e = sync(ctx,config.owner_chat_id,client,sync_);
    if(e) {
    var _sync_ =  async message=> {
      if( message.channel.id == e.id) {
        bot.telegram.sendMessage(config.owner_chat_id,"Message from "+message.guild.name+" : "+await (message_(message)),Telegraf.Extra.markup((m) => m.inlineKeyboard([
          m.switchToCurrentChatButton(`Get channel`, `server${message.guild.id} ${message.channel.name}`),
          m.switchToCurrentChatButton(`Send message`, `silent_sm${message.channel.id}`),
          m.switchToCurrentChatButton(`Reply`, `silent_sm${message.channel.id} <@${message.author.id}>`),
        ])))};
      }
  }
  client.on("message",_sync_)
  if (typeof sync_ == "object")
  sync_.push(_sync_); 
  else
  sync_ = [_sync_]; 
  })



bot.launch()

client.on('ready', async () => {
  bot.telegram.sendMessage(config.owner_chat_id,"Ready!")
  
});

var com = async message=> {
  if (message.guild) {
  if (message.mentions.users.get(client.user.id)||message.mentions.everyone) {
    if(!message.guild.muted&&!message.channel.muted&&!client.user.blocked.get(message.author.id)) {
      let a = await message_(message);
      bot.telegram.sendMessage(config.owner_chat_id,"⚠️⚠️New mentions\n\n New message: "+a,Telegraf.Extra
      .markup((m) => m.inlineKeyboard([
          m.switchToCurrentChatButton(`Get channel`, `server${message.guild.id} ${message.channel.name}`) ])));
  }}}}
 
client.on('message', com);

client.login(`${config.ut}`);