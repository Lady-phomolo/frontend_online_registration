import { Component, OnInit } from '@angular/core';
import { RegistrationModel } from '../registration-model';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-onlineregistration-list',
  templateUrl: './onlineregistration-list.component.html',
  styleUrls: ['./onlineregistration-list.component.css']
})
export class OnlineregistrationListComponent implements OnInit {

  registration: RegistrationModel[];
  constructor(private registrationService:RegistrationService) {
    this.registration =[];
   }

  ngOnInit(): void {
    this.getRegistrationList();

  }
  private getRegistrationList(){
    this.registrationService.getRegistrationList().subscribe(data=>{
      this.registration = data;
    })
  }
  updateRegistration(id:number){};
  registrationDetails(id:number){};
}
