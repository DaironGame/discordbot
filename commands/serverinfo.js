const Discord = require('discord.js');

module.exports = {
	name: 'help',
	description: 'Помощь.',
	execute(message, args) {
        const verlvl = {
            0: "None",
            1: "Low",
            2: "Medium",
            3: "(╯°□°）╯︵ ┻━┻",
            4: "(ノಠ益ಠ)ノ彡┻━┻"
          };
        
            let inline = true
            let sicon = message.guild.iconURL;
            let serverembed = new Discord.RichEmbed()
            .setColor("#00ff00")
            .setThumbnail(sicon)
            .setAuthor(message.guild.name)
            .addField("Имя", message.guild.name, inline)
            .addField("Айди", message.guild.id, inline)
            .addField("Создатель", message.guild.owner, inline)
            .addField("Регион", message.guild.region, inline)
            .addField("Уровень модерации", verlvl[message.guild.verificationLevel],inline)
            .addField("Участники", `<:user:531116044794855425> ${message.guild.memberCount}`, inline)
            .addField("Роли", message.guild.roles.size, inline)
            .addField("Каналы", message.guild.channels.size, inline)
            .addField("Вы присоединились", message.member.joinedAt)
            .setFooter(`Создан ${message.guild.createdAt}`);
        
            message.channel.send(serverembed);
        
            message.delete();
        }

	},
};
