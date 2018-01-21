//anser Exercise 1

//reading file with child process
const cluster = require('cluster');
const fork = require('child_process').fork;
const os = require('os');
const fs = require("fs");
const http = require('http');
const url = require('url');
var server = http.createServer();

if(cluster.isMaster){
   server.on('request', function (req, res) { 
        var reqPath = url.parse(req.url, true).query.url;
        console.log(reqPath);
        const childProcess = fork('child.js');
        childProcess.send(reqPath);
        childProcess.on('message', (reqPath) =>{
            console.log('Parent Process End!'+ reqPath);
            res.end();
        })})  
    
}else{
    require('./child');
}
server.listen(8000 ,function(){console.log("Server Running");});