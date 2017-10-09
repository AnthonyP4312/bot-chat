const readline = require('readline');
const io = require('socket.io-client');
const socket = io('http://10.0.0.247:420');
const colors = require('colors') // eslint-disable-line no-unused-vars
const getStdin = require('get-stdin');
const roll = require('lodash.random')


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

socket.on('chat', (user, message) => {
  readline.clearLine(process.stdout, 0)
  readline.moveCursor(process.stdout, -80, -1)

  console.log(`${user[getColor(user)]}: ${message}` + '\n')
  rl.prompt(true);
})

console.log()
console.log()
console.log()
rl.setPrompt('Tanners: '.magenta);
rl.prompt();

rl.on('line', function(line) {
  readline.clearLine(process.stdout, 0)
  readline.moveCursor(process.stdout, -80, -1)
  socket.emit('chat', line)
  rl.prompt();
}).on('close', function() {
    process.exit(0);
});

let userColors = new Map()
let colorList = ['red', 'green', 'yellow', 'blue', 'cyan', 'magenta']
//assigns colors for new users
function getColor(user){
  if (userColors.get(user)) {
    return userColors.get(user)
  }
  let color = colorList[roll(0, colorList.length-1)]
  userColors.set(user, color)
  return userColors.get(user)
}
