//guildMemberRemove = bir kişi sunucudan çıktığında çalıaşcak fonksiyon
module.exports = (client, member) => {

var kanal = client.channels.get("618515033072336926")
 kanal.send(`:outbox_tray: | **${member.user.username}** adlı kişi sunucudan çıkış yaptı. `)

}