import { Component, OnInit, Input } from '@angular/core';
import { ContactsService } from '.././contacts.service';

@Component({
  selector: '[app-data]',             // Brackets allows selector inside tag
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})


// Purpose:   To display data from the database within the data table
// Notes:     Imports contact from parent component/
export class DataComponent implements OnInit {
  @Input() contact;
  constructor(private contactsService: ContactsService) { }
  ngOnInit() {
  }

}
