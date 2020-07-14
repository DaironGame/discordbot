const Discord = require('discord.js');
const ms = require("ms");

module.exports = {
	name: 'mute',
	description: 'мут на время.',
	execute(message, args) {
        if (!message.member.hasPermission("KICK_MEMBERS")) {
            message.channel.send("У вас нет прав!");
            return;
        };
        let howUse = new Discord.MessageEmbed()
         .setColor('#008BD7')
	     .setTitle('Мут')
		 .setDescription('**Использование:**')
         .addField('.mute [ник] [время]', 'Например: `.mute @OXSSI 10h`', true)
         .setFooter('DaironChat','https://cdn.discordapp.com/attachments/698215230114889759/730748859084570674/pack.png');
        let tomute = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
        if(!tomute) return message.channel.send(howUse);
        let muteRole = message.guild.roles.cache.find(val => val.name === "Muted");

    let mutetime = args[1];
    if(!mutetime) return message.channel.send(howUse);

    let reason = args.slice(1).join(" ");

        if(!reason) {
            res = "не указана";
        } else {
            res = reason
        };
    
    let embedd = new Discord.MessageEmbed()
     .setColor('#008BD7')
     .setTitle('Мут')
     .setTimestamp()
     .addField('Замученный:', `${tomute}`)
     .addField('Замутивший:', `${message.author}`)
     .addField('Время мута', ms(ms(mutetime)), true)
     .addField('Причина', res, true)
     .setFooter('DaironChat','https://cdn.discordapp.com/attachments/698215230114889759/730748859084570674/pack.png');
    message.channel.send(embedd);

    message.guild.member(tomute).roles.add(muteRole);

    setTimeout(function(){
        message.guild.member(tomute).roles.remove(muteRole)
        message.channel.send(`<@${tomute.id}> был размучен`)
    }, ms(mutetime));

	},
};
