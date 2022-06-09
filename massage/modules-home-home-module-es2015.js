(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/core/components/reserve-contact/reserve-contact.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/components/reserve-contact/reserve-contact.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"reserve-contact-container\">\n  <div class=\"reserve-contact-content\">\n    <h1>\n      <b>{{ \"ContactReserve\" | translate }}</b>\n    </h1>\n    <button id=\"online-buchen\">\n      <a\n        href=\"https://onlinecalendar.medidoc.ch/BookAppointment?cgid=YGPbSfCp90y9lmSq_80Oyg\"\n        >{{ \"Online booking\" | translate }}</a\n      >\n    </button>\n    <button><a href=\"tel:+41445543777\">+41 44 554 37 77</a></button>\n    <button><a href=\"tel:+41763722285\">+41 76 372 22 85</a></button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/components/testmonials/testmonials.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/components/testmonials/testmonials.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"testmonials-container\">\n    <div class=\"testmonial-content\">\n\n        <div class=\"testmonial-comment\">\n            <div class=\"testmonial-item\">\n                <i class=\"fas fa-quote-left\"></i>\n                <div [innerHTML]=\"'comment1'|translate\" ></div>\n                <div class=\"arrow-down\"></div>\n            </div>\n            <div class=\"testmonial-person\">\n                <img src=\"../../../../assets/img/img_avatar.png\" alt=\"\">\n                <h3>Raphael Züger</h3>\n            </div>\n        </div>\n\n        <div class=\"testmonial-comment\">\n            <div class=\"testmonial-item\">\n                <i class=\"fas fa-quote-left\"></i>\n                <div [innerHTML]=\"'comment2'|translate\" ></div>\n                <div class=\"arrow-down\"></div>\n            </div>\n            <div class=\"testmonial-person\">\n                <img src=\"../../../../assets/img/avatar-woman.png\" alt=\"\">\n                <h3>Ilijana Pazanin</h3>\n            </div>\n        </div>\n\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/home/pages/home.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/home/pages/home.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-slider-component [slide]=\"slajdovi\"></app-slider-component>\n<div class=\"welcome-message\">\n    <div class=\"welcome-content\"\n         [innerHTML]=\"'welcome'|translate\">\n    </div>\n</div>\n<app-reserve-contact></app-reserve-contact>\n<app-testmonials-component></app-testmonials-component>\n"

/***/ }),

