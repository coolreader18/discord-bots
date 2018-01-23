const metascraper = require('metascraper');
const got = require('got');
const nonAmp = require('non-amp-site');

const bot = new Bot(tokens.amp, {
  message: message => {
    var {content: cont, channel} = message;
    if (cont.startsWith('!amp')) {
      if (cont.match(/^!amp .+/)) {
        nonAmp(cont.replace(/!amp /, "")).then(channel.send)
      } else {
        message.reply("indeed, my good sir :tophat: :champagne_glass:");
      }
    }
  }
});
