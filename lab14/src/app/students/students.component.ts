import { Component, OnInit } from '@angular/core';
import { DbService } from '../db.service';

@Component({
  selector: 'app-students',
  template: ` 
         <ul>
              <li *ngFor="let stud of data" >
                   <a [routerLink]="['profile', stud._id]"> 
                        {{stud.name}}
                  </a>
               
              </li>
   
        </ul>`,
  
})
export class StudentsComponent implements OnInit {
  data: Object[] = [];
  constructor(private db :DbService) {
   
  
   }
   
  ngOnInit() {
    this.data = this.db.getData();
  }

}
