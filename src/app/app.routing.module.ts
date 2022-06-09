import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AuthGuard} from './core/guards/auth.guard';

const ROUTES: Routes = [
    {
        path: '',
        loadChildren: './modules/home/home.module#HomeModule'
    }
    ,
    {
        path: 'contact',
        loadChildren: './modules/contact/contact.module#ContactModule'
    }
    ,
    {
        path: 'reservations',
        loadChildren: './modules/reservations/reservations.module#ReservationsModule'
    }
    ,
    {
        path: 'login',
        loadChildren: './modules/login/login.module#LoginModule'
    },
    {
        path: 'admin',
        loadChildren: './modules/admin/admin.module#AdminModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'about/practice',
        loadChildren: './modules/practice/practice.module#PracticeModule'
    },
    {
        path: 'about/phylosophy',
        loadChildren: './modules/phylosophy/phylosophy.module#PhylosophyModule'
    },
    {
        path: 'therapy/:id',
        loadChildren: './modules/massage-detail/massage-detail.module#MassageDetailModule',
    },
    {
        path: 'prevention/:id',
        loadChildren: './modules/massage-detail/massage-detail.module#MassageDetailModule',
    },
    {
        path: 'about/:id',
        loadChildren: './modules/massage-detail/massage-detail.module#MassageDetailModule',
    }
];

/**
 * Represents the Root Application Routing Module.
 *
 * This module sets up root routes for the application as well
 * as exports Angular RouterModule to be avilable in
 * modules that import this module
 *
 * @since 1.0.0
 * @author Nemanja Milinkovic
 */

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
