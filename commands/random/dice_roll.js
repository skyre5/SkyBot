const commando = require('discord.js-commando');

class DiceRollCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'roll',
            aliases: ['die', 'dice', 'random'],
            group: 'random',
            memberName: 'roll',
            description: 'Rolls a die',
            args: [
                {
                    default: 6,
                    key: 'range',
                    prompt: 'Number from 1 to chosen number it will randomize',
                    type: 'integer',
                    validate: range => {
                        //Will stop if the number isn't an integer
                        //Stops junk values
                        if (isNaN(range)) {
                            return "Invalid: Enter a number!";
                        }
                        if (range < 0) {
                            return "No negative numbers";
                        }
                        return true;
                    }
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