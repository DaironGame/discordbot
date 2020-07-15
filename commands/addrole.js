const Discord = require('discord.js');

module.exports = {
	name: 'addrole',
	description: 'фофыыфыв.',
	execute(message, args) {
      let howUse = new Discord.MessageEmbed()
        .setColor('#008BD7')
        .setTitle('Добавление роли')
        .setDescription('**Использование:**')
        .addField('.addrole [ник] [роль (без пинга)]', 'Например: `.addrole @Dairon Supreme`', true)
        .setFooter('DaironChat','https://cdn.discordapp.com/attachments/698215230114889759/730748859084570674/pack.png');
    if (message.mentions.users.size === 0) return message.channel.send(howUse);
    let member = message.guild.member(message.mentions.users.first());
    if (!member) return message.channel.send("❌**Ошибка:** Не найден пользователь.");
    let rname = message.content.split(" ").splice(2).join(" ");
    let role = message.guild.roles.cache.find(val => val.name === rname);
    if (!role) return message.channel.send(`❌**Ошибка:** ${rname} такой роли не существует!`);
    let botRolePosition = message.guild.member(client.user).roles.highest.position;
    let rolePosition = role.position;
    let userRolePossition = message.member.roles.highest.position;
    if (userRolePossition <= rolePosition) return message.channel.send("❌**Ошибка:** Не получилось выдать роль т.к. ваша роль ниже выдаваемой роли.")
    if (botRolePosition <= rolePosition) return message.channel.send("❌**Ошибка:** Не получилось выдать роль т.к. моя роль ниже выдаваемой роли.");
    member.roles.add(role).catch(e => {
        return message.channel.send(`❌**Ошибка:**\n${e}`);
    });
    message.channel.send(`Роль **${rname}** была добавлена **${message.mentions.users.first().username}**.`);

	},
};
