const got = require('got');
const nonAmp = require('non-amp-site');
const {URL} = require('url');

const bot = new Bot(tokens.amp, {
  message: async ({content, channel}) => {
    var nonamp = async url => channel.send(`non-amp version: ${await nonAmp(url)}`)
    if (content.startsWith('!amp')) {
      if (content.match(/^!amp .+/)) {
        try {
          nonamp(content.replace(/!amp /, ""));
        } catch (e) {
          if (e.message == "Document is not an AMP Page") {
            channel.send("That's not an amp page")
          }
        }
      } else {
        let msgs = channel.messages.array();
        loop1:
        for (var i = 2;;i++) {
          try {
            let new URI(msgs[msgs.length - i].content);
            nonamp(uri);
            break loop1;
          } catch (err) {
            if (err.code != "ERR_INVALID_URL") {
              throw err;
            }
          }
        }
      }
    }
  }
});
