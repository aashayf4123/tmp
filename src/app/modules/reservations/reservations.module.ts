import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TranslateModule, TranslateService} from '@ngx-translate/core';

import {ReservationsComponent} from './pages/reservations.component';
import {ReservationsRoutingModule} from './reservations.routing.module';
import {ReservationModule} from '../../core/components/reservation/reservation.module';

@NgModule({
    imports: [
        CommonModule,
        ReservationsRoutingModule,
        ReservationModule,
        TranslateModule
    ],
    declarations: [
        ReservationsComponent
    ],
    providers: [
        TranslateService
    ]
})

export class ReservationsModule {
}
