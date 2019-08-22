const Discord = require('discord.js')
const util = require('util');
const db = require("quick.db")
const tokenuyari = `Çok gizli, sakın bakma!`

exports.run = async (client, message, args) => {
 if (message.author.id !== '601130468124917760')return message.channel.send('⚠ **|** Üzgünüm, yetkin yok.')
    if(!args[0]) {
        return message.channel.send('**r!eval <kod>**')
    }
    const code = args.join(' ');
    if(code.match(/(client.token)/g)) {
        const newEmbed = new Discord.RichEmbed()
            .addField(':x: Hata', `\`\`\`xl\n${tokenuyari}\`\`\``)
            .setColor('#FFFFFF');
        message.channel.send(newEmbed);
        return
    }

    function clean(text) {
        if (typeof text !== 'string')
            text = require('util').inspect(text, { depth: 0 })
        text = text
            .replace(/`/g, '`' + String.fromCharCode(8203))
            .replace(/@/g, '@' + String.fromCharCode(8203))
        return text;
    };

    const evalEmbed = new Discord.RichEmbed().setColor('FFFFFF')
    try {
        var evaled = clean(await eval(code));
        if(evaled.startsWith('NDc4O')) evaled = tokenuyari;
        if (evaled.constructor.name === 'Promise') evalEmbed.setDescription(`\`\`\`\n${evaled}\n\`\`\``)
        else evalEmbed.setDescription(`\`\`\`xl\n${evaled}\n\`\`\``)
        const newEmbed = new Discord.RichEmbed()
            .addField('📥 Gelen Veri', `\`\`\`javascript\n${code}\n\`\`\``)
            .addField('📤 Sonuç', `\`\`\`xl\n${evaled}\`\`\``)
            .setColor("FFFFFF")
        message.channel.send(newEmbed);
    }
    catch (err) {
        evalEmbed.addField(':x: Hata', `\`\`\`xl\n${err}\n\`\`\``);
        evalEmbed.setColor('#FFFFFF');
        message.channel.send(evalEmbed);
    }
  }

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['evsat, kod'], 
    permLevel: 0
}

exports.help = {
    name: 'eval',
    description: 'Yazılan kodu çalıştırır.',
    usage: 'eval'
};