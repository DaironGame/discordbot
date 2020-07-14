const Discord = require('discord.js');

module.exports = {
	name: 'help',
	description: 'Помощь.',
	execute(message, args) {
        let ranColor = "#" + Math.random().toString(16).slice(2, 8);
            let inviteEmb = new Discord.MessageEmbed()
             .setColor(ranColor)
             .setTitle('Помощь')
             .setDescription('`.help` - отправляет данное сообщение\n`.ban` - забанить участника\n`.clear` - очистить сообщения\n`.dev` - информация о разработчике');
            message.channel.send(inviteEmb)

	},
};
