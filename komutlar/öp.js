const Discord = require('discord.js');
const ayarlar = require('../ayar.json');

var prefix = ayarlar.prefix;

exports.run = async (client, message, args) => {
  let girdi = args.join(' ')
  if (!girdi) return message.channel.send(`⚠ **|** Üyenin ismini/idsini gir veya üyeyi etiketle.`)
  let uye = message.guild.members.get(girdi) || message.guild.member(message.mentions.users.first()) || message.guild.members.find(e => e.user.tag.toLowerCase().includes(girdi.toLowerCase()))
  if (!uye) return message.channel.send(`⚠ **|** Bu üyeyi bulamadım, lütfen tekrar dene.`)
  if (uye.id === message.author.id) return message.channel.send(`⚠ **|** Kendini öpemezsin.`)
  message.channel.send(`<a:5952514928401449151:598866880681476096> <@${message.author.id}> **üyesi** <@${uye.id}> **üyesini öptü!**`)
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'öp',
  description: 'Anlık ping değerlerini gösterir.',
  usage: "ping"
};;