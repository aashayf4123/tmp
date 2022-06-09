import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CarouselModule} from 'ngx-bootstrap';

import {Slider2Component} from './slider2.component';

@NgModule({
    imports: [
        CarouselModule,
        CommonModule
    ],
    exports: [
        Slider2Component
    ],
    declarations: [
        Slider2Component
    ]
})
export class Slider2Module {
}
