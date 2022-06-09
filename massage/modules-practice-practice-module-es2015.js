(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-practice-practice-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/practice/pages/practice.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/practice/pages/practice.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"practice-container\">\n    <div class=\"practice-content\">\n        <div class=\"practice-gallery\">\n            <app-slider2-component [slides]=\"slajdovi\"></app-slider2-component>\n        </div>\n        <div class=\"practice-text\">\n            <h2 [innerHTML]=\"'Practice'| translate\" style=\"text-align: center;color: #a6c4dc\"></h2>\n            <div class=\"practice-description\" [innerHTML]=\"'practice-detail'| translate\"></div>\n        </div>\n    </div>\n</div>\n<app-reserve-contact></app-reserve-contact>\n"

/***/ }),

/***/ "./src/app/modules/practice/pages/practice.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/modules/practice/pages/practice.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".practice-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.practice-container .practice-content {\n  max-width: 1200px;\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n}\n.practice-container .practice-content .practice-gallery {\n  width: 50%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.practice-container .practice-content .practice-text {\n  width: 50%;\n  padding: 30px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n@media screen and (max-width: 992px) {\n  .practice-content {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n  }\n  .practice-content .practice-gallery {\n    width: 100% !important;\n  }\n  .practice-content .practice-text {\n    width: 100% !important;\n    padding: 30px;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Fhc2hheS9Eb3dubG9hZHMvQXJjaGl2ZS9zcmMvYXBwL21vZHVsZXMvcHJhY3RpY2UvcGFnZXMvcHJhY3RpY2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvcHJhY3RpY2UvcGFnZXMvcHJhY3RpY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDQ0Y7QURDRTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtBQ0NKO0FEQ0k7RUFDRSxVQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0NOO0FERUk7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ0FOO0FES0E7RUFDRTtJQUNFLDRCQUFBO0lBQUEsNkJBQUE7WUFBQSxzQkFBQTtFQ0ZGO0VESUU7SUFDRSxzQkFBQTtFQ0ZKO0VES0U7SUFDRSxzQkFBQTtJQUNBLGFBQUE7SUFDQSxvQkFBQTtJQUFBLGFBQUE7SUFDQSw0QkFBQTtJQUFBLDZCQUFBO1lBQUEsc0JBQUE7RUNISjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wcmFjdGljZS9wYWdlcy9wcmFjdGljZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmFjdGljZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAucHJhY3RpY2UtY29udGVudCB7XG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcblxuICAgIC5wcmFjdGljZS1nYWxsZXJ5IHtcbiAgICAgIHdpZHRoOiA1MCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAucHJhY3RpY2UtdGV4dCB7XG4gICAgICB3aWR0aDogNTAlO1xuICAgICAgcGFkZGluZzogMzBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAucHJhY3RpY2UtY29udGVudCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIC5wcmFjdGljZS1nYWxsZXJ5IHtcbiAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLnByYWN0aWNlLXRleHQge1xuICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG4gIH1cbn1cbiIsIi5wcmFjdGljZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5wcmFjdGljZS1jb250YWluZXIgLnByYWN0aWNlLWNvbnRlbnQge1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ucHJhY3RpY2UtY29udGFpbmVyIC5wcmFjdGljZS1jb250ZW50IC5wcmFjdGljZS1nYWxsZXJ5IHtcbiAgd2lkdGg6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5wcmFjdGljZS1jb250YWluZXIgLnByYWN0aWNlLWNvbnRlbnQgLnByYWN0aWNlLXRleHQge1xuICB3aWR0aDogNTAlO1xuICBwYWRkaW5nOiAzMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAucHJhY3RpY2UtY29udGVudCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAucHJhY3RpY2UtY29udGVudCAucHJhY3RpY2UtZ2FsbGVyeSB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxuICAucHJhY3RpY2UtY29udGVudCAucHJhY3RpY2UtdGV4dCB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAzMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/practice/pages/practice.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/practice/pages/practice.component.ts ***!
  \**************************************************************/
/*! exports provided: PracticeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PracticeComponent", function() { return PracticeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PracticeComponent = class PracticeComponent {
    constructor() {
        this.slajdovi = [
            "../../../../assets/img/pics/FIRST.png",
            "../../../../assets/img/pics/DSCF6382.jpg",
            "../../../../assets/img/pics/DSCF6391.jpg",
            "../../../../assets/img/pics/DSCF6334.jpg",
            "../../../../assets/img/pics/DSCF6327.jpg",
        ];
    }
};
PracticeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-practice-component",
        template: __webpack_require__(/*! raw-loader!./practice.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/practice/pages/practice.component.html"),
        styles: [__webpack_require__(/*! ./practice.component.scss */ "./src/app/modules/practice/pages/practice.component.scss")]
    })
], PracticeComponent);



/***/ }),

/***/ "./src/app/modules/practice/practice.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/practice/practice.module.ts ***!
  \*****************************************************/
/*! exports provided: PracticeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PracticeModule", function() { return PracticeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _practice_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./practice.routing.module */ "./src/app/modules/practice/practice.routing.module.ts");
/* harmony import */ var _pages_practice_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/practice.component */ "./src/app/modules/practice/pages/practice.component.ts");
/* harmony import */ var _core_components_slider2_slider2_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/components/slider2/slider2.module */ "./src/app/core/components/slider2/slider2.module.ts");
/* harmony import */ var _core_components_reserve_contact_reserve_contact_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/components/reserve-contact/reserve-contact.module */ "./src/app/core/components/reserve-contact/reserve-contact.module.ts");







let PracticeModule = class PracticeModule {
};
PracticeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _practice_routing_module__WEBPACK_IMPORTED_MODULE_3__["PracticeRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
            _core_components_slider2_slider2_module__WEBPACK_IMPORTED_MODULE_5__["Slider2Module"],
            _core_components_reserve_contact_reserve_contact_module__WEBPACK_IMPORTED_MODULE_6__["ReserveContactModule"]
        ],
        declarations: [
            _pages_practice_component__WEBPACK_IMPORTED_MODULE_4__["PracticeComponent"]
        ]
    })
], PracticeModule);



/***/ }),

/***/ "./src/app/modules/practice/practice.routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/practice/practice.routing.module.ts ***!
  \*************************************************************/
/*! exports provided: PracticeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PracticeRoutingModule", function() { return PracticeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_practice_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/practice.component */ "./src/app/modules/practice/pages/practice.component.ts");




const ROUTES = [
    {
        path: '',
        component: _pages_practice_component__WEBPACK_IMPORTED_MODULE_3__["PracticeComponent"]
    }
];
let PracticeRoutingModule = class PracticeRoutingModule {
};
PracticeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ROUTES)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], PracticeRoutingModule);



/***/ })

}]);
//# sourceMappingURL=modules-practice-practice-module-es2015.js.map