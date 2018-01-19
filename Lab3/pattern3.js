function Course(){
    this.courseName='CS472';
    this.getCourseName=function(){
        console.log(this.courseName);
    }
}
module.exports=new Course;