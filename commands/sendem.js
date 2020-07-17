const Discord = require('discord.js');

module.exports = {
	name: 'sendem',
	description: 'Помощь.',
	execute(message, args) {
        if (args[0] === 'yt') {
            message.channel.send("yt")
        } else if (args[0] === 'ds') {
            message.channel.send("ds")
        };
        

	},
};
