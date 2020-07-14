const Discord = require('discord.js');

module.exports = {
	name: 'serverinfo',
	description: 'Инфа о сервере.',
	execute(message, args) {
            // let serverEmbed = new Discord.MessageEmbed()
            // .setColor("#00ff00")
            // .setThumbnail(message.guild.iconURL)
            // .setAuthor(message.guild.name)
            // .addFields(
            //     { name: 'Название', value: message.guild.name, inline: true },
            //     { name: 'Айди', value: message.guild.id, inline: true },
            //     { name: 'Создатель', value: message.guild.owner, inline: true },
            //     { name: 'Регион', value: message.guild.region, inline: true },
            //     { name: 'Участники', value: `<:user:531116044794855425> ${message.guild.memberCount}`, inline: true },
            //     { name: 'Роли', value: message.guild.roles.size, inline: true },
            //     { name: 'Вы присоединились', value: message.member.joinedAt, inline: false },
            // )
            // .setFooter(`Создан ${message.guild.createdAt}`);
        
            // message.channel.send(serverEmbed);

            function checkDays(date) {
                let now = new Date();
                let diff = now.getTime() - date.getTime();
                let days = Math.floor(diff / 86400000);
                return days + (days == 1 ? " day" : " days") + " ago";
            };
            let region = {
                "russia": ":flag_ru: Russia"
            };
            const embed = new Discord.MessageEmbed()
                .setColor('#00ff00')
                .setAuthor(message.guild.name, message.guild.iconURL)
                .setThumbnail(message.guild.iconURL)
                .setTitle('Информация о сервере')
                .setDescription(`Название: ${message.guild.name}\n \nАйди: ${message.guild.id}\n \nСоздатель: ${message.guild.owner}\n \nРегион: ${region[message.guild.region]}\n \n`)
                .addFields(
                    { name: 'Всего | Людей | Ботов', value: `${message.guild.members.size} | ${message.guild.members.filter(member => !member.user.bot).size} | ${message.guild.members.filter(member => member.user.bot).size}`, inline: true },
                    { name: 'Каналы', value: message.guild.channels.size, inline: true },
                    { name: 'Роли', value: message.guild.roles.size, inline: true },
                    { name: 'Дата создания', value: `${message.channel.guild.createdAt.toUTCString().substr(0, 16)} (${checkDays(message.channel.guild.createdAt)})`, inline: true },
                );
            message.channel.send(embed);

	},
};
