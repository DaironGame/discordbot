const Discord = require('discord.js');

module.exports = {
	name: 'question',
        description: 'Погадать.',
        aliases: ['q', 'шар'],
	execute(message, args) {
        let ranColor = "#" + Math.random().toString(16).slice(2, 8);
//         let notAllow = new Array("дайрон", "даирон", "дарон", "дирон", "дэйрон", "дэирон", "дейрон", "деирон",
//         "дайран", "даиран", "окси", "краш", "крашнет", "dairon", "dauron", "дaйрон", "дaирон", "дaрон", "дaйрaн", "дaирaн",
//         "дайрaн", "dаiron", "dairоn", "дайрoн", "oкси", "окcи", "oкcи");
        let answers = new Array("Сейчас не могу предсказать :eyes:", "Знаки говорят — да :ok_hand:", "Спроси позже :eyes:",
        "Мой ответ — нет :broken_heart:", "Мне кажется — да :ok_hand:", "Даже не думай :x:", "Можешь быть уверен в этом :thumbsup:",
        "Сконцентрируйся и спроси еще разок :eyes:","Не могу ответить :see_no_evil:", ":scream:", "Сегодня не предсказываю :zipper_mouth:",
        "Еще раз спросишь **бан**ан получишь :ringed_planet:", "Скорее всего... СЛИШКОМ СЛОЖНЫЙ ВОПРОС :exploding_head:",
        ":man_facepalming: Тут же все очевидно!", "Эта ти? :chicken:");
        if (!args[0]) {
		 let qEmbed = new Discord.MessageEmbed()
	      .setColor(ranColor)
	      .setTitle('Вопрос')
		  .setDescription('**Использование:**')
                  .addField('.question [вопрос]', 'Например: `.question сегодня выйдет видео у Аида?`', true)
                  .setFooter('DaironChat','https://cdn.discordapp.com/attachments/698215230114889759/730748859084570674/pack.png');
		 message.channel.send(qEmbed);
        } else {
            let answer = answers[Math.floor(Math.random() * answers.length)];
            let sEmbed = new Discord.MessageEmbed()
            .setColor(ranColor)
            .setTitle('Шар')
            .setDescription(`\n \n${answer}`)
            .setFooter('DaironChat','https://cdn.discordapp.com/attachments/698215230114889759/730748859084570674/pack.png');
           message.channel.send(sEmbed);
        };
	

	},
};
