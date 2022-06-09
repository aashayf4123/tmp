import {NgModule} from '@angular/core';

import {TestmonialsComponent} from './testmonials.component';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
    imports: [
        TranslateModule
    ],
    exports: [
        TestmonialsComponent
    ],
    declarations: [
        TestmonialsComponent
    ]
})
export class TestmonialsModule {
}
