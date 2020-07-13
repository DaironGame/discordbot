const Discord = require('discord.js');

module.exports = {
	name: 'ban',
	description: 'Забанить участника.',
	execute(message, args) {
		let Embed = new Discord.MessageEmbed()
	     .setColor('#FF8300')
	     .setTitle('Бан')
		 .setDescription('**Использование:**')
		 .addField('.ban [ник] [причина]', 'Например: `.ban @OXSSI слив рп`', true);

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
            res = "не указана.";
        } else {
            res = reason
        };

         await member.ban(reason).catch(error => message.channel.send(`Ошибка`));

         let bean = new Discord.RichEmbed()
          .setColor("#00ff00")
		  .setTitle(`Бан | ${member.user.tag}`)
		  .setDescription('')
          .addField("Забанен", member, true)
          .addField("Забанивший", message.author, true)
          .addField("Причина", res)
          .setTimestamp();

         message.channel.send(bean);

         message.delete();

	},
};
