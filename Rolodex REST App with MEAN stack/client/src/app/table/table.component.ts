
import { Component, OnInit } from '@angular/core';
import { ContactsService } from '.././contacts.service';

// Decorator for TableComponent class
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [ContactsService]
})
// Purpose:   To set up the table and retreive all the data from the REST api
// Notes:     To display table properly, app-data is inside <tr> tag. To do This
//            selector in app-data.ts is in brackets
export class TableComponent implements OnInit {
  contactData = null;
  constructor(private contactsService: ContactsService) { }

  // The contactsService uses an observable to retrieve the data
  ngOnInit() {
    this.contactsService.listContacts().subscribe((data) => {
      this.contactData = data;
    });
  }

}
