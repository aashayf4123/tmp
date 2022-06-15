(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/login/pages/login.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/login/pages/login.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"login-heading\">Physio Glattbrugg login</h1>\n\n<div class=\"login-container\">\n    <div class=\"login-content\">\n\n        <form [formGroup]=\"login\">\n            <mat-form-field>\n                <input\n                        matInput\n                        type=\"text\"\n                        placeholder=\"username\"\n                        formControlName=\"username\"\n                        autocomplete=\"off\"\n                >\n                <mat-error>Please enter your username</mat-error>\n            </mat-form-field>\n            <mat-form-field>\n                <input\n                        matInput\n                        type=\"password\"\n                        placeholder=\"Password\"\n                        formControlName=\"password\"\n                        autocomplete=\"off\"\n                >\n                <mat-error>Please enter your password</mat-error>\n            </mat-form-field>\n            <button\n                    mat-raised-button color=\"primary\"\n                    [disabled]=\"!login.valid\"\n                    (click)=\"checkLogin()\">Log in\n            </button>\n        </form>\n\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/login/login.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/login/login.module.ts ***!
  \***********************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _pages_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/login.component */ "./src/app/modules/login/pages/login.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.routing.module */ "./src/app/modules/login/login.routing.module.ts");







let LoginModule = class LoginModule {
};
LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _login_routing_module__WEBPACK_IMPORTED_MODULE_6__["LoginRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        declarations: [
            _pages_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
        ]
    })
], LoginModule);



/***/ }),

/***/ "./src/app/modules/login/login.routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/login/login.routing.module.ts ***!
  \*******************************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/login.component */ "./src/app/modules/login/pages/login.component.ts");




const ROUTES = [
    {
        path: '',
        component: _pages_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }
];
/**
 * Represents the Login Application Routing Module.
 *
 * This module sets up Login routes for the application as well
 * as exports Angular RouterModule to be avilable in
 * modules that import this module
 *
 * @since 1.0.0
 * @author Nemanja Milinkovic
 */
let LoginRoutingModule = class LoginRoutingModule {
};
LoginRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ROUTES)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], LoginRoutingModule);



/***/ }),

/***/ "./src/app/modules/login/pages/login.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/modules/login/pages/login.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-heading {\n  text-align: center;\n  margin: 20px 0;\n  color: #009abb;\n}\n\n.login-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.login-container .login-content {\n  max-width: 1200px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 20px 0;\n}\n\n.login-container .login-content form {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  width: 320px;\n}\n\n.login-container .login-content form button {\n  margin-top: 15px;\n}\n\n.login-container .login-content form button:enabled,\n.login-container .login-content form button[enabled] {\n  background: #009ABB;\n}\n\n@media screen and (max-width: 570px) {\n  .login-content {\n    padding: 10px !important;\n  }\n}\n\n@media screen and (max-width: 360px) {\n  .login-content {\n    -webkit-box-flex: 1;\n            flex: 1;\n  }\n  .login-content form {\n    width: 100% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Fhc2hheS9Eb3dubG9hZHMvQXJjaGl2ZS9zcmMvYXBwL21vZHVsZXMvbG9naW4vcGFnZXMvbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbG9naW4vcGFnZXMvbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsZUFBQTtBQ0NKOztBRENJO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsWUFBQTtBQ0NOOztBRENNO0VBQ0UsZ0JBQUE7QUNDUjs7QURFTTs7RUFFRSxtQkFBQTtBQ0FSOztBRE1BO0VBQ0U7SUFDRSx3QkFBQTtFQ0hGO0FBQ0Y7O0FETUE7RUFDRTtJQUNFLG1CQUFBO1lBQUEsT0FBQTtFQ0pGO0VETUU7SUFDRSxzQkFBQTtFQ0pKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2xvZ2luL3BhZ2VzL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWhlYWRpbmcge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMjBweCAwO1xuICBjb2xvcjogIzAwOWFiYjtcbn1cblxuLmxvZ2luLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gIC5sb2dpbi1jb250ZW50IHtcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMjBweCAwO1xuXG4gICAgZm9ybSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIHdpZHRoOiAzMjBweDtcblxuICAgICAgYnV0dG9uIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgIH1cblxuICAgICAgYnV0dG9uOmVuYWJsZWQsXG4gICAgICBidXR0b25bZW5hYmxlZF0ge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMDA5QUJCO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzBweCkge1xuICAubG9naW4tY29udGVudCB7XG4gICAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2MHB4KSB7XG4gIC5sb2dpbi1jb250ZW50IHtcbiAgICBmbGV4OiAxO1xuXG4gICAgZm9ybSB7XG4gICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxufVxuIiwiLmxvZ2luLWhlYWRpbmcge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMjBweCAwO1xuICBjb2xvcjogIzAwOWFiYjtcbn1cblxuLmxvZ2luLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmxvZ2luLWNvbnRhaW5lciAubG9naW4tY29udGVudCB7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweCAwO1xufVxuLmxvZ2luLWNvbnRhaW5lciAubG9naW4tY29udGVudCBmb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDMyMHB4O1xufVxuLmxvZ2luLWNvbnRhaW5lciAubG9naW4tY29udGVudCBmb3JtIGJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG4ubG9naW4tY29udGFpbmVyIC5sb2dpbi1jb250ZW50IGZvcm0gYnV0dG9uOmVuYWJsZWQsXG4ubG9naW4tY29udGFpbmVyIC5sb2dpbi1jb250ZW50IGZvcm0gYnV0dG9uW2VuYWJsZWRdIHtcbiAgYmFja2dyb3VuZDogIzAwOUFCQjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTcwcHgpIHtcbiAgLmxvZ2luLWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzYwcHgpIHtcbiAgLmxvZ2luLWNvbnRlbnQge1xuICAgIGZsZXg6IDE7XG4gIH1cbiAgLmxvZ2luLWNvbnRlbnQgZm9ybSB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/login/pages/login.component.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/login/pages/login.component.ts ***!
  \********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");





let LoginComponent = class LoginComponent {
    constructor(formBuilder, _auth, router) {
        this.formBuilder = formBuilder;
        this._auth = _auth;
        this.router = router;
        this.login = this.formBuilder.group({
            username: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.login.valueChanges.subscribe(V => console.log(V));
    }
    checkLogin() {
        if (this.login.value.username === 'Physio2019' && this.login.value.password === 'password') {
            localStorage.setItem('auth', this.login.value.password);
            console.log('"jednako je"');
            this.router.navigate(['admin']);
        }
        else {
            alert('Nije jednako');
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login-component',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/login/pages/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/modules/login/pages/login.component.scss")]
    })
], LoginComponent);



/***/ })

}]);
//# sourceMappingURL=modules-login-login-module-es2015.js.map