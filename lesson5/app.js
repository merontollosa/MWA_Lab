import { setTimeout, setInterval } from 'timers';

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var lessMiddleware = require('less-middleware');
var fetch = require('node-fetch');
var Rx= require('@reactivex/rxjs');

var index = require('./routes/index');
var users = require('./routes/users');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(lessMiddleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', index);
app.use('/users', users);

//customized setup
app.set('trust proxy', true);
app.enable('case sensitive routing');
app.enable('strict routing');
app.enable('view cache');


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//feach data 

const usersPromise = fetch('http://jsonplaceholder.typicode.com/users/');
const postPromise = fetch('http://jsonplaceholder.typicode.com/posts');
const userPromise = fetch('http://jsonplaceholder.typicode.com/users/1');



// console.log("============================User List ================================================")
// usersPromise.then(data => data.json())
//            .then(data => { 
//                           console.log(data)
//                         })
//            .catch((err) => {console.log(err)});
//  console.log("============================Post List ================================================")
//  postPromise.then(data => data.json())
//            .then(data => { 
//                         console.log(data)
//                           })
//             .catch((err) => {console.log(err)});
                                 
//  console.log("============================User Detail ================================================")
//   postPromise.then(data => data.json())
//               .then(data => { 
//                            console.log(data)
//                                })
//              .catch((err) => {console.log(err)});
                                            
app.get('/posts' ,(req, res) => {
    
     res.send("Post List");
})
app.get('/user' ,(req, res) => {
    
  res.send("User Detail");
})
//example 
// var everythingWorks= false;
// var giveMePizza = function(){
//   return new Promise((resolve, reject) =>{
//     if(everythingWorks){
//       resolve('This is True');
//     }else {
//       reject('this is false');
//     }
//   })
// }

// giveMePizza().then(data => console.log(data))
//              .catch((err) => console.log(err));
//   console.log('I will run immediately after calling after calling giveMePizza and before any result')

//var Studied = true;
/*var willPassExam = function(){
  return new Promise((resolve, reject) =>{
    if(true) resolve('Pass The Exam!');
    else reject('Fail');
  })
}*/
//convert Promise to Observables
 //Rx.Observable.fromPromise(willPassExam())
   //           .subscribe((e) => console.log(e))

//create New Observables INternally Produce Events
//var myObservable = Rx.Observable.create(observer =>{
  // observer.next('CS572');
  // setTimeout(()=> observer.next('Best Course Ever!',1000));
//})
// myObservable.subscribe(value => console.log(value))

//externally produce new Events

//var myObservable =new Rx.Subject();
//myObservable.subscribe(value => console.log(value));
//myObservable.next('CS572');


//pluck()
/*const source = Rx.Observable.fromPromise([
  {name : 'Asaad', age: 30, job: {title: 'developer', use: 'java'}},
  {name :'mmm', age: 29}
  .pluck('job','title')
  .subscribe(val => console.log(val))
])
var askme= function(){
  willPassExam()
             .then(function(result){console.log(result);})
             .catch(function(err){console.log(err);})
}*/
/*async function askme(){
  try{
    console.log('Befor Taking the Exam :)');
    let result = await willPassExam();
    console.log(result);
    console.log('After the Exam')
  }catch(err){
    console.log(err);
  }
}
askme();
console.log('Finish!');*/
/*const data =[
  {id :1 , name: 'name1'},
  {id :2 , name: 'name2'}
];
Rx.Observable.from(data)
             .map((obj) => ({mesg: `Hi ${obj.name}`}))
             .subscribe((obj) => {console.log(obj)})

//mergAll() vs flaeMap()
var source = Rx.Observable.interval(100).take(10)
                          .flatMap(x => Rx.Observable.of(1,2,3))
                        
  source.subscribe(x=> console.log(x));*/
  const myValue="",
  const setValue = (text) => {myValue= text; console.log(myValue)},
  const checkA = cb=>{setValue("Cheking Auth")
    //setTimeout ((()=>{cb(true);}), 2000)};
    
    const fetchUser =cb => {

      setValue('Fetching User');
     // setTimeout((()=> cb({name : "Assad"}),2000))
    };

var auth=true;
app.listen(8000, () => {
                      checkA(auth =>
                           { if(auth) 
                                fetchUser =>{setValue(user.name);}
                           }
              )});
//module.exports = app;