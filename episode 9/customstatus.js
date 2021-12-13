const express = require("express")
const app = express()

app.get("/", (req, res) => {
  res.send("It's Working! Read The TUTORIALLL file!")
})

app.listen(3000, () => {
  console.log("Project has sucessfuly Loaded and ready to go!")
})

let Discord = require("discord.js")
let client = new Discord.Client()


client.on('ready', () => {
 client.user.setActivity(`YOUR BOT STATUS`, { type: 'PLAYING'})
})//PLAYING, LISTENING, STREAMING, WATCHING, dnd, IDLE

client.login(process.env.token);//Create a new Secrets Environment Variables at the Lock button on the left menu. Name the KEY as "token" and fill the VALUE with your bot token
