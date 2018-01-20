var url = require('url');
const fs= require('fs');
function renderHTML(path, response){
    fs.readFile(path, null, function(error, data){
         if(error){
             response.writeHead(404);
             response.write("File not Found");
         }
         else{
            response.data;
         }
         response.end();
    });
}
module.exports = {

    handleRequest : function(request, response){
        response.writeHead(200,{'content-type' :'text/html'})
        var path = url.parse(request.url).pathname;
        
        switch(path){
            case '/' :
               renderHTML('./index.html', response);
               break;
            case '/login': 
               renderHTML('./login.html', response);
               break;
            default:
               response.writeHead(404);
               response.write('Route not Found');
               response.end();


        }
         

    }

};