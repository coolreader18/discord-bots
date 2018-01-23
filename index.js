Object.assign(global, {
  Discord: require('discord.js'),
  tokens: require("./tokens.json")
})
global.Bot = require("./basic-bot.js")

loadBots()

function loadBots(...bots) {
  if (bots[0] === true || bots.length == 0) {
    require('fs').readdirSync("bots").forEach(bot => {
      require(`./bots/${bot}`)
    })
  } else {
    bots.forEach(bot => {
      require(`./bots/${bot}.js`)
    })
  }
}
