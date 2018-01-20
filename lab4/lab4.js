//anser Exercise 1

//reading file with child process
const cluster = require('cluster');
const os = require('os');
const fs = require("fs");
const http = require('http');
const url = require('url');

if(cluster.isMaster){

    var server = http.createServer();
    server.on('request',function (req, res) { 
        var reqPath = url.parse(req.url, true).query.url;
        console.log(reqPath);
        const childProcess = fork('child.js');
        childProcess.send(reqPath);
        childProcess.on('message', (message) =>{
            console.log('Parent Process End!');
            res.end();
        })
          

        })
     
    server.listen(8000 ,function(){console.log("Server Running");});
    
    
}