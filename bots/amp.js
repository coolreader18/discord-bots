const metascraper = require('metascraper');
const got = require('got');
const nonAmp = require('non-amp-site');

const bot = new Bot(tokens.amp, {
  message: async ({content: cont, channel, reply}) => {
    if (cont.startsWith('!amp')) {
      if (cont.match(/^!amp .+/)) {
        channel.send(`non-amp version: ${await nonAmp(cont.replace(/!amp /, ""))}`)
      } else {
        reply("indeed, my good sir :tophat: :champagne_glass:");
      }
    }
  }
});
