
async function askMe(){ 
    try{
        console.log('Before Taking the Exam');
        let results= await willPassTheExam();
        console.log(results);
        console.log('after taking the exam');
    }catch(error){
        console.log(error);
    }
}
askMe();
console.log('Finish');
function willPassTheExam(){
    return "pass";
}