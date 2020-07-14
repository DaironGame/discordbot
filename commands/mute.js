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
		 .addField('.mute [ник] [время]', 'Например: `.mute @OXSSI 10h`', true);
        let tomute = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
        if(!tomute) return message.channel.send(howUse);
        if(message.author.id === message.mentions.users.first()) return message.reply("ты не можешь замутить самого себя :facepalm-1:");
        let muteRole = message.guild.roles.cache.find(val => val.name === "Muted");

    let mutetime = args[1];
    if(!mutetime) return message.channel.send(howUse);
    
    let embedd = new Discord.MessageEmbed()
     .setColor('#008BD7')
     .setTimestamp()
     .addField('Замученный:', `${tomute}`)
     .addField('Замутивший:', `${message.author}`)
     .addField('Время мута', ms(ms(mutetime)))
     .setFooter(`Dairon Chat`);
    message.channel.send(embedd);

    message.guild.member(tomute).roles.add(muteRole);

    setTimeout(function(){
        message.guild.member(tomute).roles.remove(muteRole)
        message.channel.send(`<@${tomute.id}> был размучен`)
    }, ms(mutetime));

	},
};
