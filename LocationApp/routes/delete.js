var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('delete', { title: 'Express' });
});

router.post('/',(res, req, next)=>{
        console.log('Delete Called');
        const name = req.body.name;
        const category = req.body.category;
        console.log("name :"+name);
        console.log("name :"+category);
        console.log('query Called')
        req.dbs.collection('location').remove({name: name, category: category}, (err, removed)=>{
            console.log('query Called')
            if(err) {
              console.error("Error : "+err);
              res.send('error', { message:err });
            }
            console.log("Data successfully removed!!");
            res.render("Data successfully removed!!");
            db.close();
        });
});

module.exports = router;