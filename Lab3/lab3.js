

// Lab 1 Answer!!!!!!!!
var dns = require('dns'); 
var mum = dns.lookup('https://online.cs.mum.edu/portal', function (err,addresses) {
  console.log(addresses);
});

//Lab 2 Answer!!!!!!!!

var fs = require("fs");
var http = require('http');

var server = http.createServer();
server.on('request',function (req, res) { 
    var stream = fs.createReadStream("D:\\MWA\\StreamFile\\viber image.jpg");
    stream.pipe(res);
});
//server.listen(8000, ()=>console.log('Server running'));

//Lab  3 Answer !!!!!!!!!!!!!!!!!

var EventEmitter = require('events'); 
'use strict';
class Clock extends EventEmitter{
  
  constructor(){
    super();
    this.message='woohoop!'
             this.on('tick',()=>{concole.log("message" + this.message);})
  }

}

var timer = new Clock();
timer.on.bind("tick", function() {
    console.log("Woohoop!!!!!!!!!!!");
});


  








