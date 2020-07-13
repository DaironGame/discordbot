const Discord = require('discord.js');
const client = new Discord.Client();

client.commands = new Discord.Collection();

//при запуске
client.on("ready", () => {
   console.log("Бот запущен!");
   client.user.setActivity('за всеми учасниками Dairon CHat', { type: 'WATCHING' });
   const channel = client.channels.cache.get('731779489943519312');
   channel.send(`Бот запущен!`);
});

let notAllowedWords = new Array("сука", "пидор", "блять", "хуила", "хуй","мудила","шлюха","гей","чсв","бля","ска","cука",
"сюк","блет","блэт","гавно", "ахуеть","ахуел","чмо","пидр","дебил","даун","заебал","сук","соси","пососи","сосать", "жопа",
"сюк", "чмошник", "пох", "похуй", "тварь", "лох", "еблан", "хуйня","пидар", "пидарасина");


client.on('message', message => {

     //антимат
    let arrayOfStrings = message.content.toLowerCase().split(' ');
    for (mat of notAllowedWords) {
        if (arrayOfStrings.includes(mat)) {
            message.delete();
            message.reply("такое говорить запрещено!");
            return;
        };
    };

    //проверка на комманду и т.п.
    if (!message.content.startsWith(prefix) || message.author.bot) return;
	const args = message.content.slice(prefix.length).split(' ');
    const commandName = args.shift().toLowerCase();
	
    if (!client.commands.has(commandName)) return;

    //restart
    if (commandName === 'mp') {
        process.exit();
    };

    //say
    if (commandName === 'say') {
        const channel = client.channels.cache.get('696433727357845576');
        channel.send(args);
    };

    if (commandName === 'dev' || commandName === 'developer') {
	    let devEmbed = new Discord.MessageEmbed()
	     .setColor('#FF7F00')
	     .setTitle('Разработчик:')
         .setDescription('**Dairon Game**')
         .setThumbnail('https://cdn.discordapp.com/attachments/698215230114889759/730748859084570674/pack.png');
        message.channel.send(devEmbed);
    };
	
    // if (commandName === 'news') {
    //     const channel = client.channels.cache.get('666329910591225867');
	// 	let Embed = new Discord.MessageEmbed()
	//      .setColor('#fca903')
	//      .setTitle('Новости')
    //      .setDescription('**.');
    //     channel.send(Embed);
    // };

});

//new member
client.on('guildMemberAdd', member => {
    const channel = client.channels.cache.get('666330099704004649');
    channel.send(`Здравствуй, ${member}, добро пожаловать на **Dairon Chat**!`);
  });
  

client.login(process.env.BOT_TOKEN);
