 var http=require('http');
 var module01=require('./httpmoduleExample');

function onRequest(request, response){
    response.writeHead(200,{'content-Type': 'text/plain'});
    response.write(module01.myString);
    response.end();
    
}
http.createServer(onRequest).listen(8000);