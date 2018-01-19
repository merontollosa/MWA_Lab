
var fs = require("fs");
var http = require('http');

var server = http.createServer();
server.on('request',function (req, res) { 
    var stream = fs.createReadStream("D:\\MWA\\StreamFile\\viber image.jpg");
    stream.pipe(res);
});
server.listen(8000 ,function(){console.log("Server Running");});



