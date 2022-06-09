import {NgModule} from '@angular/core';

import {TranslateModule} from '@ngx-translate/core';

import {PracticeRoutingModule} from './practice.routing.module';
import {PracticeComponent} from './pages/practice.component';
import {Slider2Module} from '../../core/components/slider2/slider2.module';
import {ReserveContactModule} from '../../core/components/reserve-contact/reserve-contact.module';

@NgModule({
    imports: [
        PracticeRoutingModule,
        TranslateModule,
        Slider2Module,
        ReserveContactModule
    ],
    declarations: [
        PracticeComponent
    ]
})
export class PracticeModule {
}
