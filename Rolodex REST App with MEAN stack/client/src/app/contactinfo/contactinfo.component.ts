import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactsService } from '.././contacts.service';

@Component({
  selector: 'app-contactinfo',
  templateUrl: './contactinfo.component.html',
  styleUrls: ['./contactinfo.component.css']
})


//  Purpose:  To display the information for the given contact
//  Notes:    Allows the user to toggle between modes and update/delete.
export class ContactinfoComponent implements OnInit {
  // Editing variable used to switch modes
  editing: boolean = false;

  // contact declarations prevents name undefined error
  contact: any = {};
  contactID: any;

  constructor(private route: ActivatedRoute, private contactService: ContactsService) {
  }

  ngOnInit() {
    this.getContact();
  }

  // Purpose:   To retrieve the data for the given contact
  // Notes:     Gets id from url then defines contactID and retrieves contact
  getContact(): void {
    this.contactID = this.route.snapshot.paramMap.get('id');
    this.contactService.getContact(this.contactID)
      .subscribe((contact) => {
        this.contact = contact;
      });
  }


  // Purpose:   Toggles editing Mode
  changeEditing(): void {
    if (this.editing === true) {
      this.editing = false;
    }
    else {
      this.editing = true;
    }
  }


  // Purpose:   To delete the given item from the database
  // Notes:     Calls on contactService and redirects to index
  deleteThisItem(): void {
    console.log(this.contact);
    this.contactService.deleteContact(this.contactID).subscribe((data) => {
      window.location.href = '/';
    });
  }


  // Purpose:   To update the contact using the form data.
  // Notes:     Follows the same procedure described in lecture.
  updateContact(obj: any): void {
    this.contact.name = obj.nameField;
    this.contact.email = obj.emailField;
    this.contact.address = obj.addressField;
    this.contact.phone = obj.phoneField;
    this.contactService.updateContact(this.contact, this.contactID)
      .subscribe((result) => {
        window.location.href = '/';
      })
  }

}
