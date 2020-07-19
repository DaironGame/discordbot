const Discord = require('discord.js');

module.exports = {
	name: 'rsp',
        description: 'Погадать.',
        aliases: ['кнб', 'к'],
	execute(message, args) {
        let ranColor = "#" + Math.random().toString(16).slice(2, 8);
//         let notAllow = new Array("дайрон", "даирон", "дарон", "дирон", "дэйрон", "дэирон", "дейрон", "деирон",
//         "дайран", "даиран", "окси", "краш", "крашнет", "dairon", "dauron", "дaйрон", "дaирон", "дaрон", "дaйрaн", "дaирaн",
//         "дайрaн", "dаiron", "dairоn", "дайрoн", "oкси", "окcи", "oкcи");
        let answers = new Array("камень", "ножницы", "бумага");
        let answer = answers[Math.floor(Math.random() * answers.length)];
        let youWin = new Discord.MessageEmbed()
        .setColor(ranColor)
        .setTitle('Ты выиграл!')
        .setTimestamp
        .setDescription(`**${message.author.name}** - выбрал ${yourAnswer}\n**Dairon (бот)** - выбрал ${answer}`)
        .setFooter('DaironChat');
        if (!args[0]) {
		 let qEmbed = new Discord.MessageEmbed()
	      .setColor(ranColor)
	      .setTitle('Камень Ножницы Бумага')
		  .setDescription('**Использование:**')
                  .addField('.кнб [камень/ножницы/бумага]', 'Например: `.кнб камень`', true)
                  .setFooter('DaironChat','https://cdn.discordapp.com/attachments/698215230114889759/730748859084570674/pack.png');
		 message.channel.send(qEmbed);
        } else if (answer == 'камень') {
         if (args[0] == 'камень' || args[0] == 'к') {
             let yourAnswer = 'камень';
             message.channel.send(youWin);
         }
        };

	},
};
