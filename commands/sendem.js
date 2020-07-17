const Discord = require('discord.js');

module.exports = {
	name: 'sendem',
	description: 'Помощь.',
	execute(message, args) {
        if (args[0] === 'ds') {
            let ds = {
                "title": "Реклама",
                "description": "Реклама в данном дискорд сервере в канале **новости**",
                "url": "https://www.youtube.com/channel/UCGZhXbVkFCh4pQuzZTuzM2g",
                "color": "003CFF",
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
        message.channel.send({ embed: ds });
        message.delete();
        } else if (args[0] === 'yt') {
            let yt = {
                "title": "Реклама",
                "description": "Реклама на канале **Dairon Game**",
                "url": "https://www.youtube.com/channel/UCGZhXbVkFCh4pQuzZTuzM2g",
                "color": 16711680,
                "footer": {
                  "icon_url": "https://cdn.discordapp.com/attachments/730419733672886280/733689040733208606/pack.png",
                  "text": "DaironChat"
                },
                "thumbnail": {
                  "url": "https://pngimg.com/uploads/youtube/youtube_PNG2.png"
                },
                "author": {
                  "name": "Dairon",
                  "url": "https://www.youtube.com/channel/UCGZhXbVkFCh4pQuzZTuzM2g",
                  "icon_url": "https://cdn.discordapp.com/attachments/730419733672886280/733684331922456677/download_1.png"
                },
                "fields": [
                  {
                    "name": "Реклама в видео",
                    "value": "**100 руб**\n**Приход:** 100 - 200 подписчиков в среднем."
                  },
                  {
                    "name": "Реклама в сообществе (на ютубе)",
                    "value": "**50 руб**\n**Приход:** зависит от качества поста."
                  },
                  {
                    "name": "**Сроки:**",
                    "value": "**Реклама в сообществе** будет опубликована\nчерез несколько минут после оплаты, или\nкогда вы пожелаете.\n**Реклама в видео** будет в видео про\nрп/карту/аддон и т.п.\nИсключения: пиар в в видео может быть чуть позже\nиз-за очереди или если рп будет слит просто так (редко)"
                  }
                ]
            }
            message.channel.send({ embed: yt });
            message.delete();
        } else if (args[0] === 'another') {
            let another = {
                "title": "Товары",
                "description": "Товары связанные с майнкрафтом, бравл старс в майнкрафте",
                "url": "https://www.youtube.com/channel/UCGZhXbVkFCh4pQuzZTuzM2g",
                "color": "09FF00",
                "footer": {
                "icon_url": "https://cdn.discordapp.com/attachments/730419733672886280/733689040733208606/pack.png",
                "text": "DaironChat"
                },
                "thumbnail": {
                "url": "https://www.minecraft.net/content/dam/minecraft/home/Games_Subnav_Minecraft-228x350.png"
                },
                "author": {
                "name": "Dairon",
                "url": "https://www.youtube.com/channel/UCGZhXbVkFCh4pQuzZTuzM2g",
                "icon_url": "https://cdn.discordapp.com/attachments/730419733672886280/733684331922456677/download_1.png"
                },
                "fields": [
                {
                    "name": "Ресурспак Аида с обновлениями",
                    "value": "**150 руб**\n"
                },
                {
                    "name": "Карта Аида с обновлениями",
                    "value": "**100 руб**\n"
                },
                {
                    "name": "Сроки",
                    "value": "Сразу же после оплаты\n"
                }
                ]
            }
            message.channel.send({ embed: another });
            message.delete();
        };
        

	},
};
