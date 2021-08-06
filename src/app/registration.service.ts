import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


import { RegistrationModel } from './registration-model';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

   
  private baseUrl = "http://localhost:8080/api/";
  

  constructor(private httpClient: HttpClient) { }

  public getRegistrationList():Observable<RegistrationModel[]>{
    return this.httpClient.get<RegistrationModel[]>(`${this.baseUrl}`+'list');
  }
  public createRegistration(registration:RegistrationModel):Observable<RegistrationModel>{
    return this.httpClient.post<RegistrationModel>(`${this.baseUrl}`+'add',registration);
  }

  public updateRegistration(registration:RegistrationModel):Observable<RegistrationModel>{
    return this.httpClient.put<RegistrationModel>(`${this.baseUrl}`+'update',registration);
  }
   
  public getRegistrationById(id:number):Observable<RegistrationModel[]>{
    return this.httpClient.get<RegistrationModel[]>(`${this.baseUrl}`+'list/{id}');
  }


  
}
