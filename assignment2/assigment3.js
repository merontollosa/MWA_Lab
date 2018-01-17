const tree = { 
	name : "home", 
	files : ["notes.txt","todo.txt"],
	subFolders: [	
		{ name : "payroll", 
		  files : ["paper.pdf","funds.csv"], 
		  subFolders: [] 
		}, 
		{ name: "misc", 
		  files : ["summer1.jpg","summer2.jpg", "summer3.jpg"], 
		  subFolders: [
			{ name : "logs", 
			  files : ["logs1","logs2","logs3","logs4"], 
			  subFolders: [] 
		  }] 
	}] 
}; 
var list = tree;


// //var map=list.filter(o=>o.files);
// //console.log("map : "+ map);
// //console.log("add : "+ add);

// //var temp=tree.subFolders;

// var find;
// var temp=tree;
// function find(filename){
//     console.log(temp.files);
//     temp=temp.files;
    
//      if(temp.length==0){
//          console.log("null");
//         return false;

//      }
    
//       for(key in temp){
//         if(temp[key]==filename)
//         return true;
      
//     }
//         temp=temp.subFolders;
//         console.log("Recursion")
//          find(filename);
//     }

var temp=tree;
function find(fileName){
while(temp!=null){
  if(temp.files!=null){
    for(key in temp.files){
           if(temp.files[key]==fileName){
             console.log("True nnn"+temp.files[key]);
               return true;
            }
    }
}
   if(temp.subFolders!=null)
        temp=temp.subFolders;
    else return  false;
   
}
}


console.log(find("notes.txt"));