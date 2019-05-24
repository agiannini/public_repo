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

module.exports = "nav{\r\n  margin-bottom: 5vh;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdntcclxuICBtYXJnaW4tYm90dG9tOiA1dmg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n\n  <nav class=\"navbar navbar-dark bg-primary\">\n  <a class=\"navbar-brand\" href=\"#\">\n    Home\n  </a>\n</nav>\n\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var _blog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blog.service */ "./src/app/blog.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(service) {
        this.service = service;
        this.title = 'My Public Post Board';
        this.articleData = null;
    }
    // The contactsService uses an observable to retrieve the data
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getArticles().subscribe(function (data) {
            _this.articleData = data;
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"]])
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _article_article_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./article/article.component */ "./src/app/article/article.component.ts");
/* harmony import */ var _headline_headline_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./headline/headline.component */ "./src/app/headline/headline.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");









// Allows app to reload the page

var routes = [
    { path: '', redirectTo: '/myblog', pathMatch: 'full' },
    { path: 'myblog', component: _headline_headline_component__WEBPACK_IMPORTED_MODULE_7__["HeadlineComponent"] },
    { path: 'myblog/article/:id', component: _article_article_component__WEBPACK_IMPORTED_MODULE_6__["ArticleComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _article_article_component__WEBPACK_IMPORTED_MODULE_6__["ArticleComponent"],
                _headline_headline_component__WEBPACK_IMPORTED_MODULE_7__["HeadlineComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(// Handles routing according to specifications
                routes)
            ],
            providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_9__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_9__["HashLocationStrategy"] }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/article/article.component.css":
/*!***********************************************!*\
  !*** ./src/app/article/article.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div{\r\n  width: 75vw;\r\n  margin: auto;\r\n}\r\n\r\nform{\r\n  width: 50vw;\r\n  margin: auto;\r\n}\r\n\r\n#add{\r\n  margin: 10px;\r\n}\r\n\r\n.innerText {\r\n  white-space: pre-wrap;\r\n  text-align: left;\r\n  width: 75%;\r\n  margin: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJ0aWNsZS9hcnRpY2xlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2FydGljbGUvYXJ0aWNsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2e1xyXG4gIHdpZHRoOiA3NXZ3O1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuZm9ybXtcclxuICB3aWR0aDogNTB2dztcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbiNhZGR7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG4uaW5uZXJUZXh0IHtcclxuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB3aWR0aDogNzUlO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/article/article.component.html":
/*!************************************************!*\
  !*** ./src/app/article/article.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-dark\">\n  <h1 class=\"display-4\">{{article.title}}</h1>\n  <p class=\"lead\"> By: {{article.author}}</p>\n  <hr class=\"my-4\">\n<div class=\"innerText\">\n  {{article.article}}\n</div>\n"

/***/ }),

/***/ "./src/app/article/article.component.ts":
/*!**********************************************!*\
  !*** ./src/app/article/article.component.ts ***!
  \**********************************************/
/*! exports provided: ArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleComponent", function() { return ArticleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _blog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! .././blog.service */ "./src/app/blog.service.ts");




var ArticleComponent = /** @class */ (function () {
    function ArticleComponent(route, blogService) {
        this.route = route;
        this.blogService = blogService;
        this.article = {};
        this.commenting = false;
    }
    ArticleComponent.prototype.ngOnInit = function () {
        this.getArticle();
    };
    ArticleComponent.prototype.getArticle = function () {
        var _this = this;
        this.articleID = this.route.snapshot.paramMap.get('id');
        this.blogService.getArticle(this.articleID)
            .subscribe(function (article) {
            _this.article = article;
        });
    };
    ArticleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-article',
            template: __webpack_require__(/*! ./article.component.html */ "./src/app/article/article.component.html"),
            styles: [__webpack_require__(/*! ./article.component.css */ "./src/app/article/article.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _blog_service__WEBPACK_IMPORTED_MODULE_3__["BlogService"]])
    ], ArticleComponent);
    return ArticleComponent;
}());



/***/ }),

/***/ "./src/app/blog.service.ts":
/*!*********************************!*\
  !*** ./src/app/blog.service.ts ***!
  \*********************************/
/*! exports provided: BlogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogService", function() { return BlogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var BlogService = /** @class */ (function () {
    function BlogService(http) {
        this.http = http;
    }
    BlogService.prototype.getArticles = function () {
        return this.http.get("/api/");
    };
    BlogService.prototype.getArticle = function (id) {
        return this.http.get("/api/" + id);
    };
    BlogService.prototype.addArticle = function (data) {
        return this.http.post("/api/", data);
    };
    BlogService.prototype.deleteArticle = function (id) {
        return this.http.delete("/api/delete/" + id);
    };
    BlogService.prototype.addComment = function (data, id) {
        return this.http.put("/api/" + id, data);
    };
    BlogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], BlogService);
    return BlogService;
}());



