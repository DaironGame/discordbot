const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const moment = require('moment');

module.exports = {
	name: 'user-info',
	description: ' Информация о пользователе.',
	execute(message, args) {
		let user = message.mentions.users.first() || message.author;
        const joinDiscord = moment(user.createdAt).format('llll');
        const joinServer = moment(user.joinedAt).format('llll');
        let embed = new Discord.RichEmbed()
         .setAuthor(user.username + '#' + user.discriminator, user.displayAvatarURL)
         .setDescription(`${user}`)
         .setColor(`RANDOM`)
         .setThumbnail(`${user.displayAvatarURL}`)
         .addField('Присоединился:', `${moment.utc(user.joinedAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
         .addField('Статус:', user.presence.status, true)
         .setFooter(`Айди: ${user.id}`)
         .setTimestamp();

    message.channel.send({ embed: embed });
	},
};
