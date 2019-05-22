import { Component, OnInit } from '@angular/core';
import { ContactsService } from '.././contacts.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

// Purpose:   To provide navigation and a form to add to the database
// Notes:     uses two way binding to populate object
export class NavigationComponent implements OnInit {

  contact: any = {};
  constructor(private contactService: ContactsService) { }

  // After a new contact is added, the app loads the home page
  newContact(): void {
    console.log(this.contact);
    this.contactService.addContact(this.contact)
      .subscribe((response) => {
        window.location.href = '/';
        console.log(response);
      });
  }


  ngOnInit() {
  }

}
