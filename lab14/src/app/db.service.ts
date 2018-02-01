import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class DbService implements OnInit {
  public data;
  constructor() {
    this.data=[
      {_id: 1, name: 'Bami Amar', studId: '12345', email: 'bami@gmail.com'},
      {_id: 2, name: 'Meron Tollosa', studId: '54321', email: 'mery@gmail.com'},
      {_id: 3, name: 'Amar Yal', studId: '78777', email: 'amar@gmail.com'}];;
   }
   ngOnInit() {
   
  }
  
  public getData()
  {
    
    return  this.data;
  }

  
  public getOne(id){
     for(let i=0; i< this.data.length; i++){
         if(this.data[i]._id==id){
           console.log("True");
           return this.data[i];
     }
  }
  console.log("False");
  return null;
}
}
