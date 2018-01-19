var events = require('events');
var util= require('util');
var eventEmitter= new events();
var ringBell = function ringBell(arr)
{
  console.log('ring ring ring'+ arr);
}

var ring = function ring(tttt)
{
  console.log('ring1 ring2 ring3'+tttt);
}
eventEmitter.on('doorOpen', ringBell);
eventEmitter.on('doorOpen', ring);

eventEmitter.emit('doorOpen',"mmm");

//advance event 


var Person= function(name){
    this.name=name;
}

util.inherits(Person, events);

var james= new Person('James');
var mery = new Person('Mery');
var ryu = new Person('Ryu');
var people=[james,mery,ryu];
people.forEach(function(person){

    person.on('speak', function(msg){
   console.log(person.name +" said "+msg );
    });

});

james.emit('speak','hey dudes');
mery.emit('speak','hey dudes');
ryu.emit('speak','hey dudes');



