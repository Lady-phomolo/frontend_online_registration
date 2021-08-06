import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRegistrationComponent } from './create-registration/create-registration.component';
import { OnlineregistrationListComponent } from './onlineregistration-list/onlineregistration-list.component';


export const routes: Routes = [
   
 { path:'registration-list', component: OnlineregistrationListComponent},
 { path:'create-registration', component: CreateRegistrationComponent},
 { path:'', redirectTo: 'registration-list', pathMatch:'full'},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
