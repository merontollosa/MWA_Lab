import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DbService } from '../db.service';

@Component({
  selector: 'app-profile',
  template:  `<h1> Student Profile</h1>
               <ul>  <li> name: {{student.name}} </li>
                     <li> Id: {{student._id}} </li>
                     <li> Student Id: {{student.studId}} </li>
                     <li> Email : {{student.email}} </li>
               </ul>`
  
 
})
export class ProfileComponent implements OnInit {
  id: String;
  private sub: any;
  private student ;
  constructor(private db: DbService,private route: ActivatedRoute) 
  {
    
   }
  
   ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id =params['id'];
      this.student=this.db.getOne(params['id']) ;
      console.log("return object :");

      
    });
}
}

