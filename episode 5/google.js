const Discord = module.require("discord.js");

module.exports = {
  config : {
    name: "google",
   description: "Search For results on Google"},
  
    run: async(client, message, args) => {
    const text = args.join(' ');
    const search = args.join('+');
    if (!text) {
    return message.channel.send("Enter some text to search for")
    }
    const embed = new Discord.MessageEmbed()
    .setTitle("Google Search")
    .addField(`You Searched for`, `${text}`)
    .addField(`Results`, `[Here's What I found](https://www.google.com/search?q=${search})`)
    .setColor("RANDOM");
    message.channel.send(embed);
    }
}
