const commando = require('discord.js-commando');

class DiceRollCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'roll',
            group: 'random',
            memberName: 'roll',
            description: 'Rolls a die'
        });
    }

    async run(message, args) {
        var inputs = args.split(" ");
        var roll = Math.floor(Math.random() * 6) + 1;
        message.reply("You rolled a " + roll);
    }
}

module.exports = DiceRollCommand;