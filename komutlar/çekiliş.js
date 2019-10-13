const Discord = require('discord.js');

exports.run = (bot, message, args) => {
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.reply('Bu çekilişin bir adı yok mu ? :blush:');
    const embed = new Discord.RichEmbed()
        .setColor("#36393F")
        .addField('Ödülün Adı', `${mesaj}`)
        .addField('Kazanan Talihli:', `${message.guild.members.random().displayName}`)
    message.channel.send("Tebrikler :blush:");
    return message.channel.send(embed);
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 2
};

exports.help = {
    name: 'çekiliş',
    description: 'çekiliş',
    usage: 'çekiliş'
};
