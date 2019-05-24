(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.data_table{\r\n  margin:auto;\r\n  width: 75vw;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsV0FBVztFQUNYLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5kYXRhX3RhYmxle1xyXG4gIG1hcmdpbjphdXRvO1xyXG4gIHdpZHRoOiA3NXZ3O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\r\n  <h1>\r\n    Welcome to {{ title }}!\r\n  </h1>\r\n  <app-navigation></app-navigation>\r\n  <div class=\"bg\"></div>\r\n\r\n  <h5>\r\n    <p>\r\n      This rolodex application was built in Angular, Mongo, Express, and Node.\r\n    </p>\r\n    <p>\r\n      The client side is built in Angular and accesses my REST API built with Node/Mongo.\r\n      The hosting is done by Express.\r\n    </p>\r\n    <p>\r\n      All four CRUD operations are executed through the REST API.\r\n    </p>\r\n  </h5>\r\n  <div class=\"data_table\">\r\n    <router-outlet></router-outlet>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


// Purpose:   To be the parent component which is used to load the web app
// Notes:     Calls on two components, app-navigation and app-table.
//            Uses the component decorator
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'my Rolodex Application';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
/* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./table/table.component */ "./src/app/table/table.component.ts");
/* harmony import */ var _data_data_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./data/data.component */ "./src/app/data/data.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _contactinfo_contactinfo_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contactinfo/contactinfo.component */ "./src/app/contactinfo/contactinfo.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");











// Allows app to reload the page

// Used by RouterModule in imports
var routes = [
    { path: '', redirectTo: '/table', pathMatch: 'full' },
    { path: 'table', component: _table_table_component__WEBPACK_IMPORTED_MODULE_6__["TableComponent"] },
    { path: 'contact/:id', component: _contactinfo_contactinfo_component__WEBPACK_IMPORTED_MODULE_9__["ContactinfoComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__["NavigationComponent"],
                _table_table_component__WEBPACK_IMPORTED_MODULE_6__["TableComponent"],
                _data_data_component__WEBPACK_IMPORTED_MODULE_7__["DataComponent"],
                _contactinfo_contactinfo_component__WEBPACK_IMPORTED_MODULE_9__["ContactinfoComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(// Handles routing according to specifications
                routes)
            ],
            // Allows app to reload on the same page
            providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_11__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_11__["HashLocationStrategy"] }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contactinfo/contactinfo.component.css":
/*!*******************************************************!*\
  !*** ./src/app/contactinfo/contactinfo.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\r\n  width: 25vw;\r\n  margin:auto;\r\n}\r\n\r\nbutton{\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdGluZm8vY29udGFjdGluZm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0aW5mby9jb250YWN0aW5mby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG4gIHdpZHRoOiAyNXZ3O1xyXG4gIG1hcmdpbjphdXRvO1xyXG59XHJcblxyXG5idXR0b257XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/contactinfo/contactinfo.component.html":
/*!********************************************************!*\
  !*** ./src/app/contactinfo/contactinfo.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!editing\">\r\n  <div class=\"card bg-dark text-light\">\r\n    <div class=\"card-body\">\r\n      <div class=\"card-header\">\r\n        <button class=\"btn btn-outline-secondary mt-2 my-sm-0\" (click)=\"changeEditing()\">Edit</button>\r\n      </div>\r\n\r\n      <h5 class=\"card-title\">{{contact.name }}</h5>\r\n      <p class='card-text'>{{contact.email}}\r\n      </p>\r\n      <p class='card-text'>{{contact.phone}}\r\n      </p>\r\n      <p class='card-text'>{{contact.address}}\r\n      </p>\r\n      <div class=\"card-footer \"><button class=\"btn btn-outline-danger mt-2 my-sm-0\" (click)=\"deleteThisItem()\">Delete</button></div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div *ngIf=\"editing\">\r\n  <div class=\"card bg-dark text-light\">\r\n    <div class=\"card-body\">\r\n      <div class=\"card-header\">\r\n        <button class=\"btn btn-outline-secondary mt-2 my-sm-0\" (click)=\"changeEditing()\">View</button>\r\n      </div>\r\n      <form #form=\"ngForm\" (ngSubmit)=\"updateContact(form.value)\">\r\n        <div class=\"form-group\">\r\n          <label for=\"nameField\"> Name: </label>\r\n          <input #name id=\"nameField\" name=\"nameField\" class=\"form-control\" [ngModel]=\"contact.name\">\r\n          <br />\r\n\r\n          <label for=\"emailField\"> Email: </label>\r\n          <input #name id=\"emailField\" name=\"emailField\" class=\"form-control\" [ngModel]=\"contact.email\">\r\n          <br />\r\n          <label for=\"phoneField\"> Phone: </label>\r\n          <input #name id=\"phoneField\" name=\"phoneField\" class=\"form-control\" [ngModel]=\"contact.phone\">\r\n          <br />\r\n\r\n          <label for=\"addressField\"> Address: </label>\r\n          <input #name id=\"addressField\" name=\"addressField\" class=\"form-control\" [ngModel]=\"contact.address\">\r\n          <br />\r\n\r\n        </div>\r\n        <div class=\"card-footer\">\r\n\r\n          <button class=\"btn btn-outline-primary mt-2 my-sm-0\" type=\"submit\">Update</button>\r\n\r\n        </div>\r\n\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/contactinfo/contactinfo.component.ts":
/*!******************************************************!*\
  !*** ./src/app/contactinfo/contactinfo.component.ts ***!
  \******************************************************/
/*! exports provided: ContactinfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactinfoComponent", function() { return ContactinfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _contacts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! .././contacts.service */ "./src/app/contacts.service.ts");




var ContactinfoComponent = /** @class */ (function () {
    function ContactinfoComponent(route, contactService) {
        this.route = route;
        this.contactService = contactService;
        // Editing variable used to switch modes
        this.editing = false;
        // contact declarations prevents name undefined error
        this.contact = {};
    }
    ContactinfoComponent.prototype.ngOnInit = function () {
        this.getContact();
    };
    // Purpose:   To retrieve the data for the given contact
    // Notes:     Gets id from url then defines contactID and retrieves contact
    ContactinfoComponent.prototype.getContact = function () {
        var _this = this;
        this.contactID = this.route.snapshot.paramMap.get('id');
        this.contactService.getContact(this.contactID)
            .subscribe(function (contact) {
            _this.contact = contact;
        });
    };
    // Purpose:   Toggles editing Mode
    ContactinfoComponent.prototype.changeEditing = function () {
        if (this.editing === true) {
            this.editing = false;
        }
        else {
            this.editing = true;
        }
    };
    // Purpose:   To delete the given item from the database
    // Notes:     Calls on contactService and redirects to index
    ContactinfoComponent.prototype.deleteThisItem = function () {
        console.log(this.contact);
        this.contactService.deleteContact(this.contactID).subscribe(function (data) {
            window.location.href = '/';
        });
    };
    // Purpose:   To update the contact using the form data.
    // Notes:     Follows the same procedure described in lecture.
    ContactinfoComponent.prototype.updateContact = function (obj) {
        this.contact.name = obj.nameField;
        this.contact.email = obj.emailField;
        this.contact.address = obj.addressField;
        this.contact.phone = obj.phoneField;
        this.contactService.updateContact(this.contact, this.contactID)
            .subscribe(function (result) {
            window.location.href = '/';
        });
    };
    ContactinfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contactinfo',
            template: __webpack_require__(/*! ./contactinfo.component.html */ "./src/app/contactinfo/contactinfo.component.html"),
            styles: [__webpack_require__(/*! ./contactinfo.component.css */ "./src/app/contactinfo/contactinfo.component.css")]
        })
        //  Purpose:  To display the information for the given contact
        //  Notes:    Allows the user to toggle between modes and update/delete.
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _contacts_service__WEBPACK_IMPORTED_MODULE_3__["ContactsService"]])
    ], ContactinfoComponent);
    return ContactinfoComponent;
}());



