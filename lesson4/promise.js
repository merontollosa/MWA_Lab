var Studied = true;
var willPassTheExam = function(){

    return new Promise(function(resolve, reject){
       if(Studied) resolve('Pass');
       else reject(new Error('Fail'));

    })
};

var askMe= function(){
    willPassTheExam()
           .then(function(results){console.log(results)})
           .catch(function(error){console.log(error)});
};

askMe();
console.log('Finish');