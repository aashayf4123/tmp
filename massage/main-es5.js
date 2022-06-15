(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./modules/admin/admin.module": [
		"./src/app/modules/admin/admin.module.ts",
		"modules-admin-admin-module"
	],
	"./modules/contact/contact.module": [
		"./src/app/modules/contact/contact.module.ts",
		"default~modules-contact-contact-module~modules-home-home-module~modules-phylosophy-phylosophy-module~f6eb35c6",
		"common",
		"modules-contact-contact-module"
	],
	"./modules/home/home.module": [
		"./src/app/modules/home/home.module.ts",
		"default~modules-contact-contact-module~modules-home-home-module~modules-phylosophy-phylosophy-module~f6eb35c6",
		"common",
		"modules-home-home-module"
	],
	"./modules/login/login.module": [
		"./src/app/modules/login/login.module.ts",
		"modules-login-login-module"
	],
	"./modules/massage-detail/massage-detail.module": [
		"./src/app/modules/massage-detail/massage-detail.module.ts",
		"modules-massage-detail-massage-detail-module"
	],
	"./modules/phylosophy/phylosophy.module": [
		"./src/app/modules/phylosophy/phylosophy.module.ts",
		"default~modules-contact-contact-module~modules-home-home-module~modules-phylosophy-phylosophy-module~f6eb35c6",
		"default~modules-phylosophy-phylosophy-module~modules-practice-practice-module",
		"modules-phylosophy-phylosophy-module"
	],
	"./modules/practice/practice.module": [
		"./src/app/modules/practice/practice.module.ts",
		"default~modules-contact-contact-module~modules-home-home-module~modules-phylosophy-phylosophy-module~f6eb35c6",
		"default~modules-phylosophy-phylosophy-module~modules-practice-practice-module",
		"modules-practice-practice-module"
	],
	"./modules/reservations/reservations.module": [
		"./src/app/modules/reservations/reservations.module.ts",
		"modules-reservations-reservations-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"innerWidth > 1024\">\n  <app-navbar-component></app-navbar-component>\n  <router-outlet></router-outlet>\n  <app-footer-component></app-footer-component>\n</div>\n\n<mat-sidenav-container *ngIf=\"innerWidth < 1025\" class=\"sidenav-container\">\n  <mat-sidenav\n    #drawer\n    class=\"sidenav\"\n    fixedInViewport=\"true\"\n    [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n    [mode]=\"'over'\"\n    [opened]=\"false\"\n  >\n    <mat-toolbar>\n      <img src=\"../../../../assets/img/logo/logo_high_resolution.png\" alt=\"\" />\n    </mat-toolbar>\n    <mat-nav-list>\n      <a\n        mat-list-item\n        routerLink=\"/\"\n        [routerLinkActive]=\"['active']\"\n        [routerLinkActiveOptions]=\"{ exact: true }\"\n        (click)=\"drawer.toggle()\"\n        >{{ \"navigation.home\" | translate }}\n      </a>\n\n      <a\n        class=\"dropdown-chevron\"\n        mat-list-item\n        [routerLinkActive]=\"['active']\"\n        [routerLinkActiveOptions]=\"{ exact: true }\"\n        (click)=\"togle()\"\n        >{{ \"navigation.services\" | translate }}\n        <img\n          src=\"../../../../assets/img/chevron-down-solid.svg\"\n          *ngIf=\"showMenu\"\n          height=\"12px\"\n        />\n        <img\n          src=\"../../../../assets/img/chevron-right-solid.svg\"\n          *ngIf=\"!showMenu\"\n          height=\"12px\"\n        />\n      </a>\n      <mat-nav-list\n        class=\"sidenav-submenu menu\"\n        *ngIf=\"showMenu\"\n        style=\"padding-left: 10px\"\n      >\n        <a mat-list-item class=\"dropdown-chevron\" (click)=\"togleSubMenu()\"\n          >{{ \"navigation.therapy\" | translate }}\n          <img\n            src=\"../../../../assets/img/chevron-down-solid.svg\"\n            *ngIf=\"showSubMenu\"\n            height=\"12px\"\n          />\n          <img\n            src=\"../../../../assets/img/chevron-right-solid.svg\"\n            *ngIf=\"!showSubMenu\"\n            height=\"12px\"\n          />\n        </a>\n        <mat-nav-list\n          class=\"sidenav-submenu submenu\"\n          *ngIf=\"showSubMenu\"\n          style=\"padding-left: 10px\"\n        >\n          <a\n            mat-list-item\n            *ngFor=\"let m of massages\"\n            routerLink=\"/therapy/{{ m.path }}\"\n            (click)=\"drawer.toggle()\"\n            >{{ m.name | translate }}</a\n          >\n        </mat-nav-list>\n\n        <a mat-list-item class=\"dropdown-chevron\" (click)=\"togleSubMenu1()\"\n          >{{ \"navigation.prevention\" | translate }}\n          <img\n            src=\"../../../../assets/img/chevron-down-solid.svg\"\n            *ngIf=\"showSubMenu1\"\n            height=\"12px\"\n          />\n          <img\n            src=\"../../../../assets/img/chevron-right-solid.svg\"\n            *ngIf=\"!showSubMenu1\"\n            height=\"12px\"\n          />\n        </a>\n        <mat-nav-list\n          class=\"sidenav-submenu submenu\"\n          *ngIf=\"showSubMenu1\"\n          style=\"padding-left: 10px\"\n        >\n          <a\n            mat-list-item\n            *ngFor=\"let p of prevention\"\n            routerLink=\"/prevention/{{ p.path }}\"\n            (click)=\"drawer.toggle()\"\n            >{{ p.name | translate }}</a\n          >\n        </mat-nav-list>\n      </mat-nav-list>\n      <a\n        class=\"dropdown-chevron\"\n        mat-list-item\n        [routerLinkActive]=\"['active']\"\n        [routerLinkActiveOptions]=\"{ exact: true }\"\n        (click)=\"toggleAbout()\"\n        >{{ \"navigation.about us\" | translate }}\n        <img\n          src=\"../../../../assets/img/chevron-down-solid.svg\"\n          *ngIf=\"toggleAb\"\n          height=\"12px\"\n        />\n        <img\n          src=\"../../../../assets/img/chevron-right-solid.svg\"\n          *ngIf=\"!toggleAb\"\n          height=\"12px\"\n        />\n      </a>\n      <mat-nav-list\n        class=\"sidenav-submenu\"\n        *ngIf=\"toggleAb\"\n        style=\"padding-left: 10px\"\n      >\n        <a\n          mat-list-item\n          *ngFor=\"let a of about\"\n          routerLink=\"/about/{{ a.path }}\"\n          (click)=\"drawer.toggle()\"\n          >{{ a.name | translate }}</a\n        >\n      </mat-nav-list>\n      <a\n        mat-list-item\n        routerLink=\"/contact\"\n        [routerLinkActive]=\"['active']\"\n        [routerLinkActiveOptions]=\"{ exact: true }\"\n        (click)=\"drawer.toggle()\"\n        >{{ \"navigation.contact\" | translate }}\n      </a>\n      <a\n        mat-list-item\n        href=\"https://onlinecalendar.medidoc.ch/BookAppointment?cgid=YGPbSfCp90y9lmSq_80Oyg\"\n        target=\"_blank\"\n        [routerLinkActive]=\"['active']\"\n        [routerLinkActiveOptions]=\"{ exact: true }\"\n        (click)=\"drawer.toggle()\"\n        >{{ \"navigation.reservations\" | translate }}\n      </a>\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <mat-toolbar color=\"primary\">\n      <button\n        type=\"button\"\n        aria-label=\"Toggle sidenav\"\n        mat-icon-button\n        (click)=\"drawer.toggle()\"\n        *ngIf=\"isHandset$ | async\"\n      >\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n      </button>\n      <img\n        src=\"../../../../assets/img/logo/logo_high_resolution_white.png\"\n        alt=\"\"\n        style=\"max-height: 40px\"\n      />\n\n      <li class=\"lang-icons\" (click)=\"toggleLang()\">\n        <img [src]=\"current.img\" alt=\"\" height=\"20px\" />\n        <div\n          *ngIf=\"langOpen\"\n          style=\"\n            position: absolute;\n            background: #a6c5dc;\n            box-shadow: 0 3px 5px rgba(0, 0, 0, 0.6);\n            padding: 5px;\n            right: 5px;\n            z-index: 53333;\n          \"\n        >\n          <li\n            *ngFor=\"let lang of lng\"\n            [value]=\"lang.value\"\n            (click)=\"setLanguage(lang)\"\n            style=\"display: flex; align-items: center; z-index: 3\"\n          >\n            <img [src]=\"lang.img\" height=\"30px\" alt=\"\" />\n          </li>\n        </div>\n      </li>\n    </mat-toolbar>\n    <router-outlet></router-outlet>\n    <app-footer-component></app-footer-component>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/components/footer/footer.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/components/footer/footer.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer style=\"overflow: hidden\">\n  <div class=\"footer-container-top\">\n    <div class=\"footer-top-content\">\n      <div class=\"footer-links\">\n        <ul>\n          <li>{{ \"QuickMenu\" | translate }}</li>\n          <li routerLink=\"/about/phylosophy\">\n            {{ \"navigation.phylosophy\" | translate }}\n          </li>\n          <li routerLink=\"/about/practice\">\n            {{ \"navigation.practice\" | translate }}\n          </li>\n          <!-- <li routerLink=\"/about/about-me\">\n            {{ \"navigation.about me\" | translate }}\n          </li> -->\n          <li routerLink=\"/contact\">{{ \"navigation.contact\" | translate }}</li>\n          <li>\n            <a\n              style=\"color: white; text-decoration: none\"\n              href=\"https://onlinecalendar.medidoc.ch/BookAppointment?cgid=YGPbSfCp90y9lmSq_80Oyg\"\n              >{{ \"navigation.reservations\" | translate }}</a\n            >\n          </li>\n        </ul>\n      </div>\n      <div class=\"footer-hours\">\n        <ul>\n          <li>{{ \"WorkingHours\" | translate }}</li>\n          <li class=\"working-hours\">\n            {{ \"Monday\" | translate }}-{{ \"Friday\" | translate }}\n            <span>07:00 - 20:00</span>\n          </li>\n          <li class=\"working-hours\">\n            {{ \"Saturday\" | translate }} <span>07:00 - 12:00</span>\n          </li>\n        </ul>\n      </div>\n      <div class=\"footer-info\">\n        <p>{{ \"Contact us\" | translate }}</p>\n        <div class=\"footer-info-item\">\n          <i class=\"fas fa-phone\"></i>\n          <a href=\"tel:+41445543777\">+41 44 554 37 77</a>\n        </div>\n        <div class=\"footer-info-item\">\n          <i class=\"fas fa-phone\"></i>\n          <a href=\"tel:+41763722285\">+41 76 372 22 85</a>\n        </div>\n        <div class=\"footer-info-item\">\n          <i class=\"fas fa-envelope\"></i>\n          <a href=\"mailto:info@physioglattbrugg.ch\">info@physioglattbrugg.ch</a>\n        </div>\n        <div class=\"footer-info-item\">\n          <i class=\"fas fa-map-marker-alt\"></i>\n          <p>Europastrasse 5 , 8152 Glattbrugg</p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"footer-container-bottom\">\n    <div class=\"footer-bottom-content\">\n      <div class=\"footer-logo\">\n        <img\n          src=\"../../../../assets/img/logo/logo_high_resolution_white.png\"\n          alt=\"\"\n        />\n      </div>\n      <p class=\"copyrights\">\n        Copyright 2020, Physiotherapie Glattbrugg. All Rights Reserved\n      </p>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/components/navbar/navbar.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/components/navbar/navbar.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar-conatiner\">\n  <div class=\"navbar-content\">\n    <div class=\"navbar-logo\" routerLink=\"/\">\n      <img\n        src=\"../../../../assets/img/logo/logo_high_resolution_white.png\"\n        alt=\"\"\n        class=\"img-fluid\"\n      />\n    </div>\n    <div class=\"navbar-menu\">\n      <li\n        class=\"nav-menu-item\"\n        style=\"text-transform: uppercase\"\n        routerLink=\"/\"\n      >\n        {{ \"navigation.home\" | translate }}\n      </li>\n\n      <li\n        style=\"text-transform: uppercase\"\n        class=\"nav-menu-item dropable\"\n        (click)=\"toggle()\"\n      >\n        {{ \"navigation.services\" | translate\n        }}<i class=\"fas fa-chevron-down\"></i>\n        <div class=\"drop-first\" *ngIf=\"toggler\">\n          <li class=\"drop-first-item hover\" id=\"level1\">\n            <p style=\"text-transform: capitalize\">\n              {{ \"navigation.therapy\" | translate }}\n            </p>\n            <i class=\"fas fa-chevron-right\"></i>\n            <div class=\"drop-second\">\n              <li *ngFor=\"let m of massages\" routerLink=\"/therapy/{{ m.path }}\">\n                {{ m.name | translate }}\n              </li>\n            </div>\n          </li>\n\n          <li class=\"drop-first-item hover\" id=\"level2\">\n            <p style=\"text-transform: capitalize\">\n              {{ \"navigation.prevention\" | translate }}\n            </p>\n            <i class=\"fas fa-chevron-right\"></i>\n            <div class=\"drop-second\">\n              <li\n                *ngFor=\"let p of prevention\"\n                routerLink=\"/prevention/{{ p.path }}\"\n              >\n                {{ p.name | translate }}\n              </li>\n            </div>\n          </li>\n        </div>\n      </li>\n\n      <li\n        style=\"text-transform: uppercase\"\n        class=\"nav-menu-item dropable\"\n        (click)=\"toggle1()\"\n      >\n        {{ \"navigation.about us\" | translate\n        }}<i class=\"fas fa-chevron-down\"></i>\n        <div class=\"drop-first\" *ngIf=\"toggler1\">\n          <li\n            class=\"drop-first-item hover\"\n            *ngFor=\"let a of about\"\n            routerLink=\"/about/{{ a.path }}\"\n            style=\"text-transform: capitalize\"\n          >\n            {{ a.name | translate }}\n          </li>\n        </div>\n      </li>\n      <li\n        class=\"nav-menu-item\"\n        style=\"text-transform: uppercase\"\n        routerLink=\"/contact\"\n      >\n        {{ \"navigation.contact\" | translate }}\n      </li>\n      <li class=\"nav-menu-item\" style=\"text-transform: uppercase\">\n        <a\n          class=\"nav-menu-item\"\n          style=\"text-decoration: none; color: inherit\"\n          href=\"https://onlinecalendar.medidoc.ch/BookAppointment?cgid=YGPbSfCp90y9lmSq_80Oyg\"\n          target=\"_blank\"\n          >{{ \"navigation.reservations\" | translate }}</a\n        >\n      </li>\n\n      <li\n        class=\"nav-menu-item\"\n        (click)=\"toggleLang()\"\n        style=\"width: 100px; text-transform: uppercase\"\n      >\n        <img [src]=\"current.img\" alt=\"\" height=\"20px\" />\n        {{ current.name }}\n\n        <div\n          class=\"lang-drop\"\n          *ngIf=\"langOpen\"\n          style=\"\n            position: absolute;\n            background: #a6c4dc;\n            z-index: 2;\n            width: 100px;\n            box-shadow: 0 3px 5px rgba(0, 0, 0, 0.6);\n          \"\n        >\n          <li\n            *ngFor=\"let lang of lng\"\n            [value]=\"lang.value\"\n            (click)=\"setLanguage(lang)\"\n            style=\"display: flex; align-items: center; padding: 0 5px\"\n          >\n            <img\n              [src]=\"lang.img\"\n              height=\"20px\"\n              alt=\"\"\n              style=\"padding-right: 5px\"\n            />\n            {{ lang.name }}\n          </li>\n        </div>\n      </li>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/api.config.ts":
/*!*******************************!*\
  !*** ./src/app/api.config.ts ***!
  \*******************************/
/*! exports provided: API_BASE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_BASE", function() { return API_BASE; });
var API_BASE = 'https://ew2rqml437.execute-api.us-east-1.amazonaws.com/v1';


/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep * {\n  outline: none !important;\n}\n::ng-deep .sidenav-container {\n  height: 100%;\n}\n::ng-deep .sidenav {\n  width: 100%;\n  max-width: 340px;\n}\n::ng-deep .sidenav .mat-toolbar {\n  background: inherit;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n::ng-deep .sidenav .mat-toolbar img {\n  height: 40px;\n}\n::ng-deep .mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 5;\n  background: #a6c4dc !important;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n::ng-deep .mat-toolbar.mat-primary .lang-icons {\n  list-style: none;\n}\n::ng-deep .mat-toolbar.mat-primary .lang-icons li:last-child {\n  margin-top: 5px;\n}\n::ng-deep .sidenav-submenu.menu {\n  color: #284661;\n}\n::ng-deep .sidenav-submenu.menu .sidenav-submenu.submenu a {\n  color: #009abb;\n}\n::ng-deep .dropdown-chevron .mat-list-item-content {\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n@media screen and (max-width: 360px) {\n  .sidenav {\n    max-width: 250px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Fhc2hheS9Eb3dubG9hZHMvQXJjaGl2ZS9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usd0JBQUE7QUNBSjtBREdFO0VBQ0UsWUFBQTtBQ0RKO0FESUU7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUNGSjtBREtFO0VBQ0UsbUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0hKO0FES0k7RUFDRSxZQUFBO0FDSE47QURRRTtFQUNFLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLDhCQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtBQ05KO0FEUUk7RUFDRSxnQkFBQTtBQ05OO0FEUU07RUFDRSxlQUFBO0FDTlI7QURXRTtFQUNFLGNBQUE7QUNUSjtBRFlNO0VBQ0UsY0FBQTtBQ1ZSO0FEZUU7RUFDRSx5QkFBQTtVQUFBLDhCQUFBO0FDYko7QURnQkE7RUFDRTtJQUNFLDJCQUFBO0VDYkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCB7XG4gICoge1xuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5zaWRlbmF2LWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgLnNpZGVuYXYge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMzQwcHg7XG4gIH1cblxuICAuc2lkZW5hdiAubWF0LXRvb2xiYXIge1xuICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgaW1nIHtcbiAgICAgIGhlaWdodDogNDBweDtcbiAgICB9XG5cbiAgfVxuXG4gIC5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSB7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6IDA7XG4gICAgei1pbmRleDogNTtcbiAgICBiYWNrZ3JvdW5kOiAjYTZjNGRjICFpbXBvcnRhbnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgLmxhbmctaWNvbnMge1xuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcblxuICAgICAgbGk6bGFzdC1jaGlsZCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuc2lkZW5hdi1zdWJtZW51Lm1lbnUge1xuICAgIGNvbG9yOiAjMjg0NjYxO1xuXG4gICAgLnNpZGVuYXYtc3VibWVudS5zdWJtZW51IHtcbiAgICAgIGEge1xuICAgICAgICBjb2xvcjogIzAwOWFiYjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuZHJvcGRvd24tY2hldnJvbiAubWF0LWxpc3QtaXRlbS1jb250ZW50IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2MHB4KSB7XG4gIC5zaWRlbmF2e1xuICAgIG1heC13aWR0aDogMjUwcHghaW1wb3J0YW50O1xuICB9XG59XG5cbiIsIjo6bmctZGVlcCAqIHtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5zaWRlbmF2LWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbn1cbjo6bmctZGVlcCAuc2lkZW5hdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDM0MHB4O1xufVxuOjpuZy1kZWVwIC5zaWRlbmF2IC5tYXQtdG9vbGJhciB7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuOjpuZy1kZWVwIC5zaWRlbmF2IC5tYXQtdG9vbGJhciBpbWcge1xuICBoZWlnaHQ6IDQwcHg7XG59XG46Om5nLWRlZXAgLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiA1O1xuICBiYWNrZ3JvdW5kOiAjYTZjNGRjICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbjo6bmctZGVlcCAubWF0LXRvb2xiYXIubWF0LXByaW1hcnkgLmxhbmctaWNvbnMge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuOjpuZy1kZWVwIC5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSAubGFuZy1pY29ucyBsaTpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuOjpuZy1kZWVwIC5zaWRlbmF2LXN1Ym1lbnUubWVudSB7XG4gIGNvbG9yOiAjMjg0NjYxO1xufVxuOjpuZy1kZWVwIC5zaWRlbmF2LXN1Ym1lbnUubWVudSAuc2lkZW5hdi1zdWJtZW51LnN1Ym1lbnUgYSB7XG4gIGNvbG9yOiAjMDA5YWJiO1xufVxuOjpuZy1kZWVwIC5kcm9wZG93bi1jaGV2cm9uIC5tYXQtbGlzdC1pdGVtLWNvbnRlbnQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2MHB4KSB7XG4gIC5zaWRlbmF2IHtcbiAgICBtYXgtd2lkdGg6IDI1MHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn0iXX0= */"

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
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/services/user.service */ "./src/app/core/services/user.service.ts");