/***/ }),

/***/ "./src/app/contacts.service.ts":
/*!*************************************!*\
  !*** ./src/app/contacts.service.ts ***!
  \*************************************/
/*! exports provided: ContactsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsService", function() { return ContactsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");




var ContactsService = /** @class */ (function () {
    function ContactsService(http) {
        this.http = http;
        this.listURL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].listURL;
        this.deleteURL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].deleteURL;
    }
    ContactsService.prototype.getContact = function (id) {
        return this.http.get(this.listURL + id);
    };
    ContactsService.prototype.listContacts = function () {
        return this.http.get(this.listURL);
    };
    ContactsService.prototype.deleteContact = function (id) {
        return this.http.delete(this.deleteURL + id);
    };
    ContactsService.prototype.updateContact = function (data, id) {
        console.log(id);
        console.log(data);
        return this.http.put(this.listURL + id, data);
    };
    ContactsService.prototype.addContact = function (data) {
        return this.http.post(this.listURL, data);
    };
    ContactsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
        // Purpose:     Service data in between the REST API and the Angular App
        // Notes :      Calls on the REST api to perform CRUD functions
        //              Calls the enviornment file to load URLs
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ContactsService);
    return ContactsService;
}());



/***/ }),

/***/ "./src/app/data/data.component.css":
/*!*****************************************!*\
  !*** ./src/app/data/data.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RhdGEvZGF0YS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/data/data.component.html":
/*!******************************************!*\
  !*** ./src/app/data/data.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a routerLink=\"/contact/{{contact._id}}\">\r\n  <td>{{contact.name}}</td>\r\n</a>\r\n<td>{{contact.email}}</td>\r\n<td>{{contact.phone}}</td>\r\n<td>{{contact.address}}</td>\r\n"

/***/ }),

/***/ "./src/app/data/data.component.ts":
/*!****************************************!*\
  !*** ./src/app/data/data.component.ts ***!
  \****************************************/
/*! exports provided: DataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataComponent", function() { return DataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _contacts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! .././contacts.service */ "./src/app/contacts.service.ts");



