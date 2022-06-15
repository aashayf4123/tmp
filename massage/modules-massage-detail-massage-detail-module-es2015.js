(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-massage-detail-massage-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/core/components/reserve-contact/reserve-contact.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/components/reserve-contact/reserve-contact.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"reserve-contact-container\">\n  <div class=\"reserve-contact-content\">\n    <h1>\n      <b>{{ \"ContactReserve\" | translate }}</b>\n    </h1>\n    <button id=\"online-buchen\">\n      <a\n        href=\"https://onlinecalendar.medidoc.ch/BookAppointment?cgid=YGPbSfCp90y9lmSq_80Oyg\"\n        >{{ \"Online booking\" | translate }}</a\n      >\n    </button>\n    <button><a href=\"tel:+41445543777\">+41 44 554 37 77</a></button>\n    <button><a href=\"tel:+41763722285\">+41 76 372 22 85</a></button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/massage-detail/pages/massage-detail.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/massage-detail/pages/massage-detail.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"therapy-container\">\n  <h2 style=\"text-align: center\">{{ item.name | translate }}</h2>\n  <div class=\"therapy-content\">\n    <div class=\"description-img first\">\n      <img [src]=\"item.pic\" alt=\"\" />\n    </div>\n    <div class=\"description-text\">\n      <div\n        class=\"bind-description\"\n        [innerHTML]=\"item.description | translate\"\n      ></div>\n    </div>\n  </div>\n  <div class=\"therapy-content\" style=\"flex-direction: row-reverse\">\n    <div class=\"description-img\">\n      <img height=\"100%\" [src]=\"item.pic2\" alt=\"\" />\n    </div>\n    <div class=\"description-text\">\n      <div\n        class=\"bind-description\"\n        [innerHTML]=\"item.team2Description | translate\"\n      ></div>\n    </div>\n  </div>\n  <div class=\"therapy-content\">\n    <div class=\"description-img first\">\n      <img [src]=\"item.pic1\" alt=\"\" />\n    </div>\n    <div class=\"description-text\">\n      <div\n        class=\"bind-description\"\n        [innerHTML]=\"item.team1Description | translate\"\n      ></div>\n    </div>\n  </div>\n</div>\n<app-reserve-contact></app-reserve-contact>\n"

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

/***/ "./src/app/modules/massage-detail/massage-detail.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/massage-detail/massage-detail.module.ts ***!
  \*****************************************************************/
/*! exports provided: MassageDetailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MassageDetailModule", function() { return MassageDetailModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _pages_massage_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/massage-detail.component */ "./src/app/modules/massage-detail/pages/massage-detail.component.ts");
/* harmony import */ var _massage_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./massage-detail.routing.module */ "./src/app/modules/massage-detail/massage-detail.routing.module.ts");
/* harmony import */ var _core_components_reserve_contact_reserve_contact_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/components/reserve-contact/reserve-contact.module */ "./src/app/core/components/reserve-contact/reserve-contact.module.ts");







let MassageDetailModule = class MassageDetailModule {
};
MassageDetailModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _pages_massage_detail_component__WEBPACK_IMPORTED_MODULE_4__["MassageDetailComponent"]
        ],
        imports: [
            _massage_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["MassageDetailRoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _core_components_reserve_contact_reserve_contact_module__WEBPACK_IMPORTED_MODULE_6__["ReserveContactModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"]
        ],
        exports: []
    })
], MassageDetailModule);



/***/ }),

/***/ "./src/app/modules/massage-detail/massage-detail.routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/massage-detail/massage-detail.routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: MassageDetailRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MassageDetailRoutingModule", function() { return MassageDetailRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_massage_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/massage-detail.component */ "./src/app/modules/massage-detail/pages/massage-detail.component.ts");