var AppComponent = /** @class */ (function () {
    function AppComponent(breakpointObserver, translate, userService) {
        this.breakpointObserver = breakpointObserver;
        this.translate = translate;
        this.userService = userService;
        this.title = "Physiotherapie Glattbrugg";
        this.isHandset$ = this.breakpointObserver
            .observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].Tablet, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].Handset])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) { return result.matches; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])());
        this.massages = [
            {
                path: "manual-therapy",
                name: "Manuelle Therapie",
            },
            {
                path: "electrotherapy",
                name: "Elektrotherapie",
            },
            {
                path: "shockwave-therapy",
                name: "Stosswellentherapie",
            },
            {
                path: "medical-training-therapy",
                name: "Medizinische Trainingstherapie",
            },
            {
                path: "sports-physiotherapy",
                name: "Sportphysiotherapie",
            },
            {
                path: "kinesio-taping",
                name: "Kinesio taping",
            },
            {
                path: "trigger-point-therapy",
                name: "Triggerpunkttherapie",
            },
            {
                path: "lymphatic-drainage",
                name: "Lymphdrainage",
            },
            {
                path: "neurologische-therapie",
                name: "Neurologische Therapie",
            },
            {
                path: "PNF",
                name: "PNF - Propriozeptive neuromuskuläre Fazilitation",
            },
            {
                path: "cognitive-funktional-therapie",
                name: "Cognitive Funktional Therapie",
            },
            {
                path: "in-house-treatment",
                name: "Domizilbehandlung",
            },
        ];
        this.prevention = [
            {
                path: "physiotherapeutic-consultation",
                name: "Physiotherapy advice",
            },
            {
                path: "massage-therapy",
                name: "Massage",
            },
        ];
        this.about = [
            {
                path: "phylosophy",
                name: "Phylosophy",
            },
            {
                path: "team",
                name: "Team",
            },
            {
                path: "practice",
                name: "Practice",
            },
        ];
        this.lng = [
            {
                value: "de",
                name: "Deutsch",
                img: "../../../../assets/img/switzerland.png",
            },
            {
                value: "en",
                name: "English",
                img: "../../../../assets/img/english.png",
            },
        ];
        this.current = this.lng[0];
        this.innerWidth = window.innerWidth;
        translate.addLangs(["en", "de"]);
        translate.setDefaultLang("de");
        var browserLang = translate.getBrowserLang();
        this.userService.currentLanguage.next("de");
    }
    AppComponent.prototype.setLanguage = function (lang) {
        this.translate.use(lang.value);
        this.current = lang;
        this.userService.currentLanguage.next(lang.value);
    };
    AppComponent.prototype.toggleLang = function () {
        this.langOpen = !this.langOpen;
    };
    AppComponent.prototype.toggleAbout = function () {
        this.toggleAb = !this.toggleAb;
    };
    AppComponent.prototype.togle = function () {
        this.showMenu = !this.showMenu;
    };
    AppComponent.prototype.togleSubMenu = function () {
        this.showSubMenu = !this.showSubMenu;
    };
    AppComponent.prototype.togleSubMenu1 = function () {
        this.showSubMenu1 = !this.showSubMenu1;
    };
    AppComponent.prototype.onResize = function () {
        this.innerWidth = window.innerWidth;
        console.log(this.innerWidth);
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
        { type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("window:resize")
    ], AppComponent.prototype, "onResize", null);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.routing.module */ "./src/app/app.routing.module.ts");
