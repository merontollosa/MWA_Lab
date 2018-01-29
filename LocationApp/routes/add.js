var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  //res.render('add', { title: 'Express' });
});

router.post('/',(req, res, next)=>{
        console.log('Add Called!')
        const name = req.body.name;
        const category = req.body.catagory;
        const long = parseFloat(req.body.longitude);
        const lat = parseFloat(req.body.latitude);
        console.log('long' +long);
        console.log('lat' +lat)
        console.log('category'+category);
        //console.log("Request DB :"+req.dbs);
        req.dbs.collection('location').insert([{location:{type:"Point", coordinates:[long, lat]},name: name, category: category}], (err, doc)=>{
            console.log('Add Called!')
            if(err) {
              console.error(err);
              res.render('error', { message:err });
            }
            console.dir(doc);
            res.send('result', {message:"Data successfully added!!"});
            db.close();
        });
});

module.exports = router