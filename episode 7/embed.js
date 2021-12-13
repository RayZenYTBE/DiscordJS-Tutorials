const { Discord, MessageEmbed } = require("discord.js")

module.exports.run = async (client, message, args) => {
let embedmsg = new Discord.MessageEmbed()
    .setColor('RED')//you can use Hex color code, or solid color name like BLACK, WHITE, BLUE, or if you want random, type RANDOM
    .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))//you can edit the .setAuthor section with normal text!
    .setTitle('TITLE')
    .setDescription('DESCRIPTION')
    .setThumbnail('')//You can fill the Thumbnail section with image link only!
    .addField('FIELD', 'VALUE')
    .addField('FIELD', '[Linked Text](https://sites.google.com/view/atmostfeardevelopersite/home/)')
    .setImage('https://media.discordapp.net/attachments/792900419671949354/820689966648524800/rainbow_line.gif')//You can replace this link with another link you have!!!
    .setFooter('FOOTER')
message.channel.send(embedmsg);
}
