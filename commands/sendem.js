const Discord = require('discord.js');

module.exports = {
	name: 'sendem',
	description: 'Помощь.',
	execute(message, args) {
        if (args[0] === 'yt') {
            message.channel.send("yt");
            let yt = new Discord.MessageEmbed()
             .setColor("FF0000")
             .setTitle("Реклама")
             .setURL("https://www.youtube.com/channel/UCGZhXbVkFCh4pQuzZTuzM2g")
             .setDescription("Реклама на канале **Dairon Game**")
             .setThumbnail("https://pngimg.com/uploads/youtube/youtube_PNG2.png")
             .addFields(
                { name: 'Реклама в видео', value: '**100 руб**\n**Приход:** 100 - 200 подписчиков в среднем.' },
                { name: 'Реклама в сообществе (на ютубе)', value: '**50 руб**\n**Приход:** зависит от качества поста.' },
                { name: '**Сроки:**', value: '**Реклама в сообществе** будет опубликована\nчерез несколько минут после оплаты, или\nкогда вы пожелаете.\n**Реклама в видео** будет в видео про\nрп/карту/аддон и т.п.\nИсключения: пиар в в видео может быть чуть позже\nиз-за очереди или если рп будет слит просто так (редко)' },
             )
             .setFooter("DaironChat", "https://cdn.discordapp.com/attachments/730419733672886280/733684331922456677/download_1.png")
         message.channel.send(yt);
        } else if (args[0] === 'ds') {
            message.channel.send("ds")
        };
        

	},
};
