const Discord = require('discord.js');
const ayarlar = require('../ayar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, args) => {
  
  let girdi = args.join(' ')
  if (!girdi) return message.channel.send("⚠ **|** Bir şey sormalısın ki cevaplayayım.")
  let cevaplar = ["Sanırım haklısın.", "Hiç sanmıyorum.", "Kesinlikle!", "Katılıyorum.", "Bu soruyu çok düsündün mü?", "Emin değilim.", "Haklı olduğunu düşünüyorum.", "Uhm, bilemedim.", "De siktir lo."]
  let random = cevaplar[Math.floor(Math.random() * cevaplar.length)]
  
 const embed = new Discord.RichEmbed()
 .setColor("#ffffff")
 .setFooter(`${message.author.tag} tarafından istendi.`)
 .setTimestamp()
 .setDescription(`**Soru:** \n\`\`\`${girdi}\`\`\` \n**Cevap:** \n\`\`\`${random}\`\`\``)
 
 message.channel.send(embed);
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: '8ball',
  description: 'Sorduğunuz soruya rastgele cevap verir.',
  usage: "8ball <soru>",
  kategori: 'Eğlence komutları'
};;