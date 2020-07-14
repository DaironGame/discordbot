const Discord = require('discord.js');
const ms = require("ms");

module.exports = {
	name: 'mute',
	description: 'мут на время.',
	execute(message, args) {
        let tomute = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
        if(!tomute) return message.reply("не получилось найти пользователя.");
        if(message.author.id === message.mentions.users.first()) return message.reply("ты не можешь замутить самого себя :facepalm-1:");
        let muteRole = message.guild.roles.cache.find(val => val.name === "Muted");
    
            message.guild.channels.cache.forEach(async (channel, id) => {
                await channel.createOverwrite(muteRole, {
                    SEND_MESSAGES: false,
                    MANAGE_MESSAGES: false,
                    READ_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
         } catch(e) {
            console.log(e.stack);
         }
        };
//     let mutetime = args[1];
//     if(!mutetime) return message.reply("вы не указали время для мута.");
    
//     const embedd = new Discord.MessageEmbed()
//     .setColor(0x00FFFF)
//     .setTimestamp()
//     .addField('Замученный:', `${tomute.username}#${tomute.discriminator} (${tomute.id})`)
//     .addField('Замутивший:', `${message.author.username}#${message.author.discriminator}`)
//     .addField('Время мута', ms(ms(mutetime)))
//     .setFooter(`Dairon Chat`);
//     message.channel.send(embedd);

//     message.guild.member(tomute).roles.add(muteRole);

//     setTimeout(function(){
//         message.guild.member(tomute).roles.remove(muteRole)
//         message.channel.send(`<@${tomute.id}> был размучен`)
//     }, ms(mutetime));

	},
};
