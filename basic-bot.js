module.exports = class Bot extends Discord.Client {
  constructor(token, listeners, setup) {
    super();
    this.on('ready', () => {
      console.log(`${this.user.username} ready!`)
    })
    if (listeners) {
      Object.entries(listeners).forEach(cur => {
        this.on(...cur)
      })
    }
    if (setup) {
      setup(this)
    }
    this.login(token)
  }
};