/***/ "./src/app/core/components/reserve-contact/reserve-contact.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/core/components/reserve-contact/reserve-contact.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".reserve-contact-container {\n  background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(rgba(201, 220, 233, 0.45))), url('DSCF6382.jpg');\n  background-image: linear-gradient(to bottom, white, rgba(201, 220, 233, 0.45)), url('DSCF6382.jpg');\n  background-position: center;\n  background-size: cover;\n  padding: 90px 0;\n  position: relative;\n}\n.reserve-contact-container .reserve-contact-content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.reserve-contact-container .reserve-contact-content h1 {\n  color: #a6c4dc;\n  font-size: 30px;\n  text-align: center;\n}\n.reserve-contact-container .reserve-contact-content button {\n  background: rgba(255, 255, 255, 0.8) !important;\n  font-size: 18px;\n  text-transform: uppercase;\n  display: inline-block;\n  padding: 20px 45px;\n  text-align: center;\n  border-radius: 3px;\n  border: 2px solid #a6c4dc;\n  font-weight: 100;\n  width: 250px;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n  margin-top: 30px;\n}\n.reserve-contact-container .reserve-contact-content button:hover {\n  background: white !important;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n  border: 2px solid white;\n}\n.reserve-contact-container .reserve-contact-content button a {\n  text-decoration: none;\n  color: #a6c4dc;\n}\n@media screen and (max-width: 560px) {\n  .reserve-contact-content h1 {\n    font-size: 24px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Fhc2hheS9Eb3dubG9hZHMvQXJjaGl2ZS9zcmMvYXBwL2NvcmUvY29tcG9uZW50cy9yZXNlcnZlLWNvbnRhY3QvcmVzZXJ2ZS1jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvcmVzZXJ2ZS1jb250YWN0L3Jlc2VydmUtY29udGFjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtJQUFBO0VBQUEsbUdBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDQ0Y7QURDRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNDSjtBRENJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0NOO0FERUk7RUFDRSwrQ0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNBTjtBREVNO0VBQ0UsNEJBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsdUJBQUE7QUNBUjtBREdNO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FDRFI7QURPQTtFQUNFO0lBQ0UsMEJBQUE7RUNKRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29yZS9jb21wb25lbnRzL3Jlc2VydmUtY29udGFjdC9yZXNlcnZlLWNvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVzZXJ2ZS1jb250YWN0LWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYigyNTUsIDI1NSwgMjU1KSwgcmdiYSgyMDEsIDIyMCwgMjMzLCAwLjQ1KSksIHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvcGljcy9EU0NGNjM4Mi5qcGdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgcGFkZGluZzogOTBweCAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgLnJlc2VydmUtY29udGFjdC1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIGgxIHtcbiAgICAgIGNvbG9yOiAjYTZjNGRjO1xuICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgIGJ1dHRvbiB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCkgIWltcG9ydGFudDtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBwYWRkaW5nOiAyMHB4IDQ1cHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjYTZjNGRjO1xuICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgIHRyYW5zaXRpb246IC40cztcbiAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICB0cmFuc2l0aW9uOiAuNHM7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICAgICAgfVxuXG4gICAgICBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogI2E2YzRkYztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTYwcHgpIHtcbiAgLnJlc2VydmUtY29udGFjdC1jb250ZW50IGgxe1xuICAgIGZvbnQtc2l6ZTogMjRweCFpbXBvcnRhbnQ7XG4gIH1cbn1cbiIsIi5yZXNlcnZlLWNvbnRhY3QtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgd2hpdGUsIHJnYmEoMjAxLCAyMjAsIDIzMywgMC40NSkpLCB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1nL3BpY3MvRFNDRjYzODIuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHBhZGRpbmc6IDkwcHggMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnJlc2VydmUtY29udGFjdC1jb250YWluZXIgLnJlc2VydmUtY29udGFjdC1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5yZXNlcnZlLWNvbnRhY3QtY29udGFpbmVyIC5yZXNlcnZlLWNvbnRhY3QtY29udGVudCBoMSB7XG4gIGNvbG9yOiAjYTZjNGRjO1xuICBmb250LXNpemU6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yZXNlcnZlLWNvbnRhY3QtY29udGFpbmVyIC5yZXNlcnZlLWNvbnRhY3QtY29udGVudCBidXR0b24ge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCkgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDIwcHggNDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNhNmM0ZGM7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIHdpZHRoOiAyNTBweDtcbiAgdHJhbnNpdGlvbjogMC40cztcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cbi5yZXNlcnZlLWNvbnRhY3QtY29udGFpbmVyIC5yZXNlcnZlLWNvbnRhY3QtY29udGVudCBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZSAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiAwLjRzO1xuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbn1cbi5yZXNlcnZlLWNvbnRhY3QtY29udGFpbmVyIC5yZXNlcnZlLWNvbnRhY3QtY29udGVudCBidXR0b24gYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICNhNmM0ZGM7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2MHB4KSB7XG4gIC5yZXNlcnZlLWNvbnRhY3QtY29udGVudCBoMSB7XG4gICAgZm9udC1zaXplOiAyNHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/core/components/reserve-contact/reserve-contact.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/core/components/reserve-contact/reserve-contact.component.ts ***!
  \******************************************************************************/
/*! exports provided: ReserveContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReserveContactComponent", function() { return ReserveContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ReserveContactComponent = class ReserveContactComponent {
};
ReserveContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reserve-contact',
        template: __webpack_require__(/*! raw-loader!./reserve-contact.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/components/reserve-contact/reserve-contact.component.html"),
        styles: [__webpack_require__(/*! ./reserve-contact.component.scss */ "./src/app/core/components/reserve-contact/reserve-contact.component.scss")]
    })
], ReserveContactComponent);



/***/ }),

/***/ "./src/app/core/components/reserve-contact/reserve-contact.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/core/components/reserve-contact/reserve-contact.module.ts ***!
  \***************************************************************************/
/*! exports provided: ReserveContactModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReserveContactModule", function() { return ReserveContactModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _reserve_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reserve-contact.component */ "./src/app/core/components/reserve-contact/reserve-contact.component.ts");





let ReserveContactModule = class ReserveContactModule {
};
ReserveContactModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"]
        ],
        exports: [
            _reserve_contact_component__WEBPACK_IMPORTED_MODULE_4__["ReserveContactComponent"]
        ],
        declarations: [
            _reserve_contact_component__WEBPACK_IMPORTED_MODULE_4__["ReserveContactComponent"]
        ]
    })
], ReserveContactModule);



/***/ }),

