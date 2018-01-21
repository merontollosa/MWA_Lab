const os= require('os');
async function systemCheck(){ 
    try{
        console.log('Checking Your System...');
         await check();
         console.log('The System is Checked Secsessfuly!');
    }catch(error){
        console.log(error);
    }
}
systemCheck();

function check(){
   if(os.cpus().size<4294967296)
   console.log("not");
   if(os.cpus().length<2)
   console.log("not suported");

}