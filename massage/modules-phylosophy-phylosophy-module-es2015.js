(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-phylosophy-phylosophy-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/phylosophy/pages/phylosophy.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/phylosophy/pages/phylosophy.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"phylosophy-container\">\n  <div class=\"phylosophy-content\">\n    <div class=\"phylosophy-gallery\">\n      <app-slider2-component [slides]=\"slajdovi\"></app-slider2-component>\n    </div>\n    <div class=\"phylosophy-text\">\n      <h2 [innerHTML]=\"'Phylosophy' | translate\"></h2>\n      <div\n        class=\"phylosophy-\"\n        [innerHTML]=\"'phylosophy-detail' | translate\"\n      ></div>\n    </div>\n  </div>\n</div>\n<app-reserve-contact></app-reserve-contact>\n"

/***/ }),

/***/ "./src/app/modules/phylosophy/pages/phylosophy.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/modules/phylosophy/pages/phylosophy.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".phylosophy-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.phylosophy-container .phylosophy-content {\n  max-width: 1200px;\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n}\n.phylosophy-container .phylosophy-content .phylosophy-gallery {\n  width: 50%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.phylosophy-container .phylosophy-content .phylosophy-text {\n  width: 50%;\n  padding: 30px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.phylosophy-container .phylosophy-content .phylosophy-text h2 {\n  text-align: center;\n  color: #a6c4dc;\n}\n@media screen and (max-width: 992px) {\n  .phylosophy-content {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n  }\n  .phylosophy-content .phylosophy-gallery {\n    width: 100% !important;\n  }\n  .phylosophy-content .phylosophy-text {\n    width: 100% !important;\n    padding: 30px;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Fhc2hheS9Eb3dubG9hZHMvQXJjaGl2ZS9zcmMvYXBwL21vZHVsZXMvcGh5bG9zb3BoeS9wYWdlcy9waHlsb3NvcGh5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3BoeWxvc29waHkvcGFnZXMvcGh5bG9zb3BoeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNDRjtBRENFO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0FDQ0o7QURDSTtFQUNFLFVBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDQ047QURFSTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDQU47QURFTTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBQ0FSO0FETUE7RUFDRTtJQUNFLDRCQUFBO0lBQUEsNkJBQUE7WUFBQSxzQkFBQTtFQ0hGO0VES0U7SUFDRSxzQkFBQTtFQ0hKO0VETUU7SUFDRSxzQkFBQTtJQUNBLGFBQUE7SUFDQSxvQkFBQTtJQUFBLGFBQUE7SUFDQSw0QkFBQTtJQUFBLDZCQUFBO1lBQUEsc0JBQUE7RUNKSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9waHlsb3NvcGh5L3BhZ2VzL3BoeWxvc29waHkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGh5bG9zb3BoeS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAucGh5bG9zb3BoeS1jb250ZW50IHtcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgLnBoeWxvc29waHktZ2FsbGVyeSB7XG4gICAgICB3aWR0aDogNTAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLnBoeWxvc29waHktdGV4dCB7XG4gICAgICB3aWR0aDogNTAlO1xuICAgICAgcGFkZGluZzogMzBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICBoMiB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6ICNhNmM0ZGM7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5waHlsb3NvcGh5LWNvbnRlbnQge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAucGh5bG9zb3BoeS1nYWxsZXJ5IHtcbiAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLnBoeWxvc29waHktdGV4dCB7XG4gICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgcGFkZGluZzogMzBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cbiAgfVxufVxuIiwiLnBoeWxvc29waHktY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ucGh5bG9zb3BoeS1jb250YWluZXIgLnBoeWxvc29waHktY29udGVudCB7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5waHlsb3NvcGh5LWNvbnRhaW5lciAucGh5bG9zb3BoeS1jb250ZW50IC5waHlsb3NvcGh5LWdhbGxlcnkge1xuICB3aWR0aDogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnBoeWxvc29waHktY29udGFpbmVyIC5waHlsb3NvcGh5LWNvbnRlbnQgLnBoeWxvc29waHktdGV4dCB7XG4gIHdpZHRoOiA1MCU7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ucGh5bG9zb3BoeS1jb250YWluZXIgLnBoeWxvc29waHktY29udGVudCAucGh5bG9zb3BoeS10ZXh0IGgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2E2YzRkYztcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLnBoeWxvc29waHktY29udGVudCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAucGh5bG9zb3BoeS1jb250ZW50IC5waHlsb3NvcGh5LWdhbGxlcnkge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnBoeWxvc29waHktY29udGVudCAucGh5bG9zb3BoeS10ZXh0IHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/modules/phylosophy/pages/phylosophy.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/phylosophy/pages/phylosophy.component.ts ***!
  \******************************************************************/
/*! exports provided: PhylosophyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhylosophyComponent", function() { return PhylosophyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PhylosophyComponent = class PhylosophyComponent {
    constructor() {
        this.slajdovi = [
            '../../../../assets/img/pics/DSCF6462.jpg',
            '../../../../assets/img/pics/DSCF6494.jpg',
            '../../../../assets/img/pics/_XT22856.jpg',
            '../../../../assets/img/pics/DSCF6705.jpg',
            '../../../../assets/img/pics/DSCF6722.jpg',
            '../../../../assets/img/pics/DSCF6406.jpg'
        ];
    }
};
PhylosophyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-phylosopht-component',
        template: __webpack_require__(/*! raw-loader!./phylosophy.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/phylosophy/pages/phylosophy.component.html"),
        styles: [__webpack_require__(/*! ./phylosophy.component.scss */ "./src/app/modules/phylosophy/pages/phylosophy.component.scss")]
    })
], PhylosophyComponent);



