Object.assign(global, {
  Discord: require('discord.js'),
  tokens: require("./tokens.js")
})

require('fs').readdirSync("bots").forEach(bot => {
  require(`./bots/${bot}`)
})
