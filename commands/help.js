const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();

module.exports = {
	name: 'help',
	description: 'Помощь.',
	execute(message, args) {
		let Embed = new Discord.MessageEmbed()
	     .setColor('#1CFF00')
	     .setTitle('Помощь:')
         .setDescription('**В разработке**\n`dev` - создатель бота')
        message.channel.send(Embed);ы
	},
};