/***/ }),

/***/ "./src/app/modules/phylosophy/phylosophy.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/phylosophy/phylosophy.module.ts ***!
  \*********************************************************/
/*! exports provided: PhylosophyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhylosophyModule", function() { return PhylosophyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _pages_phylosophy_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/phylosophy.component */ "./src/app/modules/phylosophy/pages/phylosophy.component.ts");
/* harmony import */ var _phylosophy_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./phylosophy.routing.module */ "./src/app/modules/phylosophy/phylosophy.routing.module.ts");
/* harmony import */ var _core_components_reserve_contact_reserve_contact_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/components/reserve-contact/reserve-contact.module */ "./src/app/core/components/reserve-contact/reserve-contact.module.ts");
/* harmony import */ var _core_components_slider2_slider2_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/components/slider2/slider2.module */ "./src/app/core/components/slider2/slider2.module.ts");







let PhylosophyModule = class PhylosophyModule {
};
PhylosophyModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _phylosophy_routing_module__WEBPACK_IMPORTED_MODULE_4__["PhylosophyRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
            _core_components_reserve_contact_reserve_contact_module__WEBPACK_IMPORTED_MODULE_5__["ReserveContactModule"],
            _core_components_slider2_slider2_module__WEBPACK_IMPORTED_MODULE_6__["Slider2Module"]
        ],
        declarations: [
            _pages_phylosophy_component__WEBPACK_IMPORTED_MODULE_3__["PhylosophyComponent"]
        ]
    })
], PhylosophyModule);



/***/ }),

/***/ "./src/app/modules/phylosophy/phylosophy.routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/phylosophy/phylosophy.routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: PhylosophyRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhylosophyRoutingModule", function() { return PhylosophyRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_phylosophy_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/phylosophy.component */ "./src/app/modules/phylosophy/pages/phylosophy.component.ts");




const ROUTES = [
    {
        path: '',
        component: _pages_phylosophy_component__WEBPACK_IMPORTED_MODULE_3__["PhylosophyComponent"]
    }
];
let PhylosophyRoutingModule = class PhylosophyRoutingModule {
};
PhylosophyRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ROUTES)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], PhylosophyRoutingModule);



/***/ })

}]);
//# sourceMappingURL=modules-phylosophy-phylosophy-module-es2015.js.map