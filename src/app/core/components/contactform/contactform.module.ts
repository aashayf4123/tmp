import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {MaterialModule} from '../../../material.module';
import {TranslateModule} from '@ngx-translate/core';

import {ContactformComponent} from './contactform.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MaterialModule,
        TranslateModule
    ],
    exports: [
        ContactformComponent
    ],
    declarations: [
        ContactformComponent
    ]
})
export class ContactformModule {
}
