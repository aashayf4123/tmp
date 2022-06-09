import {NgModule} from '@angular/core';

import {TranslateModule} from '@ngx-translate/core';

import {PhylosophyComponent} from './pages/phylosophy.component';
import {PhylosophyRoutingModule} from './phylosophy.routing.module';
import {ReserveContactModule} from '../../core/components/reserve-contact/reserve-contact.module';
import {Slider2Module} from '../../core/components/slider2/slider2.module';

@NgModule({
    imports: [
        PhylosophyRoutingModule,
        TranslateModule,
        ReserveContactModule,
        Slider2Module
    ],
    declarations: [
        PhylosophyComponent
    ]
})
export class PhylosophyModule {
}
