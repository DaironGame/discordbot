const Discord = require('discord.js');

module.exports = {
	name: 'rsp',
        description: 'Погадать.',
        aliases: ['кнб', 'к'],
	execute(message, args) {
        let answers = new Array("камень", "ножницы", "бумага");
        let realAnswer = answers[Math.floor(Math.random() * answers.length)];
        if (!args[0]) {
		 let qEmbed = new Discord.MessageEmbed()
	      .setColor('#33FF00')
	      .setTitle('Камень Ножницы Бумага')
		  .setDescription('**Использование:**')
                  .addField('.кнб [камень/ножницы/бумага]', 'Например: `.кнб камень`', true)
                  .setFooter('DaironChat','https://cdn.discordapp.com/attachments/698215230114889759/730748859084570674/pack.png');
		 message.channel.send(qEmbed);
        };
    if (args[0] == 'камень' || args[0] == 'к') {
        if (realAnswer == 'камень') {
            let youWin = new Discord.MessageEmbed()
	      .setColor('#33FF00')
	      .setTitle('Камень Ножницы Бумага')
		  .setDescription('**Ты выиграл!**')
                  .setDescription(`**Ты** - выбрал **камень**\n**Dairon (бот)** - выбрал **камень**`)
                  .setFooter('DaironChat','https://cdn.discordapp.com/attachments/698215230114889759/730748859084570674/pack.png');
                  message.channel.send(youWin);
        } else {
            message.channel.send(`Ты не угадал, ответ был **${realAnswer}**.`);
        };
    };
    if (args[0] == 'ножницы' || args[0] == 'н') {
        if (realAnswer == 'ножницы') {
            let youWin2 = new Discord.MessageEmbed()
            .setColor('#33FF00')
            .setTitle('Камень Ножницы Бумага')
            .setDescription('**Ты выиграл!**')
            .setDescription(`**Ты** - выбрал **ножницы** :scissors: \n**Dairon (бот)** - выбрал **ножницы** :scissors: `)
            .setFooter('DaironChat','https://cdn.discordapp.com/attachments/698215230114889759/730748859084570674/pack.png');
            message.channel.send(youWin2);
        } else {
            message.channel.send(`Ты не угадал, ответ был **${realAnswer}**.`);
        };
    };
    if (args[0] == 'бумага' || args[0] == 'б') {
        if (realAnswer == 'ножницы') {
            let youWin2 = new Discord.MessageEmbed()
            .setColor('#33FF00')
            .setTitle('Камень Ножницы Бумага')
            .setDescription('**Ты выиграл!**')
            .setDescription(`**Ты** - выбрал **бумага** :newspaper2: \n**Dairon (бот)** - выбрал **бумага** :newspaper2: `)
            .setFooter('DaironChat','https://cdn.discordapp.com/attachments/698215230114889759/730748859084570674/pack.png');
            message.channel.send(youWin2);
        } else {
            message.channel.send(`Ты не угадал, ответ был **${realAnswer}**.`);
        };
    };

	},
};
