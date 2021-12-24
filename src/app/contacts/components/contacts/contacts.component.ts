import { Component, OnDestroy, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styles: [
  ]
})
export class ContactsComponent implements OnInit, OnDestroy {

  contactList: any[] = [];

  constructor( private contactService: ContactService) {
    console.log("1. Inside Constructor");
  }

  ngOnInit(): void { // lifecycle hook
    // Whenever the comp is coming into view this life cycle hook will be called
    // ideal place for you to send ajax calls
    console.log('2. Inside ngOnInit');
    this.contactService.getContacts()
      .subscribe( (res: any) => {
        console.log(res);
        this.contactList = res;
      });
  }

  ngOnDestroy(): void {
    // will be called whenever the comp goes out of view.
    // ideal place for you to clear the data, remove interval, remove timeout, unsubscribe
    console.log('Inside ngOnDestroy');
    
  }

}
