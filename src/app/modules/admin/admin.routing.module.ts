import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AdminComponent} from './pages/admin.component';

const ROUTES: Routes = [
    {
        path: '',
        component: AdminComponent
    }
];

/**
 * Represents the Admin Application Routing Module.
 *
 * This module sets up Admin routes for the application as well
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
export class AdminRoutingModule {
}
