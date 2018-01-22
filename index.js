Object.assign(global, {
  Discord: require('discord.js'),
  tokens: require("./tokens.js")
})
global.Bot = require("./basic-bot.js")

loadBots(true)

function loadBots(...bots) {
  if (bots[0] == true) {
    require('fs').readdirSync("bots").forEach(bot => {
      require(`./bots/${bot}`)
    })
  } else {
    bots.forEach(bot => {
      require(`./bots/${bot}.js`)
    })
  }
}
