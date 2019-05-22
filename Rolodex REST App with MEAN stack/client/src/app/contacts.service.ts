import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})

// Purpose:     Service data in between the REST API and the Angular App
// Notes :      Calls on the REST api to perform CRUD functions
//              Calls the enviornment file to load URLs
export class ContactsService {
  private listURL = environment.listURL;
  private deleteURL = environment.deleteURL;
  constructor(private http:HttpClient) {}

  getContact(id){
    return this.http.get(this.listURL+id);
  }
  listContacts(){
    return this.http.get(this.listURL);
  }

  deleteContact(id){
    return this.http.delete(this.deleteURL+id);
  }
  updateContact(data, id){
    console.log(id);
    console.log(data);
    return this.http.put(this.listURL+id, data)
  }
  addContact(data){
    return this.http.post(this.listURL, data)
  }

}
