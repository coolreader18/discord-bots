const EpicHAL = require('epichal');

var hal = new EpicHAL(),
learn = edu => hal.learn(edu, ()=>{}),
clear = new Set(),
listen = new Set();

const bot = new Bot(tokens.hal, {
  message: ({content, channel, author}) => {
    if (listen.has(channel.id)) {
      if (!author.bot) {
        if (content.startsWith("!hal ")) {
          var [command, ...args] = content.split(" ").splice(1),
          reply = int => hal.reply(int, (a, rep) => {if (rep) channel.send(rep)});
          args = args.join(" ")
          switch (command.toLowerCase()) {
            case "learn":
              learn(args)
              break;
            case "reply":
              reply(args)
              break;
            case "clear":
              clear.add(author.id);
              if (clear.size == 5) {
                hal.clear(()=>{})
                clear.clear()
                channel.send("HAL cleared.")
              } else {
                channel.send(`Need ${5-clear.size} more to clear.`)
              }
              break;
            case "deaf":
              listen.delete(channel.id)
              break;
            default:
              reply(content)
          }
        } else {
          learn(content)
        }
      }
    } else if (content.startsWith("!hal listen")) {
      listen.add(channel.id)
    }
  },
  disconnect: err => {
    console.log(err)
  }
});