/* harmony import */ var _core_components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/components/navbar/navbar.module */ "./src/app/core/components/navbar/navbar.module.ts");
/* harmony import */ var _core_components_footer_footer_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/components/footer/footer.module */ "./src/app/core/components/footer/footer.module.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");















// AoT requires an exported function for factories
function HttpLoaderFactory(httpClient) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_14__["TranslateHttpLoader"](httpClient);
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _core_components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_8__["NavbarModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _core_components_footer_footer_module__WEBPACK_IMPORTED_MODULE_9__["FooterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
                    }
                })
            ],
            providers: [
                _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_11__["AuthenticationService"],
                _core_services_user_service__WEBPACK_IMPORTED_MODULE_12__["UserService"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app.routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/guards/auth.guard */ "./src/app/core/guards/auth.guard.ts");




var ROUTES = [
    {
        path: '',
        loadChildren: './modules/home/home.module#HomeModule'
    },
    {
        path: 'contact',
        loadChildren: './modules/contact/contact.module#ContactModule'
    },
    {
        path: 'reservations',
        loadChildren: './modules/reservations/reservations.module#ReservationsModule'
    },
    {
        path: 'login',
        loadChildren: './modules/login/login.module#LoginModule'
    },
    {
        path: 'admin',
        loadChildren: './modules/admin/admin.module#AdminModule',
        canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: 'about/practice',
        loadChildren: './modules/practice/practice.module#PracticeModule'
    },
    {
        path: 'about/phylosophy',
        loadChildren: './modules/phylosophy/phylosophy.module#PhylosophyModule'
    },
    {
        path: 'therapy/:id',
        loadChildren: './modules/massage-detail/massage-detail.module#MassageDetailModule',
    },
    {
        path: 'prevention/:id',
        loadChildren: './modules/massage-detail/massage-detail.module#MassageDetailModule',
    },
    {
        path: 'about/:id',
        loadChildren: './modules/massage-detail/massage-detail.module#MassageDetailModule',
    }
];
/**
 * Represents the Root Application Routing Module.
 *
 * This module sets up root routes for the application as well
 * as exports Angular RouterModule to be avilable in
 * modules that import this module
 *
 * @since 1.0.0
 * @author Nemanja Milinkovic
 */
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(ROUTES)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/core/components/footer/footer.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/core/components/footer/footer.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep {\n  overflow: hidden;\n}\n\nfooter {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\nfooter .footer-container-top {\n  background: #a6c4dc;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\nfooter .footer-container-top .footer-top-content {\n  padding: 20px 0;\n  max-width: 1200px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex: 1;\n  flex-wrap: wrap;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  font-size: 18px;\n}\n\nfooter .footer-container-top .footer-top-content ul {\n  margin: 0;\n}\n\nfooter .footer-container-top .footer-top-content .footer-links ul {\n  list-style: none;\n}\n\nfooter .footer-container-top .footer-top-content .footer-links ul li {\n  color: white;\n  cursor: pointer;\n}\n\nfooter .footer-container-top .footer-top-content .footer-links ul li:first-of-type {\n  font-weight: 700;\n  padding-bottom: 10px;\n}\n\nfooter .footer-container-top .footer-top-content .footer-hours ul {\n  list-style: none;\n}\n\nfooter .footer-container-top .footer-top-content .footer-hours ul li {\n  color: white;\n}\n\nfooter .footer-container-top .footer-top-content .footer-hours ul li:first-of-type {\n  font-weight: 700;\n  padding-bottom: 10px;\n}\n\nfooter .footer-container-top .footer-top-content .footer-hours ul li.working-hours {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\nfooter .footer-container-top .footer-top-content .footer-hours ul li.working-hours span {\n  margin-left: 10px;\n}\n\nfooter .footer-container-top .footer-top-content .footer-info p:first-child {\n  margin: 0;\n  padding-bottom: 10px;\n  font-weight: 700;\n  color: white;\n}\n\nfooter .footer-container-top .footer-top-content .footer-info-item {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\nfooter .footer-container-top .footer-top-content .footer-info-item i {\n  font-size: 20px;\n  color: white;\n  padding-right: 10px;\n}\n\nfooter .footer-container-top .footer-top-content .footer-info-item a {\n  color: white;\n}\n\nfooter .footer-container-top .footer-top-content .footer-info-item p {\n  color: white;\n  margin-bottom: 0;\n}\n\nfooter .footer-container-top .footer-top-content .footer-info-item:nth-of-type(2n) {\n  margin: 10px 0;\n}\n\nfooter .footer-container-bottom {\n  background: #a6c4dc99;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\nfooter .footer-container-bottom .footer-bottom-content {\n  padding: 10px 0;\n  max-width: 1200px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex: 1;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\nfooter .footer-container-bottom .footer-bottom-content .footer-logo img {\n  max-height: 40px;\n}\n\nfooter .footer-container-bottom .footer-bottom-content .copyrights {\n  color: white;\n  margin: 0;\n  padding: 0;\n}\n\n@media screen and (max-width: 560px) {\n  .footer-top-content {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n  }\n  .footer-top-content .footer-hours {\n    margin: 15px 0;\n  }\n\n  .footer-bottom-content {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n  }\n  .footer-bottom-content .copyrights {\n    margin-top: 10px !important;\n    font-size: 14px;\n    text-align: center;\n  }\n}\n\n@media screen and (max-width: 1200px) {\n  .footer-container-top {\n    padding: 0 15px;\n  }\n\n  .footer-container-bottom {\n    padding: 0 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Fhc2hheS9Eb3dubG9hZHMvQXJjaGl2ZS9zcmMvYXBwL2NvcmUvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRTtFQUNFLGdCQUFBO0FDREo7O0FESUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNERjs7QURHRTtFQUNFLG1CQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0RKOztBREdJO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsbUJBQUE7VUFBQSxPQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSxlQUFBO0FDRE47O0FER007RUFDRSxTQUFBO0FDRFI7O0FES1E7RUFDRSxnQkFBQTtBQ0hWOztBREtVO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUNIWjs7QURLWTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7QUNIZDs7QURVUTtFQUNFLGdCQUFBO0FDUlY7O0FEVVU7RUFDRSxZQUFBO0FDUlo7O0FEVVk7RUFDRSxnQkFBQTtFQUNBLG9CQUFBO0FDUmQ7O0FEVVk7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtBQ1JkOztBRFNjO0VBQ0UsaUJBQUE7QUNQaEI7O0FEZ0JRO0VBQ0UsU0FBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDZFY7O0FEaUJRO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ2ZWOztBRGlCVTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNmWjs7QURrQlU7RUFDRSxZQUFBO0FDaEJaOztBRG1CVTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQ2pCWjs7QURvQlU7RUFDRSxjQUFBO0FDbEJaOztBRDBCRTtFQUNFLHFCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ3hCSjs7QUQwQkk7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxtQkFBQTtVQUFBLE9BQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ3hCTjs7QUQyQlE7RUFDRSxnQkFBQTtBQ3pCVjs7QUQ2Qk07RUFDRSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUMzQlI7O0FEaUNBO0VBQ0U7SUFDRSw0QkFBQTtJQUFBLDZCQUFBO1lBQUEsc0JBQUE7RUM5QkY7RURnQ0U7SUFDRSxjQUFBO0VDOUJKOztFRGlDQTtJQUNFLDRCQUFBO0lBQUEsNkJBQUE7WUFBQSxzQkFBQTtFQzlCRjtFRGdDRTtJQUNFLDJCQUFBO0lBQ0EsZUFBQTtJQUNBLGtCQUFBO0VDOUJKO0FBQ0Y7O0FEa0NBO0VBQ0U7SUFDRSxlQUFBO0VDaENGOztFRGtDQTtJQUNFLGVBQUE7RUMvQkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG46aG9zdCB7XG4gIDo6bmctZGVlcCB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxufVxuZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAuZm9vdGVyLWNvbnRhaW5lci10b3Age1xuICAgIGJhY2tncm91bmQ6ICNhNmM0ZGM7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIC5mb290ZXItdG9wLWNvbnRlbnQge1xuICAgICAgcGFkZGluZzogMjBweCAwO1xuICAgICAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleDogMTtcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcblxuICAgICAgdWwge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG5cbiAgICAgIC5mb290ZXItbGlua3Mge1xuICAgICAgICB1bCB7XG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcblxuICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAgICAgJjpmaXJzdC1vZi10eXBlIHtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5mb290ZXItaG91cnMge1xuICAgICAgICB1bCB7XG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcblxuICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcblxuICAgICAgICAgICAgJjpmaXJzdC1vZi10eXBlIHtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmLndvcmtpbmctaG91cnN7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5mb290ZXItaW5mbyB7XG5cbiAgICAgICAgcDpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1pdGVtIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgICBpIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcCB7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICY6bnRoLW9mLXR5cGUoMm4pIHtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfVxuICB9XG5cbiAgLmZvb3Rlci1jb250YWluZXItYm90dG9tIHtcbiAgICBiYWNrZ3JvdW5kOiAjYTZjNGRjOTk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIC5mb290ZXItYm90dG9tLWNvbnRlbnQge1xuICAgICAgcGFkZGluZzogMTBweCAwO1xuICAgICAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleDogMTtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgIC5mb290ZXItbG9nbyB7XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgbWF4LWhlaWdodDogNDBweDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuY29weXJpZ2h0cyB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjBweCkge1xuICAuZm9vdGVyLXRvcC1jb250ZW50IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgLmZvb3Rlci1ob3VycyB7XG4gICAgICBtYXJnaW46IDE1cHggMDtcbiAgICB9XG4gIH1cbiAgLmZvb3Rlci1ib3R0b20tY29udGVudCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIC5jb3B5cmlnaHRzIHtcbiAgICAgIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5mb290ZXItY29udGFpbmVyLXRvcCB7XG4gICAgcGFkZGluZzogMCAxNXB4O1xuICB9XG4gIC5mb290ZXItY29udGFpbmVyLWJvdHRvbSB7XG4gICAgcGFkZGluZzogMCAxNXB4O1xuICB9XG59XG4iLCI6aG9zdCA6Om5nLWRlZXAge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuZm9vdGVyIC5mb290ZXItY29udGFpbmVyLXRvcCB7XG4gIGJhY2tncm91bmQ6ICNhNmM0ZGM7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuZm9vdGVyIC5mb290ZXItY29udGFpbmVyLXRvcCAuZm9vdGVyLXRvcC1jb250ZW50IHtcbiAgcGFkZGluZzogMjBweCAwO1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbmZvb3RlciAuZm9vdGVyLWNvbnRhaW5lci10b3AgLmZvb3Rlci10b3AtY29udGVudCB1bCB7XG4gIG1hcmdpbjogMDtcbn1cbmZvb3RlciAuZm9vdGVyLWNvbnRhaW5lci10b3AgLmZvb3Rlci10b3AtY29udGVudCAuZm9vdGVyLWxpbmtzIHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbmZvb3RlciAuZm9vdGVyLWNvbnRhaW5lci10b3AgLmZvb3Rlci10b3AtY29udGVudCAuZm9vdGVyLWxpbmtzIHVsIGxpIHtcbiAgY29sb3I6IHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5mb290ZXIgLmZvb3Rlci1jb250YWluZXItdG9wIC5mb290ZXItdG9wLWNvbnRlbnQgLmZvb3Rlci1saW5rcyB1bCBsaTpmaXJzdC1vZi10eXBlIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5mb290ZXIgLmZvb3Rlci1jb250YWluZXItdG9wIC5mb290ZXItdG9wLWNvbnRlbnQgLmZvb3Rlci1ob3VycyB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5mb290ZXIgLmZvb3Rlci1jb250YWluZXItdG9wIC5mb290ZXItdG9wLWNvbnRlbnQgLmZvb3Rlci1ob3VycyB1bCBsaSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbmZvb3RlciAuZm9vdGVyLWNvbnRhaW5lci10b3AgLmZvb3Rlci10b3AtY29udGVudCAuZm9vdGVyLWhvdXJzIHVsIGxpOmZpcnN0LW9mLXR5cGUge1xuICBmb250LXdlaWdodDogNzAwO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbmZvb3RlciAuZm9vdGVyLWNvbnRhaW5lci10b3AgLmZvb3Rlci10b3AtY29udGVudCAuZm9vdGVyLWhvdXJzIHVsIGxpLndvcmtpbmctaG91cnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbmZvb3RlciAuZm9vdGVyLWNvbnRhaW5lci10b3AgLmZvb3Rlci10b3AtY29udGVudCAuZm9vdGVyLWhvdXJzIHVsIGxpLndvcmtpbmctaG91cnMgc3BhbiB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuZm9vdGVyIC5mb290ZXItY29udGFpbmVyLXRvcCAuZm9vdGVyLXRvcC1jb250ZW50IC5mb290ZXItaW5mbyBwOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHdoaXRlO1xufVxuZm9vdGVyIC5mb290ZXItY29udGFpbmVyLXRvcCAuZm9vdGVyLXRvcC1jb250ZW50IC5mb290ZXItaW5mby1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbmZvb3RlciAuZm9vdGVyLWNvbnRhaW5lci10b3AgLmZvb3Rlci10b3AtY29udGVudCAuZm9vdGVyLWluZm8taXRlbSBpIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5mb290ZXIgLmZvb3Rlci1jb250YWluZXItdG9wIC5mb290ZXItdG9wLWNvbnRlbnQgLmZvb3Rlci1pbmZvLWl0ZW0gYSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbmZvb3RlciAuZm9vdGVyLWNvbnRhaW5lci10b3AgLmZvb3Rlci10b3AtY29udGVudCAuZm9vdGVyLWluZm8taXRlbSBwIHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuZm9vdGVyIC5mb290ZXItY29udGFpbmVyLXRvcCAuZm9vdGVyLXRvcC1jb250ZW50IC5mb290ZXItaW5mby1pdGVtOm50aC1vZi10eXBlKDJuKSB7XG4gIG1hcmdpbjogMTBweCAwO1xufVxuZm9vdGVyIC5mb290ZXItY29udGFpbmVyLWJvdHRvbSB7XG4gIGJhY2tncm91bmQ6ICNhNmM0ZGM5OTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5mb290ZXIgLmZvb3Rlci1jb250YWluZXItYm90dG9tIC5mb290ZXItYm90dG9tLWNvbnRlbnQge1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5mb290ZXIgLmZvb3Rlci1jb250YWluZXItYm90dG9tIC5mb290ZXItYm90dG9tLWNvbnRlbnQgLmZvb3Rlci1sb2dvIGltZyB7XG4gIG1heC1oZWlnaHQ6IDQwcHg7XG59XG5mb290ZXIgLmZvb3Rlci1jb250YWluZXItYm90dG9tIC5mb290ZXItYm90dG9tLWNvbnRlbnQgLmNvcHlyaWdodHMge1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTYwcHgpIHtcbiAgLmZvb3Rlci10b3AtY29udGVudCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAuZm9vdGVyLXRvcC1jb250ZW50IC5mb290ZXItaG91cnMge1xuICAgIG1hcmdpbjogMTVweCAwO1xuICB9XG5cbiAgLmZvb3Rlci1ib3R0b20tY29udGVudCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAuZm9vdGVyLWJvdHRvbS1jb250ZW50IC5jb3B5cmlnaHRzIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5mb290ZXItY29udGFpbmVyLXRvcCB7XG4gICAgcGFkZGluZzogMCAxNXB4O1xuICB9XG5cbiAgLmZvb3Rlci1jb250YWluZXItYm90dG9tIHtcbiAgICBwYWRkaW5nOiAwIDE1cHg7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/core/components/footer/footer.component.ts":
/*!************************************************************!*\
  !*** ./src/app/core/components/footer/footer.component.ts ***!
  \************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer-component',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/core/components/footer/footer.component.scss")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/core/components/footer/footer.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/components/footer/footer.module.ts ***!
  \*********************************************************/
/*! exports provided: FooterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterModule", function() { return FooterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer.component */ "./src/app/core/components/footer/footer.component.ts");






var FooterModule = /** @class */ (function () {
    function FooterModule() {
    }
    FooterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
            ],
            exports: [
                _footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]
            ],
            declarations: [
                _footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]
            ]
        })
    ], FooterModule);
    return FooterModule;
}());



