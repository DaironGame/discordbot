const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();

module.exports = {
	name: 'user-info',
	description: ' Информация о пользователе.',
	execute(message, args) {
		if (!message.mentions.users.size) {
			return message.channel.send('Укажите пользователя, информацию о котором хотите узнать!');
		};

		let Embed = new Discord.MessageEmbed()
	          .setColor('#0072FF')
	          .setTitle('Информация о пользователе')
                  .setDescription('**В разработке...**')
                message.channel.send(Embed);
	},
};