/***/ "./src/app/core/components/testmonials/testmonials.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/core/components/testmonials/testmonials.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".testmonials-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  background: #a6c4dc99;\n}\n.testmonials-container .testmonial-content {\n  max-width: 1200px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  padding: 50px;\n  flex-wrap: wrap;\n}\n.testmonials-container .testmonial-content .testmonial-comment {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  padding: 30px;\n  max-width: 45%;\n}\n.testmonials-container .testmonial-content .testmonial-comment .testmonial-item {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  background: white;\n  padding: 30px;\n  position: relative;\n}\n.testmonials-container .testmonial-content .testmonial-comment .testmonial-item i {\n  font-size: 26px;\n}\n.testmonials-container .testmonial-content .testmonial-comment .testmonial-item .arrow-down {\n  width: 0;\n  height: 0;\n  border-left: 20px solid transparent;\n  border-right: 20px solid transparent;\n  border-top: 20px solid white;\n  position: absolute;\n  bottom: -20px;\n  left: 55px;\n}\n.testmonials-container .testmonial-content .testmonial-comment .testmonial-person {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  padding-top: 20px;\n}\n.testmonials-container .testmonial-content .testmonial-comment .testmonial-person img {\n  max-width: 150px;\n  border-radius: 50%;\n  -moz-border-radius: 50%;\n  -webkit-border-radius: 50%;\n}\n.testmonials-container .testmonial-content .testmonial-comment .testmonial-person h3 {\n  font-weight: 700;\n}\n.testmonials-container .testmonial-content .testmonial-comment .testmonial-person p {\n  margin: 0;\n  padding: 0;\n}\n@media screen and (max-width: 570px) {\n  .testmonial-content {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    padding: 0 !important;\n  }\n  .testmonial-content .testmonial-comment {\n    max-width: 100% !important;\n    padding: 10px !important;\n  }\n}\n@media screen and (max-width: 1024px) {\n  .testmonial-content {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n  }\n  .testmonial-content .testmonial-comment {\n    max-width: 100% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Fhc2hheS9Eb3dubG9hZHMvQXJjaGl2ZS9zcmMvYXBwL2NvcmUvY29tcG9uZW50cy90ZXN0bW9uaWFscy90ZXN0bW9uaWFscy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29yZS9jb21wb25lbnRzL3Rlc3Rtb25pYWxzL3Rlc3Rtb25pYWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHFCQUFBO0FDQ0Y7QURDRTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FDQ0o7QURDSTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FDQ047QURDTTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDQ1I7QURDUTtFQUNFLGVBQUE7QUNDVjtBREVRO0VBQ0UsUUFBQTtFQUNBLFNBQUE7RUFDQSxtQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0FDQVY7QURJTTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLGlCQUFBO0FDRlI7QURJUTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0FDRlY7QURLUTtFQUNFLGdCQUFBO0FDSFY7QURNUTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FDSlY7QURXQTtFQUNFO0lBQ0UsNEJBQUE7SUFBQSw2QkFBQTtZQUFBLHNCQUFBO0lBQ0EscUJBQUE7RUNSRjtFRFVFO0lBQ0UsMEJBQUE7SUFDQSx3QkFBQTtFQ1JKO0FBQ0Y7QURZQTtFQUNFO0lBQ0UsNEJBQUE7SUFBQSw2QkFBQTtZQUFBLHNCQUFBO0VDVkY7RURZRTtJQUNFLDBCQUFBO0VDVko7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy90ZXN0bW9uaWFscy90ZXN0bW9uaWFscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXN0bW9uaWFscy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2E2YzRkYzk5O1xuXG4gIC50ZXN0bW9uaWFsLWNvbnRlbnQge1xuICAgIG1heC13aWR0aDogMTIwMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmc6IDUwcHg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgLnRlc3Rtb25pYWwtY29tbWVudCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgICBtYXgtd2lkdGg6IDQ1JTtcblxuICAgICAgLnRlc3Rtb25pYWwtaXRlbSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICBwYWRkaW5nOiAzMHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgaSB7XG4gICAgICAgICAgZm9udC1zaXplOiAyNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmFycm93LWRvd24ge1xuICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICBib3JkZXItbGVmdDogMjBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICBib3JkZXItcmlnaHQ6IDIwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgYm9yZGVyLXRvcDogMjBweCBzb2xpZCB3aGl0ZTtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgYm90dG9tOiAtMjBweDtcbiAgICAgICAgICBsZWZ0OiA1NXB4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC50ZXN0bW9uaWFsLXBlcnNvbiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxNTBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIH1cblxuICAgICAgICBoMyB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHAge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3MHB4KSB7XG4gIC50ZXN0bW9uaWFsLWNvbnRlbnQge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuXG4gICAgLnRlc3Rtb25pYWwtY29tbWVudCB7XG4gICAgICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgIHBhZGRpbmc6IDEwcHghaW1wb3J0YW50O1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLnRlc3Rtb25pYWwtY29udGVudCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIC50ZXN0bW9uaWFsLWNvbW1lbnQge1xuICAgICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG4iLCIudGVzdG1vbmlhbHMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNhNmM0ZGM5OTtcbn1cbi50ZXN0bW9uaWFscy1jb250YWluZXIgLnRlc3Rtb25pYWwtY29udGVudCB7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDUwcHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi50ZXN0bW9uaWFscy1jb250YWluZXIgLnRlc3Rtb25pYWwtY29udGVudCAudGVzdG1vbmlhbC1jb21tZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMzBweDtcbiAgbWF4LXdpZHRoOiA0NSU7XG59XG4udGVzdG1vbmlhbHMtY29udGFpbmVyIC50ZXN0bW9uaWFsLWNvbnRlbnQgLnRlc3Rtb25pYWwtY29tbWVudCAudGVzdG1vbmlhbC1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi50ZXN0bW9uaWFscy1jb250YWluZXIgLnRlc3Rtb25pYWwtY29udGVudCAudGVzdG1vbmlhbC1jb21tZW50IC50ZXN0bW9uaWFsLWl0ZW0gaSB7XG4gIGZvbnQtc2l6ZTogMjZweDtcbn1cbi50ZXN0bW9uaWFscy1jb250YWluZXIgLnRlc3Rtb25pYWwtY29udGVudCAudGVzdG1vbmlhbC1jb21tZW50IC50ZXN0bW9uaWFsLWl0ZW0gLmFycm93LWRvd24ge1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItbGVmdDogMjBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiAyMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItdG9wOiAyMHB4IHNvbGlkIHdoaXRlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTIwcHg7XG4gIGxlZnQ6IDU1cHg7XG59XG4udGVzdG1vbmlhbHMtY29udGFpbmVyIC50ZXN0bW9uaWFsLWNvbnRlbnQgLnRlc3Rtb25pYWwtY29tbWVudCAudGVzdG1vbmlhbC1wZXJzb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cbi50ZXN0bW9uaWFscy1jb250YWluZXIgLnRlc3Rtb25pYWwtY29udGVudCAudGVzdG1vbmlhbC1jb21tZW50IC50ZXN0bW9uaWFsLXBlcnNvbiBpbWcge1xuICBtYXgtd2lkdGg6IDE1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi50ZXN0bW9uaWFscy1jb250YWluZXIgLnRlc3Rtb25pYWwtY29udGVudCAudGVzdG1vbmlhbC1jb21tZW50IC50ZXN0bW9uaWFsLXBlcnNvbiBoMyB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4udGVzdG1vbmlhbHMtY29udGFpbmVyIC50ZXN0bW9uaWFsLWNvbnRlbnQgLnRlc3Rtb25pYWwtY29tbWVudCAudGVzdG1vbmlhbC1wZXJzb24gcCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTcwcHgpIHtcbiAgLnRlc3Rtb25pYWwtY29udGVudCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnRlc3Rtb25pYWwtY29udGVudCAudGVzdG1vbmlhbC1jb21tZW50IHtcbiAgICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAudGVzdG1vbmlhbC1jb250ZW50IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC50ZXN0bW9uaWFsLWNvbnRlbnQgLnRlc3Rtb25pYWwtY29tbWVudCB7XG4gICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/core/components/testmonials/testmonials.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/core/components/testmonials/testmonials.component.ts ***!
  \**********************************************************************/
