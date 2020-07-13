const Discord = require('discord.js');

module.exports = {
	name: 'ban',
	description: 'Забанить участника.',
	execute(message, args) {
		let usage = new Discord.RichEmbed()
         .setColor("#00ff00")
         .setTitle("Комманда бана")
         .addFields(
			{ name: "Описание:", value: `Забанить участника`, inline: true },
            { name: "Использование:", value: `!ban [участник] [причина]`, inline: true },
			{ name: "Пример:", value: `!ban @OXXSI слив рп` },
		 );

        if (!message.member.hasPermission("BAN_MEMBERS") && message.author.id !== "531116044794855425") {
			 message.channel.send("У вас нет прав!");
			 return;
		};

        let member = message.mentions.members.first();
        if(!member) return message.channel.send(usage)
        // if(!member.bannable) return message.channel.send("I can't ban this user!")
        // if(member.user.id === "531116044794855425") return message.channel.send("Я не могу забанить своего создателя!")

        // if(member.id === message.author.id) return message.channel.send("Вы не можете забанить самого себя")

        // let reason = args.slice(1).join(" ");

        // if(!reason) {
        //     res = "Отсутствует причина";
        // } else {
        //     res = reason
        // }

        // await member.ban(reason).catch(error => message.channel.send(`Изините, я не могу забанить потому что: ${error}`));

        // let bean = new Discord.RichEmbed()
        //  .setColor("#00ff00")
        //  .setTitle(`Ban | ${member.user.tag}`)
        //  .addField("User", member, true)
        //  .addField("Moderator", message.author, true)
        //  .addField("Reason", res)
        //  .setTimestamp();

        // message.channel.send(bean)

        // message.delete()

	},
};
