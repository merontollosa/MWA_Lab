const express = require('express');

const app = express();
app.get('*',function(req, res){
res.status(201).send('Hello');


})