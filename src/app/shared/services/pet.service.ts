 import { Injectable } from '@angular/core';
 import {Pet} from '../models/pet';
 import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
 import {Observable} from 'rxjs';
 import {AuthenticationService} from './authentication.service';
 import {environment} from '../../../environments/environment';

 const httpOptions = {
   headers: new HttpHeaders({
     'Content-Type':  'application/json',
     Authorization: 'my-auth-token'
   })
 };
 @Injectable({
  providedIn: 'root'
})
export class PetService {
  apiUrl = environment.apiUrl + '/api/pets';

  constructor(private http: HttpClient, private authenticationService: AuthenticationService) { }

  getPets(): Observable<Pet[]> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());

    return this.http.get<Pet[]>(this.apiUrl, httpOptions);
  }

  addPet(pet: Pet): Observable<Pet> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());
    return this.http.post<Pet>(this.apiUrl, pet);
  }

  updatePet(pet: Pet): Observable<Pet> {
    return this.http.put<Pet>(this.apiUrl + '/' + pet.petId, pet);
  }

  deletePet(id: number): Observable<any> {
   return this.http.delete(this.apiUrl + '/' +  id);
  }

  getPetById(id: number ): Observable<Pet> {
    return this.http.get<Pet>(this.apiUrl + '/' + id);
  }

}
