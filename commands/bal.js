const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();
client.tokens = require ("./tokens.json");

module.exports = {
	name: 'help',
	description: 'Помощь.',
	execute(message, args) {

        clientInformation.tokens [message.author.username] = {
         tokens: ''
        };
        fs.writeFile ("./tokens.json", JSON.stringify ["0", null, 4], err => {
            if (err) message.channel.send(err);
            message.chanel.send('учпешно')
        })
	},
};
