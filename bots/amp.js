const metascraper = require('metascraper');
const got = require('got');

const client = new Discord.Client();
client.on('ready', () => {
  console.log("amp-bot ready!")
})
client.on('message', message => {
  var {content: cont, channel} = message;
  if (cont.startsWith('!amp')) {
    if (cont.match(/^!amp .+/)) {
      (async () => {
        const {body:html, url} = await got(cont.replace(/!amp /, ""));
        const metadata = await metascraper({html, url});
        channel.send(metadata.canonical);
      })()
    } else {
      message.reply("indeed, my good sir :tophat: :champagne_glass:");
    }
  }
})
client.login(tokens.amp)
