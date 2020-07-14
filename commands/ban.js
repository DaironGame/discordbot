const Discord = require('discord.js');

module.exports = {
	name: 'ban',
	description: 'Забанить участника.',
	execute(message, args) {
		let Embed = new Discord.MessageEmbed()
	     .setColor('#FF8300')
	     .setTitle('Бан')
		 .setDescription('**Использование:**')
		 .addField('.ban [ник] [причина]', 'Например: `.ban @OXSSI слив рп`', true)
		.setFooter('DaironChat','https://cdn.discordapp.com/attachments/698215230114889759/730748859084570674/pack.png');

        if (!message.member.hasPermission("BAN_MEMBERS")) {
			 message.channel.send("У вас нет прав!");
			 return;
		};

        let member = message.mentions.members.first();
        if(!member) return message.channel.send(Embed)
        // if(!member.bannable) return message.channel.send("I can't ban this user!")
        // if(member.user.id === "531116044794855425") return message.channel.send("Я не могу забанить своего создателя!")

        if(member.id === message.author.id) return message.channel.send("Вы не можете забанить самого себя")

        let reason = args.slice(1).join(" ");

        if(!reason) {
            res = "не указана";
        } else {
            res = reason
        };

        member.ban(reason).catch(error => message.channel.send(`Ошибка`));

	 let banedEmbed = new Discord.MessageEmbed()
	  .setColor('#FF8300')
	  .setTitle('Бан')
	  .setDescription(`Забанивший: ${message.author}.\nЗабаненный: ${member}.\nПричина бана: ${res}.`)
		 .setTimestamp()
	     .setFooter('DaironChat','https://cdn.discordapp.com/attachments/698215230114889759/730748859084570674/pack.png');
        message.channel.send(banedEmbed);

          message.delete();

	},
};
