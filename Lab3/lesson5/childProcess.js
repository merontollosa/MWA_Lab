//when it called end event
const http = require('http');
const pid = process.pid;
http.createServer((req, res)=> {
    res.end(`Handled by process ${pid}`);
}).listen(8080, ()=>{
     console.log(`Started Process ${pid}`);
});