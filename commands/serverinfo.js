const Discord = require('discord.js');

module.exports = {
	name: 'serverinfo',
	description: 'Инфа о сервере.',
	execute(message, args) {
            let serverEmbed = new Discord.MessageEmbed()
            .setColor("#00ff00")
            .setThumbnail(message.guild.iconURL)
            .setAuthor(message.guild.name)
            .addFields(
                { name: 'Название', value: message.guild.name, inline: true },
                { name: 'Айди', value: message.guild.id, inline: true },
                { name: 'Создатель', value: message.guild.owner, inline: true },
                { name: 'Регион', value: message.guild.region, inline: true },
                { name: 'Участники', value: `<:user:531116044794855425> ${message.guild.memberCount}`, inline: true },
                { name: 'Роли', value: message.guild.roles.size, inline: true },
                { name: 'Вы присоединились', value: message.member.joinedAt, inline: false },
            )
            .setFooter(`Создан ${message.guild.createdAt}`);
        
            message.channel.send(serverEmbed);

	},
};
