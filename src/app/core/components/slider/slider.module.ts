import {NgModule} from '@angular/core';
import {CarouselModule} from 'ngx-bootstrap/carousel';
import {CommonModule} from '@angular/common';

import {SliderComponent} from './slider.component';

@NgModule({
    imports: [
        CarouselModule,
        CommonModule
    ],
    exports: [
        SliderComponent
    ],
    declarations: [
        SliderComponent
    ]
})
export class SliderModule {
}
