const Discord = require('discord.js');

module.exports = {
	name: 'coinfip',
        description: 'Погадать.',
        aliases: ['c', 'монеточка', 'м'],
	execute(message, args) {
        let answers = new Array("орёл", "решка");
        let realAnswer = answers[Math.floor(Math.random() * answers.length)];
        if (!args[0]) {
		 let qEmbed = new Discord.MessageEmbed()
	      .setColor('#33FF00')
	      .setTitle('Монеточка')
		  .setDescription('**Использование:**')
                  .addField('.м [орёл/решка]', 'Например: `.м орел`', true)
                  .setFooter('DaironChat','https://cdn.discordapp.com/attachments/698215230114889759/730748859084570674/pack.png');
		 message.channel.send(qEmbed);
        };
    if (args[0] == 'орел' || args[0] == 'о' || args[0] == 'орёл') {
        if (realAnswer == 'орёл') {
            let youWin = new Discord.MessageEmbed()
	      .setColor('#33FF00')
	      .setTitle('Монеточка')
		  .setDescription('**Ты выиграл!**')
                  .setDescription(`**Ты** - выбрал орла\n**Выпало:** орёл`)
                  .setFooter('DaironChat','https://cdn.discordapp.com/attachments/698215230114889759/730748859084570674/pack.png');
                  message.channel.send(youWin);
        } else {
            message.channel.send(`Ты не угадал, выпало: **решка**.`);
        };
    };
    if (args[0] == 'решка' || args[0] == 'р') {
        if (realAnswer == 'решка') {
            let youWin2 = new Discord.MessageEmbed()
            .setColor('#33FF00')
            .setTitle('Монеточка')
            .setDescription('**Ты выиграл!**')
            .setDescription(`**Ты** - выбрал решку\n**Выпало:** решка`)
            .setFooter('DaironChat','https://cdn.discordapp.com/attachments/698215230114889759/730748859084570674/pack.png');
            message.channel.send(youWin2);
        } else {
            message.channel.send(`Ты не угадал, выпало: **орёл**.`);
        };
    };
	},
};