const ROUTES = [
    {
        path: '',
        component: _pages_massage_detail_component__WEBPACK_IMPORTED_MODULE_3__["MassageDetailComponent"]
    }
];
let MassageDetailRoutingModule = class MassageDetailRoutingModule {
};
MassageDetailRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ROUTES)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], MassageDetailRoutingModule);



/***/ }),

/***/ "./src/app/modules/massage-detail/pages/massage-detail.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/modules/massage-detail/pages/massage-detail.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".therapy-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.therapy-container h2 {\n  color: #a6c4dc;\n  margin: 24px;\n}\n\n.therapy-container .therapy-content {\n  display: -webkit-box;\n  display: flex;\n  max-width: 1200px;\n  width: 100%;\n  margin: auto;\n}\n\n.therapy-container .therapy-content .description-img {\n  display: -webkit-box;\n  display: flex;\n  width: 50%;\n}\n\n.therapy-container .therapy-content .description-img img {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 100%;\n}\n\n.therapy-container .therapy-content .description-text {\n  display: -webkit-box;\n  display: flex;\n  width: 50%;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  justify-content: space-around;\n  padding: 30px;\n}\n\n@media screen and (max-width: 992px) {\n  .therapy-content {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n  }\n\n  .therapy-content .description-img {\n    width: 100% !important;\n  }\n\n  .therapy-content .description-text {\n    width: 100% !important;\n  }\n}\n\n@media screen and (max-width: 768px) {\n  .description-text {\n    padding: 15px !important;\n  }\n\n  .description-img.first {\n    max-height: 480px !important;\n  }\n\n  .description-img img {\n    -o-object-fit: contain !important;\n       object-fit: contain !important;\n  }\n\n  .therapy-content {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: normal !important;\n            flex-direction: column !important;\n  }\n}\n\n::ng-deep .bind-description .m-left {\n  margin-left: 50px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Fhc2hheS9Eb3dubG9hZHMvQXJjaGl2ZS9zcmMvYXBwL21vZHVsZXMvbWFzc2FnZS1kZXRhaWwvcGFnZXMvbWFzc2FnZS1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFzc2FnZS1kZXRhaWwvcGFnZXMvbWFzc2FnZS1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxjQUFBO0VBQ0EsWUFBQTtBQ0VGOztBREFBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0dGOztBRERBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsVUFBQTtBQ0lGOztBREZBO0VBQ0Usb0JBQUE7S0FBQSxpQkFBQTtFQUNBLFdBQUE7QUNLRjs7QURIQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLFVBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7QUNNRjs7QURIQTtFQUNFO0lBQ0UsNEJBQUE7SUFBQSw2QkFBQTtZQUFBLHNCQUFBO0VDTUY7O0VESkE7SUFDRSxzQkFBQTtFQ09GOztFRExBO0lBQ0Usc0JBQUE7RUNRRjtBQUNGOztBRE5BO0VBQ0U7SUFDRSx3QkFBQTtFQ1FGOztFRExBO0lBQ0UsNEJBQUE7RUNRRjs7RUROQTtJQUNFLGlDQUFBO09BQUEsOEJBQUE7RUNTRjs7RUROQTtJQUNFLHVDQUFBO0lBQUEsd0NBQUE7WUFBQSxpQ0FBQTtFQ1NGO0FBQ0Y7O0FEUEE7RUFDRSw0QkFBQTtBQ1NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYXNzYWdlLWRldGFpbC9wYWdlcy9tYXNzYWdlLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aGVyYXB5LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLnRoZXJhcHktY29udGFpbmVyIGgyIHtcbiAgY29sb3I6ICNhNmM0ZGM7XG4gIG1hcmdpbjogMjRweDtcbn1cbi50aGVyYXB5LWNvbnRhaW5lciAudGhlcmFweS1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IGF1dG87XG59XG4udGhlcmFweS1jb250YWluZXIgLnRoZXJhcHktY29udGVudCAuZGVzY3JpcHRpb24taW1nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDUwJTtcbn1cbi50aGVyYXB5LWNvbnRhaW5lciAudGhlcmFweS1jb250ZW50IC5kZXNjcmlwdGlvbi1pbWcgaW1nIHtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnRoZXJhcHktY29udGFpbmVyIC50aGVyYXB5LWNvbnRlbnQgLmRlc2NyaXB0aW9uLXRleHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogNTAlO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgcGFkZGluZzogMzBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLnRoZXJhcHktY29udGVudCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAudGhlcmFweS1jb250ZW50IC5kZXNjcmlwdGlvbi1pbWcge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnRoZXJhcHktY29udGVudCAuZGVzY3JpcHRpb24tdGV4dCB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmRlc2NyaXB0aW9uLXRleHQge1xuICAgIHBhZGRpbmc6IDE1cHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5kZXNjcmlwdGlvbi1pbWcuZmlyc3Qge1xuICAgIG1heC1oZWlnaHQ6IDQ4MHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmRlc2NyaXB0aW9uLWltZyBpbWcge1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW4gIWltcG9ydGFudDtcbiAgfVxuXG4gIC50aGVyYXB5LWNvbnRlbnQge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcbiAgfVxufVxuOjpuZy1kZWVwIC5iaW5kLWRlc2NyaXB0aW9uIC5tLWxlZnQge1xuICBtYXJnaW4tbGVmdDogNTBweCAhaW1wb3J0YW50O1xufSIsIi50aGVyYXB5LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4udGhlcmFweS1jb250YWluZXIgaDIge1xuICBjb2xvcjogI2E2YzRkYztcbiAgbWFyZ2luOiAyNHB4O1xufVxuXG4udGhlcmFweS1jb250YWluZXIgLnRoZXJhcHktY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4udGhlcmFweS1jb250YWluZXIgLnRoZXJhcHktY29udGVudCAuZGVzY3JpcHRpb24taW1nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLnRoZXJhcHktY29udGFpbmVyIC50aGVyYXB5LWNvbnRlbnQgLmRlc2NyaXB0aW9uLWltZyBpbWcge1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50aGVyYXB5LWNvbnRhaW5lciAudGhlcmFweS1jb250ZW50IC5kZXNjcmlwdGlvbi10ZXh0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDUwJTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHBhZGRpbmc6IDMwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC50aGVyYXB5LWNvbnRlbnQge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cblxuICAudGhlcmFweS1jb250ZW50IC5kZXNjcmlwdGlvbi1pbWcge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAudGhlcmFweS1jb250ZW50IC5kZXNjcmlwdGlvbi10ZXh0IHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuZGVzY3JpcHRpb24tdGV4dCB7XG4gICAgcGFkZGluZzogMTVweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmRlc2NyaXB0aW9uLWltZy5maXJzdCB7XG4gICAgbWF4LWhlaWdodDogNDgwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5kZXNjcmlwdGlvbi1pbWcgaW1nIHtcbiAgICBvYmplY3QtZml0OiBjb250YWluICFpbXBvcnRhbnQ7XG4gIH1cblxuICAudGhlcmFweS1jb250ZW50IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XG4gIH1cbn1cbjo6bmctZGVlcCAuYmluZC1kZXNjcmlwdGlvbiAubS1sZWZ0IHtcbiAgbWFyZ2luLWxlZnQ6IDUwcHggIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/massage-detail/pages/massage-detail.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/massage-detail/pages/massage-detail.component.ts ***!
  \**************************************************************************/
/*! exports provided: MassageDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MassageDetailComponent", function() { return MassageDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let MassageDetailComponent = class MassageDetailComponent {
    constructor(route) {
        this.route = route;
        this.masg = [
            {
                path: "manual-therapy",
                name: "Manuelle Therapie",
                description: "therapie1",
                pic: "../../../assets/img/Manuelle Therapie.jpeg",
            },
            {
                path: "electrotherapy",
                name: "Elektrotherapie",
                description: "therapie2",
                pic: "../../../assets/img/pics/_XT22959.jpg",
            },
            {
                path: "shockwave-therapy",
                name: "Stosswellentherapie",
                description: "therapie3",
                pic: "../../../assets/img/Stosswelletherapie.jpeg",
            },
            {
                path: "medical-training-therapy",
                name: "Medizinische Trainingstherapie",
                description: "therapie4",
                pic: "../../../assets/img/pics/_XT22851.jpg",
            },
            {
                path: "sports-physiotherapy",
                name: "Sportphysiotherapie",
                description: "therapie5",
                pic: "../../../assets/img/pics/_XT23054.jpg",
            },
            {
                path: "kinesio-taping",
                name: "Kinesio taping",
                description: "therapie6",
                pic: "../../../assets/img/Kinesiotape.jpeg",
            },
            {
                path: "trigger-point-therapy",
                name: "Triggerpunkttherapie",
                description: "therapie7",
                pic: "../../../assets/img/Triggerpunkttherapie.jpeg",
            },
            {
                path: "lymphatic-drainage",
                name: "Lymphdrainage",
                description: "therapie8",
                pic: "../../../assets/img/Lymphdrainage.jpeg",
            },
            {
                path: "neurologische-therapie",
                name: "Neurologische Therapie",
                description: "therapie9",
                pic: "../../../assets/img/pics/DSCF6406.jpg",
            },
            {
                path: "PNF",
                name: "PNF - Propriozeptive neuromuskuläre Fazilitation",
                description: "therapie10",
                pic: "../../../assets/img/pics/_XT22867.jpg",
            },
            {
                path: "",
                name: "Cognitive Funktional Therapie",
                description: "therapie11",
            },
            {
                path: "in-house-treatment",
                name: "Domizilbehandlung",
                description: "therapie12",
                pic: "../../../assets/img/domizibegandlung.jpeg",
            },
        ];
        this.prevent = [
            {
                path: "physiotherapeutic-consultation",
                name: "Physiotherapy advice",
                description: "prevention1",
                pic: "../../../assets/img/Beratung.jpeg",
            },
            {
                path: "massage-therapy",
                name: "Massage",
                description: "prevention2",
                pic: "../../../assets/img/Massage.jpeg",
            },
        ];
        this.about = [
            {
                path: "phylosophy",
                name: "Phylosophy",
                description: "phylosophy-detail",
                pic: "../../../assets/img/pics/_XT22856.jpg",
            },
            {
                path: "team",
                name: "Team",
                description: "about me-detail",
                pic: "../../../assets/img/pics/_XT23063-2.png",
                team1Description: "about second-detail",
                pic1: "../../../assets/img/pics/Katerina_Novotna.jpeg",
                pic2: "../../../assets/img/pics/Daniela.jpg",
                team2Description: "about third-detail",
            },
            {
                path: "team",
                name: "Team",
                team2Description: "about second-detail",
                pic2: "../../../assets/img/pics/Daniela.jpeg",
            },
        ];
    }
    ngOnInit() {
        this.route.params.subscribe((param) => {
            console.log(param.id);
            this.val = param.id;
            this.item =
                this.masg.find((x) => x.path == this.val) ||
                    this.prevent.find((p) => p.path == this.val) ||
                    this.about.find((x) => x.path == this.val);
            console.log(this.item);
        });
        // this.route.queryParams.subscribe(p => console.log(p));
    }
};
MassageDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
MassageDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-massage-component",
        template: __webpack_require__(/*! raw-loader!./massage-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/massage-detail/pages/massage-detail.component.html"),
        styles: [__webpack_require__(/*! ./massage-detail.component.scss */ "./src/app/modules/massage-detail/pages/massage-detail.component.scss")]
    })
], MassageDetailComponent);



/***/ })

}]);
//# sourceMappingURL=modules-massage-detail-massage-detail-module-es2015.js.map