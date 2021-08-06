import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationModel } from '../registration-model';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-create-registration',
  templateUrl: './create-registration.component.html',
  styleUrls: ['./create-registration.component.css']
})
export class CreateRegistrationComponent implements OnInit {

  registration : RegistrationModel = new RegistrationModel();
  data:any;

  constructor(private registrationService: RegistrationService,
     private router:Router) { }

  ngOnInit(): void {}
  
  saveRegistration(){
     this.registrationService.createRegistration(this.registration).subscribe(data =>{
       console.log(data);
       this.goToRegistrationList();
     },
     error=>console.log(error)); 
  }
  goToRegistrationList(){
    this.router.navigate(['/registration-list']);
  } 
  onSubmit(){
    console.log(this.registration);
    this.saveRegistration();
  }
    
  Registers(regForm:NgForm){
     if(regForm.valid){
       this.data =regForm.value;
     }
  }
}