/***/ }),

/***/ "./src/app/core/components/navbar/navbar.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/core/components/navbar/navbar.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-conatiner {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex: 1;\n  height: 80px;\n  -webkit-box-pack: center;\n          justify-content: center;\n  background: #a6c4dc;\n}\n.navbar-conatiner .navbar-content {\n  padding: 0 10px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex: 1;\n  max-width: 1200px;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.navbar-conatiner .navbar-content .navbar-logo {\n  display: -webkit-box;\n  display: flex;\n}\n.navbar-conatiner .navbar-content .navbar-logo img {\n  max-width: 200px;\n  cursor: pointer;\n}\n.navbar-conatiner .navbar-content .navbar-menu {\n  display: -webkit-box;\n  display: flex;\n}\n.navbar-conatiner .navbar-content .navbar-menu li.nav-menu-item {\n  list-style: none;\n  margin-left: 15px;\n  cursor: pointer;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 40px;\n  color: white;\n}\n.navbar-conatiner .navbar-content .navbar-menu li.nav-menu-item.dropable i {\n  font-size: 12px;\n  margin-left: 5px;\n  color: white;\n}\n.navbar-conatiner .navbar-content .navbar-menu .drop-first {\n  position: absolute;\n  z-index: 2;\n  background: #a6c4dc;\n  width: 120px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.5);\n}\n.navbar-conatiner .navbar-content .navbar-menu .drop-first li.drop-first-item {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n.navbar-conatiner .navbar-content .navbar-menu .drop-first li.drop-first-item p {\n  margin: 0;\n}\n.navbar-conatiner .navbar-content .navbar-menu .drop-first li.drop-first-item i {\n  font-size: 12px;\n  margin-left: 5px;\n  color: white;\n}\n.navbar-conatiner .navbar-content .navbar-menu .drop-first li.drop-first-item .drop-second {\n  width: 250px;\n  display: block;\n  position: absolute;\n  visibility: hidden;\n  background: #a6c4dc;\n  left: 120px;\n  top: 0;\n  min-width: 85px;\n  font-size: 14px;\n  padding: 0 10px;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);\n}\n.navbar-conatiner .navbar-content .navbar-menu .drop-first li.drop-first-item .drop-second li {\n  color: white;\n}\n.navbar-conatiner .navbar-content .navbar-menu .drop-first li.drop-first-item .drop-second li:hover {\n  color: #009abb;\n}\n.navbar-conatiner .navbar-content .navbar-menu .drop-first li.drop-first-item.hover:hover {\n  color: #009abb;\n}\n.navbar-conatiner .navbar-content .navbar-menu .drop-first .drop-first-item#level2 .drop-second {\n  top: 45px;\n}\n.navbar-conatiner .navbar-content .navbar-menu li#level1 {\n  display: -webkit-box;\n  display: flex;\n  margin: 0;\n}\n.navbar-conatiner .navbar-content .navbar-menu li#level2 {\n  display: -webkit-box;\n  display: flex;\n  margin: 0;\n}\n.navbar-conatiner .navbar-content .navbar-menu li#level1:hover .drop-second {\n  visibility: visible;\n}\n.navbar-conatiner .navbar-content .navbar-menu li#level2:hover .drop-second {\n  visibility: visible;\n}\n.navbar-conatiner .navbar-content .navbar-menu li.nav-menu-item::before {\n  content: \"\";\n  width: 1%;\n  height: 2px;\n  color: white;\n}\n.navbar-conatiner .navbar-content .navbar-menu li.nav-menu-item::after {\n  content: \"\";\n  display: block;\n  width: 0;\n  height: 2px;\n  background: white;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n.navbar-conatiner .navbar-content .navbar-menu li.nav-menu-item:hover:after {\n  width: 100%;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Fhc2hheS9Eb3dubG9hZHMvQXJjaGl2ZS9zcmMvYXBwL2NvcmUvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLG1CQUFBO1VBQUEsT0FBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsbUJBQUE7QUNDRjtBRENFO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLG1CQUFBO1VBQUEsT0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNDSjtBRENJO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0FDQ047QURDTTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQ0NSO0FER0k7RUFDRSxvQkFBQTtFQUFBLGFBQUE7QUNETjtBREdNO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNEUjtBREtRO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0hWO0FET007RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0NBQUE7QUNMUjtBRE9RO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDTFY7QURPVTtFQUNFLFNBQUE7QUNMWjtBRFFVO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ05aO0FEU1U7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esc0NBQUE7QUNQWjtBRFNZO0VBQ0UsWUFBQTtBQ1BkO0FEU2M7RUFDRSxjQUFBO0FDUGhCO0FEWVU7RUFDRSxjQUFBO0FDVlo7QURlVTtFQUNFLFNBQUE7QUNiWjtBRGtCTTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLFNBQUE7QUNoQlI7QURtQk07RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxTQUFBO0FDakJSO0FEcUJRO0VBQ0UsbUJBQUE7QUNuQlY7QUR3QlE7RUFDRSxtQkFBQTtBQ3RCVjtBRDBCTTtFQUNFLFdBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUN4QlI7QUQyQk07RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0FDekJSO0FENEJNO0VBQ0UsV0FBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7QUMxQlIiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXItY29uYXRpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbiAgaGVpZ2h0OiA4MHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2E2YzRkYztcblxuICAubmF2YmFyLWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXg6IDE7XG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAubmF2YmFyLWxvZ28ge1xuICAgICAgZGlzcGxheTogZmxleDtcblxuICAgICAgaW1nIHtcbiAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5uYXZiYXItbWVudSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgICBsaS5uYXYtbWVudS1pdGVtIHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgfVxuXG4gICAgICBsaS5uYXYtbWVudS1pdGVtLmRyb3BhYmxlIHtcbiAgICAgICAgaSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5kcm9wLWZpcnN0IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjYTZjNGRjO1xuICAgICAgICB3aWR0aDogMTIwcHg7XG4gICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDVweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG5cbiAgICAgICAgbGkuZHJvcC1maXJzdC1pdGVtIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuXG4gICAgICAgICAgcCB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5kcm9wLXNlY29uZCB7XG4gICAgICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNhNmM0ZGM7XG4gICAgICAgICAgICBsZWZ0OiAxMjBweDtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIG1pbi13aWR0aDogODVweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuXG4gICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcblxuICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwOWFiYjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgICYuaG92ZXI6aG92ZXIge1xuICAgICAgICAgICAgY29sb3I6ICMwMDlhYmI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmRyb3AtZmlyc3QtaXRlbSNsZXZlbDIge1xuICAgICAgICAgIC5kcm9wLXNlY29uZCB7XG4gICAgICAgICAgICB0b3A6IDQ1cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpI2xldmVsMSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH1cblxuICAgICAgbGkjbGV2ZWwyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuXG4gICAgICBsaSNsZXZlbDE6aG92ZXIge1xuICAgICAgICAuZHJvcC1zZWNvbmQge1xuICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGkjbGV2ZWwyOmhvdmVyIHtcbiAgICAgICAgLmRyb3Atc2Vjb25kIHtcbiAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpLm5hdi1tZW51LWl0ZW06OmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIHdpZHRoOiAxJTtcbiAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIH1cblxuICAgICAgbGkubmF2LW1lbnUtaXRlbTo6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiAwO1xuICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIHRyYW5zaXRpb246IC41cztcbiAgICAgIH1cblxuICAgICAgbGkubmF2LW1lbnUtaXRlbTpob3ZlcjphZnRlciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0cmFuc2l0aW9uOiAuNXM7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIubmF2YmFyLWNvbmF0aW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDE7XG4gIGhlaWdodDogODBweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNhNmM0ZGM7XG59XG4ubmF2YmFyLWNvbmF0aW5lciAubmF2YmFyLWNvbnRlbnQge1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDE7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubmF2YmFyLWNvbmF0aW5lciAubmF2YmFyLWNvbnRlbnQgLm5hdmJhci1sb2dvIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5uYXZiYXItY29uYXRpbmVyIC5uYXZiYXItY29udGVudCAubmF2YmFyLWxvZ28gaW1nIHtcbiAgbWF4LXdpZHRoOiAyMDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm5hdmJhci1jb25hdGluZXIgLm5hdmJhci1jb250ZW50IC5uYXZiYXItbWVudSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ubmF2YmFyLWNvbmF0aW5lciAubmF2YmFyLWNvbnRlbnQgLm5hdmJhci1tZW51IGxpLm5hdi1tZW51LWl0ZW0ge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG4ubmF2YmFyLWNvbmF0aW5lciAubmF2YmFyLWNvbnRlbnQgLm5hdmJhci1tZW51IGxpLm5hdi1tZW51LWl0ZW0uZHJvcGFibGUgaSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLm5hdmJhci1jb25hdGluZXIgLm5hdmJhci1jb250ZW50IC5uYXZiYXItbWVudSAuZHJvcC1maXJzdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMjtcbiAgYmFja2dyb3VuZDogI2E2YzRkYztcbiAgd2lkdGg6IDEyMHB4O1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBib3gtc2hhZG93OiAwIDNweCA1cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuLm5hdmJhci1jb25hdGluZXIgLm5hdmJhci1jb250ZW50IC5uYXZiYXItbWVudSAuZHJvcC1maXJzdCBsaS5kcm9wLWZpcnN0LWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cbi5uYXZiYXItY29uYXRpbmVyIC5uYXZiYXItY29udGVudCAubmF2YmFyLW1lbnUgLmRyb3AtZmlyc3QgbGkuZHJvcC1maXJzdC1pdGVtIHAge1xuICBtYXJnaW46IDA7XG59XG4ubmF2YmFyLWNvbmF0aW5lciAubmF2YmFyLWNvbnRlbnQgLm5hdmJhci1tZW51IC5kcm9wLWZpcnN0IGxpLmRyb3AtZmlyc3QtaXRlbSBpIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBjb2xvcjogd2hpdGU7XG59XG4ubmF2YmFyLWNvbmF0aW5lciAubmF2YmFyLWNvbnRlbnQgLm5hdmJhci1tZW51IC5kcm9wLWZpcnN0IGxpLmRyb3AtZmlyc3QtaXRlbSAuZHJvcC1zZWNvbmQge1xuICB3aWR0aDogMjUwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYmFja2dyb3VuZDogI2E2YzRkYztcbiAgbGVmdDogMTIwcHg7XG4gIHRvcDogMDtcbiAgbWluLXdpZHRoOiA4NXB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG4ubmF2YmFyLWNvbmF0aW5lciAubmF2YmFyLWNvbnRlbnQgLm5hdmJhci1tZW51IC5kcm9wLWZpcnN0IGxpLmRyb3AtZmlyc3QtaXRlbSAuZHJvcC1zZWNvbmQgbGkge1xuICBjb2xvcjogd2hpdGU7XG59XG4ubmF2YmFyLWNvbmF0aW5lciAubmF2YmFyLWNvbnRlbnQgLm5hdmJhci1tZW51IC5kcm9wLWZpcnN0IGxpLmRyb3AtZmlyc3QtaXRlbSAuZHJvcC1zZWNvbmQgbGk6aG92ZXIge1xuICBjb2xvcjogIzAwOWFiYjtcbn1cbi5uYXZiYXItY29uYXRpbmVyIC5uYXZiYXItY29udGVudCAubmF2YmFyLW1lbnUgLmRyb3AtZmlyc3QgbGkuZHJvcC1maXJzdC1pdGVtLmhvdmVyOmhvdmVyIHtcbiAgY29sb3I6ICMwMDlhYmI7XG59XG4ubmF2YmFyLWNvbmF0aW5lciAubmF2YmFyLWNvbnRlbnQgLm5hdmJhci1tZW51IC5kcm9wLWZpcnN0IC5kcm9wLWZpcnN0LWl0ZW0jbGV2ZWwyIC5kcm9wLXNlY29uZCB7XG4gIHRvcDogNDVweDtcbn1cbi5uYXZiYXItY29uYXRpbmVyIC5uYXZiYXItY29udGVudCAubmF2YmFyLW1lbnUgbGkjbGV2ZWwxIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAwO1xufVxuLm5hdmJhci1jb25hdGluZXIgLm5hdmJhci1jb250ZW50IC5uYXZiYXItbWVudSBsaSNsZXZlbDIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDA7XG59XG4ubmF2YmFyLWNvbmF0aW5lciAubmF2YmFyLWNvbnRlbnQgLm5hdmJhci1tZW51IGxpI2xldmVsMTpob3ZlciAuZHJvcC1zZWNvbmQge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuLm5hdmJhci1jb25hdGluZXIgLm5hdmJhci1jb250ZW50IC5uYXZiYXItbWVudSBsaSNsZXZlbDI6aG92ZXIgLmRyb3Atc2Vjb25kIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cbi5uYXZiYXItY29uYXRpbmVyIC5uYXZiYXItY29udGVudCAubmF2YmFyLW1lbnUgbGkubmF2LW1lbnUtaXRlbTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDElO1xuICBoZWlnaHQ6IDJweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLm5hdmJhci1jb25hdGluZXIgLm5hdmJhci1jb250ZW50IC5uYXZiYXItbWVudSBsaS5uYXYtbWVudS1pdGVtOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuLm5hdmJhci1jb25hdGluZXIgLm5hdmJhci1jb250ZW50IC5uYXZiYXItbWVudSBsaS5uYXYtbWVudS1pdGVtOmhvdmVyOmFmdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59Il19 */"

