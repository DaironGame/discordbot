const Discord = require('discord.js');

module.exports = {
	name: 'avatar',
    description: 'ava.',
    aliases: ['ava'],
	execute(message, args) {
        if (message.mentions.users.first() == '531116044794855425' || message.mentions.users.first() == '694281589961654292') {
            message.channel.send('Аватар данного пользователя заблокирован.');
            return;
        };
        let avatar = message.mentions.users.size ? message.mentions.users.first().avatarURL({ format: 'png', dynamic: true, size: 2048 }) : message.author.avatarURL({ format: 'png', dynamic: true, size: 2048 });
        if (message.mentions.users.size > 0) {
          const embed = new Discord.MessageEmbed()
           .setColor(0xFFFF00)
           .setTitle(`Аватарка ${message.mentions.users.first().username}:`)
           .setImage(`${avatar}`)
           .setFooter('DaironChat','https://cdn.discordapp.com/attachments/698215230114889759/730748859084570674/pack.png');
          message.channel.send({embed});
        } else {
          const embed = new Discord.MessageEmbed()
          .setColor(0xFFFF00)
          .setTitle(`Аватарка ${message.author.username}:`)
          .setImage(`${avatar + "?size=2048"}`)
          .setFooter('DaironChat','https://cdn.discordapp.com/attachments/698215230114889759/730748859084570674/pack.png');
        message.channel.send({embed});
        }
	},
};
