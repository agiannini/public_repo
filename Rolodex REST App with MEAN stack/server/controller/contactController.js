var myContact = require('../models/contacts');

// This class services the Database with mongoose functions
// It is called on by the index.js and the API
class ContactService {
  // Retrieves all of the contacts and returns them
  static displayAll() {
    return myContact.find({})
      .then((contacts) => {
        return contacts;
      });
  }

  //  Finds a single contact from the given ID
  static readDB(id) {
    return myContact.findById(id)
      .then((contact) => {
        return contact;
      });
  }

  // Creates a new contact with the given data
  static makeNewContact(contactData) {
    var newPerson = new myContact(contactData);
    return newPerson.save()
  };

  // Updates the contact with the give ID and body
  // Uses the same method detailed in class
  static updateContact(id, body) {
    return myContact.findById(id)
      .then((contact) => {
        contact.set(body);
        contact.save();
        return contact;
      });
  };

  // Deletes the contact with the given ID
  static deleteContact(id) {
    return myContact.findByIdAndRemove(id)
      .then((contact) => {
        return contact;
      });
  };
}

module.exports.ContactService = ContactService;
