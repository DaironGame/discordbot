const Discord = require('discord.js');

module.exports = {
	name: 'question',
	description: 'Погадать.',
	execute(message, args) {
        let ranColor = "#" + Math.random().toString(16).slice(2, 8);
        if (!message) {
		message.reply('1');
		let Embed = new Discord.MessageEmbed()
	         .setColor(ranColor)
	         .setTitle('Вопрос')
		 .setDescription('**Использование:**')
		 .addField('.question [вопрос]', 'Например: `.question сегодня выйдет видео у Аида?`', true);
		message.channel.send(Embed);
        } else {
	message.reply('2');
	};
	

	},
};
