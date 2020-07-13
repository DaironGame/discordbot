const fs = require('fs');
const Discord = require('discord.js');
const config = require('./config.json');
const { prefix } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

client.login(process.env.BOT_TOKEN).catch((err) => {
    process.exit(0);
});

let notAllowedWords = new Array("сука", "пидор", "блять", "хуила", "хуй","мудила","шлюха","гей","чсв","бля","ска","cука",
"сюк","блет","блэт","гавно", "ахуеть","ахуел","чмо","пидр","дебил","даун","заебал","сук","соси","пососи","сосать", "жопа",
"сюк", "чмошник", "пох", "асторис", "асториз");

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
};

client.on("ready", () => {
   console.log("Бот запущен!");
   client.user.setActivity('за всеми учасниками Dairon CHat', { type: 'WATCHING' });
   const channel = client.channels.cache.get('731779489943519312');
   channel.send(`Бот запущен!`);
});


client.on('message', message => {
    //антимат
    for (mat of notAllowedWords) {
        if (message.content.toLowerCase().includes(mat) || !message.author.id === "531116044794855425") {
            message.delete();
            message.reply("такое говорить запрещено!");
        };
    };

    //проверка на комманду и т.п.
    if (!message.content.startsWith(prefix) || message.author.bot) return;
	const args = message.content.slice(prefix.length).split(' ');
    const commandName = args.shift().toLowerCase();

    //dev info
    if (commandName === 'developer' || commandName ==='dev') {
        let devEmbed = new Discord.MessageEmbed()
	     .setColor('#FF7F00')
	     .setTitle('Разработчик:')
         .setDescription('**Dairon Game**')
         .setThumbnail('https://cdn.discordapp.com/attachments/698215230114889759/730748859084570674/pack.png');
        message.channel.send(devEmbed);
    };

    //help
    if (commandName === 'help') {
        let Embed = new Discord.MessageEmbed()
	     .setColor('#1CFF00')
	     .setTitle('Помощь:')
         .setDescription('**В разработке...**')
        message.channel.send(Embed);
    };

    //restart
    if (commandName === 'mp') {
        process.exit();
    };

    //say
    if (commandName === 'say') {
        const channel = client.channels.cache.get('696433727357845576');
        channel.send(args);
    };


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
    // const stats = client.channels.cache.get('685433983907004550');
    // client.channels.get("685433983907004550").setName(`Участники:`)
  });
  

