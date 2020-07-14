const Discord = require('discord.js');

module.exports = {
	name: 'serverinfo',
	description: 'Инфа о сервере.',
	execute(message, args) {
            let servembed = new Discord.MessageEmbed()
                .setColor('#00ff00')
                .setAuthor(message.guild.name, message.guild.iconURL)
                .setThumbnail(message.guild.iconURL)
                .setTitle('Информация о сервере')
                .setDescription(`Название: ${message.guild.name}\nАйди: ${message.guild.id}\nСоздатель: ${message.guild.owner}\nРегион: :flag_ru: Россия\nКаналы: ${message.guild.channels.size}\nРоли: ${message.guild.roles.size}`);
            message.channel.send(servembed);

	},
};
