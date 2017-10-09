const readline = require('readline');
const io = require('socket.io');
const socket = io('http://10.0.0.247:420/test');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// loopChat()
//
// function loopChat(){
//   rl.question('What do you think of Node.js? ', (answer) => {
//     // TODO: Log the answer in a database
//     console.log(`Thank you for your valuable feedback: ${answer}`);
//
//     rl.close();
//     loopChat()
//   });
// }

rl.setPrompt('tanners: ');
rl.prompt();

rl.on('line', function(line) {
    console.log(line);
    rl.prompt();
}).on('close', function() {
    console.log('Have a great day!');
    process.exit(0);
});
