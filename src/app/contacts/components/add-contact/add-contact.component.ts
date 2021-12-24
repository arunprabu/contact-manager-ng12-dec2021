import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styles: [
  ]
})
export class AddContactComponent implements OnInit {

  isSaved = false;

  // Step 1: Have TS equivalent for form tag -- create an instance for FormGroup
  addContactForm = new FormGroup({
    // Step 2: Have TS equivalents for inputs - create instances for FormControl 
    name: new FormControl('John', Validators.required), // Step 5: Working on validations
    phone: new FormControl('114234', Validators.required), // go to HTML for step 6
    email: new FormControl('a@b.com', [Validators.required, Validators.email]) // Working on email validations
  });

  constructor( private contactService: ContactService ) { // 1. connect with the service using dep injection

  }

  ngOnInit(): void {
  }

  handleAddContact(){
    console.log(this.addContactForm.value); // submittable form data

    // 2. send the above form data to the service
    this.contactService.createContact(this.addContactForm.value)

    // 3. get the res from the service
  }


}
