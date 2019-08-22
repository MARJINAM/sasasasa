const Discord = require('discord.js');
const ayarlar = require('../ayar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message) => {
 let embed = new Discord.RichEmbed()
 .setAuthor(`Royal | Yardım menüsü`)
 .setThumbnail(client.user.avatarURL || client.user.defaultAvatarURL)
 .setFooter(`${message.author.tag} tarafından istendi.`)
 .setTimestamp()
 .setColor('#FFFFFF')
 .setDescription(`⚠ **Başında + bulunan komutlar sadece yetkililere özeldir.** \n\n**/ping -** Anlık gecikme süresini gösterir. \n**/öner <öneri> -** Bot veya sunucu hakkında öneride bulunmanızı sağlar. \n**+ /erkek <@üye | <id> | <isim> -** Üyeyi erkek olarak kayıt eder. \n**+ /kız - <@üye | <id> | <isim> -** Üyeyi kız olarak kayıt eder. \n**+ /temizle <sayı> -** Girilen sayıda mesaj siler. \n**+ /nick - <@üye | <id> | <isim> -** Yazarak kullanıcının ismini değiştirebilirsiniz. \n**+ /tag  <@üye | <id> | <isim> - Tagı olan kullanıcıların ismini değiştirmek için kullanılır.**  `)
 message.channel.send(embed)
  }

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Anlık ping değerlerini gösterir.',
  usage: "yardım"
};;