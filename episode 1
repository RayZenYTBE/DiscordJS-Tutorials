const Discord = module.require("discord.js");
const { PREFIX } = require("../../config")

module.exports = {
  config : {
    name: "bugrep",
   description: "Report a Bug to a Specified Channel"},
  
    run: async(client, message, args) => {
        if (message.author.bot) return;
        let valid = new Discord.MessageEmbed()
        .setColor('RED')
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
        .setTitle('Your Report Has Been Sent')
        .setDescription('Thanks for reporting a bug. This will help us improve much better.')
        .addField(`Reported by ${message.author.tag}`, 'Please wait for the admins to reply your report!')
        .setImage('https://media.discordapp.net/attachments/792900419671949354/820689966648524800/rainbow_line.gif')
        .setFooter('~ Thank You')
        message.channel.send(valid)
        const channel = client.channels.cache.get('CHANNEL_ID_FOR_REPORT_LOG_HERE')
        const ReportMessage = message.content.slice(7).trim();
        const ReportEmbed = new Discord.MessageEmbed()
            .setColor('#b700ff')
            .setTitle('Bug Report')
            .setDescription(ReportMessage)
            .addField(`Report Status :`, '**Received**')
            .addField(`Action :`, 'Please reply this report ASAP')
        channel.send(`||${message.author}||` + "**'s Report : - **")
        channel.send(ReportEmbed)
    }
}
