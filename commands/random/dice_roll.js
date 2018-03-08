const commando = require('discord.js-commando');

class DiceRollCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'roll',
            group: 'random',
            memberName: 'roll',
            description: 'Rolls a die',
            args: [
                {
                    default: 6,
                    key: 'range',
                    prompt: 'Number from 1 to chosen number it will randomize',
                    type: 'integer'
                }
            ]
        });
    }

    async run(message, {range}) {
        //var inputs = args.split(" ");
        //console.log(range);
        var roll = Math.floor(Math.random() * range) + 1;
        message.reply("You rolled a " + roll);
    }
}

module.exports = DiceRollCommand;