contactID = "" // This global variable is used for update and delete

document.addEventListener('DOMContentLoaded', () => {

  // Purpose:       To test 'create' and display the results in #display
  // Notes:         New objectID is saved so it can be used for update and delete
  document.querySelector("#createTest").onclick = () => {
    console.log('Add a New Contact called apitest!');
    fetch('http://206.189.77.154:2000/myapi/contacts', {
        method: "POST",
        body: JSON.stringify({ // Data for new contact
          "name": "apitest",
          "email": "apitest@test.com",
          "address": "123456789",
          "phone": "321-321-3210"
        }),
        headers: {
          'Content-Type': 'application/json'
        } // Required for fetch to handle data
      }).then((contacts) => {
        return contacts.json();
      })
      .then((response) => {
        document.querySelector("#display").innerHTML = "Add a New Contact called apitest!" + JSON.stringify(response);
        contactID = response._id; // Saves ID for Update and delete
        console.log(JSON.stringify(response));
      })
  };

  // Purpose:       To test 'read' and display the results in #display
  // Notes:         The whole database is retrieved
  document.querySelector("#readTest").onclick = () => {
    console.log('Display The Whole Database!');
    fetch('http://206.189.77.154:2000/myapi/contacts')
      .then((contacts) => {
        return contacts.json();
      })
      .then((response) => {
        document.querySelector("#display").innerHTML = "Display The Whole Database!" + JSON.stringify(response);
        console.log(JSON.stringify(response));
      });
  };


  // Purpose:       To test 'update' and display the results in #display
  // Notes:         Uses the contactID from the create test
  document.querySelector("#updateTest").onclick = () => {
    console.log("Update the new contacts' name to UpdatedTest!");
    fetch('http://206.189.77.154:2000/myapi/contacts/' + contactID, { // ID from create
        method: "PUT",
        body: JSON.stringify({
          "name": "UpdatedTest", // Data for updating
          "email": "apitest@test.com",
          "address": "123456789",
          "phone": "321-321-3210"
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((contacts) => {
        return contacts.json();
      })
      .then((response) => {
        document.querySelector("#display").innerHTML = "Update the new contacts' name to UpdatedTest!" + JSON.stringify(response);
        console.log(JSON.stringify(response));
      })
  };

  // Purpose:       To test 'delete' and display the results in #display
  // Notes:         Uses the contactID from the create test
  document.querySelector("#deleteTest").onclick = () => {
    console.log("Delete the following contact!");
    console.log(contactID);
    fetch('http://206.189.77.154:2000/myapi/contacts/delete/' + contactID, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((contacts) => {
        return contacts.json();
      })
      .then((response) => {
        document.querySelector("#display").innerHTML = "Delete the following contact" + JSON.stringify(response);
        console.log(JSON.stringify(response));
      })
  };



});
