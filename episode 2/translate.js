const Discord = module.require("discord.js");
const translate = require('@iamtraction/google-translate');

module.exports = {
  config : {
    name: "en",
   description: "English"},
  
    run: async(client, message, args) => {
      const query = args.join(" ");
      if (!query) return message.reply("Please specify a text to translate");

      const translated = await translate(query, { to: 'en'});
      message.channel.send(translated.text)
    }
};
