const Discord = require('discord.js');

module.exports = {
	name: 'шар',
	description: 'Погадать.',
	execute(message, args) {
        let ranColor = "#" + Math.random().toString(16).slice(2, 8);
        if (!args) {
		let Embed = new Discord.MessageEmbed()
	     .setColor(ranColor)
	     .setTitle('Шар')
		 .setDescription('**Использование:**')
		 .addField('.шар [вопрос]', 'Например: `.шар сегодня выйдет видео у Аида?`', true);
        };

	},
};