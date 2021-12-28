const Discord = require("discord.js")
const client = new Discord.Client()

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("message", msg => {
  if (msg.content === "ping") {
    msg.reply("pong");
  }
})

client.login("OTI1MzUwMjg4MDcwNzAxMTE4.Ycr1nA.5UFbpGZ8cEYiEgOT7NQteV_Z7dM")