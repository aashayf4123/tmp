import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AgmCoreModule} from '@agm/core';

import {AgmapComponent} from './agmap.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyDf0Z-oUxKPN65T17S_6eLWwyVc74UW4-A'
        }),
    ],
    exports: [
        AgmapComponent
    ],
    declarations: [
        AgmapComponent
    ]
})
export class AgmapModule {
}
