import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {LoginComponent} from './pages/login.component';
import {MaterialModule} from '../../material.module';
import {LoginRoutingModule} from './login.routing.module';

@NgModule({
    imports: [
        LoginRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        MaterialModule,
        CommonModule
    ],
    declarations: [
        LoginComponent
    ]
})
export class LoginModule {
}