/***/ }),

/***/ "./src/app/core/components/navbar/navbar.component.ts":
/*!************************************************************!*\
  !*** ./src/app/core/components/navbar/navbar.component.ts ***!
  \************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/core/services/user.service.ts");




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(translate, userService) {
        this.translate = translate;
        this.userService = userService;
        this.toggler = false;
        this.toggler1 = false;
        this.lng = [
            {
                value: 'de',
                name: 'Deutsch',
                img: '../../../../assets/img/switzerland.png'
            },
            {
                value: 'en',
                name: 'English',
                img: '../../../../assets/img/english.png'
            }
        ];
        this.current = this.lng[0];
        this.massages = [
            {
                path: 'manual-therapy',
                name: 'Manuelle Therapie'
            },
            {
                path: 'electrotherapy',
                name: 'Elektrotherapie'
            },
            {
                path: 'shockwave-therapy',
                name: 'Stosswellentherapie'
            },
            {
                path: 'medical-training-therapy',
                name: 'Medizinische Trainingstherapie'
            },
            {
                path: 'sports-physiotherapy',
                name: 'Sportphysiotherapie'
            },
            {
                path: 'kinesio-taping',
                name: 'Kinesio taping'
            },
            {
                path: 'trigger-point-therapy',
                name: 'Triggerpunkttherapie'
            },
            {
                path: 'lymphatic-drainage',
                name: 'Lymphdrainage'
            },
            {
                path: 'neurologische-therapie',
                name: 'Neurologische Therapie'
            },
            {
                path: 'PNF',
                name: 'PNF - Propriozeptive neuromuskuläre Fazilitation'
            },
            {
                path: '',
                name: 'Cognitive Funktional Therapie'
            },
            {
                path: 'in-house-treatment',
                name: 'Domizilbehandlung'
            }
        ];
        this.prevention = [
            {
                path: 'physiotherapeutic-consultation',
                name: 'Physiotherapy advice'
            },
            {
                path: 'massage-therapy',
                name: 'Massage'
            }
        ];
        this.about = [
            {
                path: 'phylosophy',
                name: 'Phylosophy'
            },
            {
                path: 'team',
                name: 'Team'
            },
            {
                path: 'practice',
                name: 'Practice'
            }
        ];
    }
    NavbarComponent.prototype.toggleLang = function () {
        this.langOpen = !this.langOpen;
    };
    NavbarComponent.prototype.setLanguage = function (lang) {
        this.translate.use(lang.value);
        this.current = lang;
        this.userService.currentLanguage.next(lang.value);
    };
    NavbarComponent.prototype.toggle = function () {
        this.toggler = !this.toggler;
        if (this.toggler1 = false) {
            this.toggler1 = !this.toggler1;
        }
    };
    NavbarComponent.prototype.toggle1 = function () {
        this.toggler1 = !this.toggler1;
        if (this.toggler = false) {
            this.toggler = !this.toggler;
        }
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
    ]; };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar-component',
            template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/core/components/navbar/navbar.component.scss")]
        })
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/core/components/navbar/navbar.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/components/navbar/navbar.module.ts ***!
  \*********************************************************/
