const Discord = require('discord.js');

exports.run = (client, message, args) => {
	
    message.channel.send(`Komut Başarılı! :white_check_mark: \nBot 20-30 saniye içerisinde otomatik olarak yeniden başlatılacak.`).then(msg => {
    console.log(`BOT: Bot yeniden başlatılıyor...`);
    process.exit(0);
  })
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'reboot',
  description: 'Botu yeniden başlatır.',
  usage: 'reboot'
};
