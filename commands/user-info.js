const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const usere = new Discord.User(clientdata);

module.exports = {
	name: 'user-info',
	description: ' Информация о пользователе.',
	execute(message, args) {
		if (!message.mentions.users.size) {
			return message.channel.send('Укажите пользователя, информацию о котором хотите узнать!');
		};

		const taggedUser = message.mentions.users.first();

		let dateCreate = usere.createdAt;

		let Embed = new Discord.MessageEmbed()
	          .setColor('#0072FF')
	          .setTitle('Информация о пользователе')
                  .setDescription('**В разработке...**')
                message.channel.send(Embed);
	        message.reply(dateCreate);
	},
};
