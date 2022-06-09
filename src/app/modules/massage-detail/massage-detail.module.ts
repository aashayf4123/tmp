import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TranslateModule} from '@ngx-translate/core';

import {MassageDetailComponent} from './pages/massage-detail.component';
import {MassageDetailRoutingModule} from './massage-detail.routing.module';
import {ReserveContactModule} from '../../core/components/reserve-contact/reserve-contact.module';

@NgModule({
    declarations: [
        MassageDetailComponent
    ],
    imports: [
        MassageDetailRoutingModule,
        CommonModule,
        ReserveContactModule,
        TranslateModule
    ],
    exports: []
})
export class MassageDetailModule {

}
