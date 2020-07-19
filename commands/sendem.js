const Discord = require('discord.js');

module.exports = {
	name: 'sendem',
	description: 'Помощь.',
	execute(message, args) {
        if (!message.author === '531116044794855425') return message.channel.send("У вас нет прав!");
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
        } else if (args[0] === 'nsfw') {
          let nsfw = {
            "title": "Открытие чата без правил 18+",
            "description": "**ВНИМАНИЕ!!! НЕ НАЖИМАЙТЕ НА РЕАКЦИЮ НИЖЕ ПРОСТО ТАК!**\n \nКогда вы нажмете на реакцию под этим сообщением вы откроете новый чат, в нем почти нет правил (чек. закреп), можно оскорблять друг друга, материться, нарушать любые правила из запрещенных в обычном чате, НО также там могут скидывать контент неприемлимый для некоторых пользователей, поэтому если вам нет 18 лет, то не желательно заходить в данный чат (кого это остановит .-.).\n \nЕсли же вы все же уверены в себе, то можете открыть данный чат нажав на реакцию под данным сообщением. Никакие наказания выдаваться не будут за тот чат (почти, кроме оск. администрации).",
            "color": "#D10000",
            "thumbnail": {
              "url": "https://s00.yaplakal.com/pics/pics_original/0/2/0/8851020.png"
            }
          };
          message.channel.send({embed: nsfw});
          message.delete();
        } else if (args[0] === 'build') {
          const embed = new Discord.MessageEmbed()
          .setTitle("Форма подачи заявки на билдерку")
          .setColor('#04ff00')
          .setDescription(`1) Ссылка на ваш вк \n2) Есть ли лицензия? (обязательно, без нее не принимается) \n3) Был ли опыт? \n4) Сколько можете уделить времени билдерству? (от 1 часа в день) \n5) Скрины работ \n6) Номер (в лс при подозрениях) \n \n \n**Подавая заявку вы автоматически соглашаетесь с правилами для билдеров <#666329853230055466>, а также соглашаетесь с тем, что никому и никогда не будете рассказывать конфиденциальную информацию которую узнаете будучи билдером, а также, что Вы не будете сливать карты и другие предметы, доступ к которым у вас будет когда вы станете билдером, в ином случае вы будете должны Дайрону 500 рублей, либо если не выплачиваете их в течении месяца, то на Вас можно подать заявление в полицию.** \n \n**Писать в данный канал сообщения по типу: "Почему отказали?" -- запрещено, если нарушаете - бан в данном канале.** \n \n**Заявки можно подавать 1 раз в неделю, иначе бан в данном канале навсегда.**`)
          .setFooter('DaironChat', 'https://cdn.discordapp.com/attachments/730419733672886280/734470032276324442/pack.png')
          .setTimestamp();
          message.channel.send({embed});
          message.delete();
        };
        

	},
};
