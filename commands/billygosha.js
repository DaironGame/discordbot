const Discord = require('discord.js');

module.exports = {
	name: 'billygosha',
    description: 'bg.',
    aliases: ['soezbitch', 'vodka', 'fiaysy', 'dboy', 'нек'],
	execute(message, args) {
        
        let images = new Array ('https://vignette.wikia.nocookie.net/peppa-pig/images/2/27/%D0%A1%D0%B2%D0%B8%D0%BD%D0%BA%D0%B0_%D0%9F%D0%B5%D0%BF%D0%BF%D0%B0-0.png/revision/latest/top-crop/width/360/height/450?cb=20190819080228&path-prefix=ru', 'https://cdn.discordapp.com/attachments/692076709301714974/733740581712429226/5WVHOmhzPtY.jpg');
        let ranColor = "#" + Math.random().toString(16).slice(2, 8);
        let image = images[Math.floor(Math.random() * images.length)];
            let inviteEmb = new Discord.MessageEmbed()
             .setColor(ranColor)
             .setImage(image)
             .setFooter('DaironChat','https://cdn.discordapp.com/attachments/698215230114889759/730748859084570674/pack.png');
             message.channel.send(inviteEmb)

	},
};
