const { Command } = require('discord.js-commando');
const snekfetch = require('snekfetch');
const Discord = require("discord.js");

module.exports = {
	name: 'dog',
	description: 'собачки.',
	execute(message, args) {
        const { body } = await snekfetch.get('https://random.dog/woof.json');
        const embed = new Discord.MessageEmbed()
         .setColor("#00ff00")
         .setImage(body.url)
         .setTitle("Вот твоя рандомная собачка");

        message.channel.send(embed);
	},
};
