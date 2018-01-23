const got = require('got');
const nonAmp = require('non-amp-site');

const bot = new Bot(tokens.amp, {
  message: async ({content, channel}) => {
    if (content.startsWith('!amp')) {
      if (content.match(/^!amp .+/)) {
        channel.send(`non-amp version: ${await nonAmp(content.replace(/!amp /, ""))}`)
      } else {
        channel.send("indeed, my good sir :tophat: :champagne_glass:");
      }
    }
  }
});
