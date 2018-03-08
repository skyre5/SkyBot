const commando = require('discord.js-commando');

class FlipCoinCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'flip',
            group: 'random',
            memberName: 'flip',
            description: 'Flips a coin'
        });
    }

    async run(message, args) {
        var roll = Math.floor(Math.random() * 2);
        var result = "Tails";
        if (roll == 0) {
            result = "Heads";
        }
        message.reply(result);
    }
}

module.exports = FlipCoinCommand;