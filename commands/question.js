const Discord = require('discord.js');

module.exports = {
	name: 'question',
	description: 'Погадать.',
	execute(message, args) {
        let ranColor = "#" + Math.random().toString(16).slice(2, 8);
        let answers = new Array("Сейчас не могу предсказать :eyes:", "Знаки говорят — да :ok_hand:", "Спроси позже :eyes:", "Мой ответ — нет :broken_heart:", "Мне кажется — да :ok_hand:", "Даже не думай :x:", "Можешь быть уверен в этом :thumbsup:", "Сконцентрируйся и спроси еще разок :eyes:");
        if (!args[0]) {
		 let qEmbed = new Discord.MessageEmbed()
	      .setColor(ranColor)
	      .setTitle('Вопрос')
		  .setDescription('**Использование:**')
		  .addField('.question [вопрос]', 'Например: `.question сегодня выйдет видео у Аида?`', true);
		 message.channel.send(qEmbed);
        } else {
            let answer = answers[Math.floor(Math.random() * answers.length)];
            let sEmbed = new Discord.MessageEmbed()
            .setColor(ranColor)
            .setTitle('Шар')
            .setDescription(`\n \n${answer}`);
           message.channel.send(sEmbed);
        };
	

	},
};
