const commando = require('discord.js-commando');

class DirectMessage extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'dm',
            group: 'message',
            memberName: 'dm',
            description: 'Sends a message to a specific user',
            //No more than 5 dm commands in 2 minutes
            throttling: {
                usages: 5,
                duration: 120
            },
            args: [
                {
                    key: 'user',
                    prompt: 'Which user to send message to',
                    type: 'user'
                },
                {
                    key: 'content',
                    prompt: 'what will be sent to user',
                    type: 'string'
                }
            ]
        });
    }

    async run(message, {user, content}) {
        user.send(content);
    }
}

module.exports = DirectMessage;