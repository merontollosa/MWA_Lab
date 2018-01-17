// Assigment #1
function Musician(name){

    this.name=name;
}
var violinist = new Musician("Meron");
var pianist = new Musician("Amar");
Musician.prototype.play = function(piece){

    console.log(this.name + "  is now playing  " + piece );
}
violinist.play("violion");
pianist.play("piano");

// Assigment #2
var words="this house is nice!";
function filterWords(arr){
   var str=words;
for(let key in arr)
   {
        
        str=str.replace(arr[key],"***");
       ;

     }
     return str;
}

console.log("After Remove : " +  filterWords(["house","nice"]));

//Assigment # 3

function isWeekEnd(){
    const date=new Date();
    const number=date.getDay();
    return (number== 0 || number==6);      
}

console.log(isWeekEnd());


//Assigment # 3
const item={
   name : "Biscuits",
   type :"reqular",
   Category : "food",
   price : 2.0

}

function applyCoupon(Category)
    return function(disc){
       return function(item){
           return  disc * item.price;
         }
    }
   
   console.log("Total Price :" +applyCoupon("food")(0.1)*item);