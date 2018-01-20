const EpicHAL = require('EpicHAL');

var hal = new EpicHAL(),
learn = edu => hal.learn(edu, ()=>{}),
clear = new Set();

const client = new Discord.Client();
client.on('ready', () => {
  console.log("epic-hal ready!");
})
client.on('message', ({content: cont, channel, author}) => {
  if (author.id != 403978213300371466) {
    if (cont.startsWith("!hal ")) {
      var [command, ...args] = cont.split(" ").splice(1),
      reply = int => hal.reply(int, (a, rep) => channel.send(rep));
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
          if (set.size == 5) {
            hal.clear(()=>{})
            channel.send("HAL cleared.")
          } else {
            channel.send(`Need ${5-set.size} more to clear.`)
          }
          break;
        default:
          reply(cont)
      }
    } else {
      learn(cont)
    }
  }
})
client.on('disconnect', err => {
  console.log(err)
})
client.login(tokens.hal)
