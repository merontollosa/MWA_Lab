import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import {DbService } from "./db.service";
import { ActivatedRoute } from '@angular/router';

@Injectable()
export class GuardsGuard implements CanActivate {
  id;
  constructor(private db: DbService, private route: ActivatedRoute ) {}; 
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      console.log("Check Student"); 
         return this.check();
      }

      check() : boolean | any {

        this.id = this.route.params.subscribe((params) => {
          this.id =params['id'];
            if(!this.db.getOne(params['id'])) {
             console.log("return object :");
             confirm("You don't have permission to view this page");
            
         }
         return false;
       });
      }
    }