/*! exports provided: TestmonialsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestmonialsComponent", function() { return TestmonialsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TestmonialsComponent = class TestmonialsComponent {
};
TestmonialsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-testmonials-component',
        template: __webpack_require__(/*! raw-loader!./testmonials.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/components/testmonials/testmonials.component.html"),
        styles: [__webpack_require__(/*! ./testmonials.component.scss */ "./src/app/core/components/testmonials/testmonials.component.scss")]
    })
], TestmonialsComponent);



/***/ }),

/***/ "./src/app/core/components/testmonials/testmonials.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/core/components/testmonials/testmonials.module.ts ***!
  \*******************************************************************/
/*! exports provided: TestmonialsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestmonialsModule", function() { return TestmonialsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _testmonials_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./testmonials.component */ "./src/app/core/components/testmonials/testmonials.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");




let TestmonialsModule = class TestmonialsModule {
};
TestmonialsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"]
        ],
        exports: [
            _testmonials_component__WEBPACK_IMPORTED_MODULE_2__["TestmonialsComponent"]
        ],
        declarations: [
            _testmonials_component__WEBPACK_IMPORTED_MODULE_2__["TestmonialsComponent"]
        ]
    })
], TestmonialsModule);



/***/ }),

/***/ "./src/app/modules/home/home.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/home/home.module.ts ***!
  \*********************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _core_components_slider_slider_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/components/slider/slider.module */ "./src/app/core/components/slider/slider.module.ts");
