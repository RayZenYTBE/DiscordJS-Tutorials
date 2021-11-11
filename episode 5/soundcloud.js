const Discord = module.require("discord.js");

module.exports = {
  config : {
    name: "soundcloud",
   description: "Search For results on SoundCloud"},
  
    run: async(client, message, args) => {
    const text = args.join(' ');
    const search = args.join('+');
    if (!text) {
    return message.channel.send("Enter some text to search for!")
    }
    const embed = new Discord.MessageEmbed()
    .setTitle("SoundCloud Search")
    .addField(`You Searched for`, `${text}`)
    .addField(`Results`, `[Here's What I found](https://soundcloud.com/search?q=${search})`)
    .setColor("ORANGE");
    message.channel.send(embed);
    }
}
