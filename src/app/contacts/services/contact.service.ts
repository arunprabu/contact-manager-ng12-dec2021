import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";

// Decorator
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor( private http: HttpClient) { }

  // 1. get the form data from the comp ts 
  createContact( formData: any ): any {
    console.log(formData);  

    // 2. send the form data to the REST API 
      // 2.1 What's the REST API Endpoint? 'https://jsonplaceholder.typicode.com/users' 
      // 2.2 What's the Http method? POST
      // 2.3 What's REST API Client? HttpClient 
    return this.http.post('https://jsonplaceholder.typicode.com/users', formData)
      .pipe( map( (res: any) => { // 3. get the res from the REST API 
        console.log(res); 
        // convert, remove, sort, filter
        return res; // 4. send the res to the comp ts 
      }));
  }
  
  getContacts(): any{
    return this.http.get('https://jsonplaceholder.typicode.com/users')
      .pipe( map( (res: any) => { // 3. get the res from the REST API 
        console.log(res); 
        // convert, remove, sort, filter
        return res; // 4. send the res to the comp ts 
      }));

  }
}
