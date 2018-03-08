//const Discord = require('discord.js');
const commando = require('discord.js-commando');
//const bot = new Discord.Client();
const bot = new commando.Client();

bot.registry.registerGroups([
    ['random', 'Commands dealing with random numbers'],
['message', 'Send messages to other users']]);
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.on('message', (message) => {
    if (message.content == 'ping') {
        //@ the user who sent it
        //message.reply('pong');
        message.channel.sendMessage('pong');
    }
});

bot.login('NDIxMjAyODI0NTIxNzExNjE2.DYJzaA.PceBkiN9AQFZJtsUZ5ujfb76PBk');
