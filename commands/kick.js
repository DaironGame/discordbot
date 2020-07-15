const Discord = require('discord.js');

module.exports = {
	name: 'help',
	description: 'Помощь.',
	execute(message, args) {
        if (!message.member.hasPermission("KICK_MEMBERS")) {
            message.channel.send("У вас нет прав!");
            return;
        };
        let reason = args.slice(1).join(' ');
        let howUse = new Discord.MessageEmbed()
         .setColor('#8D00D7')
	     .setTitle('Кик')
		 .setDescription('**Использование:**')
         .addField('.kick [ник] [причина]', 'Например: `.kick @OXSSI оскорбление администрации`', true)
         .setFooter('DaironChat','https://cdn.discordapp.com/attachments/698215230114889759/730748859084570674/pack.png');
        let user = message.mentions.users.first();
        if (message.mentions.users.size < 1) return message.channel.send(howUse);
        if (user.id === message.author.id) return message.reply("я не могу позволить тебе сделать это, суицид - не выход! :facepalm-1:");
        if (user.id === client.user.id) return message.reply("ты думаешь, что я кикну самого себя?) :joy:");
        
        if (message.mentions.users.first().id === "531116044794855425" || message.mentions.users.first().id === "694281589961654292") return message.reply("я не могу кикнуть этого пользователя.");
        if(!reason) {
            res = "не указана";
        } else {
            res = reason
        };

        if (!message.guild.member(user).kickable) return message.reply('я не могу кикнуть данного пользователя.');
        
        let embedd = new Discord.MessageEmbed()
         .setColor('#8D00D7')
         .setTitle('Кик')
         .setTimestamp()
         .addField('Кикнутый:', `${message.mentions.users.first()}`)
         .addField('Кикнувший:', `${message.author}`)
         .addField('Причина', res, true)
         .setFooter('DaironChat','https://cdn.discordapp.com/attachments/698215230114889759/730748859084570674/pack.png');
        message.channel.send(embedd);

        message.guild.member(user).kick();
	},
};
