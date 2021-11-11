const Discord = module.require("discord.js");

module.exports = {
  config : {
    name: "dbl",
   description: "Search For results on DiscordBotList"},
  
    run: async(client, message, args) => {
    const text = args.join(' ');
    const search = args.join('+');
    if (!text) {
    return message.channel.send("Enter some text to search for!")
    }
    const embed = new Discord.MessageEmbed()
    .setTitle("Top.gg Search")
    .addField(`You Searched for`, `${text}`)
    .addField(`Results`, `[Here's What I found](https://discordbotlist.com/search?q=${search})`)
    .setColor("BLACK");
    message.channel.send(embed);
    }
}
