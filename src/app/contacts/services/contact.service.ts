import { Injectable } from '@angular/core';

// Decorator
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  // 1. get the form data from the comp ts 
  createContact( formData: any ): any {
    console.log(formData);  

    // 2. send the form data to the REST API 
    // 3. get the res from the REST API 
    // 4. send the res to the comp ts 
  }

  
}
