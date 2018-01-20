const http = require('http');
const server= http.createServer();
const { fork } = require('child_process');

server.on('request', (req, res) => {
   const childProcess=fork('longOperation.js');
childProcess.send('start');
childProcess.on('message' ,longOperation => {
    res.end(`Sum is ${sum}`);
});

});
server.listen(8080);
