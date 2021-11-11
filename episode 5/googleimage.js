const Discord = module.require("discord.js");

module.exports = {
  config : {
    name: "image",
   description: "Search For image results on Google"},
  
    run: async(client, message, args) => {
    const text = args.join(' ');
    const search = args.join('+');
    if (!text) {
    return message.channel.send("Enter some text to search for")
    }
    const embed = new Discord.MessageEmbed()
    .setTitle("Google Image Search")
    .addField(`You Searched for`, `${text}`)
    .addField(`Results`, `[Here's What I found](https://www.google.com/search?q=${search}&bih=821&biw=1440&hl=en-US&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiZgbr8qcvzAhWIXCsKHdC3Ah0Q_AUoAXoECAEQAw&cshid=1634263514750174&safe=active&ssui=on)`)
    .setColor("WHITE");
    message.channel.send(embed);
    }
}
