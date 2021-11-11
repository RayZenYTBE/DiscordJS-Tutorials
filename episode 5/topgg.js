const Discord = module.require("discord.js");

module.exports = {
  config : {
    name: "topgg",
   description: "Search For results on Top.gg"},
  
    run: async(client, message, args) => {
    const text = args.join(' ');
    const search = args.join('+');
    if (!text) {
    return message.channel.send("Enter some text to search for!")
    }
    const embed = new Discord.MessageEmbed()
    .setTitle("Top.gg Search")
    .addField(`You Searched for`, `${text}`)
    .addField(`Results`, `[Here's What I found](https://top.gg/search?q=${search})`)
    .setColor("#FF3366");
    message.channel.send(embed);
    }
}