/***/ }),

/***/ "./src/app/headline/headline.component.css":
/*!*************************************************!*\
  !*** ./src/app/headline/headline.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#addbtn{\r\n  margin-bottom: 10vh;\r\n}\r\n\r\n\r\nform{\r\n  width: 50vw;\r\n  margin: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGxpbmUvaGVhZGxpbmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtBQUNyQjs7O0FBR0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvaGVhZGxpbmUvaGVhZGxpbmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNhZGRidG57XHJcbiAgbWFyZ2luLWJvdHRvbTogMTB2aDtcclxufVxyXG5cclxuXHJcbmZvcm17XHJcbiAgd2lkdGg6IDUwdnc7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/headline/headline.component.html":
/*!**************************************************!*\
  !*** ./src/app/headline/headline.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!adding\">\n  <button id=\"addbtn\" class=\"btn btn-info btn-lg \" (click)=\"changeAdding()\">\n    Add a Post!\n  </button>\n  <div class=\"container\">\n    <div class=\"card-columns\">\n      <div class=\"card text-dark\" *ngFor=\"let article of articleData\">\n        <a [routerLink]=\"['article', article._id]\">\n          <h4 class=\"card-header\">{{article.title}}</h4>\n        </a>\n        <h5 class=\"card-body\"> By:{{article.author}} </h5>\n        <div class=\"card-footer\"> <button class=\"btn=info btn-lg\" (click)=\"deleteArticle(article._id)\">Delete</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div *ngIf=\"adding\">\n  <form #newArticleForm=\"ngForm\" (ngSubmit)=\"newArticle()\">\n    <button class=\"btn btn-info btn-lg \" (click)=\"changeAdding()\">\n      Cancel\n    </button>\n    <input id=\"title\" required minlength=\"1\" type=\"text\" class=\"form-control mr-sm-2\" name=\"name\" placeholder=\"name\" [(ngModel)]=\"article.title\">\n    <input #author required minlength=\"1\" type=\"text\" class=\"form-control mr-sm-2\" name=\"author\" placeholder=\"author\" [(ngModel)]=\"article.author\">\n    <textarea id=\"article\" required minlength=\"1\" class=\"form-control mr-sm-2\" rows=\"10\" name=\"content\" placeholder=\"content\" [(ngModel)]=\"article.article\"></textarea>\n    <button class=\"btn-info btn-lg \" [disabled]=\"!newArticleForm.valid\">Add</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/headline/headline.component.ts":
/*!************************************************!*\
  !*** ./src/app/headline/headline.component.ts ***!
  \************************************************/
/*! exports provided: HeadlineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadlineComponent", function() { return HeadlineComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _blog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! .././blog.service */ "./src/app/blog.service.ts");



var HeadlineComponent = /** @class */ (function () {
    function HeadlineComponent(service) {
        this.service = service;
        this.num = 0;
        this.counter = true;
        this.articleData = null;
        this.adding = false;
        this.article = {};
    }
    // The contactsService uses an observable to retrieve the data
    HeadlineComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getArticles().subscribe(function (data) {
            _this.articleData = data;
        });
    };
    HeadlineComponent.prototype.newArticle = function () {
        this.service.addArticle(this.article)
            .subscribe(function (response) {
            window.location.href = '/';
        });
    };
    HeadlineComponent.prototype.deleteArticle = function (id) {
        this.service.deleteArticle(id)
            .subscribe(function (response) {
            window.location.href = '/';
        });
    };
    HeadlineComponent.prototype.changeAdding = function () {
        console.log(this.adding);
        if (this.adding === true) {
            this.adding = false;
        }
        else {
            this.adding = true;
        }
        console.log(this.adding);
    };
    HeadlineComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-headline',
            template: __webpack_require__(/*! ./headline.component.html */ "./src/app/headline/headline.component.html"),
            providers: [_blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"]],
            styles: [__webpack_require__(/*! ./headline.component.css */ "./src/app/headline/headline.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"]])
    ], HeadlineComponent);
    return HeadlineComponent;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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

module.exports = __webpack_require__(/*! C:\Users\Alex\Desktop\public_repo\RESTful PublicBoard w Angular Mongo Express Node\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map