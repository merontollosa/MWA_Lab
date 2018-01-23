var express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto'),
     algorithm = 'aes-256',
     password = 'asaadsaad';



var app= express();
var mongo = require('mongoskin');
var db = mongo.db("mongodb://localhost:27017/homework7", {native_parser:true});
var encrypted ="";
db.collection('message').findOne({},function(err, result) {
   console.dir(result.message);
   encrypted=result.message;
        db.close();
});


app.use(bodyParser.urlencoded({ extended: false }));


 
 app.get('/', function(req, res){
         
           // db.collection('message').findOne()(function(err, items) {
               // find();
               // console.log(items);
             res.send("Decrypted Value :" +decrypt());
            });
        
   

 app.listen(8000, () => {console.log("Server Started....")});
 

 
// Prints: some clear text data
function decrypt(){
    var decipher = crypto.createDecipher(algorithm,password)
    var dec = decipher.update(encrypted,'hex','utf8')
    dec += decipher.final('utf8');
    console.dir("Value :"+ dec);
    return dec;
  }