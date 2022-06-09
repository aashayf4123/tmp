import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MassageDetailComponent} from './pages/massage-detail.component';

const ROUTES: Routes = [
    {
        path: '',
        component: MassageDetailComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
})
export class MassageDetailRoutingModule {
}
