const Discord = require('discord.js');
const chancejs = require('chance');
const chance = new chancejs();

const cevaplar = [
	"**Yazı Çıktı!**",
	"**Tura Çıktı!**"
];

exports.run = function(client, message) {
	
	var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];
	
	if (cevap === "**Yazı Çıktı!**") {
		
		 const embedyazı = new Discord.RichEmbed()
		.setColor(0xf4b942)
		.setDescription(cevap)
		.setThumbnail("https://www.sikke.net/img/para/10/50-Kurus-2009-arka.png")
		message.channel.send(embedyazı);
		
	} else if (cevap === "**Tura Çıktı!**") {
		
		const embedtura = new Discord.RichEmbed()
		.setColor(0xf4b942)
		.setDescription(cevap)
		.setThumbnail("https://www.sikke.net/img/para/10/50-Kurus-2009-on.png")
		message.channel.send(embedtura);
		
	}
		

};  

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'yazıtura', 
  description: 'Yazı-Tura atar.',
  usage: 'yazıtura'
};