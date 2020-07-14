const Discord = require('discord.js');

module.exports = {
	name: 'serverinfo',
	description: 'Инфа о сервере.',
	execute(message, args) {
            function checkDays(date) {
                let now = new Date();
                let diff = now.getTime() - date.getTime();
                let days = Math.floor(diff / 86400000);
                return days + (days == 1 ? " day" : " days") + " ago";
            };
            let region = {
                "russia": ":flag_ru: Russia"
            };
            let servembed = new Discord.MessageEmbed()
                .setColor('#00ff00')
                .setAuthor(message.guild.name, message.guild.iconURL)
                .setThumbnail(message.guild.iconURL)
                .setTitle('Информация о сервере')
                .setDescription(`Название: ${message.guild.name}\nАйди: ${message.guild.id}\nСоздатель: ${message.guild.owner}\nРегион: ${region[message.guild.region]}`)
                .addFields(
                    { name: 'Всего | Людей | Ботов', value: `${message.guild.members.size} | ${message.guild.members.filter(member => !member.user.bot).size} | ${message.guild.members.filter(member => member.user.bot).size}`, inline: true },
                    { name: 'Каналы', value: message.guild.channels.size, inline: true },
                    { name: 'Роли', value: message.guild.roles.size, inline: true },
                    { name: 'Дата создания', value: `${message.channel.guild.createdAt.toUTCString().substr(0, 16)} (${checkDays(message.channel.guild.createdAt)})`, inline: true },
                );
            message.channel.send(servembed);

	},
};
