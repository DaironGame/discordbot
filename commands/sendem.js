const Discord = require('discord.js');

module.exports = {
	name: 'sendem',
	description: 'Помощь.',
	execute(message, args) {
        if (args[0] === 'yt') {
            message.channel.send("yt");
            // let yt = new Discord.MessageEmbed()
            //  .setColor("FF0000")
            //  .setTitle("Реклама")
            //  .setURL("https://www.youtube.com/channel/UCGZhXbVkFCh4pQuzZTuzM2g")
            //  .setDescription("Реклама на канале **Dairon Game**")
            //  .setThumbnail("https://pngimg.com/uploads/youtube/youtube_PNG2.png")
            //  .addFields(
            //     { name: 'Реклама в видео', value: '**100 руб**\n**Приход:** 100 - 200 подписчиков в среднем.' },
            //     { name: 'Реклама в сообществе (на ютубе)', value: '**50 руб**\n**Приход:** зависит от качества поста.' },
            //     { name: '**Сроки:**', value: '**Реклама в сообществе** будет опубликована\nчерез несколько минут после оплаты, или\nкогда вы пожелаете.\n**Реклама в видео** будет в видео про\nрп/карту/аддон и т.п.\nИсключения: пиар в в видео может быть чуть позже\nиз-за очереди или если рп будет слит просто так (редко)' },
            //  )
            //  .setFooter("DaironChat", "https://cdn.discordapp.com/attachments/730419733672886280/733684331922456677/download_1.png")
            let yt = {
                "title": "Реклама",
    "description": "Реклама в данном дискорд сервере в канале **новости**",
    "url": "https://www.youtube.com/channel/UCGZhXbVkFCh4pQuzZTuzM2g",
    "color": 31231,
    "footer": {
      "icon_url": "https://cdn.discordapp.com/attachments/730419733672886280/733689040733208606/pack.png",
      "text": "DaironChat"
    },
    "thumbnail": {
      "url": "https://lh3.googleusercontent.com/_4zBNFjA8S9yjNB_ONwqBvxTvyXYdC7Nh1jYZ2x6YEcldBr2fyijdjM2J5EoVdTpnkA"
    },
    "author": {
      "name": "Dairon",
      "url": "https://www.youtube.com/channel/UCGZhXbVkFCh4pQuzZTuzM2g",
      "icon_url": "https://cdn.discordapp.com/attachments/730419733672886280/733684331922456677/download_1.png"
    },
    "fields": [
      {
        "name": "Без пинга",
        "value": "**10 руб**\n"
      },
      {
        "name": "С массовым пингом @here",
        "value": "**30 руб**\n"
      },
      {
        "name": "С массовым пингом @everyone",
        "value": "**50 руб**\n"
      },
      {
        "name": "Сроки",
        "value": "Когда вы пожелаете, хоть через минуту после оплаты"
      }
    ]
            }
         message.channel.send({yt});
        } else if (args[0] === 'ds') {
            message.channel.send("ds")
        };
        

	},
};
