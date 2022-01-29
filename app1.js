// const os = require('os')

// const user = os.userInfo()
// console.log(user)

// console.log(`The system uptime is ${os.uptime()} seconds`)

// const currentOS = {
//     name : os.type(),
//     release : os.release(),
//     totalMem : os.totalmem(),
//     freeMem: os.freemem()
// }

// console.log(currentOS)

const { readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt' , 'utf-8')
const second = readFileSync('./content/second.txt' , 'utf-8')

writeFileSync(
    './content/result-sync.txt' ,
    `Here is the result : ${first} , ${second}`,
    {flag: 'a'}
)




