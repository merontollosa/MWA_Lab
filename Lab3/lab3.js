import { WriteStream } from 'fs';



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
server.listen(8000, ()=>console.log('Server running'));

//Lab  3 Answer !!!!!!!!!!!!!!!!!

var EventEmitter = require('events'); 
'use strict';
class Clock extends EventEmitter{
  
  constructor(){
    super();
    console.log('Hiiii');
    var self = this;
    setInterval(()=>{ self.emit('tick');},1000);        
  }

}

var timer = new Clock();
timer.on("tick", ()=>{
    console.log("Woohoop!!!!!!!!!!!");
});


//Lab Qn 4 
var fs = require("fs"),
    zlib = require("zlib"),
    filename = "./input.txt",
    compress = zlib.createGzip(),//compressing
    decompress = zlib.createGunzip(),
    readStream = fs.createReadStream(filename);


function compressfile(filename){
  var newfilename = filename+".gz",
   writeStream = fs.createWriteStream(newfilename);
  readStream.pipe(compress).pipe(writeStream);
}

function decompressfile(filename){
  var newfilename = filename.replace(".gz",""),
  writeStream = fs.createWriteStream(newfilename);
  readStream.pipe(decompress).pipe(writeStream);
}

  decompressfile(filename);








