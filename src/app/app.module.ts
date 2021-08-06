import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnlineregistrationListComponent } from './onlineregistration-list/onlineregistration-list.component';
import { CreateRegistrationComponent } from './create-registration/create-registration.component';


@NgModule({
  declarations: [
    AppComponent,
    OnlineregistrationListComponent,
    CreateRegistrationComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
