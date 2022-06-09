import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TranslateModule} from '@ngx-translate/core';

import {ContactRoutingModule} from './contact.routing.module';
import {ContactComponent} from './pages/contact.component';
import {AgmapModule} from '../../core/components/agmap/agmap.module';
import {SliderModule} from '../../core/components/slider/slider.module';
import {ContactformModule} from '../../core/components/contactform/contactform.module';

@NgModule({
    imports: [
        CommonModule,
        ContactRoutingModule,
        AgmapModule,
        SliderModule,
        ContactformModule,
        TranslateModule,

    ],
    declarations: [
        ContactComponent
    ]
})

export class ContactModule {
}
