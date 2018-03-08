const commando = require('discord.js-commando');

class Stopwatch extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'stopwatch',
            group: 'message',
            memberName: 'stopwatch',
            description: 'A timer that goes off after a given amount of time',
            //Only in servers when true
            //Guild is a server
            //guildOnly: true,
            //No more than 5 dm commands in 2 minutes
            args: [
                {
                    key: 'time',
                    prompt: 'Amount of time to wait',
                    type: 'integer',
                    default: 5
                },
                {
                    key: 'content',
                    prompt: '(Optional)Message upon completion',
                    type: 'string',
                    default: 'Timer is done!!!!'
                }
            ]
        });
    }

    async run(message, {time, content}) {
        var timeToWait = time * 1000;
        await sleep(timeToWait);
        message.reply(content);
        //user.send(content);
    }
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports = Stopwatch;