var DataComponent = /** @class */ (function () {
    function DataComponent(contactsService) {
        this.contactsService = contactsService;
    }
    DataComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DataComponent.prototype, "contact", void 0);
    DataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: '[app-data]',
            template: __webpack_require__(/*! ./data.component.html */ "./src/app/data/data.component.html"),
            styles: [__webpack_require__(/*! ./data.component.css */ "./src/app/data/data.component.css")]
        })
        // Purpose:   To display data from the database within the data table
        // Notes:     Imports contact from parent component/
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_contacts_service__WEBPACK_IMPORTED_MODULE_2__["ContactsService"]])
    ], DataComponent);
    return DataComponent;
}());



/***/ }),

/***/ "./src/app/navigation/navigation.component.css":
/*!*****************************************************!*\
  !*** ./src/app/navigation/navigation.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/navigation/navigation.component.html":
/*!******************************************************!*\
  !*** ./src/app/navigation/navigation.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-dark \">\r\n  <a class=\"navbar-brand\" href=\"#\">Home</a>\r\n\r\n  <ul class=\"navbar-nav\">\r\n    <li class=\"nav-item active\">\r\n\r\n\r\n      <form #newContactForm=\"ngForm\" (ngSubmit)=\"newContact()\" class=\"form-inline my-2 my-lg-0\">\r\n        <input #name required minlength=\"1\" class=\"form-control mr-sm-2\" name=\"name\" placeholder=\"name\" [(ngModel)]=\"contact.name\">\r\n        <input #email required minlength=\"1\" class=\"form-control mr-sm-2\" name=\"email\" placeholder=\"email\" [(ngModel)]=\"contact.email\">\r\n        <input #phone required minlength=\"1\" class=\"form-control mr-sm-2\" name=\"phone\" placeholder=\"phone\" [(ngModel)]=\"contact.phone\">\r\n        <input #address required minlength=\"1\" class=\"form-control mr-sm-2\" name=\"address\" placeholder=\"address\" [(ngModel)]=\"contact.address\">\r\n        <button class=\"btn btn-outline-success my-2 my-sm-0\" [disabled]=\"!newContactForm.valid\">Add</button>\r\n      </form>\r\n    </li>\r\n\r\n\r\n  </ul>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _contacts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! .././contacts.service */ "./src/app/contacts.service.ts");



var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(contactService) {
        this.contactService = contactService;
        this.contact = {};
    }
    // After a new contact is added, the app loads the home page
    NavigationComponent.prototype.newContact = function () {
        console.log(this.contact);
        this.contactService.addContact(this.contact)
            .subscribe(function (response) {
            window.location.href = '/';
            console.log(response);
        });
    };
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/navigation/navigation.component.css")]
        })
        // Purpose:   To provide navigation and a form to add to the database
        // Notes:     uses two way binding to populate object
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_contacts_service__WEBPACK_IMPORTED_MODULE_2__["ContactsService"]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/table/table.component.css":
/*!*******************************************!*\
  !*** ./src/app/table/table.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYmxlL3RhYmxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/table/table.component.html":
/*!********************************************!*\
  !*** ./src/app/table/table.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-dark\">\r\n  <thead>\r\n    <td scope='col'>Name</td>\r\n    <td scope='col'>Email</td>\r\n    <td scope='col'>Phone</td>\r\n    <td scope='col'>Address</td>\r\n    <td scope='col'></td>\r\n  </thead>\r\n  <tr *ngFor='let contact of contactData' app-data [contact]=\"contact\">\r\n\r\n  </tr>\r\n</table>\r\n"

/***/ }),

/***/ "./src/app/table/table.component.ts":
/*!******************************************!*\
  !*** ./src/app/table/table.component.ts ***!
  \******************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _contacts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! .././contacts.service */ "./src/app/contacts.service.ts");



// Decorator for TableComponent class
var TableComponent = /** @class */ (function () {
    function TableComponent(contactsService) {
        this.contactsService = contactsService;
        this.contactData = null;
    }
    // The contactsService uses an observable to retrieve the data
    TableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contactsService.listContacts().subscribe(function (data) {
            _this.contactData = data;
        });
    };
    TableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-table',
            template: __webpack_require__(/*! ./table.component.html */ "./src/app/table/table.component.html"),
            providers: [_contacts_service__WEBPACK_IMPORTED_MODULE_2__["ContactsService"]],
            styles: [__webpack_require__(/*! ./table.component.css */ "./src/app/table/table.component.css")]
        })
        // Purpose:   To set up the table and retreive all the data from the REST api
        // Notes:     To display table properly, app-data is inside <tr> tag. To do This
        //            selector in app-data.ts is in brackets
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_contacts_service__WEBPACK_IMPORTED_MODULE_2__["ContactsService"]])
    ], TableComponent);
    return TableComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file contains the enviornment variables for the application
var environment = {
    production: false,
    listURL: 'http://206.189.77.154:2000/myapi/contacts/',
    deleteURL: "http://206.189.77.154:2000/myapi/contacts/delete/"
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Alex\Desktop\public_repo\Rolodex REST App with MEAN stack\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map