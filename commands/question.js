const Discord = require('discord.js');

module.exports = {
	name: 'question',
	description: 'Погадать.',
	execute(message, args) {
        let ranColor = "#" + Math.random().toString(16).slice(2, 8);
        if (!args[0]) {
		message.reply('1');
		let qEmbed = new Discord.MessageEmbed()
	     .setColor(ranColor)
	     .setTitle('Вопрос')
		 .setDescription('**Использование:**')
		 .addField('.question [вопрос]', 'Например: `.question сегодня выйдет видео у Аида?`', true);
		message.channel.send(qEmbed);
        } else {
	    message.reply('2');
        };
        message.reply(`${message} - ${args}`)
	

	},
};
