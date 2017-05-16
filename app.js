const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
  console.log('I am ready!');
});

const prefix = "-"

bot.on('message', message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command === "add") {
    let num1 = parseInt(args[0]);
    let num2 = parseInt(args[1]);
    message.channel.sendMessage(num1 + num2);
  }

  if (command === "say") {
    message.channel.sendMessage(args.join(" "));
  }

  if (command === "ping") {
    message.channel.sendMessage('pong!');

  }

  if (command === "potato") {
    message.channel.sendMessage("Sausage!");

  }

});

bot.login('MzExODY4MTczOTMyODIyNTI4.C_TT0Q.ci2U9NjCiDsV7-Eo7NcmCGFcYIw')