/* harmony import */ var _core_components_testmonials_testmonials_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/components/testmonials/testmonials.module */ "./src/app/core/components/testmonials/testmonials.module.ts");
/* harmony import */ var _core_components_reserve_contact_reserve_contact_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/components/reserve-contact/reserve-contact.module */ "./src/app/core/components/reserve-contact/reserve-contact.module.ts");
/* harmony import */ var _pages_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/home.component */ "./src/app/modules/home/pages/home.component.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home.routing.module */ "./src/app/modules/home/home.routing.module.ts");








/**
 * This is Home application module
 *
 * @since 1.0.0
 */
let HomeModule = class HomeModule {
};
HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _home_routing_module__WEBPACK_IMPORTED_MODULE_7__["HomeRoutingModule"],
            _core_components_slider_slider_module__WEBPACK_IMPORTED_MODULE_3__["SliderModule"],
            _core_components_testmonials_testmonials_module__WEBPACK_IMPORTED_MODULE_4__["TestmonialsModule"],
            _core_components_reserve_contact_reserve_contact_module__WEBPACK_IMPORTED_MODULE_5__["ReserveContactModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]
        ],
        declarations: [
            _pages_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]
        ]
    })
], HomeModule);



/***/ }),

/***/ "./src/app/modules/home/home.routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/home/home.routing.module.ts ***!
  \*****************************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home.component */ "./src/app/modules/home/pages/home.component.ts");




const ROUTES = [
    {
        path: '',
        component: _pages_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }
];
/**
 * Represents the Home Application Routing Module.
 *
 * This module sets up Home routes for the application as well
 * as exports Angular RouterModule to be avilable in
 * modules that import this module
 *
 * @since 1.0.0
 * @author Nemanja Milinkovic
 */
let HomeRoutingModule = class HomeRoutingModule {
};
HomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ROUTES)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomeRoutingModule);



/***/ }),

/***/ "./src/app/modules/home/pages/home.component.scss":
/*!********************************************************!*\
  !*** ./src/app/modules/home/pages/home.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-message {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  padding: 50px 0;\n}\n.welcome-message .welcome-content {\n  max-width: 800px;\n  width: 100%;\n  font-size: 34px;\n  font-weight: bold;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  text-align: center;\n  color: #a6c4dc;\n}\n@media screen and (max-width: 560px) {\n  .welcome-content {\n    padding: 0 10px;\n    font-size: 24px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Fhc2hheS9Eb3dubG9hZHMvQXJjaGl2ZS9zcmMvYXBwL21vZHVsZXMvaG9tZS9wYWdlcy9ob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2hvbWUvcGFnZXMvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxlQUFBO0FDQ0Y7QURDRTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDQ0o7QURHQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLDBCQUFBO0VDQUY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9wYWdlcy9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtbWVzc2FnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiA1MHB4IDA7XG5cbiAgLndlbGNvbWUtY29udGVudCB7XG4gICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDM0cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI2E2YzRkYztcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjBweCkge1xuICAud2VsY29tZS1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgZm9udC1zaXplOiAyNHB4IWltcG9ydGFudDtcbiAgfVxufVxuIiwiLndlbGNvbWUtbWVzc2FnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiA1MHB4IDA7XG59XG4ud2VsY29tZS1tZXNzYWdlIC53ZWxjb21lLWNvbnRlbnQge1xuICBtYXgtd2lkdGg6IDgwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAzNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNhNmM0ZGM7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2MHB4KSB7XG4gIC53ZWxjb21lLWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICBmb250LXNpemU6IDI0cHggIWltcG9ydGFudDtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/home/pages/home.component.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/home/pages/home.component.ts ***!
  \******************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() {
        this.slajdovi = [
            "../../../../assets/img/pics/FIRST.png",
            "../../../../assets/img/pics/_XT22724.jpg",
            // '../../../../assets/img/pics/_XT22785.jpg',
            "../../../../assets/img/pics/DSCF6334.jpg",
            "../../../../assets/img/pics/_XT22856.jpg",
        ];
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-home-component",
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/home/pages/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/modules/home/pages/home.component.scss")]
    })
], HomeComponent);



/***/ })

}]);
//# sourceMappingURL=modules-home-home-module-es2015.js.map