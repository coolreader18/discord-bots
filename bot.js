const fs = require('fs');
const jsonfile = {
  write: require('write-json-file'),
  load: require('load-json-file')
}
const prompt = require('prompt');
var [,, arg, ...args] = process.argv;
switch (arg) {
  case "new":
    var arr = [],
    name, token;
    if (args[0]) {
      name = args[0]
    } else {
      arr.push('name')
    }
    if (args[1]) {
      token = args[1]
    } else {
      arr.push('token')
    }
    prompt.start()
    prompt.get(arr, (err, result) => {
      if (result) {
        name = name || result.name;
        token = token || result.token;
      }

      if (!err) {
        var path = `bots/${name}.js`
        try {
          fs.statSync(path);
          console.log("This already exists")
        } catch (err) {
          if (err.code == "ENOENT") {
            jsonfile.write.sync("tokens.json", Object.assign(jsonfile.load.sync("tokens.json"), {[name]:token}));
            fs.writeFileSync(path,
`const bot = new Bot(tokens.${name}, {
  message: message => {
    if (message.content == "hey") {
      message.channel.send("hey")
    }
  }
})`)
            }
          }
        }
      })
      break;
}
