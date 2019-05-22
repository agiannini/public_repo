const express = require('express');
const router = express.Router();
const contactController = require('../../controller/contactController');
const ContactService = contactController.ContactService;

// This allows the app to use Cross Orgin Resource Sharing
router.use((req, res, next) => {
  res.set({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers',
    'Content-type': 'application/json'
  });
  next();
});

//  Purpose:    to use the displayAll function in the contactService class
//  Notes:      returns stringified JSON object
router.get('/', (req, res, next) => {
  ContactService.displayAll()
    .then((contacts) => {
      res.status(200);
      res.send(JSON.stringify(contacts));
    }).catch((err) => {
      res.status(404);
      res.redirect('/Error.html');
      res.end;
    });
});

//  Purpose:    to use the makeNewContact function in the contactService class
//  Notes:      returns stringified JSON object containing the new contact
//              object Literal is created in the function
router.post('/',  (req, res, next) => {
  const contactData = {
    name: req.body.name,
    email: req.body.email,
    address: req.body.address,
    phone: req.body.phone
  }
  ContactService.makeNewContact(contactData)
    .then((contactSave) => {
      res.status(200);
      res.send(JSON.stringify(contactSave));
    }).catch((err)=>{
      res.status(404);
      res.redirect('/Error.html');
      res.end();
    });
});

//  Purpose:    to use the readDB function in the contactService class
//  Notes:      returns stringified JSON object for the given ID
router.get('/:contactID', (req, res, next) => {
  ContactService.readDB(req.params.contactID)
    .then((contact) => {
      res.status(200);
      res.send(JSON.stringify(contact));
    }).catch((err) => {
      res.status(404);
      res.redirect('/Error.html');
      res.end();
    });
});

//  Purpose:    to use the updateContact function in the contactService class
//  Notes:      returns updated stringified JSON object
router.put('/:contactID', (req, res, next) => {
  ContactService.updateContact(req.params.contactID, req.body)
    .then((updatedContact) => {
      res.status(200);
      res.send(JSON.stringify(updatedContact));
    }).catch((err) => {
      res.status(404);
      res.redirect('/Error.html');
      res.end();
    })
});

//  Purpose:    to use the deleteContact function in the contactService class
//  Notes:      returns deleted stringified JSON object
router.delete('/delete/:id', (req, res, next) => {
  ContactService.deleteContact(req.params.id)
    .then((deletedContact) => {
      res.status(200);
      res.send(JSON.stringify(deletedContact));
    }).catch((err) => {
      res.status(404);
      res.redirect('/Error.html');
      res.end();
    });
});
module.exports = router;
