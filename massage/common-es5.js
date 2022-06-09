(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/core/components/slider/slider.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/components/slider/slider.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<carousel>\n    <slide *ngFor=\"let s of slide\">\n        <img [src]=\"s\" alt=\"first slide\">\n    </slide>\n</carousel>\n"

/***/ }),

/***/ "./src/app/core/components/slider/slider.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/core/components/slider/slider.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep carousel slide {\n  outline: none !important;\n  height: calc(100vh - 80px);\n}\n::ng-deep carousel slide .item {\n  height: 100%;\n}\n::ng-deep carousel slide img {\n  outline: none !important;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  display: block;\n  width: 100%;\n}\n::ng-deep a.carousel-control {\n  cursor: pointer;\n}\n::ng-deep .carousel-indicators li {\n  height: 15px;\n  width: 15px;\n}\n::ng-deep .carousel-control-next-icon {\n  background-image: url('next.png') !important;\n  width: 55px;\n  height: 55px;\n  cursor: pointer;\n  z-index: 35;\n  position: relative;\n}\n::ng-deep .carousel-control-next-icon:hover {\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1);\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n::ng-deep .carousel-control-prev-icon {\n  background-image: url('prev.png') !important;\n  width: 55px;\n  height: 55px;\n  cursor: pointer;\n  z-index: 15;\n  position: relative;\n}\n::ng-deep .carousel-control-prev-icon:hover {\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1);\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n@media screen and (max-width: 768px) {\n  ::ng-deep carousel slide {\n    outline: none !important;\n    height: 70vh;\n  }\n  ::ng-deep carousel slide .item {\n    height: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Fhc2hheS9Eb3dubG9hZHMvQXJjaGl2ZS9zcmMvYXBwL2NvcmUvY29tcG9uZW50cy9zbGlkZXIvc2xpZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvc2xpZGVyL3NsaWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNFLHdCQUFBO0VBQ0EsMEJBQUE7QUNETjtBREdNO0VBQ0UsWUFBQTtBQ0RSO0FESU07RUFDRSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUNGUjtBRE9FO0VBQ0UsZUFBQTtBQ0xKO0FEU0k7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ1BOO0FEV0U7RUFDRSw0Q0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ1RKO0FEV0k7RUFDRSw2QkFBQTtVQUFBLHFCQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtBQ1ROO0FEYUU7RUFDRSw0Q0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ1hKO0FEYUk7RUFDRSw2QkFBQTtVQUFBLHFCQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtBQ1hOO0FEZ0JBO0VBR007SUFDRSx3QkFBQTtJQUNBLFlBQUE7RUNmTjtFRGlCTTtJQUNFLFlBQUE7RUNmUjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29yZS9jb21wb25lbnRzL3NsaWRlci9zbGlkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAge1xuICBjYXJvdXNlbCB7XG4gICAgc2xpZGUge1xuICAgICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gODBweCk7XG5cbiAgICAgIC5pdGVtIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgfVxuXG4gICAgICBpbWcge1xuICAgICAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhLmNhcm91c2VsLWNvbnRyb2wge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIC5jYXJvdXNlbC1pbmRpY2F0b3JzIHtcbiAgICBsaSB7XG4gICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICB3aWR0aDogMTVweDtcbiAgICB9XG4gIH1cblxuICAuY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb24ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvbmV4dC5wbmdcIikgIWltcG9ydGFudDtcbiAgICB3aWR0aDogNTVweDtcbiAgICBoZWlnaHQ6IDU1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHotaW5kZXg6IDM1O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICY6aG92ZXIge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgICAgdHJhbnNpdGlvbjogMC40cztcbiAgICB9XG4gIH1cblxuICAuY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb24ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvcHJldi5wbmdcIikgIWltcG9ydGFudDtcbiAgICB3aWR0aDogNTVweDtcbiAgICBoZWlnaHQ6IDU1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHotaW5kZXg6IDE1O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICY6aG92ZXIge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgICAgdHJhbnNpdGlvbjogMC40cztcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgOjpuZy1kZWVwIHtcbiAgICBjYXJvdXNlbCB7XG4gICAgICBzbGlkZSB7XG4gICAgICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgaGVpZ2h0OiA3MHZoO1xuXG4gICAgICAgIC5pdGVtIHtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuIiwiOjpuZy1kZWVwIGNhcm91c2VsIHNsaWRlIHtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA4MHB4KTtcbn1cbjo6bmctZGVlcCBjYXJvdXNlbCBzbGlkZSAuaXRlbSB7XG4gIGhlaWdodDogMTAwJTtcbn1cbjo6bmctZGVlcCBjYXJvdXNlbCBzbGlkZSBpbWcge1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbn1cbjo6bmctZGVlcCBhLmNhcm91c2VsLWNvbnRyb2wge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG46Om5nLWRlZXAgLmNhcm91c2VsLWluZGljYXRvcnMgbGkge1xuICBoZWlnaHQ6IDE1cHg7XG4gIHdpZHRoOiAxNXB4O1xufVxuOjpuZy1kZWVwIC5jYXJvdXNlbC1jb250cm9sLW5leHQtaWNvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvbmV4dC5wbmdcIikgIWltcG9ydGFudDtcbiAgd2lkdGg6IDU1cHg7XG4gIGhlaWdodDogNTVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB6LWluZGV4OiAzNTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuOjpuZy1kZWVwIC5jYXJvdXNlbC1jb250cm9sLW5leHQtaWNvbjpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cbjo6bmctZGVlcCAuY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb24ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1nL3ByZXYucG5nXCIpICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA1NXB4O1xuICBoZWlnaHQ6IDU1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgei1pbmRleDogMTU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbjo6bmctZGVlcCAuY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb246aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIDo6bmctZGVlcCBjYXJvdXNlbCBzbGlkZSB7XG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogNzB2aDtcbiAgfVxuICA6Om5nLWRlZXAgY2Fyb3VzZWwgc2xpZGUgLml0ZW0ge1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/core/components/slider/slider.component.ts":
/*!************************************************************!*\
  !*** ./src/app/core/components/slider/slider.component.ts ***!
  \************************************************************/
/*! exports provided: SliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return SliderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SliderComponent = /** @class */ (function () {
    function SliderComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], SliderComponent.prototype, "slide", void 0);
    SliderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-slider-component',
            template: __webpack_require__(/*! raw-loader!./slider.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/components/slider/slider.component.html"),
            styles: [__webpack_require__(/*! ./slider.component.scss */ "./src/app/core/components/slider/slider.component.scss")]
        })
    ], SliderComponent);
    return SliderComponent;
}());



/***/ }),

/***/ "./src/app/core/components/slider/slider.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/components/slider/slider.module.ts ***!
  \*********************************************************/
/*! exports provided: SliderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderModule", function() { return SliderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/carousel/fesm5/ngx-bootstrap-carousel.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _slider_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slider.component */ "./src/app/core/components/slider/slider.component.ts");





var SliderModule = /** @class */ (function () {
    function SliderModule() {
    }
    SliderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_2__["CarouselModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
            ],
            exports: [
                _slider_component__WEBPACK_IMPORTED_MODULE_4__["SliderComponent"]
            ],
            declarations: [
                _slider_component__WEBPACK_IMPORTED_MODULE_4__["SliderComponent"]
            ]
        })
    ], SliderModule);
    return SliderModule;
}());



/***/ })

}]);
//# sourceMappingURL=common-es5.js.map