// const Discord = require('discord.js');
// const client = new Discord.Client();
// client.commands = new Discord.Collection();

// module.exports = {
// 	name: 'ban',
// 	description: 'Забанить участника.',
// 	execute(message, args) {
// 	 let xdemb = new Discord.RichEmbed()
//          .setColor("#00ff00")
//          .setTitle("Комманда бана")
//          .addField("Описание:", `Забанить участника`, true)
//          .addField("Использование:", `!ban [участник] [причина]`, true)
//          .addField("Пример:", `!ban @OXXSI слив рп`, true);

//         if (!message.member.hasPermission("BAN_MEMBERS") && message.author.id !== "531116044794855425") return message.channel.send("У вас нет прав!");

//         let member = message.mentions.members.first();
//         if (!member) return message.channel.send(xdemb);
//         if (!member.bannable) return message.channel.send("I can't ban this user!");
//         if (member.user.id === "531116044794855425") return message.channel.send("Я не могу забанить своего создателя!");

//         if (member.id === message.author.id) return message.channel.send("Вы не можете забанить самого себя");

//         let reason = args.slice(1).join(" ");

//         if(!reason) {
//             res = "Отсутствует причина";
//         } else {
//             res = reason
//         };

//         await member.ban(reason).catch(error => message.channel.send(`Изините, я не могу забанить потому что: ${error}`));

//         let bean = new Discord.RichEmbed()
//         .setColor("#00ff00")
//         .setTitle(`Бан | ${member.user.tag}`)
//         .addField("Участник", member, true)
//         .addField("Модератор", message.author, true)
//         .addField("Причина", res)
//         .setTimestamp();

//         message.channel.send(bean);

//         message.delete();

// 	},
// };
