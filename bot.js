const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');

client.commands = new Discord.Collection();
// const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
// for (const file of commandFiles) {
// 	const command = require(`./commands/${file}`);
// 	client.commands.set(command.name, command);
// };

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

    //restart
    if (commandName === 'mp') {
        process.exit();
    };

    //say
    if (commandName === 'say') {
        const channel = client.channels.cache.get('696433727357845576');
        channel.send(args);
    };

    // if (commandName === 'news') {
    //     const channel = client.channels.cache.get('666329910591225867');
	// 	let Embed = new Discord.MessageEmbed()
	//      .setColor('#fca903')
	//      .setTitle('Новости')
    //      .setDescription('**.');
    //     channel.send(Embed);
    // };


    if (!client.commands.has(commandName)) return;
    
    const command = client.commands.get(commandName);

    try {
	    command.execute(message, args);
    } catch (error) {
	    console.error(error);
};

});

//new member
client.on('guildMemberAdd', member => {
    const channel = client.channels.cache.get('666330099704004649');
    channel.send(`Здравствуй, ${member}, добро пожаловать на **Dairon Chat**!`);
    member.setRoles(['715946364420227132'])
        .then(console.log)
        .catch(console.error);
    // const stats = client.channels.cache.get('685433983907004550');
    // client.channels.get("685433983907004550").setName(`Участники:`)
  });
  

client.login(process.env.BOT_TOKEN);