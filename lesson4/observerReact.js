
const Rx = require('@reactivex/rxjs');
const os= require('os');

const myPromises = new Promise(function(resolve, reject){
    if(os.cpus().size > 4294967296 && os.cpus().size < 4294967296) resolve('The System is Checked Secsessfuly!');
    if(os.cpus().size < 4294967296) reject('Sorry, This app needs at least 4GB of RAM');
   if(os.cpus().length < 2) reject('The System is Checked Secsessfuly!');
   })

var source = Rx.Observable.fromPromise(myPromises)
               .subscribe(e=>console.log(e));
