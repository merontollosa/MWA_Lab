const play=require('./');
play.violin();
play.clarienet();

const getCourseName1=require('./pattern1');
getCourseName1();

const getCourseName=require('./pattern2').getCourseName;
getCourseName();

const myCourse=require('./pattern2');
myCourse.getCourseName();
//pattern 3 Module

let courseInstance=require('./pattern3');
courseInstance.getCourseName();
courseInstance.courseName='CS572';
let courseInstanceTwo=require('./pattern3'); //cached 
courseInstanceTwo.getCourseName();
//npm example

var moment = require('moment');
console.log(moment().format('ddd, hA'));
