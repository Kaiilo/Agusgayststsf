const fs = require('fs')
const chalk = require('chalk')
// EDIT DISINI
global.owner = ['6281352787682'] // no own
global.packname = 'Kaii' // nama pack sticker
global.author = '?'// nama author 
global.own = '?' //nama lu
global.bot = '?'//nama bot

global.mess = {
    success: 'success!',
    admin: 'This feature could be used by admins only!',
    botAdmin: 'Bot Must Be Admin First!',
    premime: 'Premium Special Features If You Want to Register Type Rent',
    owner: 'This feature could be used by owner only',
    group: 'Features Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'This feature could be used by bot only',
    wait: 'proses...',
    linkm: 'Where is the link?',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    nsfw: 'The nsfw feature has not been activated, please contact the admin to activate',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})
require("http").createServer((_, res) => res.end("Uptime!")).listen(8080)

