const Rx = require('@reactivex/rxjs');

var source = Rx.Observable.create(function(observer){
    observer.next('CS572');
   // observer.error('Error');
    observer.complete();
    
});
var subscriotion = source.subscribe(function(x){console.log(x)},
                                 function(err){console.log(err)},
                                 function(){console.log(console.info('Done!'));
                                });

    subscriotion.unsubscribe();
