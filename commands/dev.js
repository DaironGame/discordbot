const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();

module.exports = {
	name: 'dev',
	description: 'Инфа о разработчике.',
	execute(message, args) {
		let devEmbed = new Discord.MessageEmbed()
	     .setColor('#FF7F00')
	     .setTitle('Разработчик:')
         .setDescription('**Dairon Game**')
         .setThumbnail('https://cdn.discordapp.com/attachments/698215230114889759/730748859084570674/pack.png');
        message.channel.send(devEmbed);
	},
};
