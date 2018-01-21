const os= require('os');
async function systemCheck(){ 
    try{
        console.log('Checking Your System...');
         await check();
        
    }catch(error){
        console.log(error);
    }
}
systemCheck();

function check(){
   if(os.cpus().size<4294967296)
   console.log("Sorry, This app needs at least 4GB of RAM");
   if(os.cpus().length<2)
   console.log("Sorry, Prosesser is not Supported");
   else{
    console.log('The System is Checked Secsessfuly!');
   }

}