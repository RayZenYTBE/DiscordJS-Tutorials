const Discord = module.require("discord.js");

module.exports = {
  config : {
    name: "github",
   description: "Search For results on GitHub"},
  
    run: async(client, message, args) => {
    const text = args.join(' ');
    const search = args.join('+');
    if (!text) {
    return message.channel.send("Enter some text to search for!")
    }
    const embed = new Discord.MessageEmbed()
    .setTitle("GitHub Search")
    .addField(`You Searched for`, `${text}`)
    .addField(`Results`, `[Here's What I found](https://github.com/search?q=${search})`)
    .setColor("GREY");
    message.channel.send(embed);
    }
}
