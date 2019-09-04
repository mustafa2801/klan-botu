const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let serverembed = new Discord.RichEmbed()
    .setDescription("**:chicken: Kurallar**")
    .setColor("#15f153")
    .addField("---------------","1. Küfür, hakaret etmek yasaktır.")
    .addField("---------------","2. Kullanıcılar isimlerini http://prntscr.com/o9ydcq bu şekilde yapmalıdır. (Gerçek isim - Oyun içi takma adı) ve ayrıca oyun içerisinde isim değişikliği yapıldığı zaman lütfen discord profilinizi de güncelleyiniz.")
    .addField("---------------","3. Uzun süre aktif olmadığınız zamanlarda ise lütfen bizlere mazeretinizi bildiriniz aksi durumunda klandan uzaklaştırılabilirsiniz.")
    .addField("---------------","4. @KS BAŞLATABİLİR rolü olan herkes klan savaşı başlatabilir bunun dışında @Klan Başkanı , @Klan Yöneticisi , @KS BAŞLATABİLİR  rolü olan kişilerden habersiz klan savaşlarına katılmak / başlatmak kesinlike yasaktır.")
    .addField("---------------","5. @Klan Başkanı  , @Klan Yöneticisi , @KS BAŞLATABİLİR  oda içerisinde hazır verin demeden kimse hazır vermesin.")

    message.channel.send(serverembed);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kurallar'],
  permLevel: 0
};

exports.help = {
  name: 'kurallar',
  description: 'Bütün kuralları gösterir.',
  usage: 'kurallar'
};
