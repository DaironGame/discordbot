const Discord = require('discord.js');

module.exports = {
	name: 'sendem',
	description: 'Помощь.',
	execute(message, args) {
        if (args[0] === 'yt') {
            message.channel.send("yt");
            let yt = new Discord.MessageEmbed()
             .setColor("16711680")
             .setTitle("Реклама")
             .setDescription("Реклама на канале **Dairon Game**")
             .setURL("https://www.youtube.com/channel/UCGZhXbVkFCh4pQuzZTuzM2g")
             .setAuthor("", "https://cdn.discordapp.com/attachments/730419733672886280/733684331922456677/download_1.png", "")
             .setThumbnail("https://pngimg.com/uploads/youtube/youtube_PNG2.png")
             .setFooter("DaironChat", "https://cdn.discordapp.com/attachments/730419733672886280/733689040733208606/pack.png")
             .addFields(
                { name: 'Реклама в видео', value: '**100 руб**\n**Приход:** 100 - 200 подписчиков в среднем.' },
                { name: 'Реклама в сообществе (на ютубе)', value: '**50 руб**\n**Приход:** зависит от качества поста.' },
                { name: '**Сроки:**', value: '**Реклама в сообществе** будет опубликована\nчерез несколько минут после оплаты, или\nкогда вы пожелаете.\n**Реклама в видео** будет в видео про\nрп/карту/аддон и т.п.\nИсключения: пиар в в видео может быть чуть позже\nиз-за очереди или если рп будет слит просто так (редко)' },
            )
         message.channel.send(yt);
        } else if (args[0] === 'ds') {
            message.channel.send("ds")
        };
        

	},
};
