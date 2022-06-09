import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {TranslateModule} from '@ngx-translate/core';

import {FooterComponent} from './footer.component';

@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        RouterModule
    ],
    exports: [
        FooterComponent
    ],
    declarations: [
        FooterComponent
    ]
})
export class FooterModule {
}