/*! exports provided: NavbarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarModule", function() { return NavbarModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar.component */ "./src/app/core/components/navbar/navbar.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");






var NavbarModule = /** @class */ (function () {
    function NavbarModule() {
    }
    NavbarModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"]
            ],
            exports: [
                _navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"]
            ],
            declarations: [
                _navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"]
            ]
        })
    ], NavbarModule);
    return NavbarModule;
}());



/***/ }),

/***/ "./src/app/core/guards/auth.guard.ts":
/*!*******************************************!*\
  !*** ./src/app/core/guards/auth.guard.ts ***!
  \*******************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/core/services/authentication.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (this.authService.isUserLogged()) {
            return true;
        }
        else {
            this.router.navigate(['login']);
            console.log('Niste ulgovani molimo ulogujte se');
            return false;
        }
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
    ]; };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' })
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/core/services/authentication.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/services/authentication.service.ts ***!
  \*********************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _api_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api.config */ "./src/app/api.config.ts");




var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(_http) {
        this._http = _http;
    }
    AuthenticationService.prototype.login = function (credentials) {
        return this._http.get(_api_config__WEBPACK_IMPORTED_MODULE_3__["API_BASE"] + "/users/check-username", { params: credentials });
    };
    AuthenticationService.prototype.isUserLogged = function () {
        var user = localStorage.getItem('auth');
        console.log(!(user === null));
        return !(user === null);
    };
    AuthenticationService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/core/services/user.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api.config */ "./src/app/api.config.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.currentLanguage = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]('en');
    }
    UserService.prototype.reguser = function (data) {
        return this.http.post(_api_config__WEBPACK_IMPORTED_MODULE_3__["API_BASE"] + "/users", {}, { params: data });
    };
    UserService.prototype.contact = function (data) {
        return this.http.post("https://ew2rqml437.execute-api.us-east-1.amazonaws.com/v1/contact", data);
    };
    UserService.prototype.reserve = function (data) {
        return this.http.post(_api_config__WEBPACK_IMPORTED_MODULE_3__["API_BASE"] + "/reservations", {}, { params: data });
    };
    UserService.prototype.getAllReservations = function () {
        return this.http.get(_api_config__WEBPACK_IMPORTED_MODULE_3__["API_BASE"] + "/reservations");
    };
    UserService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");




var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
            ]
        })
    ], MaterialModule);
    return MaterialModule;
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





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

module.exports = __webpack_require__(/*! /home/aashay/Downloads/Archive/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map