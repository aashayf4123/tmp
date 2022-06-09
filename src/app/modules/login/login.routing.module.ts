import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from './pages/login.component';

const ROUTES: Routes = [
    {
        path: '',
        component: LoginComponent
    }
];

/**
 * Represents the Login Application Routing Module.
 *
 * This module sets up Login routes for the application as well
 * as exports Angular RouterModule to be avilable in
 * modules that import this module
 *
 * @since 1.0.0
 * @author Nemanja Milinkovic
 */
@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
})
export class LoginRoutingModule {
}
