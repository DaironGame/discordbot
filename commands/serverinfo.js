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
            let verifLevels = ["None", "Low", "Medium", "(╯°□°）╯︵  ┻━┻", "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"];
            let region = {
                "russia": ":flag_ru: Russia"
            };
            const embed = new Discord.MessageEmbed()
                .setAuthor(message.guild.name, message.guild.iconURL)
                .addField("Name", message.guild.name, true)
                .addField("ID", message.guild.id, true)
                .addField("Owner", `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`, true)
                .addField("Region", region[message.guild.region], true)
                .addField("Total | Humans | Bots", `${message.guild.members.size} | ${message.guild.members.filter(member => !member.user.bot).size} | ${message.guild.members.filter(member => member.user.bot).size}`, true)
                .addField("Verification Level", verifLevels[message.guild.verificationLevel], true)
                .addField("Channels", message.guild.channels.size, true)
                .addField("Roles", message.guild.roles.size, true)
                .addField("Creation Date", `${message.channel.guild.createdAt.toUTCString().substr(0, 16)} (${checkDays(message.channel.guild.createdAt)})`, true)
                .setThumbnail(message.guild.iconURL)
            message.channel.send({embed});

	},
};
