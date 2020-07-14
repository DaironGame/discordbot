const Discord = require('discord.js');

module.exports = {
	name: 'clear',
	description: 'Очистка.',
	execute(message, args) {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) {
            message.channel.send("У вас нет прав!");
            return;
        };
        const amount = parseInt(args[0]);

	    if (isNaN(amount)) {
		 return message.channel.send('Укажите число.');
	    } else if (amount < 1 || amount > 100) {
            return message.channel.send('Введите число от 1 до 100.');
        };
        message.channel.bulkDelete(amount, true);

        message.channel.send(`Удалено ${amount} сообщений!`);

        setTimeout(message.delete(), 1000);

	},
};
