import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MatOptionModule, MatSelectModule} from '@angular/material';

import {MaterialModule} from '../../../material.module';
import {OwlDateTimeModule, OwlNativeDateTimeModule} from 'ng-pick-datetime';

import {ReservationComponent} from './reservation.component';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
    imports: [
        ReactiveFormsModule,
        CommonModule,
        MaterialModule,
        OwlDateTimeModule,
        OwlNativeDateTimeModule,
        FormsModule,
        MatSelectModule,
        MatOptionModule,
        TranslateModule
    ],
    exports: [
        ReservationComponent
    ],
    declarations: [
        ReservationComponent
    ]
})
export class ReservationModule {
}
