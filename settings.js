const fs = require('fs')
const chalk = require('chalk')
// EDIT DISINI
global.owner = ['6281352787682'] // no own
global.packname = 'Kaii' // nama pack sticker
global.author = '?'// nama author 
global.own = '?' //nama lu
global.bot = '?'//nama bot


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})

