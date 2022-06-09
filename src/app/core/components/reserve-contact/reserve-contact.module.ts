import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {TranslateModule} from '@ngx-translate/core';

import {ReserveContactComponent} from './reserve-contact.component';

@NgModule({
    imports: [
        RouterModule,
        TranslateModule
    ],
    exports: [
        ReserveContactComponent
    ],
    declarations: [
        ReserveContactComponent
    ]
})
export class ReserveContactModule {
}
