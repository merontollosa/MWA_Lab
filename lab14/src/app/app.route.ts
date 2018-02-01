import { RouterModule, Routes } from "@angular/router";

import { HomepageComponent } from "./homepage/homepage.component";
import { StudentsComponent } from "./students/students.component";
import { AppComponent } from "./app.component";
import { ProfileComponent } from "./profile/profile.component";

import { GuardsGuard } from "./guards.guard";
//import { MyCanDeactivateGuard } from "./guards/mycandeactivate.guard";

const MY_ROUTES: Routes = [
     { path:  '',          component: AppComponent },
     { path: 'homepage', component: HomepageComponent },
     { path: 'students/profile/:id', component: ProfileComponent,
            canActivate:  [GuardsGuard] },
     { path: 'students', component: StudentsComponent },   
     
];

export const myRoutes = RouterModule.forRoot(MY_ROUTES);
