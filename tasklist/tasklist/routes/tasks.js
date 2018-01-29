

var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://bami:bami@ds215388.mlab.com:15388/mydatabase');
var ObjectID = require('mongodb').ObjectID;


/*router.get('/tasks', function(request, response, next){
      response.send('Task Api');

})*/
//get All tasks
router.get('/tasks', (req, res, next) => {
   db.tasks.find(function(err, tasks){
      if(err){
         res.send(err);
      }
      res.json(tasks);
   });
})

//get one list 

router.get('/tasks/:id', (req, res, next) => {
    console.log('id :'+req.params.id );
    db.tasks.findOne({_id :mongojs.ObjectID(req.params.id)}, (err, task) =>{
    
       if(err){
          res.send(err);
       }
       
       res.json(task);
    });
 });

 router.post('/tasks', (req, res, next) => {
     var task = req.body;
     var title = task.title;
     var isDone = task.isDone;
    // req.assert('title', 'Title is Required Field').notEmpty()
     //req.assert('isDone', 'Title is Required Field').notEmpty()

     //var error = request.validationErrors();
     //if(error) res.json({'error' : 'Inputs not correct!'});
     console.log('Title :'+ title +" isDone :"+ isDone);
     //
     db.tasks.insert(task, (err,t) => {
         if(err){
             res.send(err);
         }
         res.json(t);
     });
 });

 router.post('/tasks/:id', (req, res) => {
    console.log('id :'+req.params.id );
    var task = req.body;
    var updTask = {};
    
    if(task.title){
        updTask.title = task.title;
    }

    if(task.isDone){
        updTask.isDone = task.isDone;
    }

    if(!updTask){
        res.status(404);
        res.json({
            "error" : "Bad Data"
        });
    }else{
    
        db.tasks.update({_id :mongojs.ObjectID(req.params.id)},updTask,{}, (err, task) =>{
    
            if(err){
               res.send(err);
            }
            
            res.json(task);
         });
 }
});

router.delete('/tasks/:id', (req, res, next) => {
   
    console.log('id :'+req.params.id );
    
   
     db.tasks.remove({_id :mongojs.ObjectID(req.params.id)}, (err, task) =>{
    
            if(err){
               res.send(err);
            }
            
            res.json({'Message' : "DOcument Deleted!"});
         });
 });

 
  module.exports = router;