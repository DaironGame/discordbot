const Discord = require('discord.js');

module.exports = {
	name: 'help',
	description: 'Помощь.',
	execute(message, args) {
        let ranColor = "#" + Math.random().toString(16).slice(2, 8);
            let inviteEmb = new Discord.MessageEmbed()
             .setColor(ranColor)
             .setTitle('Помощь')
             .setDescription('`.help` - отправляет данное сообщение\n`.question [вопрос]` - задать вопрос боту\n`.ban [ник] [причина]` - забанить участника\n`.mute [ник] [время] [причина]` - замутить участника на время\n`.clear [количество_сообщений]` - очистить сообщения\n`.dev` - информация о разработчике');
            message.channel.send(inviteEmb)

	},
};
