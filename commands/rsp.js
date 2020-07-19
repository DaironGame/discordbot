const Discord = require('discord.js');

module.exports = {
	name: 'rsp',
        description: 'Погадать.',
        aliases: ['кнб', 'к'],
	execute(message, args) {
        let answers = new Array("камень", "ножницы", "бумага");
        let answer = answers[Math.floor(Math.random() * answers.length)];
        if (!args[0]) {
		 let qEmbed = new Discord.MessageEmbed()
	      .setColor('#33FF00')
	      .setTitle('Камень Ножницы Бумага')
		  .setDescription('**Использование:**')
                  .addField('.кнб [камень/ножницы/бумага]', 'Например: `.кнб камень`', true)
                  .setFooter('DaironChat','https://cdn.discordapp.com/attachments/698215230114889759/730748859084570674/pack.png');
		 message.channel.send(qEmbed);
        } else if (answer == 'камень') {
         if (args[0] == 'камень' || args[0] == 'к') {
             let youWin = new Discord.MessageEmbed()
             .setColor('#33FF00')
             .setTitle('Ты выиграл!')
             .setTimestamp
             .setDescription(`**${message.author.name}** - выбрал камень\n**Dairon (бот)** - выбрал камень`)
             .setFooter('DaironChat');
             message.channel.send(youWin);
             message.channel.send('камень');
         }



        };
	},
};
