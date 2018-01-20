function myObservable(observer){
    observer.next('CS572');
    observer.Complete();
    observer.error('Error');

}

const observer = {
    next : function(value){console.log(value);},
    error : function(error){console.log('error :)')},
    Complete : function(){console.log('Complete');}

};

myObservable(observer);
