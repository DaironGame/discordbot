const fs = require('fs');
const Discord = require('discord.js');
const prefix = ".";
const client = new Discord.Client();
client.commands = new Discord.Collection();

const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

// fs.readdir("./commands", (err, files) => {
//     let jsfiles = files.filter(f => f.split(".").pop() === "js");

//     jsfiles.forEach((f, i) => {
//         let props = require(`./cmds/${f}`);
//         bot.commands.set(props.help.name, props);
//     });
// });

//при запуске
client.on("ready", () => {
   client.user.setActivity('за всеми учасниками Dairon CHat', { type: 'WATCHING' });
   const channel = client.channels.cache.get('731779489943519312');
   channel.send(`Бот запущен!`);
});

//запрещенные слова
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
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;  

    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);

    if(!command.startsWith(prefix)) return;

    let cmd = bot.commands.get(command.slice(prefix.length));
    if(cmd) cmd.run(bot, message, args);

//     //restart
//     if (cmd === 'mp') {
//         process.exit();
//     };

//     //say
//     if (cmd === 'say') {
//         const channel = client.channels.cache.get('696433727357845576');
//         channel.send(args);
//     };

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
